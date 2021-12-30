const db = require('../db');
const Query = {};

Query.getAllItems = () => {
    return db.query(`SELECT * FROM item ORDER BY name`);
}

Query.getOneItem = (id) => {
    return db.query(`SELECT * FROM item WHERE id=$1`,[id]);
}

Query.signUp = (firstName, lastName, phoneNumber, email, password) => {
    return db.query(`INSERT INTO users(firstName, lastName, phoneNumber, email, password)
    VALUES($1, $2, $3, $4, $5)`,[firstName, lastName, phoneNumber, email, password])
}

Query.logIn = (email,password) => {
    return db.query(`SELECT * FROM users WHERE email=$1 AND password=$2`,[email,password]);
}

module.exports = Query;