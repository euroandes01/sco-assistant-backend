const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { scoText } = req.body;
  if (!scoText) return res.status(400).json({ error: "No SCO text provided" });

  // Dummy analysis logic (replace with real logic)
  const result = {
    summary: "Dummy analysis for testing",
    length: scoText.length
  };

  res.json(result);
});

module.exports = router;
