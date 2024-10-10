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
    $userId = mysqli_real_escape_string($conn, $data['id']);

    // Prepare the delete query
    $deleteUserQuery = "DELETE FROM users WHERE id = '$userId'";

    // Execute the query and check for success
    if ($conn->query($deleteUserQuery) === TRUE) {
        echo json_encode(["status" => "success", "message" => "User deleted successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error deleting user: " . $conn->error]);
    }
}

$conn->close();
?>
