drop table if exists manufacturers;
create table manufacturers (
  id int primary key auto_increment,
  name varchar(50),
  address varchar(100),
  contact_no varchar(20)
);

drop table if exists products;
create table products (
  id int primary key auto_increment,
  name varchar(50),
  price varchar(100),
  manufacture_id int(10)
);

insert into manufacturers (name, address, contact_no) values ("HP", "USA", "09865432");
insert into manufacturers (name, address, contact_no) values ("Dell", "USA", "09876543");


insert into products (name, price, manufacture_id) values ("Laptop", "10000", 1);
insert into products (name, price, manufacture_id) values ("Desktop", "15000", 2);
insert into products (name, price, manufacture_id) values ("Tablet", "5000", 2);
insert into products (name, price, manufacture_id) values ("Monitor", "3000", 1);
insert into products (name, price, manufacture_id) values ("Printer", "2000", 1);

