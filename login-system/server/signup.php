<?php
require 'db_connect.php';

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from frontend
    $data = json_decode(file_get_contents("php://input"), true);

    // Extract and sanitize input
    $username = mysqli_real_escape_string($conn, $data['username']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $password = mysqli_real_escape_string($conn, $data['password']);
    $is_admin = $data['is_admin'] ? 1 : 0; // Sanitize the is_admin value

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
        $insertUserQuery = "INSERT INTO users (username, email, password, is_admin) VALUES ('$username', '$email', '$hashedPassword', '$is_admin')";
        if ($conn->query($insertUserQuery) === TRUE) {
            echo json_encode(["status" => "success", "message" => "User registered successfully."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
        }
    }
}

$conn->close();
?>