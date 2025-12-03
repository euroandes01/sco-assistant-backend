module.exports = {
  test: (req, res) => {
    res.json({ message: 'Export test endpoint working!' });
  },
  run: (req, res) => {
    res.json({ message: 'Export run endpoint working!' });
  },
};
