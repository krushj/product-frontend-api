const express = require('express')
const axios = require('axios')

const httpsAgent = require('../constants/httpAgent');

const authRouter = express.Router()


authRouter.get('/', (req, res, next) => {
  //console.log(req.headers.authorization);
    const config = {
        method: "get", // or 'get', 'put', 'delete', etc.
        url: "https://dummyjson.com/auth/me",
        headers: {
            'Authorization' :req.headers.authorization, 
          },
        httpsAgent, // Include the httpAgent in the configuration
      };
      axios(config)
        .then((response) => {
          next()
        })
        .catch((error) => {
          res.status(401).json({ message: "Invalid token!" });
        });
})

module.exports = authRouter