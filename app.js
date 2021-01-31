//import express
const express = require('express');

const app = express();

// Routes which should handle request
app.get("/test", (req, res, next) => {
    res.json(["Orange","Apple","Watermellon"]);
});

//export app
module.exports = app;