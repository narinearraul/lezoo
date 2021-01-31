const vocab = require('./lezoovocab')
const express = require('express')
const app = express();

// Routes which should handle request
app.get("/test", (req, res, next) => {
    res.json(["Orange","Apple","Watermellon"]);
});

// Routes which should handle request
app.get("/words", (req, res, next) => {
    res.json(vocab.slice(0,2).reverse())
});


//export app
module.exports = app;