import banner2 from './BannerImages/topbanner01.webp';
import banner1 from './BannerImages/topbanner02.webp';
import banner3 from './BannerImages/topbanner03.webp';
import Carousel from 'react-bootstrap/Carousel';

function TopBanner(){
    return(
        <div>
            <Carousel>
            <Carousel.Item interval="2000">
                <img src={banner1} width={300} height={400} class="d-block w-100"/>
            </Carousel.Item>
            <Carousel.Item interval="2000">
                <img src={banner2} width={300} height={400} class="d-block w-100"/>
            </Carousel.Item>
            <Carousel.Item interval="2000">
                <img  src={banner3} alt='food' width={300} height={400} class="d-block w-100"/>
            </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default TopBanner;