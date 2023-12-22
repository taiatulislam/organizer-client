import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2'

const Dashboard = () => {

    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const [todo, setTodo] = useState()

    useEffect(() => {
        fetch('https://organizer-server-8koqvv2lf-md-taiatul-islam-apons-projects.vercel.app/todo/')
            .then(res => res.json())
            .then(data => {
                setTodo(data.filter(user => user.email === user?.email))
            })
    }, [todo])

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Logout',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate("/")
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

    const handleDelete = (id) => {
        fetch(`https://organizer-server-8koqvv2lf-md-taiatul-islam-apons-projects.vercel.app/todo/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task delete',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/5 h-screen static md:fixed bg-[#FFA732]">
                <div className="mt-5 grid">
                    <img src={user?.photoURL} alt="profile" className="w-[70px] h-[70px] rounded-full mx-auto" />
                    <p className="text-center mt-2">{user?.displayName}</p>
                </div>
                <div className="grid mt-5 gap-5 text-center px-5">
                    <Link to="/addTask">
                        <div className="border-2 border-black rounded-lg bg-[#FBECB2]">
                            <p className="text-lg font-medium py-2">Add task</p>
                        </div>
                    </Link>
                    <Link to="/dashboard">
                        <div className="border-2 border-black rounded-lg bg-[#FBECB2]">
                            <p className="text-lg font-medium py-2">Dashboard</p>
                        </div>
                    </Link>
                </div>
                <div className="flex gap-2 items-center my-5">
                    <hr className="border-2 w-1/2 ml-5"></hr>
                    <p className="text-md font-semibold">Nav</p>
                    <hr className="border-2 w-1/2 mr-5"></hr>
                </div>
                <div className="grid gap-5 text-center px-5">
                    <Link to="/">
                        <div className="border-2 border-black rounded-lg bg-[#FBECB2]">
                            <p className="text-lg font-medium py-2">Home</p>
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className="border-2 border-black rounded-lg bg-[#FBECB2]">
                            <p className="text-lg font-medium py-2">About Us</p>
                        </div>
                    </Link>
                    <button onClick={handleLogout}>
                        <div className="border-2 border-black rounded-lg bg-[#FBECB2]">
                            <p className="text-lg font-medium py-2">Logout</p>
                        </div>
                    </button>
                </div>
            </div>
            <div className="pl-0 md:pl-[20%] w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="border-2 border-black">
                        <h2 className="text-3xl text-center">To-Do</h2>
                        <p className="text-center -mt-2 text-3xl">---------</p>
                        <ul className="px-2 lg:px-10">
                            {
                                todo?.map(todo => <li key={todo?._id}><div className="border-2 border-black rounded-lg mb-3 text-center py-3">
                                    <h3 className="text-lg font-semibold">Title: {todo?.title}</h3>
                                    <p><b>Description:</b> {todo?.description}</p>
                                    <p><b>Deadline:</b> {todo?.deadline}</p>
                                    <p><b>Task Priority:</b> {todo?.priority}</p>
                                    <div className="flex gap-2 justify-center mt-2">
                                        <button onClick={() => handleDelete(todo?._id)}><MdDelete className="text-xl text-red-600"></MdDelete></button>
                                        <button><FaEdit className="text-xl text-blue-600"></FaEdit></button>
                                    </div>
                                </div></li>)
                            }
                        </ul>
                    </div>
                    <div className="border-2 border-black">
                        <h2 className="text-3xl text-center">Ongoing</h2>
                        <p className="text-center -mt-2 text-3xl">---------</p>
                        <ul className="list-disc pl-10">
                            <li className="text-red-400">Firebase auth</li>
                            <li className="text-red-400">Another login system</li>
                            <li className="text-red-400">2 section</li>
                        </ul>
                    </div>
                    <div className="border-2 border-black">
                        <h2 className="text-3xl text-center">Completed</h2>
                        <p className="text-center -mt-2 text-3xl">---------</p>
                        <ul className="list-disc pl-10">
                            <li className="text-yellow-400">Firebase auth</li>
                            <li className="text-yellow-400">Another login system</li>
                            <li className="text-yellow-400">2 section</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;