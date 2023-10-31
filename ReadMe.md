to create database using mysql
CREATE DATABASE solar_system;

CREATE TABLE Circumference (
    circumferenceID BIGINT NOT NULL AUTO_INCREMENT,
    `precision` INT,
    pi DECIMAL(19, 9),
    circumference DECIMAL(19, 9),
    PRIMARY KEY (`circumferenceID`)
);

remember change the setting at the server.ts

//go into project, run the command
cd solar-system-project
npm install
npm run start // to host the api

//go into solar-system-frontend
cd solar-system-frontend
npm install
npm run start // to host the front end

now you can calculate the circumference of the sun
at the first time you insert the Precision, the circumference will calculated and store to the DB
the next time you insert the same precision, the api will directly get the circumference