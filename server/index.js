const express = require('express');
const server = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "test",
});

server.use(express.json());
server.use(cors());

server.post("/register", (req, res) => {
    const { name } = req.body;
    const { surname } = req.body;
    const { age } = req.body;
    const { gender } = req.body;
    const { contact } = req.body;
    const { reason } = req.body;
    const { timein } = req.body;
    const { timeout } = req.body;

    let sql = "INSERT INTO register (name, surname, age, gender, contact, reason, timein, timeout) VALUES (?,?,?,?,?,?,?,?)"
    db.query(sql, [name, surname, age, gender, contact, reason, timein, timeout], (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            console.log(result);
        }
    })
});

server.get("/games", (req, res) => {

    let sql = "SELECT * FROM register";
    db.query(sql, (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }

    })
});




server.listen(3001, () =>
    console.log("Running in the port 3001")
);