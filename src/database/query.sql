CREATE DATABASE registroAlumnos;

USE registroAlumnos;

CREATE TABLE alumnos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(25),
    email VARCHAR(100),
    birthdate DATE 
);

SELECT * FROM alumnos;