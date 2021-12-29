import React,{ useState} from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas"
import Form from "react-bootstrap/Form"
import SignUp from "./SignUp";


const LogIn=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <Form.Control type="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="dark">Sign in</Button>
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