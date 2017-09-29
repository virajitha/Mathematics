const express = require('express');
const app = express();
const PORT = 8081;

const ServiceHelper = require('./ServiceHelper');

app.get('/',function(req, res){
    res.send("Welcome to the REST Service");
});

app.get('/add', function(req,res){
    ServiceHelper.callService("add", req.query.n1, req.query.n2, "GET")
    .then(function(response){
        res.send(response);
    })
    .catch(function(err){
        res.send(err);
    });    
});

app.get('/div', function(req,res){
    ServiceHelper.callService("div", req.query.n1, req.query.n2, "GET")
    .then(function(response){
        res.send(response);
    })
    .catch(function(err){
        res.send(err);
    });    
});

app.get('/mul', function(req,res){
    ServiceHelper.callService("mul", req.query.n1, req.query.n2, "GET")
    .then(function(response){
        res.send(response);
    })
    .catch(function(err){
        res.send(err);
    });    
});

app.get('/sub', function(req,res){
    ServiceHelper.callService("sub", req.query.n1, req.query.n2, "GET")
    .then(function(response){
        res.send(response);
    })
    .catch(function(err){
        res.send(err);
    });    
});

app.get('/api', (req, res) => {
    res.json({
        endpoints: [
            '/add',
            '/div',
            '/mul',
            '/div'
        ]
    })
});

app.listen(PORT, function(){
    console.log('Listening to port '+PORT);
});

