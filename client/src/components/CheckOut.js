import React, { useContext,useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { checkout } from "../service/service";
import { orderItem } from "../service/service";

const CheckOut=()=>{
    //const {total,setTotal}=useContext(ItemsContext);
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [cardNumber,setCardNumber]=useState("");
    const {total,setTotal}=useContext(ItemsContext);
   
    const submit = async() =>{
        const orderId=await checkout(2/*, */, 'new', Number(total));console.log("i ",orderId);
        for (const [key, value] of Object.entries(localStorage)) {
            await orderItem(orderId, JSON.parse(value).id, JSON.parse(value).amount);
        }
        localStorage.clear();
    }
    
    return(
        <div className="container">
            {/*<h4>Total: {total}</h4>*/}
            <Form>
                <h5>Billing address</h5>
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
                        <Form.Control onBlur={(e)=>{setEmail(e.target.value)}} required type="email" placeholder="email"/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onBlur={(e)=>{setAddress(e.target.value)}} required type="text" placeholder="Address" />
                    </Form.Group>
                    <h5>Payment</h5>
                    <Form.Group className="mb-3">
                        <Form.Label>Card number</Form.Label>
                        <Form.Control onBlur={(e)=>{setCardNumber(e.target.value)}} required type="text" placeholder="Card number" />
                    </Form.Group>
                    
                    <Button onClick={()=>submit()} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>
    )
}

export default CheckOut;