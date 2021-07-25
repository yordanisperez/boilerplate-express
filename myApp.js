

var express = require('express');
var app = express();

app.use('/public',express.static(__dirname+"/public"));

app.get('/json',(req,res)=>{
    var stileMsg = process.env.MESSAGE_STYLE || undefined;
    let response='';
    if (!stileMsg)
        response="Hello json";
    else
        response="Hello json".toUpperCase();
    console.log(response);
    res.send({"message":response});
 
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

console.log("Hello World");


































 module.exports = app;
