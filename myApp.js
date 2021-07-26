

var express = require('express');
var app = express();

app.use('/public',express.static(__dirname+"/public"));
/*
app.use((req,resp,next)=>{
  console.log(req.method+' '+req.path+ '-'+' '+req.ip);
  next();

})
*/
app.get("/:word/echo", (req, res) => {
    const { word } = req.params;
    res.json({
      echo: word
    });
  });


/*
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
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

//console.log("Hello World");


































 module.exports = app;
