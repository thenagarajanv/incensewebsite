import { Link } from 'react-router-dom';
import Phool from './Logo/Phool_Logo.webp';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ToastContainer, toast } from 'react-toastify';
// import {getAuth, signOut} from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import useSound from "use-sound";
import music from "./music/malikappuram.mp3";
// onMouseEnter={() => play()} onMouseLeave={() => stop()}
import './Styles.css'
import { ClerkProvider, SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react'
 

function SideBar() {
  
  // const auth  = getAuth();
  // const handleLogOut = () =>{
    //   signOut(auth)
    //   .then(()=>{toast.success("Log Out Successfully");})
    //   .catch((error) => {console.log(error);});
 
  // };
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [play, { stop }] = useSound(music);
  const {user , isSignedIn} =  useUser();
  
  // console.log("User",user);
    return (
        <div>
          <div className="sidebar">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <Link to="/">
                <h1 class="navbar-brand">
                    <Link to='/' style={{color:"black", textDecoration:"none"}}><button><img style={{height:"50px",width:"80px",margin:"5px"}} src={Phool}></img></button></Link>
                </h1>
              </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{textDecoration:"none"}}>
                      <Link style={{textDecoration:"none", color:"black",padding:"5px"}} to='/WinterCollection'>
                        <li class="nav-item">
                          <a>Winter Collection</a>
                        </li>
                      </Link>
                      <Link style={{textDecoration:"none", color:"black",padding:"5px"}} to='/IncenseSticks'>
                        <li class="nav-item">
                          <a>Incense Stick</a>
                        </li>
                      </Link>
                      <Link  style={{textDecoration:"none", color:"black",padding:"5px"}} to='/Decor'>
                        <li class="nav-item">
                        <a>Decor</a>
                        </li>
                      </Link>
                      <Link style={{textDecoration:"none", color:"black",padding:"5px"}} to='/FragranceOil'>
                        <li class="nav-item">
                          <a>Fragment Oils</a>
                        </li>
                      </Link>
                      <Link  style={{textDecoration:"none", color:"black",padding:"5px"}} to='/TrackOrder'>
                        <li class="nav-item">
                        <a>Track Order</a>
                        </li>
                      </Link>
                      <div className='Cart'>
                        <Link to='/Cart'><Button variant="light" className='btn-md' style={{padding:"5px",textDecoration:"none", color:"black"}} onClick={handleShow}>Cart</Button></Link>
                      </div>
                      <div>
                      {/* <form class="d-flex" role="search" style={{margin:"2px"}}>
                          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
                          <button class="btn btn-outline-success" type="submit">Search</button>
                      </form> */}
                  </div>
                  </ul>
                </div>
                <Link to='/AdminDashboard'><Button variant="light" className='btn-md' style={{padding:"5px",textDecoration:"none", color:"black"}}>Admin Dashboard</Button></Link>
                {/* <Link to='/SignIn'><button class="btn btn-light" type="submit">Sign In</button></Link>
                <Button variant='light'>Log Out</Button> */}
                { !isSignedIn && <Link to='/Sign-In'><button class="btn btn-light" type="submit">Sign In</button></Link>}
                <SignedIn>
                  <UserButton afterSignOutUrl='/' />
                </SignedIn>
                
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