const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', function(req, res){
    res.send("Welcome to subtraction service.")
});

app.get('/sub', function(req, res){
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var sub = a-b;
    res.json({sub:sub});    
});

app.listen(PORT, function () {
   console.log("Subtraction App listening at "+PORT);
}

