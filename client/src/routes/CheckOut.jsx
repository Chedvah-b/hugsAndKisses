import React, { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";

const CheckOut=()=>{
    const {total,getTotal}=useContext(ItemsContext);
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
                        <Form.Label>Date of Birth</Form.Label>
                        <Row className="g-3">
                        <Col md>
                        <Form.Select onBlur={(e)=>{setDateOfBirthD(e.target.value)}} aria-label="Default select example">
                            {day.map(d=>(
                                <option key={d} value={d}>{d}</option>
                            ))}
                            <option>Day</option>
                            </Form.Select>
                        </Col>
                        <Col md>
                        <Form.Select onBlur={(e)=>{setDateOfBirthM(e.target.value)}} aria-label="Default select example">
                            {month.map(m=>(
                                    <option key={m} value={m}>{m}</option>
                                ))}
                            
                            </Form.Select>
                        </Col>
                        <Col md>
                            
                            <Form.Select onBlur={(e)=>{setDateOfBirthY(e.target.value)}} aria-label="Floating label select example">
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
                    
                    <Button onClick={()=>{console.log(firstName)}} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>
    )
}

export default CheckOut;