const express = require('express');
const router = express.Router();
const scoController = require('../controllers/scoController');

// POST routes
router.post('/create', scoController.create);

// GET routes (temporary)
router.get('/test', scoController.test);
router.get('/analyze', scoController.analyze);
router.get('/create', (req, res) => res.send('GET sco/create works!'));

module.exports = router;
