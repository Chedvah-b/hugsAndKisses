import React,{ useState} from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas"
import Form from "react-bootstrap/Form"
import SignUp from "./SignUp";
import { checkLogIn } from "../service/service";

const LogIn=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const checkDetails = async() =>{
        await checkLogIn(email,password);
    }

    return(
    <div>
        <Button variant="light" onClick={handleShow}>Sign in</Button>

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
        </Offcanvas>
    </div>
    )
}

export default LogIn;