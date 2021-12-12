require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
const db=require('./db')

app.use(cors());
app.use(express.json());

//Get all items
app.get("/list",async(req,res)=>{
    try {
        const results = await db.query("SELECT * FROM item ORDER BY name");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
              items: results.rows,
            },
          });
        
    } catch (error) {
        console.error(error.message);
    }
    
})


//Get one item
app.get("/item/:id",async(req,res)=>{
    try {
        const results=await db.query("SELECT * FROM item WHERE id=$1",[req.params.id]);
        res.status(200).json({
            status: "succes",
            data: {
              items: results.rows,
            },
          });
    } catch (error) {
        console.error(error.message);
    }
    
})

/*app.get('item/:id',async(req,res)=>{
    console.log(req.params.id);
    try {
        const results=await pool.query('SELECT * FROM item WHERE id=$1',[req.params.id]);
        console.log(results.rows[0]);
        return results.rows[0];
        //res.json(item.rows);
    } catch (error) {
        console.error(error.message);
    }
})

app.get("/item",async(req,res)=>{
    try {
        const all=await pool.query("SELECT * FROM item");
        res.json(all.rows);
    } catch (err) {
        console.error(err.message);
    }
})
*/
const port=5000;
app.listen(port,()=>{
    console.log(`server has started on port ${port}`);
})