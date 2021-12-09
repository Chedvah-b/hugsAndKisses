import React,{useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas"
import Form from "react-bootstrap/Form"
import SignUp from "./SignUp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LogIn=()=>{
    const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);console.log("hjgfhkjfgjfjf")};
  const handleShow = () => setShow(true);
  const day=["Day","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
  const month=["Month","01","02","03","04","05","06","07","08","09","10","11","12"];
  const year=["Year","2020","2021"];

    
  /*const g=()=>{
      var t=document.getElementsByTagName("form");
    
      if(t.length>0){
            t[0].remove();
      }
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
                        <Form.Control required type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required type="text" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Row className="g-3">
                        <Col md>
                        <Form.Select aria-label="Default select example">
                            {day.map(d=>(
                                <option value={d}>{d}</option>
                            ))}
                            <option>Day</option>
                            </Form.Select>
                        </Col>
                        <Col md>
                        <Form.Select aria-label="Default select example">
                            {month.map(m=>(
                                    <option value={m}>{m}</option>
                                ))}
                            
                            </Form.Select>
                        </Col>
                        <Col md>
                            
                            <Form.Select aria-label="Floating label select example">
                            {year.map(y=>(
                                <option value={y}>{y}</option>
                            ))}
                            
                            </Form.Select>
                            
                        </Col>
                    </Row>
                    </Form.Group>

                    

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
      )
  }*/


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

export default LogIn;