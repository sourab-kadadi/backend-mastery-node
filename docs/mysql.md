### integration of Mysql

## open cmd as administrator and type the below command to start MySQL

select directory by running  cd C:\Program Files\MySQL\MySQL Server\bin
#now run 
net start mysql80   // after first setup, just run this

#for all the below to work you have to be in the sql directory mentioned above
mysql -u root -p

SHOW DATABASES;

CREATE DATABASE erp;
USE erp;

SHOW TABLES;

CREATE TABLE user ( empId INT AUTO_INCREMENT PRIMARY KEY, empName VARCHAR(100) NOT NULL,empDOB DATE, empDOJ DATE,empSalary DECIMAL(10,2));

DESCRIBE user;

mysql -u root -p employee < path_to_your_script.sql

SELECT database;   // shows the selected database

for loading from a file
mysql -u root -p < "L:\2.aaaProjects learning\Node-MySQL-Own\node-mysql\loading.sql"    


## Creating stored procedure to fetch product by id
DELIMITER //

CREATE PROCEDURE agetProductById(IN productId INT)
BEGIN
    SELECT * FROM products WHERE id = productId;
END //

DELIMITER ;



## other learnings

help show  


## implemented nodemon package
earlier node app.js
but post implementing nodemon
use npm start