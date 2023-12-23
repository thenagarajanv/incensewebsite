import { Link } from 'react-router-dom';
import Phool from './Logo/Phool_Logo.webp';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ToastContainer, toast } from 'react-toastify';
import {getAuth, signOut} from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';

function SideBar() {
  const auth  = getAuth();
  const handleLogOut = () =>{
    signOut(auth)
    .then(()=>{toast.success("Log Out Successfully");})
    .catch((error) => {console.log(error);});
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
          <div className="sidebar">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <Link to="/">
                <h1 class="navbar-brand" href="#">
                    <Link to='/' style={{color:"black", textDecoration:"none"}}><img style={{height:"50px",width:"80px",margin:"5px"}} src={Phool}></img></Link>
                </h1>
              </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Winter Collection</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Incense Stick</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Decor</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Fragment Oils</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Track My Order</a>
                    </li>
                </ul>
                <div>
                  <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
                      <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
                  <div className='Cart'>
                    <Link to='/Cart'><Button variant="primary" onClick={handleShow}>Cart</Button></Link>
                  </div>
                </div>  
                <Link to='/SignIn'><button class="btn btn-light" type="submit">Sign In</button></Link>
                <Button onClick={handleLogOut} variant='light'>Log Out</Button>
              </div>
            </nav>
        </div>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
      </div>
    );
  }
  export default SideBar;