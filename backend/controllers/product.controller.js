const {
  getAllProducts,
  getProductById,
  createProduct,
} = require("../models/productModel");

async function fetchAllProducts(req, res) {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
}

async function fetchProductById(req, res) {
  try {
    const productId = req.params.id;
    const product = await getProductById(productId);
    if (product.length === 0) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
}

async function fetchCreateProduct(req, res) {
  try {
    const productData = req.body;
    console.log("Creating product with data:", productData);
    await createProduct(productData);
    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
}

module.exports = { fetchAllProducts, fetchProductById, fetchCreateProduct };
