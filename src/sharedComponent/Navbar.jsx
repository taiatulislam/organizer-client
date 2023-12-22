import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Logout',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }).catch((error) => {
                console.log(error);
                Swal.fire({
                    title: 'Error!',
                    text: { error },
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            });
    }

    return (
        <div className="bg-gradient-to-r from-[#ee0978de] to-[#333399] shadow-xl shadow-gray-300">
            <div className="navbar max-w-7xl mx-auto">
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
                            <p className="text-2xl font-semibold text-white">Organizer</p>
                        </div>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">Dashboard</a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </div>
                            : <Link to="/signUp" className="btn">Sign Up</Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;