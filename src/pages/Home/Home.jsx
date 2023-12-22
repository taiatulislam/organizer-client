import Footer from "../../sharedComponent/Footer";
import Navbar from "../../sharedComponent/Navbar";

import Banner from "./Banner";
import Benefit from "./Benefit";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Benefit></Benefit>
            <Footer></Footer>
        </div>
    );
};

export default Home;