const express = require('express');
const router = express.Router();
const premiumController = require('../controllers/premiumController');

// GET routes (already GET, so nothing extra needed)
router.get('/test', premiumController.test);

module.exports = router;
