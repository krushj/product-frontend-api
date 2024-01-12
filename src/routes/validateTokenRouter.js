const express = require("express");
const httpsAgent = require("../constants/httpAgent");
const axios = require("axios");

const validateTokenRouter = express.Router();

validateTokenRouter.get("/", (req, res, next) => {
  const config = {
    method: "get", // or 'get', 'put', 'delete', etc.
    url: "https://dummyjson.com/auth/me",
    headers: {
      Authorization: `${req.headers.authorization}`,
    },
    httpsAgent, // Include the httpAgent in the configuration
  };
  axios(config)
    .then((response) => {
      res.status(200).json(true);
    })
    .catch((error) => {
      res.json(false);
    });

});


module.exports = validateTokenRouter;
