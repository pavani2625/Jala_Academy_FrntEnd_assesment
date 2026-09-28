CREATE DATABASE jala_events;

USE jala_events;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    course VARCHAR(100),
    city VARCHAR(100)
);

INSERT INTO students (name, course, city)
VALUES
('Razeena', 'Java Full Stack', 'Hyderabad'),
('Ayesha', 'Frontend Development', 'Hyderabad'),
('Rahul', 'Python', 'Bangalore'),
('Sana', 'Data Science', 'Mumbai');