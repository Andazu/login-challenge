<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Connect to MySQL database
$servername = "localhost";
$username = "app_user";
$password = "password"; // TODO: Don't use the root password in production
$dbname = "user_profiles";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    // Get data from frontend
    $data = json_decode(file_get_contents("php://input"), true);

    // Extract and sanitize input
    $username = mysqli_real_escape_string($conn, $data['username']);
    $password = mysqli_real_escape_string($conn, $data['password']);

    // Check if the username exists
    $checkUsernameQuery = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($checkUsernameQuery);

    // If the username exists, verify password
    if ($result->num_rows > 0) {
        // Get the rest of the user info
        $user = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Password is correct, startm the session
            session_start();
            $_SESSION['user_id'] = $user['id'];

            echo json_encode(["status" => "success", "message" => "User logged in successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Incorrect password"]);
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "Username not found"));
    }
}

// Close the connection
$conn->close();
?>