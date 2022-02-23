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

        {/*<Button onClick={handleShow} variant="outline-secondary">Create account</Button>

        <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Returning customer</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onBlur={(e)=>{setFirstName(e.target.value)}} required type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control onBlur={(e)=>{setLastName(e.target.value)}} required type="text" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Row className="g-3">
                        <Col md>
                        <Form.Select onBlur={(e)=>{setDateOfBirthDay(e.target.value)}} aria-label="Default select example">
                            {day.map(d=>(
                                <option key={d} value={d}>{d}</option>
                            ))}
                            <option>Day</option>
                            </Form.Select>
                        </Col>
                        <Col md>
                        <Form.Select onBlur={(e)=>{setDateOfBirthMonth(e.target.value)}} aria-label="Default select example">
                            {month.map(m=>(
                                    <option key={m} value={m}>{m}</option>
                                ))}
                            
                            </Form.Select>
                        </Col>
                        <Col md>
                            
                            <Form.Select onBlur={(e)=>{setDateOfBirthYear(e.target.value)}} aria-label="Floating label select example">
                            {year.map(y=>(
                                <option key={y} value={y}>{y}</option>
                            ))}
                            
                            </Form.Select>
                            
                        </Col>
                    </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control onBlur={(e)=>{setPhone(e.target.value)}} required type="text" placeholder="Phone" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>email</Form.Label>
                        <Form.Control onBlur={(e)=>{setEmail(e.target.value)}} required type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm email</Form.Label>
                        <Form.Control onBlur={(e)=>{if(e.target.value!==email){console.log("error")}}} required type="email" />
                    </Form.Group>
                    

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={(e)=>{setPassword(e.target.value)}} required type="password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control required type="password" />
                    </Form.Group>
                    
                    <Button onClick={()=>submit()} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Offcanvas.Body>
                            </Offcanvas>*/}
    </Container>
    )
}

export default SignUp;