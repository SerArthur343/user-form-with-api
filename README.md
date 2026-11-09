# user-form-with-api
A full-stack web application that collects user information through a frontend form and stores the submitted data in a MongoDB Atlas database using Node.js and Express.js in the backend.

## Features
- User information submission through a frontend form
- REST API integration
- Backend data processing
- MongoDB Atlas database connection
- Data modeling with Mongoose
- Environment variable management
- CORS configuration
- Organized backend architecture using controllers, models, middlewares, and routes

## Technologies

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB Atlas
- dotenv
- CORS

## Project Structure
- `frontend/` - User interface and form
- `backend/controllers/` - Request handling logic
- `backend/middlewares/` - Middleware functions
- `backend/models/` - Mongoose data models
- `backend/routes/` - API routes
- `backend/server.js` - Server configuration and database connection

## Installation
1. Clone the repository.
2. Navigate to the backend directory.
3. Install dependencies:

   npm install

4. Create a `.env` file in the backend directory:

   MONGODB_URI=your_mongodb_connection_string
   PORT=3000

5. Start the server:

   node server.js

## Database
The application uses MongoDB Atlas for cloud database storage and Mongoose for managing database models and operations.

## Security
Environment variables are used to protect sensitive configuration data. The `.env` file is excluded from version control.
