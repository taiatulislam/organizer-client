import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const AddTask = () => {

    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        const updateTask = { email: user?.email, title: data.title, description: data.description, deadline: data.deadline, priority: data.priority }

        fetch('http://localhost:5000/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task Successfully Added',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

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

    return (
        <div className="flex gap-5">
            <div className="w-1/5 h-screen sticky bg-[#FFA732]">
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
            <div className="w-3/5 mx-auto">
                <h2 className="text-5xl font-bold text-center pt-10">Add Task</h2>
                <p className="text-4xl text-center pb-10">------------</p>
                <form onSubmit={handleSubmit(onSubmit)} className="px-10">
                    <div>
                        <input type="text" placeholder="Title" {...register("title")} className="p-2 w-full rounded-md bg-base-200" required />
                    </div>
                    <div className="my-2">
                        <input type="text" placeholder="Description" {...register("description")} className="p-2 w-full rounded-md bg-base-200" required />
                    </div>
                    <div>
                        <input type="date" placeholder="Deadline" {...register("deadline")} className="p-2 w-full rounded-md bg-base-200" required />
                    </div>
                    <div className="my-2">
                        <label className="mr-3 font-bold">Priority</label>
                        <select {...register("priority")}>
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="text-center mt-5">
                        <input type="submit" value="Add Task" className="btn bg-base-400 text-md font-medium w-full rounded-md" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;