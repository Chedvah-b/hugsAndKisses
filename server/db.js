/*// PROMISE LIBRARY
const promise = require('bluebird');

// OVERRIDING DEFAULT PROMISE LIBRARY
const options = { 
    promiseLib: promise,
    query: (e) => {
        console.log(e.query);
    }
 };


// SET UP THE CONNECTION STRING FOR THE DATABASE
const connectionString = process.env.DATABASE_URL;
const db = pgp(connectionString);

module.exports = db;*/

const {Pool}=require("pg");


const pool=new Pool();

module.exports={
    query:(text,params)=>pool.query(text,params),
};