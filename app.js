const vocab = require('./lezoovocab')
const express = require('express')
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Routes which should handle request
app.get("/test", (req, res, next) => {
    res.json(["Orange","Apple","Watermellon"]);
});

// Routes which should handle request
app.get("/words", (req, res, next) => {
    res.json(vocab.reverse())
});

// Routes which should handle request
app.post("/words", (req, res) => {
    let day = req.body.day
    let start = day > 5 ? day - 5 : 0
    // res.sendStatus(200)
    res.json(vocab.slice(start, day).reverse())
});

//export app
module.exports = app;