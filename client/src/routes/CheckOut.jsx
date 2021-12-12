import React, { useContext,useState } from "react";
import { ItemsContext } from "../context/ItemsContext";


import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CheckOut=()=>{
    const {total,getTotal}=useContext(ItemsContext);
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
        <div>
            {total}
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
                    
                    <Button onClick={()=>{console.log(firstName)}} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>
    )
}

export default CheckOut;