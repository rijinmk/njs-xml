const express = require("express");
const xmlParser = require("xml2js").parseString;
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res){
    fs.readFile('./db.xml', 'utf-8', (err, data) => {
        // let json =  xmlParser.json(data);
        xmlParser(data, function(error, result){
            // res.json(result);
            res.render("index", {result});
        });
    });
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, function(){
    console.log(`Listening at PORT ${PORT}`);
});