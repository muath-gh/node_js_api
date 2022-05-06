const db = require('./db');

function allUsers(){
    const data = db.query("select * from users",[]);
    return data;
}

function createUser(user){
    db.insert('insert into users (name,email,password) values(?,?,?)',[user.name,user.email,user.password]);
    return lastRow();
}

function lastRow(){
    const data = db.query("select * from users order by id desc limit 1",[]);
    return data;
}

module.exports = {
    allUsers,
    createUser
}