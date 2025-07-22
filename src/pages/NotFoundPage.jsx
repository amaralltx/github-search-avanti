import { Link } from "react-router-dom";

const notFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
        <Link to={"/"} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Go to Home
        </Link>
        </div>
    );
    }
export default notFoundPage;   