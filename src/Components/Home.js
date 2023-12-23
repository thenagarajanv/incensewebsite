import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import ProductList from "./ProductList";
import FooterBanner from "./FooterBanner";
import TopBanner from "./TopBanner";
function Home(){

    return(
        <div>
            <Banner />
            <SideBar />
            <TopBanner/>
            <Header />
            <ProductList />
            <FooterBanner/>
            <Footer />
        </div>
    )
}

export default Home;