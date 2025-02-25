const express = require("express");
const fetchData = require("../utils/fetchData");

const router = express.Router();

// REST API Endpoint for Dashboard Data
router.get("/", async (req, res) => {
  const data = await fetchData();
  res.json(data);
});

module.exports = router;
