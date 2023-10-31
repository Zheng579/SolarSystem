# Solar System Circumference Calculator
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

This project allows you to calculate the circumference of the sun using a MySQL database, a Node.js API, and a front-end application. Follow the steps below to set up and run the system.

## Database Setup

1. Create a MySQL database named `solar_system`:

```sql
CREATE DATABASE solar_system;

CREATE TABLE Circumference (
    circumferenceID BIGINT NOT NULL AUTO_INCREMENT,
    `precision` INT,
    pi DECIMAL(19, 9),
    circumference DECIMAL(19, 9),
    PRIMARY KEY (`circumferenceID`)
);
```
## API Setup
1. Update the database settings in server.ts to match your MySQL configuration.

2. Create a table called Circumference to store the circumference calculations:
    ```console
    cd solar-system-project
    ```

3. Install the required Node.js packages:
    ```console
    npm install
    ```

4. Start the API:
    ```console
    npm run start
    ```

## Front-end Setup
1. Go into the front-end application directory:
    ```console
    cd solar-system-frontend
    ```

2. Install the required Node.js packages:
    ```console
    cd npm install
    ```

3. Start the front-end application:
    ```console
    npm run start
    ```
### Now you can calculate the circumference of the sun. When you insert the precision for the first time, the circumference will be calculated and stored in the database. The next time you insert the same precision, the API will directly retrieve the circumference.
