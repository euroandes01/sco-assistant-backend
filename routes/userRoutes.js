const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';

router.post('/login', (req, res) => {
  const { email } = req.body || {};
  if (!email) return res.status(400).json({ status: 'error', message: 'email required' });

  // stub: in production validate password; here we issue a demo token
  const payload = { email, role: 'user' };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });

  res.json({ status: 'success', token, message: 'demo token issued' });
});

module.exports = router;
