const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', function(req, res){
    res.send("Welcome to addition service.")
});

app.get('/add', function(req, res){
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var sum = a+b;
    res.json({sum:sum});    
});

app.listen(PORT, function () {
   console.log("Addition App listening at "+PORT);
}

