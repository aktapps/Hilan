const sqlite3 = require('sqlite3').verbose();

let hilanDb = new sqlite3.Database('./db/hilan.db');
const createUser = (UserId, FirstName, LastName, Email, callback ) => {
    let query = 'INSERT INTO Users (UserId, FirstName, LastName, Email) VALUES (?,?,?,?)';
    hilanDb.run(query,[UserId, FirstName, LastName, Email], function(err) {
        callback(err, {id: this.lastID});
    })
}

const getUsers =(callback) => {
    let query = 'SELECT * FROM Users';
    hilanDb.all(query,[], callback)
}


module.exports = {createUser, getUsers}