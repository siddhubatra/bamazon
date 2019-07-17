create database bamazon;
use bamazon;

create table top5000 (
id int not null,
artist varchar(50) not null,
songname varchar(50) not null,
year int not null,
worldscore decimal(50) not null,
usscore decimal(10,4) not null,
ukscore decimal(10,4) not null,
europescore decimal(10,4) not null,
poop decimal(10,4) not null,
primary key (id)
);

create table topSongs (
id int not null,
artist varchar(50) not null,
songname varchar(50) not null,
year int not null,
worldscore decimal(50) not null,
usscore decimal(10,4) not null,
ukscore decimal(10,4) not null,
europescore decimal(10,4) not null,
poop decimal(10,4) not null,
primary key (id)
);

create table topAlbums (
id int not null,
artist varchar(50) not null,
albumname varchar(50) not null,
year int not null,
worldscore decimal(50) not null,
usscore decimal(10,4) not null,
ukscore decimal(10,4) not null,
europescore decimal(10,4) not null,
poop decimal(10,4) not null,
primary key (id)
);
drop table topAlbums; 
select * from topAlbums;