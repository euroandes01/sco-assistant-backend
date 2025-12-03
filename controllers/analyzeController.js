module.exports = {
  test: (req, res) => {
    res.json({ message: 'Analyze test endpoint working!' });
  },
  run: (req, res) => {
    res.json({ message: 'Analyze run endpoint working!' });
  },
};
