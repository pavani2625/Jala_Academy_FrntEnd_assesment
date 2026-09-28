require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");

const app = express();

const PORT = 3000;


// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


// Connect to MySQL
db.connect(function (error) {

    if (error) {
        console.log("MySQL connection failed.");
        console.log(error.message);
        return;
    }

    console.log("Connected to MySQL.");

});


// Serve AngularJS files
app.use(express.static("public"));


// API to fetch students
app.get("/api/students", function (req, res) {

    const sql = "SELECT * FROM students";

    db.query(sql, function (error, results) {

        if (error) {

            console.log(error);

            return res.status(500).json({
                error: "Unable to fetch students"
            });

        }

        res.json(results);

    });

});


// Start server
app.listen(PORT, function () {

    console.log(
        "Server running at http://localhost:" + PORT
    );

});