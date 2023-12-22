import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 text-base-content bg-gradient-to-r from-[#ee0978de] to-[#333399]">
            <nav className="grid grid-flow-col gap-4 text-white">
                <Link to="/" className="text-lg">Home</Link>
                <Link to="/about" className="text-lg">About us</Link>
                <Link to="/contact" className="text-lg">Contact Us</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4 text-white">
                    <Link to="https://www.linkedin.com/in/md-taiatul-islam-apon-2b9072246/" className="text-3xl"><BsLinkedin></BsLinkedin></Link>
                    <Link to="https://github.com/taiatulislam" className="text-3xl"><BsGithub></BsGithub></Link>
                    <Link to="https://www.youtube.com/" className="text-3xl"><BsYoutube></BsYoutube></Link>
                </div>
            </nav>
            <aside>
                <p className="text-white font-bold">Copyright © 2023 - All right reserved by Organizer</p>
            </aside>
        </footer>
    );
};

export default Footer;