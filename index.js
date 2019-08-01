var express = require('express');
var sql = require('mssql');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());

var server = app.listen(8081, function () {
    console.log("hola mundo estoy vivo!!!!");
});

app.get('/api/v1/students', function(req, res){
    console.log('Hola mundo verbo GEt');

    var result = {
        message: "Hey Student!"
    };

    res.send(result); 
});

app.post('/api/v1/student', function(req, res, next){
    console.log("Entro en post");
    var name = req.body.name || "";
    res.send(`El parametro mandado en el body es: ${name}`);
});