const oracledb = require('oracledb');

const dbConfig = {
  user: process.env.DB_USER || 'abdellahdb',
  password: process.env.DB_PASSWORD || 'abdellah33',
  connectString: process.env.DB_CONNECTIONSTRING || 'localhost:1521/ORCLPDB'
};

async function getConnection() {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log("Connected to Oracle Database!");
    return connection;
  } catch (err) {
    console.error("Error connecting to Oracle Database:", err);
    throw err;
  }
}


async function closeConnection(connection) {
  try {
    await connection.close();
    console.log("Connection to Oracle Database closed!");
  } catch (err) {
    console.error("Error closing connection to Oracle Database:", err);
    throw err;
  }
}
module.exports = { getConnection, closeConnection };

