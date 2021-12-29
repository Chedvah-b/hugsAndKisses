const db = require('../db');
const Query = {};

Query.getAllItems = () => {
    return db.query(`SELECT * FROM item ORDER BY name`);
}

Query.getOneItem = (id) => {
    return db.query(`SELECT * FROM item WHERE id=$1`,[id]);
}

module.exports = Query;