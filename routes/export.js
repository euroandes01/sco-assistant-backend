const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  // Example real SCO export structure
  const exportData = {
    scoId: "SCO-12345",
    createdAt: new Date().toISOString(),
    seller: {
      name: "Bravely Minerals Co. Ltd",
      country: "Sierra Leone"
    },
    products: [
      {
        name: "Gold Dore",
        quantityKg: 150,
        purity: "98.5%"
      }
    ],
    terms: {
      shipment: "FOB Dubai",
      payment: "Final assay payment"
    }
  };

  res.json(exportData);
});

module.exports = router;
