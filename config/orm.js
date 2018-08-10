var connection = require('./connection.js');

var orm = {
selectAll: function(cb){
    var queryString = "SELECT * FROM jersey;";
    connection.query(queryString, function (err, results){
    if (err) throw err;
    cb(results)
    })
},
select: function(col, val, cb) {
    var queryString = "SELECT * FROM jersey WHERE ?? = ?;";
    connection.query(queryString, [col, val], function(err, res){
    if (err) throw err;
    cb(results)
    });
},
insertOne: function(col, val, cb){
    var queryString = "INSERT INTO jersey SET ?;";
    connection.query(queryString, [col, val], function(err, res){
        if(err) throw err;
        cb(res) 
    });
},
updateOne: function(col, val){
    var queryString = "UPDATE jersey SET ?? WHERE ?;";
    connection.query(queryString, [col, val], function(err, res){
        if (err) throw err;
        cb(results); 
    })
},
deleteOne: function(val, cb){
    var queryString = "DELETE FROM jersey WHERE id = ?;";
    connection.query(queryString, val, function(err, res){
        if (err) throw err;
        cb(results);
    })
}
};





module.exports = orm;