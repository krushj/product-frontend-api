const express = require('express')
const axios = require("axios");
const httpsAgent = require('../constants/httpAgent');


const loginRouter = express.Router()


loginRouter.post("/", function (req, res) {

    const config = {
      method: "post", // or 'get', 'put', 'delete', etc.
      url: "https://dummyjson.com/auth/login",
      data: req.body,
      httpsAgent, // Include the httpAgent in the configuration
    };
    axios(config)
      .then((response) => {
        res.status(200).json({ token: response.data.token });
      })
  
      .catch((error) => {
        res.status(401).json(error);
      });
  });

module.exports = loginRouter;