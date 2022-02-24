import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ItemsContext } from "../context/ItemsContext";
import { getItem } from "../service/service";
import { Grid, Typography, Container, FormControl, InputLabel, Select, MenuItem, Menu, Input } from '@mui/material';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

const ItemDetailPage=()=>{
    const {id}=useParams();
    const {selectedItem,setSelectedItem}=useContext(ItemsContext);
    const {total,setTotal}=useContext(ItemsContext);
    const {cartItems,setCartItems} = useContext(ItemsContext);
    const [amount,setAmount] = useState(1);

    const addToBag=()=>{
        
        var key={id}.id;
        if(JSON.parse(localStorage.getItem(key))){
            var item = JSON.parse(localStorage.getItem(key)).amount;
            setTotal(prev=>prev+(selectedItem.price*amount));
            localStorage.setItem(key, JSON.stringify({"id":selectedItem.id,"amount":item+amount,"picture":selectedItem.picture,"name":selectedItem.name,"price":selectedItem.price,"description":selectedItem.description}));
        }
        else{
            setTotal(prev=>prev+(selectedItem.price*amount));
            localStorage.setItem(key, JSON.stringify({"id":selectedItem.id,"amount":amount,"picture":selectedItem.picture,"name":selectedItem.name,"price":selectedItem.price,"description":selectedItem.description}));
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
     
        <Container sx={{mb: '44px'}}>
            <Grid container sx={{display: 'flex',justifyContent: 'center',flexDirection: 'row'}}>
                <Grid item xs={6} sx={{display: 'flex',flexDirection:'row', justifyContent: 'flex-end',pr:'10px'}}>
                    <img src={selectedItem.picture} style={{width: '400px'}}/>
                </Grid>
                <Grid container xs={6} sx={{flexDirection: 'column', pl:'10px', justifyContent: 'flex-start'}}>
                    <Grid item>
                        <Typography sx={{pb: '5px'}} variant="h5">{selectedItem.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{pb: '5px'}} variant="h6">{selectedItem.price}</Typography>
                    </Grid>    
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Input type='number' defaultValue={1} onChange={(e)=>{setAmount(Number(e.target.value))}}/>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="outlined" onClick={()=>addToBag()}>Add To Cart</Button>
                            </Grid>

                        </Grid>
                        <Typography sx={{pt: '5px', width: '400px'}}>Product info
                            <br />
                            {selectedItem.description}
                        </Typography>
                    
                </Grid>

            </Grid>
        </Container>

        
        </div>
    )
}

export default ItemDetailPage;