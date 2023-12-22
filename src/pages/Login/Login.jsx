import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { BsEyeFill, BsEyeSlashFill, BsGoogle } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const { register, handleSubmit } = useForm()
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
    }

    return (
        <div className='max-w-5xl my-16 mx-auto flex flex-col md:flex-row border-2 border-gray-400 rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]'>
            <div className='sm:w-full md:w-1/2 relative bg-gradient-to-r from-[#ee0978de] to-[#333399] text-center text-white'>
                <h2 className="text-5xl font-bold mt-10 mb-5">Welcome To</h2>
                <img src="https://i.ibb.co/Y7M1SwN/logo.png" alt="logo" className='w-[100px] h-[100px] bg-white rounded-full p-2 mx-auto' />
                <p className="text-4xl font-medium mt-5">Organizer</p>
                <p className="font-semibold mt-2 text-lg">Experience the Next Level of Task Management</p>
            </div>
            <div className='bg-white sm:w-full md:w-1/2 relative'>
                <Link to="/"><span className='absolute right-4 top-2 text-xl font-extrabold text-red-500'><RxCross2></RxCross2></span></Link>
                <h2 className='text-4xl font-semibold text-center my-5 text-[#ee0978de]'>Log In</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="px-10">
                    <div>
                        <input type="email" placeholder="Your email" {...register("email")} className="p-2 w-full rounded-md bg-base-200" required />
                    </div>
                    <div className="my-2 relative">
                        <input type={showPassword ? 'text' : 'password'} placeholder="Your password" {...register("password")} className="p-2 w-full rounded-md bg-base-200" required />
                        <p onClick={() => {
                            setShowPassword(!showPassword)
                        }}>
                            {
                                showPassword ? <BsEyeSlashFill className='absolute top-[30%] right-5 -ml-8'></BsEyeSlashFill> : <BsEyeFill className='absolute top-[30%] right-5 -ml-8'></BsEyeFill>
                            }
                        </p>
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Login" className="btn bg-base-400 text-md font-medium w-full rounded-md" />
                    </div>
                </form>
                <div className="flex gap-2 items-center mt-6">
                    <hr className="border-2 w-1/2 ml-5"></hr>
                    <p className="text-md font-semibold">or</p>
                    <hr className="border-2 w-1/2 mr-5"></hr>
                </div>
                <div className="form-control mt-6 px-10">
                    <button className="btn bg-base-400 text-md font-medium normal-case"><BsGoogle></BsGoogle>Google Sign In</button>
                </div>
                <p className='px-10 mt-4 mb-10'>New to the site? <Link to="/signUp" className="text-[#ee0978de]">Sign Up</Link></p>
            </div>
        </div >
    );
};

export default Login;