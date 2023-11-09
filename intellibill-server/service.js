const express = require('express');
const bodyParser = require('body-parser'); // To parse JSON request body
const app = express();
const port = 5000;
const cors = require('cors');
const Routes = require('./routes/userRoutes'); // Import user routes

app.use(bodyParser.json());
app.use(cors())

// Use the user routes
app.use('/', Routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
