import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "./NavBar";
import './Admin.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import './ProductManagement.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Dashboard from './Dashboard';
import React, { useState } from 'react';

function ProductManagement(){
    var today = new Date();
	var day = today.getDate();
	var month = today.getMonth()+1;
	var year = today.getFullYear();
	var hour = today.getHours();
    hour = Math.abs(12-hour);
	if(hour<10)hour = "0"+hour;
	    var minute = today.getMinutes();
	if(minute<10)minute = "0"+minute;
		var second = today.getSeconds();
    var Month = "";
	if(month == '1'){
        Month = "January";
    }else if(month == '2'){
        Month = "Feburay";
    }else if(month == '3'){
        Month = "March";
    }else if(month == '4'){
        Month = "Apirl";
    }else if(month == '5'){
        Month = "May";
    }else if(month == '6'){
        Month = "June";
    }else if(month == '7'){
        Month = "July";
    }else if(month == '8'){
        Month = "Augest";
    }else if(month == '9'){
        Month = "September";
    }else if(month == '10'){
        Month = "October";
    }else if(month == '11'){
        Month = "November";
    }else if(month == '12'){
        Month = "December";
    }
    const [file, setFile] = useState();

    return(
        <div>
            <NavBar/>
            <div className='Top-Container'>
                <Stack direction="horizontal" gap={3}>
                        <div className="p-2">
                            <h1>Product Editor</h1>
                        </div>
                        <div className="p-2 ms-auto">
                            <Button variant="light"><b>{Month} {day}, {year} {hour}:{second} </b><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" stroke-width="0" fill="currentColor" stroke="currentColor" class="moon"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg></Button>{' '}
                        </div>
                </Stack>
            </div>
            <Container>
                <Row xs={1} md={2}>
                    <Col>
                        <h5>Product Settings</h5>
                        <p>Product Images</p>
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem', padding:"10px", display:"flex"}}>
                                    <div class="d-flex justify-content-center">
                                        <Card.Body>
                                            <Card.Title>Main Image</Card.Title>
                                            </Card.Body>
                                            <div class="btn btn-primary btn-rounded">
                                                <label class="form-label text-white m-1" for="customFile1">Choose file</label>
                                                <input className='Username' type="file" class="form-control d-none" id="customFile1" onchange={(e) => setFile(e.target.files[0])} />
                                                
                                            </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem', padding:"10px", display:"flex"}}>
                                    <div class="d-flex justify-content-center">
                                        <Card.Body>
                                            <Card.Title>Side Image 1</Card.Title>
                                        </Card.Body>
                                        <div class="btn btn-primary btn-rounded">
                                            <label class="form-label text-white m-1" for="customFile1">Choose file</label>
                                            <input className='Username' type="file" class="form-control d-none" id="customFile1" onchange="displaySelectedImage(event, 'selectedImage')" />
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem', padding:"10px", display:"flex"}}>
                                    <div class="d-flex justify-content-center">
                                        <Card.Body>
                                            <Card.Title>Side Image 2</Card.Title>
                                            </Card.Body>
                                            <div class="btn btn-primary btn-rounded">
                                                <label class="form-label text-white m-1" for="customFile1">Choose file</label>
                                                <input className='Username' type="file" class="form-control d-none" id="customFile1" onchange="displaySelectedImage(event, 'selectedImage')" />
                                            </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem', padding:"10px", display:"flex"}}>
                                    <div class="d-flex justify-content-center">
                                        <Card.Body>
                                        <Card.Title>Side Image 3</Card.Title>
                                        </Card.Body>
                                        <div class="btn btn-primary btn-rounded">
                                            <label class="form-label text-white m-1" for="customFile1">Choose file</label>
                                            <input className='Username' type="file" class="form-control d-none" id="customFile1" onchange="displaySelectedImage(event, 'selectedImage')" />
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='Description'>
                                    <p>Description</p>
                                </div>
                                    <FloatingLabel controlId="floatingTextarea2" label="Describe your Products in Detail . . .">
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Context"
                                        style={{ height: '150px'  }}
                                        />
                                    </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                            <label>Product Name</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">{<ShoppingBagIcon/>}</span>
                                <input type="text" class="form-control" placeholder="Product Name" aria-label="Product Name" aria-describedby="basic-addon1"/>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>Brand Name</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" placeholder="Brand Name" aria-label="Brand Name" aria-describedby="basic-addon1"/>
                                </div>                
                            </Col>
                            <Col>
                            <   label>Product Name</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" placeholder="Product Name" aria-label="Brand Name" aria-describedby="basic-addon1"/>
                                </div>  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>Regular Price</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" placeholder="Regular Price" aria-label="Brand Name" aria-describedby="basic-addon1"/>
                                </div>                
                            </Col>
                            <Col>
                            <   label>Sales Price</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" placeholder="Sales Price" aria-label="Brand Name" aria-describedby="basic-addon1"/>
                                </div>  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>Category</label> 
                                <div className='categoryDropdown'>
                                    <select style={{width:"100%", height:"35px", margin:"2px"}}>
                                        <option>Incense Sticks</option>
                                        <option>Cones</option>
                                        <option>Esential Oils</option>
                                    </select>
                                </div>
                            </Col>
                            <Col>
                            <label>Stock Status</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">$</span>
                                    <input type="Number" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>Quality In Stock</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" placeholder="Regular Price" aria-label="Brand Name" aria-describedby="basic-addon1"/>
                                </div>                
                            </Col>
                            <Col>
                                <label>Unit</label> 
                                <div className='categoryDropdown'>
                                    <select style={{width:"100%", height:"35px", margin:"2px"}}>
                                        <option>Pieces</option>
                                        <option>Boxes</option>
                                        <option>Kilogram</option>
                                    </select>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="COD Only"
                                    />
                                </Form>
                                <Form>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Online Payments Only"
                                    />
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );  
}
export default ProductManagement;









