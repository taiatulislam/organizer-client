import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <Link to="/" className="link link-hover">Home</Link>
                    <Link to="/about" className="link link-hover">About us</Link>
                    <Link to="/contact" className="link link-hover">Contact Us</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://www.linkedin.com/in/md-taiatul-islam-apon-2b9072246/" className="text-3xl"><BsLinkedin></BsLinkedin></Link>
                        <Link to="https://github.com/taiatulislam" className="text-3xl"><BsGithub></BsGithub></Link>
                        <Link to="https://www.youtube.com/" className="text-3xl"><BsYoutube></BsYoutube></Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by Organizer</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;