const express = require("express");
const {
  fetchAllProducts,
  fetchProductById,
  fetchCreateProduct,
} = require("../controllers/product.controller");

const productRoutes = express.Router();


productRoutes.get("/products", fetchAllProducts);

productRoutes.get("/products/:id", fetchProductById);

productRoutes.post("/products", fetchCreateProduct);

module.exports = productRoutes;
