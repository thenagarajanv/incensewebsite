import React from 'react'
import { Container } from "react-bootstrap";
import DisplayProducts from "./DisplayProduct";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import axios from "axios";
import SideBar from './SideBar';
import Footer from './Footer';
import TopBanner from './TopBanner';
function FragranceOil(){

    const[Winter,setWinter]=useState([]);
    useEffect(()=>{
        axios.get('https://trailbackend.onrender.com/Winter').then(x => setWinter(x.data))
        .catch(err => console.log(err))
    }, []);

  return (
    <div>
        <SideBar/>
        <center>
            <h1>Winter Collection</h1>
        </center>
        <Container>
            <Row>
            {Winter.map((x) => (
            <Col sm={4}>
                <DisplayProducts id={x.id} name={x.name} Image = {x.mainImage} price={x.price} des = {x.description} />
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

export default FragranceOil;