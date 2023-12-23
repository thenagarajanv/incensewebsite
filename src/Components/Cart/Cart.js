import React, { useState, useEffect } from 'react'
import SideBar from '../SideBar';
import axios from "axios";


function Cart(){
  const [cartProducts, setCartProducts] = useState([]);
  const [cartId, setCartId] = useState([]);
  
    useEffect(()=>{
        axios.get('http://localhost:3001/Cart').then(x => setCartId(x.data))
          .catch(err => console.log(err))
        cartId.map(id => {

          axios.post('http://localhost:3001/productId', {id}).then(product => setCartProducts(prevProducts=> [...prevProducts, product])).catch()
        })
    }, []);
    console.log(cartProducts);
    console.log(cartId);
    return (
    
      <div>
      <SideBar/>
    </div>
  );
}

export default Cart;