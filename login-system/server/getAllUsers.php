<?php
require 'db_connect.php';

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
