const express = require("express");
const router = express.Router();

router.get("/exchange", async (req, res) => {
  try {
    res.status(200).send("Working!");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
