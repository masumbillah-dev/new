DROP database if exists `test`;
CREATE database `test`;
USE `test`;

create table Manufacturers (
  id int not null auto_increment,
  name varchar(255) not null,
  country varchar(255) not null,
  primary key (id)
);

create table Cars (
  id int not null auto_increment,
  model varchar(255) not null,
  year int not null,
  manufacturer_id int not null,
  primary key (id),
  foreign key (manufacturer_id) references Manufacturers(id)
);

insert into Manufacturers (name, country) values
('Toyota', 'Japan'),
('Ford', 'USA'),
('BMW', 'Germany');

insert into Cars (model, year, manufacturer_id) values
('Corolla', 2020, 1),
('Camry', 2021, 1),
('Mustang', 2019, 2),
('F-150', 2020, 2),
('3 Series', 2021, 3);

-- Query to select all cars with their manufacturer names
SELECT Cars.model, Cars.year, Manufacturers.name AS manufacturer
FROM Cars
JOIN Manufacturers ON Cars.manufacturer_id = Manufacturers.id;
-- Query to select all manufacturers and the number of cars they have
SELECT Manufacturers.name AS manufacturer, COUNT(Cars.id) AS car_count
FROM Manufacturers
LEFT JOIN Cars ON Manufacturers.id = Cars.manufacturer_id
GROUP BY Manufacturers.id;
-- Query to select all cars manufactured after 2020
SELECT model, year
FROM Cars
WHERE year > 2020;
-- Query to select all manufacturers from Japan
SELECT name 
FROM Manufacturers
WHERE country = 'Japan';
-- Query to select the most recent car model for each manufacturer
SELECT Manufacturers.name AS manufacturer, Cars.model, Cars.year
FROM Manufacturers
JOIN Cars ON Manufacturers.id = Cars.manufacturer_id
WHERE (Cars.manufacturer_id, Cars.year) IN (
  SELECT manufacturer_id, MAX(year)
  FROM Cars
  GROUP BY manufacturer_id
);

