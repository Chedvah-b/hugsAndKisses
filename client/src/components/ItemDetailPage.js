import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ItemsContext } from "../context/ItemsContext";
import { getItem } from "../service/service";
import Paper from "@mui/material/Paper";
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ItemDetailPage=()=>{
    const {id}=useParams();
    const {selectedItem,setSelectedItem}=useContext(ItemsContext);
    //const {total,setTotal}=useContext(ItemsContext);
    const {cartItems,setCartItems} = useContext(ItemsContext);

    const addToBag=()=>{
        
        var key={id}.id;
        if(JSON.parse(localStorage.getItem(key))){
            var item = JSON.parse(localStorage.getItem(key)).amount;
            //setTotal(prev=>prev+selectedItem.price);
            localStorage.setItem(key, JSON.stringify({"id":selectedItem.id,"amount":item+1,"picture":selectedItem.picture,"name":selectedItem.name,"price":selectedItem.price,"description":selectedItem.description}));
        }
        else{//setTotal(prev=>prev+selectedItem.price);
            localStorage.setItem(key, JSON.stringify({"id":selectedItem.id,"amount":1,"picture":selectedItem.picture,"name":selectedItem.name,"price":selectedItem.price,"description":selectedItem.description}));
        }
        setCartItems([...cartItems,localStorage.getItem(key)]);
    }

    const fetchData=async()=>{
        try {
            const item=await getItem(id);             
            setSelectedItem(item);
        } catch (error) {
            console.log(error);
        }  
    }

    useEffect(()=>{
        fetchData();
    },[])
    
    

    return(
        <div style={{marginTop: '138px'}}>
            <div className="item ">
            <img className="item-image" src={selectedItem.picture} alt=""/>
            <div className="item-information">
                <h1>
                    {selectedItem.name}
                </h1>
                <h3>
                    {selectedItem.price} NIS
                </h3>
                <p>Description: 
                {selectedItem.description}
                </p>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button onClick={addToBag} type="button" className="btn btn-outline-success">Add to bag</button>
                </div>
            </div>
        </div>
<Box sx={{ml:25,p:1}}>
        <div className="d-flex flex-row justify-content-center">
            <div style={{width:"400px", height:"500px"}}>
                <img style={{width:"300px", height:"300px"}} src={selectedItem.picture} alt=""/>
            </div>
            
            <Box sx={{width:"45rem"}}>
            <Typography sx={{m:0, fontWeight: "bold"}} variant="h4">
                {selectedItem.name}
            </Typography>
                <div style={{ paddingTop:"25px" }}><span >
                    {selectedItem.price} NIS
                </span>
                </div>
                <div style={{ paddingTop:"25px" }}>
                    <Button onClick={addToBag} sx={{background:"white", color:"black", borderRadius: 0, height: 40, width:335, borderStyle: "solid", borderColor: "black", borderWidth: 1, fontFamily:""}} >Add to Cart</Button>
                </div>
                <p style={{ paddingTop:"25px" }}> 
                {selectedItem.description}
                </p>
                
            </Box>
        </div>
        </Box>
        </div>
    )
}

export default ItemDetailPage;