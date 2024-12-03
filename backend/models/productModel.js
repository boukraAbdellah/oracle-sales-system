const executeQuery = require("../utils/executeQuery");

async function getAllProducts() {
  const query = "SELECT * FROM Product";
  return await executeQuery(query);
}

async function getProductById(productId) {
  const query = "SELECT * FROM Product WHERE ProductID = :id";
  return await executeQuery(query, [productId]);
}

async function createProduct(product) {
  const query = `
    INSERT INTO Product (ProductID, Name, Category, Price)
    VALUES (:ProductID, :Name, :Category, :Price)
  `;
  const params = {
    ProductID: product.ProductID,
    Name: product.Name,
    Category: product.Category,
    Price: product.Price,
  };
  console.log("Executing query:", query);
  console.log("With parameters:", params);
  return await executeQuery(query, params);
}



module.exports = { getAllProducts, getProductById, createProduct };