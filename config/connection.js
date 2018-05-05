var mysql = require('mysql');
var connection;

if (process.env.Port || 8080) {
	connection = mysql.createConnection(process.env.PORT || 8080);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#CodingRocks',
    database: 'burgers_db'
  });
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;