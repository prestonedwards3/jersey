var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mysql = require('mysql');



var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))



app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var port = 3103;
app.listen(port);

var routes = require("./controllers/jersey_controller.js");


app.use(function (req, res, next) {});

app.use(express.static("public"));

app.get('/', function(req, res){
    console.log("this worked")
    res.render('index');
    });