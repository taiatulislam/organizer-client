import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="relative">
                <img src="https://i.ibb.co/C0QgPNm/44-incredible-404-error-pages-3x-1560x760.png" alt="error" className="h-screen w-full"></img>
            </div>
            <Link to='/' className="btn btn-ghost absolute bottom-16 left-1/2 bg-gray-200">Home</Link>
        </div>
    );
};

export default ErrorPage;