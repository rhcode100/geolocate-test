const express = require('express'); 
const logger = require('morgan'); 
const server = express(); 

server.use(express.json());


server.get('/test', (req, res) =>{
    const address = req.connection.remoteAddress;
    //console.log(address);
    return res.status(200).json({message: `The origin IP is ${address}`})
})

module.exports = server; 