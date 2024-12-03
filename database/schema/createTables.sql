CREATE TABLE Product (
  ProductID NUMBER PRIMARY KEY,
  Name VARCHAR2(50),
  Category VARCHAR2(50),
  Price NUMBER
);

CREATE TABLE Customer (
  CustomerID NUMBER PRIMARY KEY,
  Name VARCHAR2(50),
  City VARCHAR2(50),
  JoinDate DATE
);

CREATE TABLE Sales (
  SalesID NUMBER PRIMARY KEY,
  ProductID NUMBER REFERENCES Product(ProductID),
  CustomerID NUMBER REFERENCES Customer(CustomerID),
  Quantity NUMBER,
  SaleDate DATE,
  SaleAmount NUMBER
);


CREATE VIEW SalesSummary AS
SELECT 
  s.SalesID,
  p.Name AS ProductName,
  c.Name AS CustomerName,
  p.price AS ProductPrice,
  s.Quantity,
  s.SaleDate,
  s.SaleAmount
FROM 
  Sales s
JOIN 
  Product p ON s.ProductID = p.ProductID
JOIN 
  Customer c ON s.CustomerID = c.CustomerID;

/