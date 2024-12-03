-- Insert data into Product table
INSERT INTO Product (ProductID, Name, Category, Price) VALUES (1, 'Laptop', 'Electronics', 1000);
INSERT INTO Product (ProductID, Name, Category, Price) VALUES (2, 'Smartphone', 'Electronics', 500);
INSERT INTO Product (ProductID, Name, Category, Price) VALUES (3, 'Tablet', 'Electronics', 300);

-- Insert data into Customer table
INSERT INTO Customer (CustomerID, Name, City, JoinDate) VALUES (1, 'John Doe', 'New York', TO_DATE('2021-01-01', 'YYYY-MM-DD'));
INSERT INTO Customer (CustomerID, Name, City, JoinDate) VALUES (2, 'Jane Smith', 'Los Angeles', TO_DATE('2021-02-01', 'YYYY-MM-DD'));
INSERT INTO Customer (CustomerID, Name, City, JoinDate) VALUES (3, 'Mike Johnson', 'Chicago', TO_DATE('2021-03-01', 'YYYY-MM-DD'));

-- Insert data into Sales table
INSERT INTO Sales (SalesID, ProductID, CustomerID, Quantity, SaleDate) VALUES (1, 1, 1, 2, TO_DATE('2021-04-01', 'YYYY-MM-DD'));
INSERT INTO Sales (SalesID, ProductID, CustomerID, Quantity, SaleDate) VALUES (2, 2, 2, 1, TO_DATE('2021-04-02', 'YYYY-MM-DD'));
INSERT INTO Sales (SalesID, ProductID, CustomerID, Quantity, SaleDate) VALUES (3, 3, 3, 3, TO_DATE('2021-04-03', 'YYYY-MM-DD'));

COMMIT;
/

