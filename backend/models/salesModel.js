const { getConnection } = require('../config/dbconfig');

async function getSalesSummary() {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute(`
      select * from salessummary
      `);
    return result.rows;
    
  } catch (error) {
    console.log("Error Fetching Sales Summary", error)
    throw error
  } finally {
    if (connection) connection.close();
  }
  
}

async function getSales() {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute('select * from sales')
    return result.rows;


  } catch (error) {
    console.log("error getting sales", error)
    throw error
  } finally {
    if (connection) connection.close();
  }
}

async function getSaleById(saleId) {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute(
      `
      SELECT * FROM Sales WHERE SalesID = :id`,
      [saleId]
    );
    return result.rows;
  } catch (error) {
    console.log("error getting sales", error);
    throw error;
  } finally {
    if (connection) connection.close();
  }


}

module.exports = { getSalesSummary, getSales, getSaleById };
