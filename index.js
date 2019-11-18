require('dotenv').config();

const server = require('express');

server.use(express.json());

const port = 9000;

server.length('/', (req, res) => {
    res.status(201).send("Hello")
})

server.listen(port, ()=>console.log("The server is alive!"));