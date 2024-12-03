const { getSalesSummary, getSales, getSaleById } = require("../models/salesModel")

async function fetchSalesSummary(req, res) {
  try {
    const salesSummary = await getSalesSummary();
    res.json(salesSummary);
  } catch (error) {
    res.status(500).json({error : 'Failed to fetch sales summary'})
  }
}

async function fetchSales(req, res) {
  try {
    const sales = await getSales();
    res.json(sales);
  } catch (error) {
    res.status(500).json({error : "Failed to fetch sales table"})
  }
}

async function fetchSaleById(req,res) {
  try {
    const saleId = req.params.id;
    const sale = await getSaleById(saleId);
    res.json(sale);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sale by id" });
  }
}

module.exports = {fetchSalesSummary, fetchSales, fetchSaleById}