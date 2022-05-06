const sqlite = require('better-sqlite3');
const path = require('path');
const db = new sqlite(path.resolve('db/tutorial.db'), {fileMustExist: true});


function query(sql, params) {
    return db.prepare(sql).all(params);
  }

function insert(sql,params){
    return db.prepare(sql).run(params);
}

  
  
  module.exports = {
    query,
    insert
  }