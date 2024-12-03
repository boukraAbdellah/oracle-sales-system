const http = require('http');
const express = require('express');
const morgan = require("morgan")
const { getConnection } = require('./config/dbconfig');
const salesRoutes = require("./routes/sales.routes");
const productRoutes = require("./routes/product.routes");
const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(morgan('dev'))

app.use(express.json())

app.use('/api', salesRoutes)
app.use('/api', productRoutes)

server.listen(3000, async () => {
  console.log('Server is running on http://localhost:3000');
  try {
    const connection = await getConnection();
    await connection.close();
  } catch (err) {
    console.error("Database connection test failed.");
  }
});





