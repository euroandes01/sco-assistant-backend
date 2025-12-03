// middlewares/auth.js
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'replace_this_with_a_long_random_secret';

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Missing authorization header' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Missing token' });

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
    req.user = decoded; // { id, username, iat, exp }
    next();
  });
}

module.exports = authMiddleware;
