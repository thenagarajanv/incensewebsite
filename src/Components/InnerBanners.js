import ads1 from './BannerImages/ads3.webp';
import ads2 from './BannerImages/ads5.webp';
import ads3 from './BannerImages/ads6.webp';
import Carousel from 'react-bootstrap/Carousel';

function InnerBanner(){
    return(
        <div>
            <Carousel>
            <Carousel.Item interval="2000">
                <img src={ads1} width={300} height={400} class="d-block w-100"/>
            </Carousel.Item>
            <Carousel.Item interval="3000">
                <img src={ads2} width={300} height={400} class="d-block w-100"/>
            </Carousel.Item>
            <Carousel.Item interval="2000">
                <img  src={ads3} alt='food' width={300} height={400} class="d-block w-100"/>
            </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default InnerBanner;