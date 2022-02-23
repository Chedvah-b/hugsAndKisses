const db = require('../db');
const Query = {};
const itemsPerPage = process.env.ITEMSPERPAGE;

Query.getAllItems = (page) => {
    return db.query(`SELECT * FROM item ORDER BY name limit $2 offset ($1-1)*$2`,[page, itemsPerPage]);
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

Query.checkout = (userId, status, totalPrice) => {
    return db.query(`INSERT INTO orders(userId, status, totalprice)
    VALUES($1, $2, $3) RETURNING id`,[userId, status, totalPrice]);
}

Query.orderItem = (orderId, itemId, amount) => {
    return db.query(`INSERT INTO orders_items(orderId, itemId, amount)
    VALUES($1, $2, $3)`,[orderId, itemId, amount]);
}

Query.getOrders = (userId) => {
    return db.query(`select DISTINCT id,status,orderdate,totalprice from orders natural join orders_items where orders.id=orders_items.orderId and orders.userId=$1`,[userId]);
    //return db.query(`select DISTINCT * from orders natural join orders_items where orders.id=orders_items.orderId and orders.userId=$1`,[userId]);
    /*return db.query(`select * from item natural join orders natural join orders_items where item.id=orders_items.itemId and orders.id=orders_items.orderId and id in
    (select itemId from orders where userId=$1)`,[userId]);*/
}

Query.getOrdersList = (orderId) => {/*Select * from orders,orders_items,item where
    orders.id=orders_items.orderid and item.id=orders_items.itemid;*/
    return db.query(/*`select name from item natural join orders natural join orders_items where item.id=orders_items.itemId and orders.id=orders_items.orderId and id in
    (select itemId from orders where userId=$1)`*/`Select * from orders_items,item where
    orders_items.orderid=$1 and item.id=orders_items.itemid`,[orderId]);
}

module.exports = Query;