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

INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Hammer','HomeImprovement',5,25);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('42" LED TV','Electronics',500,4);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Couch','Furniture',250,10);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Paint','HomeImprovement',25,2);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Night Stand','Furniture',300,5);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Belt Sander','HomeImprovement',48,6);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Coffee Table','Furniture',450,3);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('32MB SanDisk USB','Electronics',36,18);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('Furniture Pads','Furniture',23,20);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('72" LED TV','Electronics',700,4);