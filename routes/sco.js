const express = require('express');
const router = express.Router();
const scoController = require('../controllers/scoController');

// SCO routes
router.get('/analyze', scoController.analyze);
router.get('/test', scoController.test);

module.exports = router;
