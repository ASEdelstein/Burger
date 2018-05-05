// Create an `orm.js`

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

var connection = require('./connection.js');

var selectAll = function(req, res, callback){
    connection.query("SELECT * FROM burgers;", callback);
    return result;
};


module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
};