CREATE DATABASE xyz;
CREATE DATABASE apna_college;
DROP DATABASE apna_college;
USE xyz;

CREATE TABLE student(
name VARCHAR(30),
age INT,
rollno int
CONSTRAINT CHECK (age >= 20),
PRIMARY KEY (rollno)
);

INSERT INTO student
(name,age, rollno)
VALUES
("eve", 20,16),
("bob", 10,24),
("adam", 15, 46);

SELECT * FROM student;

SELECT name, age FROM student;
SHOW DATABASES;

SELECT * FROM student
WHERE age <=18
LIMIT 1;

SELECT max(age)
FROM student;

SELECT count(age)
FROM student
WHERE age >=18;

UPDATE student
SET age = 21
WHERE age <=15;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM student
WHERE rollno > 50;

ALTER TABLE student 
ADD COLUMN city VARCHAR(30) DEFAULT "Delhi";

ALTER TABLE student 
RENAME TO Student;
