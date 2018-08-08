var app = require('express');
var jersey = require('../models/jersey.js');

var router = app.Router();

router.get('/', function(req, res){
    console.log("this worked")
    res.render('index');
    });

router.post('/create', function(req, res){
    connection.query('INSERT INTO jersey (jersey, sold) VALUES (?);', [req.body.jersey, req.body.sold], function(err, reuslt){
        if(err) throw err;
        res.redirect('/');
        })
    });

router.put('/update', function(req, res){
    connection.query('UPDATE jersey SET jersey = ? where id = ?;', [req.body.jersey, req.body.id], function(err, repsonse){
        if(err)throw err;
        res.redirect('/')
        })
    });
router.delete('/delete', function(req, res){
    connection.query("DELETE FROM jersey WHERE id = ?;", [req.body.id] ,function(err, response){
        if (err) throw err;
        res.redirect('/');
        })
    });
    module.exports = router;