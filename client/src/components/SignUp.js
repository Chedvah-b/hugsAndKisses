import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const SignUp=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false);};
    const handleShow = () => {setShow(true)};
    const day=["Day","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
    const month=["Month","01","02","03","04","05","06","07","08","09","10","11","12"];
    const year=["Year","2020","2021"];
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [dateOfBirthDay,setDateOfBirthDay]=useState(0);
    const [dateOfBirthMonth,setDateOfBirthMonth]=useState(0);
    const [dateOfBirthYear,setDateOfBirthYear]=useState(0);
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    

    return(
    <div>
        <Button onClick={handleShow} variant="outline-secondary">Create account</Button>

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
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
    )
}

export default SignUp;