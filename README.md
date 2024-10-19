# Job Posting Board

## Project Overview

This project is a job posting board built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to register, verify their email, post jobs, and receive updates via email.

## Features

- **User Registration**: Users can create an account.
- **Email Verification**: Verification emails are sent to users upon registration.
- **Job Posting**: Authenticated users can post job listings.
- **Email Automation**: Notifications are sent to candidates via Nodemailer.
- **Responsive UI**: The application is designed to be mobile-friendly, adhering to the provided Figma design.

## Tech Stack

- **Frontend**:

  - React.js
  - Redux for state management
  - Tailwind CSS for styling
- **Backend**:

  - Node.js
  - Express.js
  - MongoDB for database management
  - Nodemailer for email automation

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd job-posting-board
   ```
2. **Install backend dependencies**:

   ```bash
   cd server
   npm install
   ```
3. **Install frontend dependencies**:

   ```bash
   cd ../client
   npm install
   ```
4. **Set up environment variables**:

   Create a `.env` file in the `backend` directory and add the following variables:

   ```env
   # Environment Variables
   NODE_ENV=development
   PORT=4000
   YOUR_APP_NAME=APP_NAME
   DOMAIN=http://localhost:4000

   # Database Configuration
   DB_URL=<your_mongodb_url_here>

   # JWT Configuration
   ACCESS_TOKEN_SECRET=<your_access_token_secret>
   REFRESH_TOKEN_SECRET=<your_refresh_token_secret>
   ACCESS_TOKEN_LIFETIME=15m
   REFRESH_TOKEN_LIFETIME=15d

   # Email Configuration
   EMAIL=<your_email>
   EMAIL_PASSWORD=<your_email_password>

   ```
5. **Run the application**:

   Start the backend server:

   ```bash
   cd server
   npm start
   ```

   Start the frontend application:

   ```bash
   cd client
   npm run dev
   ```

## Usage

- **Register**: Navigate to the registration page and fill out the form to create an account. Check your email for the verification link.
- **Login**: After verification, log in to access the job posting features.
- **Post a Job**: Once logged in, you can create and post job listings.
- **Receive Updates**: Candidates will receive email notifications regarding job postings.

## Future Improvements

- Implement search and filter functionality for job listings.
- Add user profiles to manage job applications.
- Enhance the UI for better user experience.

## License

This project is licensed under the MIT License.
