const {Pool}=require("pg");


const pool=new Pool({
    user:"postgres",
    password:"EliChedva",
    host:"localhost",
    port:5432,
    database:"hugsandkisses"
});

module.exports={
    query:(text,params)=>pool.query(text,params),
};