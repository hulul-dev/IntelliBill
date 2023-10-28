// index.js

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors'); // Import the cors package
const port = process.env.PORT || 3000;

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
// mongoose.connect('your-mongodb-uri', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// Middleware
app.use(express.json());

// Use the CORS middleware to allow requests from all origins
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's domain
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

// Define your login API route
app.post('/api/login', (req, res) => {
  // Implement your login logic here
  // Check user credentials, authenticate, and send a response
  // Example:
  const { username, password } = req.body.data
  if (username === 'demo' && password === 'password') {
    // res.json({ message: 'Login successful' });
    res.json({
      "Output": {
        "status": {
          "code": "200",
          "message": "Login Successfully"
        }
      }
    })
  } else {
    // res.status(401).json({ message: 'Login failed' });
    res.json(
      {
        "status": {
          "code": "400",
          "message": "Bad request"
        },
        "error": {
          "message": "Invalid username or password"
        }
      }
    )
  }
});

// Start the server with Nodemon
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
