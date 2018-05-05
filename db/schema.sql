-- Write SQL queries:

CREATE DATABASE burgers_db;

CREATE TABLE burgers 
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    burger_time timestamp
    PRIMARY KEY (id)
);