# DAB - Course Assignment 1
# Application Installation and Usage Instructions
1. Download the file
2. Open the file via VS Code
3. Create DB using script below
4. Create a .env file and paste Environment Variables below into it
5. Instal npm by entering terminal 'npm install'. This would install all required libraries and packages.
6. Start the app by entering terminal 'npm start'
7. Populate the tables in the DB using scripts below in written order individually.
8. Give DB access using the script below
9. Open your browser and go to localhost:3000

# Environment Variables
- ADMIN_USERNAME="dabcaowner"
- ADMIN_PASSWORD="dabca1234"
- DATABASE_NAME="adoptiondb"
- DIALECT="mysql"
- DIALECTMODEL="mysql2"
- PORT="3000"
- HOST="localhost"

# Additional Libraries/Packages

- To use the MySQL Server database in NodeJS applications, we will need a mysql2 package.
- mysql is a Node.js driver for MySQL. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.
- Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, read replication and more.
- dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
Run npm run dev to start the application in development mode.
- Express-session is a middleware that allows you to store session data on the client side.
- Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.

# NodeJS Version Used
- v18.12.1

# DATABASE
- CREATE DATABASE adoptiondb;

# DATAINSERTS

INSERT INTO Species (Name) 
VALUES  
('Dwarf Hamster'), 
('Tedy bear hamster'), 
('Jack-Russel'), 
('Budgy'), 
('Tortouse'), 
('Gold Fish'), 
('Lizzard'), 
('Bearder Dragon'), 
('Parrot'), 
('Corn snake'), 
('Dwarf Hamster'), 
('Teddy bear hamster'), 
('Parrot');

INSERT INTO Temperaments (Name)
VALUES
('calm'),
('scared'),
('energetic'),
('happy'),
('lazy');

INSERT INTO Sizes (Name)
VALUES
('small'),
('medium'),
('large');

INSERT INTO Animals (Name,Birthday,Adopted,SpecieId,SizeId)
VALUES
('Coco','2020-02-12', false, 1, 1),
('Ted','2021-02-12', false, 2, 1),
('Coco','2020-02-12', false, 3, 2),
('Everrest','2019-02-12', false, 4, 2),
('Rocko','2020-02-12', false, 5, 3),
('Goldy','2023-02-12', false, 6, 2),
('Lizzy','2020-02-12', false, 7, 3),
('Goga','2018-02-12', false, 8, 1),
('Tweet Tweet','2020-02-12', false, 9, 1),
('Toothless','2017-02-12', false, 10, 2),
('Sophie','2020-02-12', false, 11, 1),
('Teddy','2021-02-12', false, 12, 3),
('Roger','2020-02-12', false, 13, 2);

INSERT INTO Animal_Temperaments (AnimalId,TemperamentId)
VALUES
(1,1),
(1,2),
(2,1),
(2,2),
(3,3),
(4,1),
(4,4),
(5,1),
(5,5),
(6,1),
(7,1),
(7,5),
(8,1),
(8,5),
(8,2),
(9,1),
(9,4),
(10,2),
(11,1),
(11,2),
(12,1),
(12,2),
(13,1),
(13,4);

INSERT INTO Users (FullName,Username,Password,Role)
VALUES
('System admin','Admin','admin1234','Admin');

# DATABASEACCESS

CREATE USER 'dabcaowner'@'%' IDENTIFIED WITH mysql_native_password BY 'dabca1234';
GRANT ALL PRIVILEGES ON adoptiondb.* TO 'dabcaowner'@'%';

# DATABASEQUERIES

1-Return the most popular animal name.
SELECT Name, COUNT(*) as count
FROM Animals
GROUP BY Name
ORDER BY count DESC
LIMIT 1;

2-Return a list of animals that have been adopted, and the name of the user that adopted them.
SELECT Animals.name AS animal_name, Users.fullname
FROM Animals
INNER JOIN Users
ON Animals.adopted IS NOT NULL AND Animals.adopted = Users.id;

3-Return a list of all the animals, sorted by age from youngest to oldest.
SELECT Name, Birthday, YEAR(NOW()) - YEAR(Birthday) - (DATE_FORMAT(NOW(), '%m%d') < DATE_FORMAT(Birthday, '%m%d')) AS age
FROM Animals
ORDER BY age ASC;

4-Return all the animals born between 31 December 2017 and 31 December 2020.
SELECT Name, Birthday
FROM Animals
WHERE Birthday BETWEEN '2017-12-31' AND '2020-12-31';

5-Return the number of animals per size (return each size and the number).
SELECT Sizes.Name, COUNT(Animals.SizeId) AS number_of_animals
FROM Sizes
INNER JOIN Animals
ON Sizes.Id = Animals.SizeId
GROUP BY Sizes.Name;

6-CREATE a trigger to implement the following feature - Whenever a new animal of Species type “Lizzard” is added to the database, the last created user will automatically adopt that animal.
CREATE TRIGGER auto_adopt_lizard
AFTER INSERT ON Animals
FOR EACH ROW
BEGIN
DECLARE last_user_id INT;
SELECT id INTO last_user_id FROM Users ORDER BY id DESC LIMIT 1;
IF NEW.SpecieId = (SELECT id FROM Species WHERE Name = 'Lizard') THEN
UPDATE Animals SET UserId = last_user_id WHERE id = NEW.id;
END IF;
END;
