import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="flex gap-5">
                <div className="w-1/5 h-screen sticky bg-[#FFA732]">
                    <div className="mt-5 grid">
                        <img src="https://i.ibb.co/Y7M1SwN/logo.png" alt="logo" className="w-[70px] h-[70px] rounded-full mx-auto" />
                        <p className="text-center mt-2">Experience the Next Level of Task Management</p>
                    </div>
                    <div className="grid mt-5 gap-5 text-center px-5">
                        <Link>
                            <div className="border-2 border-black rounded-lg bg-[#FBECB2]">
                                <p className="text-lg font-medium py-2">Add task</p>
                            </div>
                        </Link>
                        <div className="border-2 border-black rounded-lg bg-[#FBECB2]">
                            <p className="text-lg font-medium py-2">Home</p>
                        </div>
                        <div className="border-2 border-black rounded-lg bg-[#FBECB2]">
                            <p className="text-lg font-medium py-2">Blog</p>
                        </div>
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
                        <Link to="/dashboard">
                            <div className="border-2 border-black rounded-lg bg-[#FBECB2]">
                                <p className="text-lg font-medium py-2">Dashboard</p>
                            </div>
                        </Link>
                        <div className="border-2 border-black rounded-lg bg-[#FBECB2]">
                            <p className="text-lg font-medium py-2">Blog</p>
                        </div>
                    </div>
                </div>
                <div className="w-4/5">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="h-screen border-2 border-black">
                            <h2 className="text-3xl text-center">To-Do</h2>
                            <p className="text-center -mt-2 text-3xl">---------</p>
                            <ul className="list-disc pl-10">
                                <li className="text-green-400">Firebase auth</li>
                                <li className="text-green-400">Another login system</li>
                                <li className="text-green-400">2 section</li>
                            </ul>
                        </div>
                        <div className="h-screen border-2 border-black">
                            <h2 className="text-3xl text-center">Ongoing</h2>
                            <p className="text-center -mt-2 text-3xl">---------</p>
                            <ul className="list-disc pl-10">
                                <li className="text-red-400">Firebase auth</li>
                                <li className="text-red-400">Another login system</li>
                                <li className="text-red-400">2 section</li>
                            </ul>
                        </div>
                        <div className="h-screen border-2 border-black">
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
        </div>
    );
};

export default Dashboard;