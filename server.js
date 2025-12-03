// server.js
import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse JSON requests

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Example route for SCO analysis (replace with real logic later)
app.post('/api/analyze', (req, res) => {
  const { sco } = req.body;
  if (!sco) {
    return res.status(400).json({ error: 'No SCO provided' });
  }
  // Dummy analysis result
  const result = { sco, score: Math.floor(Math.random() * 100) };
  res.json(result);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
