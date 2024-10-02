# User Registration and Profile Management Webpage

## Description

This project is a test case for creating a responsive webpage where users can register, log in, view, and update their personal profiles. Additionally, an administrator can view a list of all registered users, including their profile information, and has the ability to delete user profiles.

## Technologies Used

- **Front-end**: React.js (Optional: Next.js) with TypeScript for type checking
- **Styling**: Tailwind CSS
- **Back-end**: PHP
- **Database**: MySQL
- **API**: RESTful API for communication between front-end and back-end

## Features

### User Features
- **Registration**: Users can sign up using a username, email, and password.
- **Login**: Users can log in using their username or email and password.
- **Profile Page**: Upon successful login, users are redirected to a personal profile page that displays their:
  - Username
  - Email
  - Profile picture (optional)
- **Profile Update**: Users can update their profile information (username, email, and profile picture).

### Administrator Features
- **Admin Dashboard**: The administrator has access to a list of all created profiles, which includes:
  - Username
  - Email
  - Account creation date
- **Profile Deletion**: Administrators can delete any user profile.

## Requirements

### Front-end
- Implemented using **React.js** with **TypeScript** for type checking.
- Styled with **Tailwind CSS**.
- **Next.js** can be optionally used as the client-side framework.

### Back-end
- Developed with **PHP** to handle requests and serve data.
- Uses **MySQL** for the database to store user information.

### API
- A **RESTful API** is used for communication between the front-end and back-end. This API handles user registration, login, profile updates, and admin functionalities.

### Error Handling
- Errors are gracefully handled, with appropriate error messages displayed for user input validation and server-side issues.

### Responsiveness
- The application is fully responsive, designed to function well on different screen sizes, from mobile devices to large desktop screens.
