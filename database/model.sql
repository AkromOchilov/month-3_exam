create database exam3;
\c exam3;

create table users(
  userId serial primary key,
  username varchar(32) not null,
  password text not null
);

insert into users(username, password) values ('akrom', 'akrom');

create table carModel(
  categoryId serial primary key,
  categoryName varchar(32) not null,
  categoryImage text not null
);

insert into carModel(categoryName, categoryImage) values ('chevrolet', 'chevrolet.jpg'), ('lada', 'lada.jpg'), ('ferrari', 'ferrari.jpg');

create table cars(
  carId serial primary key,
  model varchar(50) not null,
  marka varchar(50) not null,
  tanirovka varchar(16) not null,
  motor FLOAT not null,
  year INT not null,
  color varchar(50) not null,
  distance INT not null, 
  gearbook TEXT not null,
  description TEXT not null,
  carPrice INT not null,
  carImage text not null,
  carImageInner text not null,
  carImage2 text
);

insert into cars(model, marka, tanirovka, motor, year, color, distance, gearbook, description, carPrice, carImage, carImageInner, carImage2) values ('malibu', 'chevrolet', 'yoq', 1.6, 2020,'white',3000,'avtomat karobka', 'yep yengidek', 329000000, 'lada.jpg','lada.jpg','lada.jpg');
