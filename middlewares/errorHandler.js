module.exports = function (err, req, res, next) {
  console.error(err && err.stack ? err.stack : err);
  res.status(500).json({ status: 'error', message: 'Internal server error' });
};
