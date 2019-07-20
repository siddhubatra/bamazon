create database bamazon;
use bamazon;

create table products (
item_id int not null auto_increment,
product_name varchar(50) not null,
department_name varchar(50) not null,
price int not null,
stock_quantity int not null,
primary key (item_id)
);

insert into products 
(product_name, department_name, price, stock_quantity)
values ('sneakers', 'footwear', 25, 2000);

insert into products 
(product_name, department_name, price, stock_quantity)
values ('laptops', 'electronics', 1000, 200);

insert into products 
(product_name, department_name, price, stock_quantity)
values ('cellphones', 'electronics', 750, 1000);

insert into products 
(product_name, department_name, price, stock_quantity)
values ('t-shirts', 'clothing', 20, 1000);

insert into products 
(product_name, department_name, price, stock_quantity)
values ('socks', 'clothing', 10, 400);

insert into products 
(product_name, department_name, price, stock_quantity)
values ('eggs', 'food', 12, 1000);

insert into products 
(product_name, department_name, price, stock_quantity)
values ('milk', 'dairy', 5, 1000);

insert into products 
(product_name, department_name, price, stock_quantity)
values ('cheese', 'dairy', 8, 1000);

insert into products 
(product_name, department_name, price, stock_quantity)
values ('notebooks', 'stationary', 15, 500);

insert into products 
(product_name, department_name, price, stock_quantity)
values ('pencils', 'stationary', 2, 5000);

select * from products;