'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//carrega as rotas
const indexRouter = require('./routes/index.router');
const todoRouter = require('./routes/todo.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use('/', indexRouter);
app.use('/todo', todoRouter);

module.exports = app;