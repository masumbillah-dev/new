use round_70a;

drop table if exists manufactures;
create table manufactures (
  id int auto_increment primary key,
  name varchar(100),
  address varchar(255)
);

drop table if exists products;
create table products (
  id int auto_increment primary key,
  name varchar(100),
  manufacturer_id int,
  price float

);

-- insert into manufactures (name,address) values 
--     ("hp","usa"),
--     ("dell", "uk")
-- ;

-- insert into products (name, manufacturer_id, price) values 
--     ("Mouse", 1, 1800),
--     ("Monitor", 1, 11000),
--     ("Monitor", 2, 9900),
--     ("Speaker", 2, 5500);

insert into manufactures(name, address) values("HP", "USA");
insert into manufactures(name, address) values("DELL", "UK");

insert into products(name, manufacturer_id, price) values("Mouse", 1, 800);
insert into products(name, manufacturer_id, price) values("Monitor", 1, 11000 );
insert into products(name, manufacturer_id, price) values("Mouse", 2, 29900);
insert into products(name, manufacturer_id, price) values("Speaker", 1, 800);
insert into products(name, manufacturer_id, price) values("Sound BOx", 2, 800);

drop procedure if exists createManufacturer;
DELIMITER //
create procedure createManufacturer (pname varchar(100), paddress varchar(255))
begin
    insert into manufactures(name, address) values(pname, paddress);
end //
DELIMITER ;


drop view if exists vw_product_list;
create view vw_product_list as
select p.id, m.name, p.price, m.name mfg
from products as p, manufactures as m
where p.manufacturer_id = m.id and p.price > 400;



create trigger after delete manufacturer delete
after delete on manufactures
for each row
begin
    delete from products where manufacturer_id = old.id;
end;