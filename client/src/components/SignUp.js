import React,{useState} from "react";

import { addNewCustomer } from "../service/service";
import {Link, useHistory} from "react-router-dom";
import { TextField, Button, Box, IconButton, Typography, Container } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const SignUp=()=>{
    
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [currectEmail,setCurrectEmail]=useState(false);
    const [emailColour, setEmailColour]=useState(false);
    const [emailHelpText, setEmailHelpText]=useState("")

    const [currectPassword,setCurrectPassword]=useState(false);
    const [passwordColour, setPasswordColour]=useState(false);
    const [passwordHelpText, setPasswordHelpText]=useState("");
    const history=useHistory();
    const submit=async()=>{
        if(currectEmail&&currectEmail){
            await addNewCustomer(firstName,lastName,phone,email,password);
        }
        else{
            if(!currectEmail){
                window.alert("wrong email");
            }
            if(!currectPassword){
                window.alert("wrong password");
            }
        }
    }

    const handleChangeEmail = (e) =>{
        if(e.target.value===email){
            setCurrectEmail(true);
            setEmailColour(false);
            setEmailHelpText("")
        }
            else{
                setEmailColour(true);
                setEmailHelpText("wrong email");
            }
    }

    const handleChangePassword = (e) =>{
        if(e.target.value===email){
            setCurrectPassword(true);
            setPasswordColour(false);
            setPasswordHelpText("")
        }
        else{
            setPasswordColour(true);
            setPasswordHelpText("wrong password");
        }
    }

    return(
    <Container sx={{width: '50%'}}>
        <IconButton sx={{position: 'relative', right:'0px', ml: '100%'}} onClick={()=>{history.goBack()}}><CloseIcon /></IconButton>
        <Typography variant="h3">Sign Up</Typography>
        <Typography variant="h5">Already a member? <Link to="/login">log in</Link></Typography>
        
        <Box component= "form" sx={{m: '10px'}}>
            <TextField variant="standard" label="First Name" type="text" fullWidth required onChange={(e)=>{setFirstName(e.target.value)}}/>
            <TextField variant="standard" label="Last Name" type="text" fullWidth required onChange={(e)=>{setLastName(e.target.value)}}/>
            <TextField variant="standard" label="Phone" type="tel" fullWidth required onChange={(e)=>{setPhone(e.target.value)}}/>
            <TextField variant="standard" label="Email" type="email" fullWidth required onChange={(e)=>{setEmail(e.target.value)}}/>
            <TextField variant="standard" label="Confirm Email" type="email" error={emailColour} helperText={emailHelpText} fullWidth required onChange={(e)=>{handleChangeEmail(e)}}/>
                
            <TextField variant="standard" label="Password" type="password" fullWidth required onChange={(e)=>{setPassword(e.target.value)}}/>
            <TextField variant="standard" label="Confirm Password" type="password" error={passwordColour} helperText={passwordHelpText} fullWidth required onChange={(e)=>{handleChangePassword(e)}}/>
            
            <Button onClick={()=>submit()} variant="primary" type="submit">
                Submit
            </Button>   
        </Box>

    </Container>
    )
}

export default SignUp;