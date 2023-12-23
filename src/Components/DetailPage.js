import { useParams } from  "react-router-dom";
import { products } from "./productsData.js";
import Banner from './Banner.js';
import SideBar from './SideBar.js';
import ".//Styles.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Footer from "./Footer.js";
import InnerBanner from "./InnerBanners.js";
import axios from "axios";
import {Link} from 'react-router-dom'
function DetailPage() {
    let name = "";
    let mainImage = "";
    let amount = 0;

    const[status, setStatus] =useState(true);
    const [count, setCount] = useState(0);
    const { id } = useParams();

    const handleAddToCart = () => {

        console.log(name, mainImage, amount, id);
        axios.post('http://localhost:3001/Cart', {id:id})
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
        setStatus(false)
    }

    return (
        <div>
        <Banner />
        <SideBar />
        {products.map((product) => {
            if (product.id == id) {
                name = product.name;
                mainImage = product.mainImage;
                amount = product.amount;
                return(
                    <div>
                        <Container>
                            <Row>
                                <Col lg={6}>
                                <div className="SliderImageControl">
                                <div className="SliderContainers">
                                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img src={product.mainImage} class="d-block w-100" alt={product.name}/>
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                        </div>
                                        <div class="carousel-item">
                                        <img src={product.fsImage} class="d-block w-100" alt={product.name}/>
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                        </div>
                                        <div class="carousel-item">
                                        <img src={product.ssImage} class="d-block w-100" alt={product.name}/>
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                </div>  
                                </div>  
                                </Col>
                                <Col lg={6}>
                                        <h3>{product.name}</h3>
                                        <p style={{color:"green"}}><bold>Dhoopbatti | Charcoal Free | Ecocert Certified | Free Incense Holder</bold></p>
                                        <h5>MRP Rs. {product.price}.00</h5>
                                        <p>(incl. of all taxes)</p>
                                        <div className="QualityScaler">
                                            <p>Quantity</p>
                                            <button style={{width:"50px", height:"40px", margin:"5px", padding:"5px"}} type="button" onClick={() =>(count > 0) ? setCount(count - 1) : 0}>-</button>
                                            <button style={{width:"50px", height:"40px", margin:"5px", padding:"5px"}} type="text" placeholder="0" max={10} min={1} value="1">{count}</button>
                                            <button style={{width:"50px", height:"40px", margin:"5px", padding:"5px"}} type="button" onClick={() =>(count < 10) ? setCount(count + 1) : 0}>+</button>
                                        </div>
                                        <div className="AddCart">
                                            <Link to='/Cart'><Button class="btn" type="button" variant="info" onClick={() => handleAddToCart()} >Add To Cart</Button></Link>
                                                <div className="TogglerRight">
                                                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                                        <div class="offcanvas-header">
                                                            <h5 id="offcanvasRightLabel">Cart</h5>
                                                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                        </div>
                                                        <div class="offcanvas-body">
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link to='./Cart'><Button size="mb-2" style={{margin:"5px"}} variant="info">BUY NOW</Button></Link>
                                        </div>
                                        <div className="description">
                                            <p>{product.description}</p>
                                        </div>
                                </Col>
                            </Row>
                        </Container>
                        </div>
                        )
                    }
                })
            }
    <InnerBanner/>
    <Footer/>
        </div>
    );
};

export default DetailPage;