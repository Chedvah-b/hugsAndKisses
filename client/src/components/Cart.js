import React,{useEffect, useContext} from "react";
import { Button, Dialog, DialogTitle, List, ListItem, ListItemText, ListItemAvatar, Avatar, Container, TableContainer, Table, TableRow, TableCell, TableHead, TableBody, Paper, Grid, Typography } from "@mui/material";
import { ItemsContext } from "../context/ItemsContext";
import {Link} from "react-router-dom";


const Cart=()=>{
    const {cartItems,setCartItems} = useContext(ItemsContext);
    const {total,setTotal}=useContext(ItemsContext);
    const {userId,setUserId}=useContext(ItemsContext);
    

useEffect(() => {
   const storeLocalStorage = [];
   for (const [key, value] of Object.entries(localStorage)) {
       storeLocalStorage.push(JSON.parse(value));
    }
    setCartItems(storeLocalStorage);
    },[])


const removeItem=(id)=>{
    if(localStorage.length>0){
        const newTotal=total-JSON.parse(localStorage.getItem(id)).price*JSON.parse(localStorage.getItem(id)).amount;
        setTotal(newTotal);
    }
    else{
        setTotal(0);
    }
    localStorage.removeItem(id);
    
    setCartItems(cartItems.filter(item=>
         item.id!==id
    ))
}


function totalAmount(){ return cartItems.reduce(
    (previousAmount, currentAmount)=>previousAmount+(currentAmount.price*currentAmount.amount), 
    0);
}

const checkIfLoggedIn=()=>{
    if(userId===0){
        return false;
    }
    return true;
}

return(
       <Container sx={{mt: '128px'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Remove</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {cartItems.map((item) => (
                        <TableRow
                        key={item.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar src={item.picture} sx={{ width: 100, height: 100 }} variant="square"/>
                                </Grid>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {item.description}
                                        </Typography>
                                    </Grid>  
                                </Grid>
                            </Grid>      
                        </TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        <TableCell align="right">{item.amount}</TableCell>
                        <TableCell align="right"><Button onClick={()=>removeItem(item.id)}>remove</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>

                <Typography variant="h4" sx={{my: '5px'}}>Total: {totalAmount()}</Typography>
            
                {checkIfLoggedIn() ?
                    <Link to="/check-out" style={{textDecoration: 'none'}}><Button variant="outlined">go to check out</Button></Link> 
                    :
                    <Link to="/login" style={{textDecoration: 'none'}}><Button variant="outlined">go to check out</Button></Link>}
                 
       </Container>
    )
}

export default Cart;