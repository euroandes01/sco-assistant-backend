module.exports = {
  test: (req, res) => {
    res.json({ message: 'SCO test endpoint working!' });
  },
  analyze: (req, res) => {
    // Example SCO analysis logic
    res.json({ message: 'SCO analysis endpoint working!' });
  },
  create: (req, res) => {
    // Example POST logic
    res.json({ message: 'SCO create endpoint working!' });
  },
};
