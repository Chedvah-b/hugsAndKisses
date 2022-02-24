import React, { useContext } from "react";
import {Link} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ItemsContext } from "../context/ItemsContext";
import { AppBar, Toolbar, Typography, Badge, Box } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


import white from '@mui/material/colors/blue';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Navigator=()=>{


  const theme = createTheme({
    palette: {
      navbar: white,
    },
  });

    const {userName,setUSerName}=useContext(ItemsContext);

    

      const numberOfItems = () =>{
        let sumOfItems=0;
        for (const [key, value] of Object.entries(localStorage)) {
            sumOfItems+= JSON.parse(value).amount;
          }
        return sumOfItems;
      }

    return (
       <div>
             

        

<ThemeProvider theme={theme}>
        <AppBar position="fixed" color="navbar" style={{height: '128px', boxShadow: 'none'}}>
            <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <img src="https://i.ibb.co/vjDs5M9/stickers-09.png" alt="stickers-09" style={{height:'128px'}} border="0"/>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <Typography sx={{p: '0 15px'}} color='black' varient='h5'>Home</Typography>
                </Link>
                <Link to='/my-orders' style={{textDecoration: 'none'}}>
                    <Typography color='black' varient='h5'>My Orders</Typography>
                </Link>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Link to='/login'style={{width: '113px', textDecoration: 'none'}}>
                    <Typography sx={{p: '0 7px'}} color='black' varient='h5' ><AccountCircleIcon />{userName}</Typography>
                </Link>
                <Link to='/cart'>
                    <Badge badgeContent={numberOfItems()} color="error">
                        <Typography color='black' varient='h5'><ShoppingBagIcon /></Typography>
                    </Badge>
                </Link>
            </Box>
             
            </Toolbar>
        </AppBar>
        </ThemeProvider>
        </div>
    );    
}

export default Navigator;