# User Registration and Profile Management Webpage

## Description

This project is a test case for creating a responsive webpage where users can register, log in, view, and update their personal profiles. Additionally, an administrator can view a list of all registered users, including their profile information, and has the ability to delete user profiles.

## Technologies Used

- **Front-end**: React.js with TypeScript for type checking
- **Styling**: Tailwind CSS
- **Back-end**: PHP
- **Database**: MySQL

## Features

### User Features
- **Registration**: Users can sign up using a username, email, and password.
- **Login**: Users can log in using their username or email and password.
- **Profile Page**: Upon successful login, users are redirected to a personal profile page that displays their:
  - Username
  - Email
- **Profile Update**: Users can update their profile information (username, email, and profile picture).

### Administrator Features
- **Admin Dashboard**: The administrator has access to a list of all created profiles, which includes:
  - Username
  - Email
- **Profile Deletion**: Administrators can delete any user profile.

## Getting Started

### Prerequisites
- Node.js and npm installed
- PHP installed
- MySQL installed

### Setting up the MySQL Database
Setup your MySQL Server, and remember the credentials for your server as you will need those later in this section.
Open your MySQL client or the MySQL CLI and run the following commands create the database and the required users table:
```
CREATE DATABASE user_profiles;
USE user_profiles;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_admin TINYINT(1) DEFAULT 0
);
```
Ensure your db_connect.php file has the correct credentials to connect to your MySQL database. You can find it in the server directory, these are just the ones i used but you can change them to whatever you used during the setup of your server:
```
// db_connect.php
$servername = "localhost";
$username = "app_user";
$password = "password";  // Use your actual MySQL password here
$dbname = "user_profiles";
```

### Hosting the PHP Backend
1. Using the Built-In PHP Server
- Navigate to the server folder and run the following command
```
php -S localhost:8000 // Use whichever port you want here
```
- This will start a PHP server at http://localhost:8000
- You can now access the backend endpoints via http://localhost/backendfileexample.php

### Hosting the PHP Backend
1. Install Dependencies
- First, navigate to the React frontend directory and install the necessary dependencies by running:
```
cd login-system
npm install
```
2. Start the React App
- To run the React development server, use:
```
npm start
```
The app will be available at http://localhost:3000
