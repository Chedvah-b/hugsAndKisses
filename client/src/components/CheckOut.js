import React, { useContext,useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { checkout, orderItem } from "../service/service";
import { Box, TextField, Typography, Button, Container } from "@mui/material";

const CheckOut=()=>{

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [cardNumber,setCardNumber]=useState("");
    const {total,setTotal}=useContext(ItemsContext);
    const {userId,setUserId}=useContext(ItemsContext);
   
    const submit = async() =>{
        const orderId=await checkout(userId, 'new', Number(total));
        for (const [key, value] of Object.entries(localStorage)) {
            await orderItem(orderId, JSON.parse(value).id, JSON.parse(value).amount);
        }
        localStorage.clear();
        setTotal(0);
    }
    
    return(
        <Container>
            <Box component= "form" sx={{m: '10px'}}>
                <Typography variant="h5">Billing Address</Typography>
                <TextField variant="standard" label="First Name" type="text" fullWidth required onChange={(e)=>{setFirstName(e.target.value)}}/>
                <TextField variant="standard" label="Last Name" type="text" fullWidth required onChange={(e)=>{setLastName(e.target.value)}}/>
                <TextField variant="standard" label="Phone" type="tel" fullWidth required onChange={(e)=>{setPhone(e.target.value)}}/>
                <TextField variant="standard" label="Email" type="email" fullWidth required onChange={(e)=>{setEmail(e.target.value)}}/>
                <TextField variant="standard" label="Address" type="text" fullWidth required onChange={(e)=>{setAddress(e.target.value)}}/>

                <Typography variant="h5">Payment</Typography>
                <TextField variant="standard" label="Card Number" type="text" fullWidth required onChange={(e)=>{setCardNumber(e.target.value)}}/>
            
                <Button onClick={()=>submit()} variant="primary" type="submit">Submit</Button>

            </Box>
        </Container>
    )
}

export default CheckOut;