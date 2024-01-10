const express = require('express')
const axios = require("axios");
const httpsAgent = require('../constants/httpAgent');


const categoryRouter = express.Router()


categoryRouter.get("/", function (req, res) {

    const config = {
      method: "get", // or 'get', 'put', 'delete', etc.
      url: "https://dummyjson.com/products/categories",
      httpsAgent, // Include the httpAgent in the configuration
    };
    axios(config)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.json(error);
      });
  });

module.exports = categoryRouter;