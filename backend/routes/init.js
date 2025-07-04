const express = require("express");
const axios = require("axios");
const Transaction = require("../models/Transaction");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { data } = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
    await Transaction.deleteMany({});
    await Transaction.insertMany(data);
    res.status(200).send("Data initialized");
  } catch (error) {
    res.status(500).send("Error fetching or saving data");
  }
});

module.exports = router;
