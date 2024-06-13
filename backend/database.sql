CREATE DATABASE ventureup;

CREATE TABLE init(
    uid SERIAL PRIMARY KEY,
    name varchar(100),
    number INT
);

INSERT INTO init(name, number) VALUES ("Siddhant",1),("Dee",2),("Sid",3);