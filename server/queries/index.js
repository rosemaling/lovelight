const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);

connection.connect();

const lightLantern = function(userto, userfrom, callback) {
  var time = new Date();
  var queryString = 'INSERT INTO lanterns (userto, userfrom, lit) VALUES ("' + connection.escape(userto) + '", "' + connection.escape(userfrom) + '", "' + connection.escape(time) + '")'
  connection.query(queryString, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

module.exports = {lightLantern};