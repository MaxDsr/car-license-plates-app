const express = require('express');
const cors = require('cors');
const { getRandomDataset } = require('./mockData');

const app = express();
const PORT = process.env.PORT;

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

// Error handling for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Error handling for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Start the server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Mock Express server running on http://127.0.0.1:${PORT}`);
  console.log(`API endpoint: http://127.0.0.1:${PORT}/api/get-plates-info/:licenseNumber`);
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

