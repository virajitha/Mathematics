const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', function(req, res){
    res.send("Welcome to division service.")
});

app.get('/div', function(req, res){
    try {
    	var a = parseInt(req.query.a);
    	var b = parseInt(req.query.b);
    	var div = a/b;
    	res.json({div:div});
    }
    catch(e){
    	res.send(e.message);
    }    
});

app.listen(PORT, function () {
   console.log("Division App listening at "+PORT);
}

