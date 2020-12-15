drop database if exists burgers_db;
Create database burgers_db;
   use burgers_db;

   Create table burgers(
     id INT not null auto_increment primary key,
     burger_name varchar(150) not null,
     devoured BOOLEAN DEFAULT false
   );