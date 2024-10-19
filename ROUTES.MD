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

## Job Routes

### `POST /api/jobs/createJob`

- **Description**: Create a new job listing (authenticated users only).
- **Request Body**:
  ```json
  {
    "title": "string",
    "description": "string",
    "company": "string",
    "location": "string",
    "salary": "string"
  }
  ```
- **Response**:
  - 201 Created: Job posted successfully.
  - 401 Unauthorized: User not authenticated.

### `POST /api/jobs/getAllJobs`

- **Description**: Get all job listings (authenticated users only).
- **Response**:
  - 200 OK: Array of job listings.

### `POST /api/jobs/getJob/:id`

- **Description**: Get a job listing by ID (authenticated users only).
- **Response**:
  - 200 OK: Job listing object.
  - 404 Not Found: Job not found.

### `PUT /api/jobs/updateJob/:id`

- **Description**: Update a job listing by ID (authenticated users only).
- **Request Body**:
  ```json
  {
    "title": "string",
    "description": "string",
    "company": "string",
    "location": "string",
    "salary": "string"
  }
  ```
- **Response**:
  - 200 OK: Job updated successfully.
  - 404 Not Found: Job not found.

### `DELETE /api/jobs/deleteJob/:id`

- **Description**: Delete a job listing by ID (authenticated users only).
- **Response**:
  - 200 OK: Job deleted successfully.
  - 404 Not Found: Job not found.

---

## License

This project is licensed under the MIT License.
