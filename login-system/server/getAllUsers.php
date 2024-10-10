<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Connect to MySQL database
$servername = "localhost";
$username = "app_user"; // Your MySQL username
$password = "password"; // Your MySQL password
$dbname = "user_profiles"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to get all users
$sql = "SELECT id, username, email, is_admin FROM users WHERE is_admin = 0";
$result = $conn->query($sql);

$users = array();

if ($result->num_rows > 0) {
    // Fetch each row and store it in the $users array
    while($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    
    // Send the $users array as JSON
    echo json_encode($users);
} else {
    echo json_encode([]);
}

$conn->close();
?>
