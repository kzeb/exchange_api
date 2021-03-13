const express = require("express");
const router = express.Router();
const axios = require("axios");

const instance = axios.create({
  baseURL: "http://api.nbp.pl/api/exchangerates/rates",
});

router.get("/exchange_rate", async (req, res) => {
  try {
    let rate = 0;
    instance.get("/a/gbp/?format=json").then((response) => {
      rate = response.data.rates[0].mid;
      res.status(200).send({ rate });
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
