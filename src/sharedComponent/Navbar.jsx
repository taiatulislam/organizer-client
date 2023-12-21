import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className="bg-gradient-to-r from-[#ee0978de] to-[#ff6a00e0] shadow-xl shadow-gray-300">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="font-medium menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'>
                        <div className="flex items-center gap-1">
                            <img src="https://i.ibb.co/Y7M1SwN/logo.png" alt="logo" className="w-[50px] h-[50px] rounded-full" />
                            <p className="text-xl font-semibold">Organizer</p>
                        </div>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;