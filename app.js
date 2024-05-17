const express = require('express');
const app = express();
const productsRouter = require('./routes/products');

app.use(express.json());

app.use(productsRouter);

module.exports = app;
