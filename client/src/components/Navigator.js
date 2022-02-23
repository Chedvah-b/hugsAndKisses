import React, { useContext } from "react";
import {Link} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ItemsContext } from "../context/ItemsContext";
import { AppBar, Toolbar, Typography, Badge } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { purple, red } from '@mui/material/colors';


import white from '@mui/material/colors/blue';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Box from '@mui/material/Box';

const Navigator=()=>{

  
const mycolor = red[500];

  const theme = createTheme({
    palette: {
      navbar: white,
    },
  });

    const {userName,setUSerName}=useContext(ItemsContext);

    const menu=['Home1','My Orders1'];
    

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
                <Link to='/login'style={{width: '83px', textDecoration: 'none'}}>
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