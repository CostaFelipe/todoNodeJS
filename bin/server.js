"use strict";

const app = require('../src/app');
const http = require('http');

const middlewares = require('./middlewares/middlewares.server');

const port = process.env.PORT || '3000';
app.use(middlewares.normalizePort);
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

app.on('error', middlewares.onError);
app.on('listening', middlewares.onListening);