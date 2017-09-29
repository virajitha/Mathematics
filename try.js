const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("Welcome. Try random Stuff here.")
});

app.get('/add', function(req, res){
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var sum = a+b;
    res.json({sum:sum});    
});


const server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("App listening at http://%s:%s", host, port)
})
