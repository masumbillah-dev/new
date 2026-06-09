DROP DATABASE IF EXISTS idb_exam;
CREATE DATABASE idb_exam;
USE idb_exam;

-- 1. Creating table manufacturer and product

DROP TABLE IF EXISTS manufacturer;
CREATE TABLE manufacturer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    address VARCHAR(100),
    contact_no VARCHAR(50)
);

DROP TABLE IF EXISTS product;
CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    price INT(5),
    manufacturer_id INT(10)
);

-- . Inserting Data into manufacturer
INSERT INTO manufacturer (name, address, contact_no) VALUES 
('HP', 'Dhaka', '01679854658'),
('Samsung', 'Seoul', '01012345678'),
('Apple', 'USA', '01681234567');


-- . Inserting Data into product
INSERT INTO product (name, price, manufacturer_id) VALUES 
('Laptop', 35500, 1),
('Smartwatch', 3500, 3),
('Mobile', 25500, 2),
('Headphones', 2500, 1),
('Tablet', 15500, 2),
('Camera', 4500, 3);


-- 2. Create Stored Procedure
   
DROP PROCEDURE IF EXISTS add_manufacture;

DELIMITER ??
CREATE PROCEDURE add_manufacture(pname VARCHAR(50), paddress VARCHAR(50), pcontact VARCHAR(50))
BEGIN
INSERT INTO manufacturer (name,address,contact_no) VALUES (pname, paddress, pcontact);
END ??
DELIMITER ;

CALL add_manufacture("Pran", "Dhaka", "01712345678");


-- 3. Create Trigger

DROP TRIGGER IF EXISTS delete_product; 
CREATE TRIGGER delete_product 
AFTER DELETE ON manufacturer
FOR EACH ROW
DELETE FROM product WHERE manufacturer_id= old.id;

-- 4. Create View

DROP VIEW IF EXISTS product_view;
CREATE VIEW product_view as 
SELECT p.*, m.name as mfg
FROM product p, manufacturer m
WHERE p.manufacturer_id = m.id and p.price > 5000;