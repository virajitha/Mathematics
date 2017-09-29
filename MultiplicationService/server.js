const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', function(req, res){
    res.send("Welcome to multiplication service.")
});

app.get('/mul', function(req, res){
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var mul = a*b;
    res.json({mul:mul});    
});

app.listen(PORT, function () {
   console.log("Multiplication App listening at "+PORT);
}

