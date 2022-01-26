import React, { useContext, useState } from "react";
import {Link} from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ItemsContext } from "../context/ItemsContext";
import { AppBar, Container, CssBaseline, Toolbar, Typography, Badge } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { purple, red } from '@mui/material/colors';

import white from '@mui/material/colors/blue';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
const pages=['home','orders'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Navigator=()=>{

  const theme = createTheme({
    palette: {
      navbar: white,
    },
  });

    const {userName,setUSerName}=useContext(ItemsContext);

    const menu=['Home','My Orders'];
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    return (
       <div style={{zIndex: '1'}}>
             {/*<nav key="1" className="navbar sticky-top bg-white navbar-light">
            <div key="2" className="container-fluid">
                <div>
                    <Link className="navbar-brand" to="/">
                        <img src="https://i.ibb.co/jWRB1gJ/logo.png" alt="logo" border="0"/>
                    </Link>
                    <Link className="navbar-brand" to="/">Home</Link>
                </div>
                <Link to="/login"><button ><AccountCircleIcon />Log In</button></Link>
                {/*<SignUp />
                <LogIn />}
                <div key="3" className="d-flex justify-content-evenly align-items-center">
                    <Link className="navbar-brand ms-2" to="/cart">
                        <img width="30px" src="https://i.ibb.co/gj6GX58/shopping-bag.png" alt="shopping-bag" border="0" />
                    </Link>
                </div>                
                
            </div>
        </nav>
        <br />*/}

        {/*<nav >
            <div className="d-flex flex-row justify-content-between">
                <div>
                    <Link  to="/">
                        <img src="https://i.ibb.co/jWRB1gJ/logo.png" alt="logo" border="0"/>
                    </Link>
                </div>
                <div className="mx-90 my-40">
                    <Link style={{fontFamily:"Anton",
                                    margin: "100px 50px"}} to="/">Home</Link>
                    <Link to="/my-orders">my orders</Link>
                </div>
                
                <div >
                <Link className="p-6" to="/login"><button ><AccountCircleIcon />{userName}</button></Link>
                
                    <Link  to="/cart">
                        <img width="30px" src="https://i.ibb.co/gj6GX58/shopping-bag.png" alt="shopping-bag" border="0" />
                    </Link>
                </div>                
                
            </div>
        </nav>*/}

        

<ThemeProvider theme={theme}>
        <AppBar position="fixed" color="navbar" style={{height: '128px'}}>
            <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <img src="https://i.ibb.co/vjDs5M9/stickers-09.png" alt="stickers-09" style={{height:'128px'}} border="0"/>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Link to='/'>
                    <Typography sx={{p: '0 15px'}} color='black' varient='h5'>Home</Typography>
                </Link>
                <Link to='/my-orders'>
                    <Typography color='black' varient='h5'>My Orders</Typography>
                </Link>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Link to='/login'style={{width: '83px'}}>
                    <Typography sx={{p: '0 7px'}} color='black' varient='h5' ><AccountCircleIcon />{userName}</Typography>
                </Link>
                <Link to='/cart'>
                    <Badge badgeContent={localStorage.length} color="error">
                        <Typography color='black' varient='h5'><ShoppingBagIcon /></Typography>
                    </Badge>
                </Link>
            </Box>
            
            {menu.map((item)=>{
                <Menu open='true'>
                <MenuItem>
                    <Link to='/login'>
                        <Typography color='black' varient='h5'><AccountCircleIcon />{item}</Typography>
                    </Link>
                </MenuItem>
            </Menu>
            })}
            
            
            </Toolbar>
        </AppBar>
        </ThemeProvider>





      {/*  <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>*/}
        </div>
    );    
}

export default Navigator;