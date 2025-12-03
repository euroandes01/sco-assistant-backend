const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST routes (for extension)
router.post('/login', authController.login);
router.post('/register', authController.register);

// ✅ Temporary GET routes (for browser testing)
router.get('/login', (req, res) => res.send('GET login works!'));
router.get('/register', (req, res) => res.send('GET register works!'));

module.exports = router;
