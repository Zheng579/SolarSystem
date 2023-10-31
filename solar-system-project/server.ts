import express from 'express';
import cors from 'cors';
import mysql from 'mysql2'

const app = express();
const port = 3001;

const dbConnection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'admin',
  database: 'solar_system',
});

dbConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.use(cors());
dbConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/pi', (req, res) => {
  const precision = Number(req.query.precision);
  // Query the database to check if the value exists
  dbConnection.query('SELECT pi, circumference FROM circumference WHERE `precision` = ?', [precision], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (Array.isArray(results) && results.length > 0) {
      const resultArray = JSON.parse(JSON.stringify(results));
      // Pi value for this precision is in the database
      res.json({ pi: resultArray[0].pi, circumference: resultArray[0].circumference});
    } else { 
      // Calculate Pi to the requested precision (implement your calculation logic)
      let calculatedPi: number = calculatePi(precision);
      let calculatedCircumference = calculateCircumference(calculatedPi);
      // Store the calculated value in the database
      dbConnection.query('INSERT INTO circumference (`precision`, pi, circumference) VALUES (?, ?, ?)', [precision, calculatedPi, calculatedCircumference], (insertErr) => {
        if (insertErr) {
          console.error('Error inserting into the database:', insertErr);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          res.json({ pi: calculatedPi, circumference: calculatedCircumference });
        }
      });
    }
  });
});

dbConnection.on('error', (err) => {
  console.error('Database connection error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    // Reconnect if the connection is lost
    dbConnection.connect();
  } else {
    throw err;
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//calculate pi
function calculatePi(precision: number) {
  return Number(Math.PI.toFixed(precision));
}

function calculateCircumference(pi: number){
  return 2*pi*696340;
}
