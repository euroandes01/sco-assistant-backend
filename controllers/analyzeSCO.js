const scoringService = require('../services/scoringService');

exports.analyzeSCO = async (req, res, next) => {
  try {
    const scoText = req.body.scoText;
    if (!scoText) return res.status(400).json({ status: 'error', message: 'SCO text is required' });

    const result = scoringService.calculateRiskScore(scoText);

    res.json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
