DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id int(11) NOT NULL AUTO_INCREMENT,
  product_name varchar(45) NOT NULL,
  department_name varchar(45) NOT NULL,
  price int(11) NOT NULL,
  stock_quantity int(11) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Item1','HomeImprovement',5,25);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Item2','Electronics',500,4);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Item3','Furniture',250,10);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Item4','HomeImprovement',25,2);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Item5','Furniture',300,5);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Item6','HomeImprovement',48,6);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Item7','Furniture',450,3);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Item8','Electronics',36,18);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Item9','Furniture',23,20);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Item10','Electronics',700,4);