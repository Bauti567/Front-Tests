CREATE DATABASE IF NOT EXISTS companydb;
use companydb;

CREATE TABLE employee(
    id int not null AUTO_INCREMENT,
    name varchar(45) default null,
    salary int(5) default null,
    PRIMARY KEY(id)

);

show tables;
describe employee;

INSERT INTO employee values (1,'Juan',1000),(2,'Juan',1000),(3,'Maria',3000);

