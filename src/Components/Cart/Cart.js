import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import SideBar from '../SideBar';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cart(){
  const [price, setPrice]=useState(0);
  const [status, setStatus] =useState(true);
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState("");
  const [quantity, setQuantity] = useState(1);

    useEffect(()=>{
        //e.preventDefault();
        
        axios.get('http://localhost:3001/Cart/').then(x => setProducts(x.data))
        .catch(err => console.log(err))
        
        
    }, []); 
  
    const postdelete = (id) =>{
     
      axios.post(`http://localhost:3001/Cart/delete`, {cartId:id}).then(res => console.log(res))
        .catch(err => console.log(err));
       setProducts(product => product.filter(pro=>pro.id!==id));
    }
    const handleUpdate = (price)=>{
      console.log(price, quantity);
      setPrice(price*quantity);
    }

    //axios.post('http://localhost:3001/productId', {id}).then(product => setCartProducts(prevProducts=> [...prevProducts, product])).catch()
    // console.log(cartProducts);
    // console.log(cartId);
    return (
      <div>
      <SideBar/>
      <Container>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Items</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
        {products.map((products) => (
          
          <tr>
            <td>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={products.mainImage} />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    {products.name}
                  </Card.Text>
                  <Card.Body>
                    {products.salesprice}
                  </Card.Body>
                </Card.Body>
              </Card>
            </td>
            <td>
              <input className='userInput' onChange={(x)=>setQuantity(x.target.value)} type='text' style={{height:"30%", width:"20%", margin:"10px"}}></input>
              <Button className='btn btn-sm' onClick={()=>handleUpdate(products.salesprice)} variant='light' style={{height:"40px", width:"50%"}}>Update</Button> 
            </td>
            <td>Rs.{quantity===1? products.salesprice : price}</td>
            <td><Button onClick={()=>postdelete(products.id)} className='btn btn-xm' variant='light'>Delete</Button></td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Container>
    </div>
  );
}

export default Cart;