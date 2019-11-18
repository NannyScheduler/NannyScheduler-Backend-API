require('dotenv').config();

const express = require('express');
const server = express();

const port = 9000;

server.get('/', (req, res) => {
    res.status(201).send('<img src="https://media.giphy.com/media/UqUJhrD0om73q/giphy.gif"/>')
});

server.get('/nannies', (req, res) => {
    
})

server.listen(port, ()=>console.log("The server is alive!"));