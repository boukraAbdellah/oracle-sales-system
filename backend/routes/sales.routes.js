const express = require('express');
const { fetchSales, fetchSalesSummary, fetchSaleById } = require('../controllers/sales.controller')

const salesRoutes = express.Router();

salesRoutes.get("/get-sales-summary", fetchSalesSummary);

salesRoutes.get("/sales", fetchSales);

salesRoutes.get('/sales/:id',fetchSaleById)

module.exports = salesRoutes;

