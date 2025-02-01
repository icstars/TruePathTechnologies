import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();


// the port your server runs on - hope 3000 isn't in use!
// if you close your terminal window without properly stopping the server
// it'll be there for a while
const port = 3000;
app.use(cors({ origin: 'http://localhost:5173' }));

const db = mysql.createConnection({
    host: 'thresholds-test.mysql.database.azure.com',
    user: 'test', // Replace with your MySQL username
    port: 3306, // Replace with the port you need - may be different from mine
    password: 'test', // Replace with your MySQL password
    database: 'thresholds', // Replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// app.get, .post, .push - these are all set to handle different
// HTTP verbs/methods - we should talk about these
// I like to call these "routes"
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/employees', (req, res) => {
    const query = 'SELECT * FROM employees';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving tasks:', err);
            res.status(500).json({ error: 'Error retrieving tasks' });
        } else {
            console.log(typeof(results));
            res.json(results);
        }
    });
})

// starts the app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})