const express = require('express'); 
const logger = require('morgan'); 
const server = express(); 

server.use(express.json());


server.get('/test', (req, res) =>{
    const address = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress || 
         req.connection.socket.remoteAddress

         res.status(200).json(address); 
})

module.exports = server; 