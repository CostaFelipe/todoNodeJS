'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//carrega middlewares logger
const logger = require('./middlewares/middleware.logger');

//carrega as rotas
const indexRouter = require('./routes/index.router');
const todoRouter = require('./routes/todo.router');

app.use(logger.loggerMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use('/', indexRouter);
app.use('/todo', todoRouter);

module.exports = app;