# API Routes Documentation

## Overview

This document provides an overview of the API routes for the Job Posting Board application. It includes user-related and job-related routes.

## Base URL

All routes are prefixed with the base URL: `/api`

---

## User Routes

### `POST /api/users/signup`

- **Description**: Register a new user.
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - 201 Created: User registered successfully.
  - 400 Bad Request: Validation errors or user already exists.

### `POST /api/users/login`

- **Description**: Log in an existing user.
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - 200 OK: User logged in successfully with JWT token.
  - 401 Unauthorized: Invalid credentials.

### `POST /api/users/verify/:token`

- **Description**: Verify user email using the verification token.
- **Response**:
  - 200 OK: Email verified successfully.
  - 400 Bad Request: Invalid or expired token.

### `POST /api/users/changePassword`

- **Description**: Change the password for an authenticated user.
- **Request Body**:
  ```json
  {
    "oldPassword": "string",
    "newPassword": "string"
  }
  ```
- **Response**:
  - 200 OK: Password changed successfully.
  - 401 Unauthorized: User not authenticated.

### `POST /api/users/forgotPassword`

- **Description**: Request to reset the password.
- **Request Body**:
  ```json
  {
    "email": "string"
  }
  ```
- **Response**:
  - 200 OK: Reset link sent to the email.
  - 404 Not Found: User not found.

### `POST /api/users/forgotPassword/:token`

- **Description**: Reset the password using a token.
- **Request Body**:
  ```json
  {
    "newPassword": "string"
  }
  ```
- **Response**:
  - 200 OK: Password reset successfully.
  - 400 Bad Request: Invalid or expired token.

### `POST /api/users/getUser`

- **Description**: Get details of the authenticated user.
- **Response**:
  - 200 OK: User details object.
  - 401 Unauthorized: User not authenticated.

### `POST /api/users/refreshToken`

- **Description**: Refresh the expired access token.
- **Response**:
  - 200 OK: New access token provided.
  - 401 Unauthorized: Invalid refresh token.

### `POST /api/users/logout`

- **Description**: Log out the authenticated user.
- **Response**:
  - 200 OK: User logged out successfully.
  - 401 Unauthorized: User not authenticated.

---

## License

This project is licensed under the MIT License.
