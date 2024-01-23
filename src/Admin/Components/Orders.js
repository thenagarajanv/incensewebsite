import NavBar from "./NavBar";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import React, { useState, useEffect } from 'react'

function Orders(){    
  const [products, setProducts] = useState([]);
  useEffect(()=>{
      axios.get('https://trailbackend.onrender.com/Cart').then(x => setProducts(x.data))
      .catch(err => console.log(err))
  }, []); 
    return(
        <div>
            <NavBar/>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#Order</th>
                <th>Product</th>
                <th>Category</th>
                <th>Payment</th>
                <th>Order status</th>
                </tr>
            </thead>
            <tbody>
                {products.map((x) => (
                    <tr>
                    <td>{x.id}</td>
                    <td><img src={x.mainImage} height={200} width={100} alt=""/></td>
                    <td>{x.name}</td>
                    <td></td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </div>
    );
}
export default Orders;