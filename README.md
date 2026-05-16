# Blog Application

This is a simple blog application built with Node.js, Express, and React.

## Features

- User authentication (register and login)
- Create, view, and delete blog posts
- JWT-based authentication

## Tech Stack

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Vite
- **Authentication**: JWT

## Setup

### Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory with the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5001
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend

1. Navigate to the client directory:
   ```bash
   cd client/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open [http://localhost:5173](http://localhost:5173) in your browser
2. Register a new account
3. Login with your credentials
4. Create and manage blog posts


PORT=5001
MONGO_URI=mongodb+srv://veda:veda123@cluster0.rfdylk8.mongodb.net/
JWT_SECRET=secret123 