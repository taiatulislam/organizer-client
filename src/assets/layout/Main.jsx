import { Outlet } from "react-router-dom";
import Navbar from "../../sharedComponent/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;