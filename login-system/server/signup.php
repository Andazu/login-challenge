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

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from frontend
    $data = json_decode(file_get_contents("php://input"), true);

    // Extract and sanitize input
    $username = mysqli_real_escape_string($conn, $data['username']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $password = mysqli_real_escape_string($conn, $data['password']);

    // Check if the email already exists
    $checkEmailQuery = "SELECT * FROM users WHERE email = '$email' OR username = '$username'";
    $result = $conn->query($checkEmailQuery);

    // If the email exists, return an error else insert into the database
    if ($result->num_rows > 0) {
        echo json_encode(array("status" => "error", "message" => "Email or Username already exists"));
    } else {
        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insert the user into the database
        $insertUserQuery = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashedPassword')";
        if ($conn->query($insertUserQuery) === TRUE) {
            echo json_encode(["status" => "success", "message" => "User registered successfully."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
        }
    }
}

$conn->close();
?>