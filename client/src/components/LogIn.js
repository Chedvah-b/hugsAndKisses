import React,{ useContext, useState} from "react";
import { checkLogIn } from "../service/service";
import { ItemsContext } from "../context/ItemsContext";
import {Link, useHistory} from "react-router-dom";
import { Box, Button, Container, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const LogIn=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {userId,setUserId}=useContext(ItemsContext);
    const {userName,setUSerName}=useContext(ItemsContext);

    const history = useHistory();

    const checkDetails = async() =>{
        if(email!==""&&password!==""){
            const result=await checkLogIn(email,password);
            if(result.status==="succes"){
                setUserId(result.data.id);
                setUSerName(result.data.firstName);
                history.goBack();
            }
            else{
                window.alert("Invalid login or password. Remember that password is case-sensitive. Please try again.")
            }
        }
        else{
            window.alert("Please insert email and password")
        }
        
    }

    return(
    //<div style={{position: 'absolute', top: '0', backgroundColor: 'white', padding:'20px 30%', width: '100%'}} className="">
    <Container sx={{width: '50%'}}>
        <IconButton sx={{position: 'relative', right:'0px', ml: '100%'}} onClick={()=>{history.goBack()}}><CloseIcon /></IconButton>
            
        <Typography variant="h3">Log In</Typography>
        <Typography variant="h5">New to this site? <Link to="/signup">Sign Up</Link></Typography>

        <Box component= "form" sx={{m: '10px'}}>
            <TextField variant="standard" label="Email Address" fullWidth onChange={(e)=>{setEmail(e.target.value)}}/>
            <TextField variant="standard" label="Password" type="password" fullWidth onChange={(e)=>{setPassword(e.target.value)}}/>
            <Button onClick={()=>checkDetails()}>Log in</Button>
        </Box>
        {/*<Button variant="light" onClick={handleShow}>Sign in</Button>

        <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Returning customer</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button onClick={()=>checkDetails()} variant="dark">Sign in</Button>
                </Form>
                <br/>
                <h5>New customer</h5>
                
                <SignUp handleClose={handleClose}/>
            </Offcanvas.Body>
    </Offcanvas>*/}
    {/*</div>*/}
    </Container>
    )
}

export default LogIn;