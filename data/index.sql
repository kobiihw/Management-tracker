CREATE DATABASE work_db;
USE work_db;

CREATE TABLE department
(
	id int NOT NULL AUTO_INCREMENT,
	dept_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE roles
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	salary varchar(255) NOT NULL,
	dept_id int NOT NULL
);
CREATE TABLE employees
(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(225) NOT NULL,
    last_name VARCHAR(225) NOT NULL,
    role_id int Not Null
);
