CREATE DATABASE companydb;
use companydb;

CREATE TABLE employee(
    id int not null AUTO_INCREMENT,
    name varchar(255) default null,
    salary int(5) default null,
    PRIMARY KEY(id)

);

show tables;
describe employee