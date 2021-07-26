

var express = require('express');
var app = express();

app.use('/public',express.static(__dirname+"/public"));
/*
app.use((req,resp,next)=>{
  console.log(req.method+' '+req.path+ '-'+' '+req.ip);
  next();

})

app.get("/:word/echo", (req, res) => {
    const { word } = req.params;
    res.json({
      echo: word
    });
  });



app.get('/json',(req,res)=>{
    var stileMsg = process.env.MESSAGE_STYLE || undefined;
    let response='';
    if (!stileMsg)
        response="Hello json";
    else
        response="Hello json".toUpperCase();
    console.log(response);
    res.json({"message":response});
 
})*/

app.route('/name')
    .get((req,resp)=>{
    resp.json({'name':req.query.first+' '+req.query.last})
})
.post((req,resp)=>{
    const {first , last}=req.body
    resp.json({'name':first+' '+last});
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

//console.log("Hello World");


































 module.exports = app;
