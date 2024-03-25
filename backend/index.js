
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your messenger app backend!' });
});

// Add a route for handling POST requests to '/register'
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Here you would typically add the user to your database
  // For demonstration, we'll just respond with the received data
  console.log('Registering user:', username, email, password);
  res.status(201).json({ message: "User registered successfully!", user: { username, email } });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
