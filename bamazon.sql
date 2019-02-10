DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  ProductName VARCHAR(20),
  DepartmentName VARCHAR(20),
  Price DECIMAL(10,2) NULL,
  StockQuantity INT NULL,
  PRIMARY KEY (id)
);

-- Creates new rows
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ("colgate", "bodycare", 4.25, 500);

INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ("purex", "laundry", 3.00, 0);

INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ("book", "books", 125.69, 12);

INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ("vaseline", "bodycare", 4.19, 50);

INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ("dellPC", "electronics", 500.00, 10);

INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ("canon camera", "electronics", 700.98, 16);

INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ("samsung TV", "electronics", 1200.99, 5);

INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ("perfume", "fragrance", 15.39, 49);

INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ("iphone", "electronics", 600.00, 16 );
 
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ("shampoo", "bodycare", 29.39, 20);
