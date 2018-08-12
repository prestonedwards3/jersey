var app = require('express');
var jersey = require('../models/jersey.js');

var router = app.Router();


router.get('/', function(req, res){
    jersey.selectAll(function(data) {
        var hbsObject = {
          jersey: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
    });

router.post('/create', function(req, res){
    jersey.insert(
        req.body.myjersey
      , function(result) {
        // Send back the ID of the new quote
        res.redirect('/');
      });


    });

router.post('/update', function(req, res){
       jersey.update(
        req.body.ordered, 
        function(result){
            console.log(result);
            res.redirect('/');
        }
        

    );
});

    router.post('/delete', function(req, res){
        jersey.delete(req.body.id, function(result){
           
            console.log(result);
            res.redirect('/');
            
        })
   
        
    });
    

    module.exports = router;