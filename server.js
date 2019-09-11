const express = require('express'); 
const logger = require('morgan'); 
const server = express(); 

server.use(express.json());


server.get('/test', (req, res) =>{
    const address = req.connection.remoteAddress;
    console.log(address);
    return res.status(200); 
})

module.exports = server; 