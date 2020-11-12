DROP DATABASE IF EXISTS lovelight;

CREATE DATABASE lovelight;

USE lovelight;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL
);

CREATE TABLE lanterns (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userto VARCHAR(255) NOT NULL,
  userfrom VARCHAR(255) NOT NULL,
  lit VARCHAR(255) NOT NULL
);

INSERT into users (username) VALUES ("scott");