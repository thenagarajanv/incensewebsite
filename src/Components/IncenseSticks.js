import React from 'react'
import { Container } from "react-bootstrap";
import DisplayProducts from "./DisplayProduct";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import axios from "axios";
import SideBar  from './SideBar';
import TopBanner from './TopBanner';
import Footer from './Footer';

function IncenseSticks(){

    const[Incense,setIncense]=useState([]);
    useEffect(()=>{
        axios.get('https://trailbackend.onrender.com/Incense').then(x => setIncense(x.data))
        .catch(err => console.log(err))
    }, []);

  return (
    <div>
        <SideBar/>
        <center>
            <h1>Incense Sticks</h1> 
        </center>
        <Container>
            <Row>
            {Incense.map((x) => (
            <Col sm={4}>
                <DisplayProducts id={x.id} name={x.name} Image = {x.mainImage} salesprice={x.salesprice} regularprice={x.regularprice} des = {x.description} />
                <br/>
            </Col>
            ))}  
            </Row>
        </Container>
        <TopBanner/>
        <Footer/>
    </div>
    )
}

export default IncenseSticks;