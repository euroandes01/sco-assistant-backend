const licenseService = require('../services/licenseService');

module.exports = async (req, res, next) => {
  const licenseKey = req.headers['x-license-key'];
  if (!licenseKey) return res.status(401).json({ status: 'error', message: 'License key required' });

  const valid = await licenseService.verifyLicense(licenseKey);
  if (!valid) return res.status(403).json({ status: 'error', message: 'Invalid or expired license' });

  next();
};
