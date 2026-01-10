const express = require('express');
const cors = require('cors');
const { getRandomDataset } = require('./mockData');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware for debugging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// API endpoint to get random license plate info
app.get('/api/get-plates-info/:licenseNumber', (req, res) => {
  const { licenseNumber } = req.params;
  
  // Log the request
  console.log(`Fetching data for license plate: ${licenseNumber}`);
  
  // Return a random dataset regardless of the license number
  const data = getRandomDataset();
  
  // Send the response
  res.json(data);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Mock server is running' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Mock Express server running on http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/get-plates-info/:licenseNumber`);
});

