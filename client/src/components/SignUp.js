import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const SignUp=(props)=>{
    const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);};
  const handleShow = () => {setShow(true)};
    const day=["Day","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
    const month=["Month","01","02","03","04","05","06","07","08","09","10","11","12"];
    const year=["Year","2020","2021"];
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [dateOfBirthD,setDateOfBirthD]=useState(0);
    const [dateOfBirthM,setDateOfBirthM]=useState(0);
    const [dateOfBirthY,setDateOfBirthY]=useState(0);
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
            </Offcanvas.Body>
        </Offcanvas>
    </div>
        
/*<div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>


        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div></div>*/
    )
}

export default SignUp;