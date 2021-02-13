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
    // day = 10
    // 10>5 yes start = 10-5 = 5
    let start = day > 5 ? day - 5 : 0
    // res.sendStatus(200)
    console.log("NO REV: ", vocab.slice(start, day))
    console.log("WITH REV: ", vocab.slice(start, day).reverse())
    let slice = vocab.slice(start, day)
    res.json(slice.reverse())
});

//export app
module.exports = app;