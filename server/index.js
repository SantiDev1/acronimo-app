const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const request = require('request');

app.use(cors({
    origin: '*'
}));
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "acronimo"
});

app.get('/api', (req, res) => {
    const searchTerm = req.query.term;

    request({
        url: 'https://www.nactem.ac.uk/software/acromine/dictionary.py',
        qs: { sf: searchTerm }
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            res.send(body);
        } else {
            res.status(response.statusCode).send(error);
        }
    });
});

app.post("/create", (req, res)=> {
    const inicial = req.body.inicial;
    const significado = req.body.significado;

    db.query('INSERT INTO acronimos(inicial, significados) VALUES (?, ?)', [inicial, significado], (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).send("Error al registrar el acrónimo");
        } else {
            console.log("Acronimo registrado con exito");
            res.send("Acronimo registrado con exito");
        }
    });
});

app.get("/getdata", (req, res)=> {

    db.query('SELECT * FROM acronimos', (err, result) => {
        if(err) {
            console.log(err);
        } else {
           res.send(result);
        }
    });
});


app.listen(3001, ()=> {
    console.log("Puerto corriendo en 3001")
})