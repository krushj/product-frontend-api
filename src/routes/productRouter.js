const express = require("express");
const axios = require("axios");
const httpsAgent = require("../constants/httpAgent");

const productRouter = express.Router();

// get all products
productRouter.get("/", function (req, res) {
  const config = {
    method: "get", // or 'get', 'put', 'delete', etc.
    url: "https://dummyjson.com/products",
    httpsAgent, // Include the httpAgent in the configuration
  };

  axios(config)
    .then((response) => {
      res.status(200).json(response.data.products);
    })
    .catch((error) => {
      res.json(error);
    });
});

// get product of selected category
productRouter.get("/category/:category", function (req, res) {
  const category = req.params.category;

  const config = {
    method: "get", // or 'get', 'put', 'delete', etc.
    url: `https://dummyjson.com/products/category/${category}`,
    httpsAgent, // Include the httpAgent in the configuration
  };

  axios(config)
    .then((response) => {
      res.status(200).json(response.data.products);
    })
    .catch((error) => {
      res.status(401).json(error);
    });
});

// return the product categories
productRouter.get("/categories", function (req, res) {
  const config = {
    method: "get",
    url: `https://dummyjson.com/products/categories`,
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

// return products which matched the given key
productRouter.get("/search", function (req, res) {
  const key = req.query.key;
  const config = {
    method: "get",
    url: `https://dummyjson.com/products/search?q=${key}`,
    httpsAgent, // Include the httpAgent in the configuration
  };

  axios(config)
    .then((response) => {
      res.status(200).json(response.data.products);
    })
    .catch((error) => {
      res.json(error);
    });
});

// get a single product with given id
productRouter.get("/:id", function (req, res) {
  const id = req.params["id"];

  const config = {
    method: "get", // or 'get', 'put', 'delete', etc.
    url: `https://dummyjson.com/products/${id}`,
    httpsAgent, // Include the httpAgent in the configuration
  };

  axios(config)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(401).json(error);
    });
});

module.exports = productRouter;
