import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-base-300">
            <div className="max-w-7xl mx-auto py-5">
                <div className="hero place-items-start items-center min-h-[85vh]" style={{ backgroundImage: 'url(https://i.ibb.co/9HfzxQS/24529046.jpg)' }}>
                    <div className="hero-overlay opacity-100 lg:bg-opacity-30"></div>
                    <div className="hero-content text-neutral-content">
                        <div className="max-w-2xl p-5">
                            <h1 className="mb-5 text-5xl font-bold">Experience the Next Level of Task Management</h1>
                            <p className="mb-5 text-lg pr-[50px] text-justify">Welcome to Organizer, where seamless productivity meets effortless organization. Tired of juggling multiple tasks and deadlines? Our intuitive task management solution is designed to empower you, allowing you to reclaim control of your schedule with unparalleled ease. Streamline your workflow, prioritize tasks efficiently, and witness the transformation of your work life.</p>
                            <Link to="/login" className="btn btn-primary text-md text-white">Let&apos;s Explore</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner
    ;