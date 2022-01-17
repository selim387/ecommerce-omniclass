"use strict"
const { USER, HOST, DATABASE, PASSWORD, PORT  } = require('../config');
const { Pool } = require("pg");

const pool = new Pool({

  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: PORT

});

const DB = {
    query: function(query, callback) {
        pool.connect((err, client, done) => {
            if(err) return callback(err)
            client.query(query, (err, results) => {
                done()
                if(err) { console.error("ERROR: ", err) }
                if(err) { return callback(err) }
                callback(null, results.rows)
            })
        });
    }
}

module.exports = {
    DB: DB
};