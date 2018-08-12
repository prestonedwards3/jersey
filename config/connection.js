var mysql = require('mysql');
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: 'root',
        password:'root',
        database: 'jersey_db'
    });
}

connection.connect(function(err){
    if(err) throw err;
    console.log('Connected as id: ' + connection.threadId);
})

module.exports = connection;