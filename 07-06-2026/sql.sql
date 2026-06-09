DROP DATABASE IF EXISTS schedule;
CREATE DATABASE schedule;
USE schedule;

-- 1. Creating table
DROP TABLE IF EXISTS teacher;
CREATE TABLE teacher (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    qualification VARCHAR(50),
    contact_no VARCHAR(20)
);

DROP TABLE IF EXISTS course;
CREATE TABLE course (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(50),
    fee INT(6),
    teacher_id INT(10)
);

-- . Inserting Dummy Data into teacher
INSERT INTO teacher (name, qualification, contact_no) VALUES 
('Haoladar Sir', 'PhD', '01679854658'),
('Harez Pramanik', 'MD', '01012345678'),
('MD Shohidul Islam', 'JD', '4081234567');


-- . Inserting Dummy Data into course
INSERT INTO course (course_name, fee, teacher_id) VALUES 
('Mathematics', 23000, 1),
('Physics', 18000, 2),
('Chemistry', 11000, 3);


   
DROP PROCEDURE IF EXISTS add_teacher;

DELIMITER ??
CREATE PROCEDURE add_teacher(pname VARCHAR(50), pqualification VARCHAR(50), pcontact VARCHAR(20))
BEGIN
INSERT INTO teacher (name, qualification, contact_no) VALUES (pname, pqualification, pcontact);
END ??
DELIMITER ;

CALL add_teacher("Masum Billah", "MBA", "01712345678");


-- 3. Create Trigger
DROP TRIGGER IF EXISTS delete_teacher; 
CREATE TRIGGER delete_teacher 
AFTER DELETE ON teacher
FOR EACH ROW
DELETE FROM course WHERE teacher_id= old.id;

-- 4. Create View
DROP VIEW IF EXISTS course_view;
CREATE VIEW course_view as 
SELECT c.*, t.name as teacher_name
FROM course c, teacher t
WHERE c.teacher_id = t.id AND c.fee > 15000;