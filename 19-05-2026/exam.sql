drop database if exists exam;
create database exam;
use exam;


drop database if exists brands;
create table brands(
    id int auto_increment primary key,
    name varchar(100)
);
insert into brands(name) values('Apple Inc.'),('Google LLC'),('Microsoft Corporation');

drop table if exists categories;
create table categories(
    id int auto_increment primary key,
    name varchar(255)
);
insert into categories(name) values('Laptops'),('Phones'),('Tablets');

drop table if exists products;
create table products(
    id int auto_increment primary key,
    name varchar(255),
    brand_id int,
    category_id int,
    price float,
    is_active tinyint
);


insert into products(name,brand_id,category_id,price,is_active) values
    ('iPhone 12 Pro Max',1,1,1299,1),
    ('google pixel 5',2,2,299,1),
    ('microsoft surface',3,3,699,1),
    ('iPhone 17 pro max',4,1,799,1),
    ('google pixel 6',5,2,199,1),
    ('microsoft surface 2',6,3,99,1);


    drop view if exists vw_active_products;
    create view vw_active_products as
    select p.id, p.name, b.name as brand, c.name as category, p.price from products as p, brands as b, categories as c
    where p.brand_id = b.id and p.category_id = c.id and p.is_active=1;

    select * from vw_active_products;
  