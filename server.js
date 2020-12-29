const { get_dog } = require('./module_postgres.js');
const { initalize_sockets } = require('./module_sockets');

const port = 3000;

var express = require('express');
var app = express();
var http = require('http').createServer(app);

app.use(express.static('src'));

initalize_sockets(http);

app.get('/', (res, req) =>{
    req.sendFile('index.html');
});

http.listen(port, () =>{
    // get_dog('').then(dog => console.log(dog));
    console.log(`Server starting on port: ${port}`);
});