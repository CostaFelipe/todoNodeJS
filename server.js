'use strict'

const express = require('express');
const http = require('http');
const debug = require('debug')('nodestr:server');

const app = express();
const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

const server = http.createServer(app);
const router = express.Router(); 

var route = router.get('/', (req,res,next) => {
        res.status(200).send({
            title:'Node TODO api',
            version:'0.0.2'
        });
});

app.use('/', route);

function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }

    return false;
}

server.listen(port, () => console.log('API rodando na porta:' + port) );
