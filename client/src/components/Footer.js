import { Grid, Typography } from "@mui/material";
import React, { useContext,useState } from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer=()=>{
    
    
    return(
        <footer style={{ position: 'absolute',
            bottom: 0,
            width: '100%'}}>
            <Grid container spacing={3} sx={{color: 'primary', backgroundColor: 'pink', padding: '10px'}}>
                <Grid item xs={6}>
                    <Typography sx={{textAlign: 'right'}}>
                        <PhoneIcon/>0587697116
                    </Typography>
                    
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        <EmailIcon/>hugsandkissesisrael@gmail.com
                    </Typography>
                    
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;