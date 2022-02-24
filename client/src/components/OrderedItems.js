import { Button, Dialog, DialogTitle, Avatar, Container, TableContainer, Table, TableRow, TableCell, TableHead, TableBody, Paper, Grid } from "@mui/material";
import React, {useState, useEffect} from "react";
import { ordersList } from "../service/service";
import {Link} from "react-router-dom";

const OrderedItems = (props)=>{
    const [list,setList]=useState([]);
    const [open,setOpen]=useState(false);

    const openD=()=>{
        setOpen(true);
    }

    const handleClose = () => {
      setOpen(false);
    };

    const viewItems = async(orderId)=>{
       const item=await ordersList(orderId);
      setList(item)
    }

    useEffect(()=>{
        viewItems(Number(props.props));
    },[])

    return(
        <Container>
            <Button onClick={()=>openD()}>view items</Button>
            <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth='true'>
                <DialogTitle>Order Details</DialogTitle>

                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>{list.length} items</TableCell>
                        <TableCell align="left">Quantity</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {list.map((item) => (
                        <TableRow
                          key={item.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            <Link to={`/item/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
                              <Grid container spacing={2} sx={{alignItems: 'center'}}>
                                <Grid item sx={1}><Avatar src={item.picture}/></Grid>
                                <Grid item >{item.name}</Grid>
                              </Grid>
                            </Link>
                          </TableCell>
                          <TableCell align="left">{item.amount}</TableCell>
                          
                          
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </Dialog>
        </Container>
    )
}
export default OrderedItems;