const express = require("express");
const httpsAgent = require("../constants/httpAgent");
const axios = require("axios");

const userRouter = express.Router();

userRouter.get("", (req, res, next) => {
  const config = {
    method: "get", // or 'get', 'put', 'delete', etc.
    url: "https://dummyjson.com/auth/me",
    headers: {
      Authorization: req.headers.authorization,
    },
    httpsAgent, // Include the httpAgent in the configuration
  };
  axios(config)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json(error.error)
    });
});

module.exports = userRouter;
