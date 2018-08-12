var connection = require('./connection.js');

var orm = {
selectAll: function(cb){
    var queryString = "SELECT * FROM jersey;";
    connection.query(queryString, function (err, results){
    if (err) throw err;
    cb(results)
    console.log(queryString);
    })
},
select: function(col, val, cb) {
    var queryString = "SELECT * FROM jersey WHERE ?? = ?;";
    connection.query(queryString, [col, val], function(err, result){
    if (err) throw err;
    cb(result)
    console.log(queryString);
    });
},
insertOne: function(val, cb){
    var queryString = "INSERT INTO jersey (jersey) VALUES (?);";
    connection.query(queryString, val, function(err, result){
        if(err) throw err;
        cb(result) 
        console.log(queryString);
    });
},
updateOne: function(val2, cb){
    var queryString = "UPDATE jersey SET ordered = 1 WHERE id = ?;";
    connection.query(queryString, [val2], function(err, result){
        if (err) throw err;
        cb(result); 
        //console.log(queryString);
    })
},
deleteOne: function(val, cb){
    var queryString = "DELETE FROM jersey WHERE id = ?;";
    connection.query(queryString, val, function(err, result){
        if (err) throw err;
        cb(result);
        console.log(queryString);
    })
}
};





module.exports = orm;