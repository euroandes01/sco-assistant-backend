// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ------------------------
// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// ------------------------
// Analyze SCO text
app.post('/api/analyze', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'No SCO text provided' });
  }

  // TODO: implement real SCO analysis here
  const result = {
    score: Math.floor(Math.random() * 100), // dummy score
    summary: 'Analysis placeholder'
  };

  res.json(result);
});

// ------------------------
// Export data
app.post('/api/export', (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ error: 'No data provided for export' });
  }

  // TODO: implement actual export logic (PDF/CSV etc.)
  res.json({ status: 'exported', received: data });
});

// ------------------------
app.get('/', (req, res) => {
  res.send('SCO Assistant backend is running');
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
