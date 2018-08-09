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
    jersey.insert([
        "jersey", "order"
      ], [
        req.body.jersey, req.body.order
      ], function(result) {
        // Send back the ID of the new quote
        res.redirect('/');
      });
    });

router.put('/update', function(req, res){
   

    jersey.update(
        {sold: req.body.sold},
        {id: req.body.id}, 
        function(result){
            res.redirect('/');
        }
        

    );
});
    /*
router.delete('/delete', function(req, res){
    jersey.
        res.redirect('/');
        
    });
    */

    module.exports = router;