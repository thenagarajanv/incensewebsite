import React, { useState, useEffect } from 'react'
import Empty from 'C:/Users/Nagarajan V/incensewebsite/src/Components/BannerImages/Empty.png';
import Table from 'react-bootstrap/Table';
import SideBar from '../SideBar';
import Footer from '../Footer.js';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useUser } from "@clerk/clerk-react";

function Cart(){

  // let id = 0; 
  // let mainImage = "";
  // let amount = 0;
  // let stocks = 0; 
  // let count = 0;
  // let salesprice = 0;
  // const [id, setid] = useState(0);
  // const [mainImage, setmainImage] = useState('');
  // const [amount, setamount] = useState(0);
  // const [stocks, setstocks] = useState(0);
  // const [count, setcount] = useState(0);
  // const [salesprice, setsalesprice] = useState(0);

  const { user, isSignedIn} = useUser();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice]= useState(0);
  const [totalAmount, settotalAmount] = useState(0);

  useEffect(()=>{
    // e.preventDefault();
     axios.get('https://trailbackend.onrender.com/User/Get').then(x => setProducts(x.data))
    .catch(err => console.log(err))
    console.log(products);
  }, [products]);
    
  console.log(products);

  const postdelete = (id) =>{
    axios.post(`https://trailbackend.onrender.com//User/delete`, {id:id, amount: setPrice(price), count: quantity}).then(res => res)
    .catch(err => console.log(err));
    setProducts(product => product.filter(pro=>pro.id!==id));
  }
  
  // {!isSignedIn && axios.post(`https://trailbackend.onrender.com/User/deleteAll`, {}).then(res => res)
  // .catch(err => console.log(err));}

  !isSignedIn && axios.post(`https://trailbackend.onrender.com/User/deleteAll`, {})
  .then(res => res)
  .catch(err => console.log(err));

  
  const handleUpdate = async(id, count, salesprice, stocks, amount, userID, quantity)=>{
    if(quantity >= 1){
      amount = salesprice * quantity;
    }
    count = quantity;
    stocks -= stocks;
    console.log(amount);
    settotalAmount(totalAmount+amount);

    await axios.post(`https://trailbackend.onrender.com/User/UpdatePriceQuantity`, {id: id, count: count, salesprice : salesprice, stocks: stocks, amount : amount, userID:userID}).then(res => res)
    .catch(err => console.log(err));
    
    await axios.get('https://trailbackend.onrender.com/User/Get').then(x => setProducts(x.data))
    .catch(err => console.log(err));
  }
    // }else{
    //alert("Quantity should be Minimum 1");}
     //   id: { type: Number},
      //   name: {type: String},
      //   salesprice: {type: Number},
      //   stocks: {type: Number},
      //   mainImage: {type: String,},
      //   amount: {type: Number},
      //   count: {type: Number},

    //   axios.post('https://trailbackend.onrender.com/Users/UpdateCart', {}).then(x => console.log(x))
    //   .catch(err => console.log(err));
    
    //axios.post('https://trailbackend.onrender.com/productId', {id}).then(product => setCartProducts(prevProducts=> [...prevProducts, product])).catch()
    // console.log(cartProducts);
    // console.log(cartId);
    
    if(products.length >= 1){
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
          
        {products[0].cart.map((products) => (
          <tr>
            <td>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={products.mainImage}/>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    {products.name}
                    <p>Offer Price: Rs.{products.salesprice}.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </td>
            <td>
              <input className='userInput' onChange={(x)=>setQuantity(x.target.value)} type='text' style={{height:"30%", width:"20%", margin:"10px"}}></input>
              <Button className='btn btn-sm' onClick={()=>handleUpdate(products.id, products.count, products.salesprice, products.stocks, products.amount, user.id, quantity)} variant='light' style={{height:"40px", width:"50%"}}>Update</Button> 
            </td>
            <td>Rs.{products.amount}</td>
            <td><Button onClick={()=>postdelete(products.id)} className='btn btn-xm' variant='light'>Delete</Button></td>
          </tr>
        ))}
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} style={{textAlign: "right"}}>
            Total Amount : 
            </td>
            <td>Rs.{totalAmount}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </div>
  );}
  else{
    return(
      <div>
        <SideBar/>
        <div className='emptyContainer'>
          <img style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "40%", padding:"20px"}} alt='' src={Empty}></img>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Cart;