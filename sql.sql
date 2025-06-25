CREATE DATABASE college;
USE college;

CREATE TABLE teacher(
id INT,
name VARCHAR(30),
subject VARCHAR(30),
salary INT
);                 

INSERT INTO teacher
VALUES
(23, "bob", "maths", 50000),
(47, "eve", "eng", 60000),
(18, "ajay", "science", 45000),
(9, "chetan", "sst", 75000);

SELECT * FROM teacher; 

SELECT id, name, subject, salary FROM teacher
WHERE salary >55000;

ALTER TABLE teacher
CHANGE COLUMN salary sal VARCHAR(30) ; 

UPDATE teacher
SET sal = sal + 0.25 * sal;

ALTER TABLE teacher
ADD COLUMN City VARCHAR(30) DEFAULT "Gudgaon";

ALTER TABLE teacher
DROP COLUMN city;
