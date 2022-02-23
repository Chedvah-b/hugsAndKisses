import { Button, Dialog, DialogTitle, List, ListItem, ListItemText, ListItemAvatar, Avatar, Container, TableContainer, Table, TableRow, TableCell, TableHead, TableBody, Paper, Grid } from "@mui/material";
import React,{useContext, useState, useEffect} from "react";
import { ItemsContext } from "../context/ItemsContext";
import { orders, ordersList } from "../service/service";
import OrderedItems from "./OrderedItems";
import moment from 'moment';


const Orders=()=>{
    const {userId,setUserId}=useContext(ItemsContext);
    const [items,setItems]=useState([]);
    const options = { year: "numeric", month: "long", day: "numeric" }

    const getOrders = async()=>{
        const result=await orders(userId);console.log("order ",result);
        
        setItems(result);
        
    }

   

    useEffect(()=>{
        getOrders();
    },[])

    


return(
    <Container sx={{mt: '128px', mb: '60px'}}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Order number</TableCell>
                <TableCell align="center">Order date</TableCell>
                <TableCell align="center">Order status</TableCell>
                <TableCell align="center">Total value</TableCell>
                <TableCell align="center">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {items.map((item) => (
                <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="center" component="th" scope="row">
                    {item.id}
                </TableCell>
                <TableCell align="center">{moment(item.orderdate).format('DD-MM-YYYY')}</TableCell>
                <TableCell align="center">{item.status}</TableCell>
                <TableCell align="center">{item.totalprice}</TableCell>
                <TableCell align="center"><OrderedItems props={item.id}/></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Container>
    )
}

export default Orders;