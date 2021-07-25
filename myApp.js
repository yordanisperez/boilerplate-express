require('dotenv').config();

var express = require('express');
var app = express();

app.use('/public',express.static(__dirname+"/public"));

app.get('/json',(req,res)=>{
    var stileMsg = process.env.MESSAGE_STYLE || '';
    if (stileMsg==='uppercase')
        res.send({"message": "HELLO JSON"});
    else
        res.send({"message": "Hello json"});
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

console.log("Hello World");


































 module.exports = app;
