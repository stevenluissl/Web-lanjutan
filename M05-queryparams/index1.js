const bodyParser = require("body-parser");
var express = require("express")
var app = express();

app.get('/luaspersegi/:panjang/:lebar',function(req,res){
    let panjang = parseInt(req.params.panjang)
    let lebar = parseInt(req.params.lebar)
    let luas = (panjang*lebar)
    req.send("Luas persegi panjang = " + luas)
});
app.listen(4000,function(){
    console.log("server run")
});