const port = 3000;

var express = require('express');
var app = express();

app.use(express.static('src'));

app.get('/', (res, req) =>{
    req.sendFile('');
});

app.listen(port, () =>{
    console.log(`Server starting on port: ${port}`);
});