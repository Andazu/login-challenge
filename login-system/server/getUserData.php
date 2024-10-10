<?php
session_start();

// Allow from any origin
header("Access-Control-Allow-Origin: http://localhost:3000"); // Explicitly allow the React app origin
header("Access-Control-Allow-Credentials: true"); // Allow credentials (cookies, sessions, etc.)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow specific headers


if (isset($_SESSION['id'])) {
    error_log("Session ID: " . $_SESSION['id']); // Log the session ID to check
    echo json_encode([
        'status' => 'success',
        'userData' => [
            'id' => $_SESSION['id'],
            'username' => $_SESSION['username'],
            'email' => $_SESSION['email'],
            'is_admin' => $_SESSION['is_admin']
        ]
    ]);
} else {
    error_log("No session active"); // Log if no session
    echo json_encode(['status' => 'error', 'message' => 'User not logged in']);
}

?>
