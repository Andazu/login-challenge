<?php
require 'db_connect.php';

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from frontend
    $data = json_decode(file_get_contents("php://input"), true);

    // Extract and sanitize input
    $id = mysqli_real_escape_string($conn, $data['id']);
    $username = mysqli_real_escape_string($conn, $data['username']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $oldPassword = mysqli_real_escape_string($conn, $data['oldPassword']);
    $newPassword = mysqli_real_escape_string($conn, $data['newPassword']); // Optional: can be left empty if no password change

    // Check if the user with the given ID exists
    $checkUserQuery = "SELECT * FROM users WHERE id = '$id'";
    $result = $conn->query($checkUserQuery);

    // If the user exists, verify the old password
    if ($result->num_rows > 0) {
        // Get user info
        $user = $result->fetch_assoc();

        // Verify the old password
        if (password_verify($oldPassword, $user['password'])) {
            // If the new password is provided, hash it
            if (!empty($newPassword)) {
                $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);
            } else {
                // Keep the existing password if no new password is provided
                $hashedPassword = $user['password'];
            }

            // Update the user's information in the database
            $updateUserQuery = "UPDATE users SET username = '$username', email = '$email', password = '$hashedPassword' WHERE id = '$id'";

            if ($conn->query($updateUserQuery) === TRUE) {
                echo json_encode(["status" => "success", "message" => "User updated successfully."]);
            } else {
                echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
            }
        } else {
            // If the old password doesn't match, return an error
            echo json_encode(["status" => "error", "message" => "Old password is incorrect"]);
        }
    } else {
        // Return an error if the user doesn't exist
        echo json_encode(["status" => "error", "message" => "User not found"]);
    }
}

// Close the connection
$conn->close();
?>
