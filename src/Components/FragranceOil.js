import React from 'react'
import { Container } from "react-bootstrap";
import DisplayProducts from "./DisplayProduct";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import axios from "axios";
import SideBar  from './SideBar';
import Footer from './Footer';
import FooterBanner from './FooterBanner';

function FragranceOil(){

    const[fragrance,setFragrance]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/Oil').then(x => setFragrance(x.data))
        .catch(err => console.log(err))
    }, []);

  return (
    <div>
        <SideBar/>
        <center>
            <h1>Fragrance Oil</h1>
        </center>
        <Container>
            <Row>
            {fragrance.map((x) => (
            <Col sm={4}>
                <DisplayProducts id={x.id} name={x.name} Image = {x.mainImage} price={x.price} des = {x.description} />
                <br/>
            </Col>
            ))}  
            </Row>
        </Container>
        <FooterBanner/>
        <Footer/>
    </div>
    )
}

export default FragranceOil;