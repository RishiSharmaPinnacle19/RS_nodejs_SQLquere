
CREATE DATABASE mydb

create table school (name  varchar(255), age int, class varchar(3), marks int, address varchar(255))

ALTER TABLE  ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY

INSERT INTO school (name, age, class, address) VALUES = [
        ['Rishi', '23', 'MCA', 'nagpur'],
        ['Ritika', '23', 'Btech', 'nagpur'],
        ['Raj', '23', 'MBA', 'nagpur'],
        ['Arya', '20', 'Btech', 'nagpur'],
        ['Nikita', '22', 'MCA', 'nagpur'],
        ['Ali', '23', 'MBA', 'nagpur'],
        ['Mohit', '23', 'Btech', 'nagpur'],
        ['Riya', '23', 'MCA', 'Mumbai'],
        ['Purva', '23', 'Btech', 'Delhi']
    ];

    select * from school

    select name,  address from school

    select id from school

    SELECT * FROM school WHERE address = 'mumbai'

    SELECT * FROM school ORDER BY name
    
    DELETE FROM school WHERE address = 'Delhi'

    UPDATE school SET name = 'ali' WHERE address = 'Delhi'

    SELECT * FROM school LIMIT 2 OFFSET 2

