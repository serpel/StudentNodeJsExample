var express = require('express');
var sql = require('mssql');
var app = express();

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