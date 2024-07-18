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