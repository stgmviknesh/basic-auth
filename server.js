const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path'); // Required for path manipulation

const app = express();
const port = 3007;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password',   // If you used a different password in install_mysql.sh then update the same password here
    database: 'myapp'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Serve static files (e.g., HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for user authentication
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;

    connection.query(query, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.redirect('/dashboard'); // Redirect to '/dashboard' (change this URL as needed)
            //   res.send('Login successful!');
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

// Handle root route: Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle dashboard route: Serve the dashboard.html file
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
  });

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
