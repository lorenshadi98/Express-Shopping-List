const express = require('express');
const itemRoutes = require('./routes');
app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/items', itemRoutes);

module.exports = app;
