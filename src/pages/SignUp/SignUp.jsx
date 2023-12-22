import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill, BsGoogle } from 'react-icons/bs';
import { useContext, useState } from "react";
import { RxCross2 } from 'react-icons/rx';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {

    const { register, handleSubmit } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
    const onSubmit = (data) => {
        console.log(data);
        const user = { name: data.name, email: data.email, photo: data.photo, toDo: [], upComing: [], completed: [] }
        if (data.password.length < 6) {
            return Swal.fire({
                title: 'Error!',
                text: 'Password length must be grater than 6',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }

        else if (!/[A-Z]/.test(data.password)) {
            return Swal.fire({
                title: 'Error!',
                text: 'Password should have one capital letter',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }

        else if (!/[@$!%*?&]/.test(data.password)) {
            return Swal.fire({
                title: 'Error!',
                text: 'Password should have one special character',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }

        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            updateUser(user.name, user.photo)
                                .then(() => {
                                    Swal.fire({
                                        title: 'Success',
                                        text: `User created successfully.`,
                                        icon: 'success',
                                        confirmButtonText: 'OK'
                                    })
                                    navigate("/dashboard")

                                }).catch((error) => {
                                    Swal.fire({
                                        title: 'Error!',
                                        text: `${error.message}`,
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                    })
                                });
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            title: 'Error!',
                            text: `${error.message}`,
                            icon: 'error',
                            confirmButtonText: 'OK'
                        })
                    })
            })
    }

    const handleGoogle = e => {
        e.preventDefault();
        googleSignIn()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success',
                    text: `User added successfully.`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            })
            .catch(error => {
                console.log(error.code, error.message);
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
    }

    return (
        <div className='bg-gradient-to-r from-[#ee0978de] to-[#333399] border-2 border-gray-400 rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] my-10'>
            <div className="flex">
                <div className="w-1/2">
                    <img src="https://i.ibb.co/NnR4Ztm/signup.png" alt="picture" className="h-full p-2 rounded-xl" />
                </div>
                <div className=' relative w-1/2 py-7'>
                    <Link to="/"><span className='absolute right-4 top-2 text-xl font-extrabold text-red-500'><RxCross2></RxCross2></span></Link>
                    <h2 className='text-4xl font-semibold text-center mb-5 text-white'>Register Here</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="px-10">
                        <div>
                            <input type="text" placeholder="Your name" {...register("name")} className="p-2 w-full rounded-md bg-base-200" required />
                        </div>
                        <div className="my-2">
                            <input type="email" placeholder="Your email" {...register("email")} className="p-2 w-full rounded-md bg-base-200" required />
                        </div>
                        <div className="my-2">
                            <input type="text" placeholder="Your photoURL" {...register("photo")} className="p-2 w-full rounded-md bg-base-200" required />
                        </div>
                        <div className="mb-2 relative">
                            <input type={showPassword ? 'text' : 'password'} placeholder="Your password" {...register("password")} className="p-2 w-full rounded-md bg-base-200" required />
                            <p onClick={() => {
                                setShowPassword(!showPassword)
                            }}>
                                {
                                    showPassword ? <BsEyeSlashFill className='absolute top-[30%] right-5 -ml-8'></BsEyeSlashFill> : <BsEyeFill className='absolute top-[30%] right-5 -ml-8'></BsEyeFill>
                                }
                            </p>
                        </div>
                        <div className="text-center mt-5">
                            <input type="submit" value="Sign Up" className="btn bg-base-400 text-md font-medium w-full rounded-md" />
                        </div>
                    </form>
                    <div className="flex gap-2 items-center mt-6 px-10">
                        <hr className="border-2 w-1/2"></hr>
                        <p className="text-md text-white font-semibold">or</p>
                        <hr className="border-2 w-1/2"></hr>
                    </div>
                    <div className="form-control mt-6 px-10">
                        <button onClick={handleGoogle} className="btn bg-base-400 text-md font-medium normal-case"><BsGoogle></BsGoogle>Sign Up with Google</button>
                    </div>
                    <p className='px-10 mt-4'>Already have an account? <Link to="/login" className="text-white">Log In</Link></p>
                </div>
            </div>
        </div >
    );
};

export default SignUp;