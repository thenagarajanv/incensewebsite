import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function DisplayProducts(props){
  const[cart, setCart] = ([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div className="Display-card box" style={{boxShadow:"10px", height:"75h"}}>
              <div className="card" style={{width: "auto" }}>
                  <img src={props.Image} class="card-img-top" alt={props.name}/>
                  <div className="card-body">
                    <h5 className="card-title"><h4>{props.name}</h4></h5>
                    <li className="list-group-item"><p><i>Rs:{props.price}.00</i></p></li>
                  </div>
                  <div class="text-center">  
                <Link to={`/DetailPage/${props.id}`}>
                    <Button variant="light" style={{border:"1px solid black", margin:"10px"}} class="btn btn-warning btn-lg btn-block">Overview</Button>
                </Link>
                  </div>
                    {/* <Offcanvas show={show} onHide={handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Cart</Offcanvas.Title></Link>
                      </Offcanvas.Header>
                      <Offcanvas.Body></Offcanvas.Body>
                    </Offcanvas> */}
                <div></div>
              </div>
          </div>
          );
  }
export default DisplayProducts;