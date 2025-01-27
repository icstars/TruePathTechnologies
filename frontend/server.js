const express = require('express');
const app = express();
const port = 5000;  // Choose any port you prefer

// Middleware to parse JSON
app.use(express.json());

// A basic route for testing
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
