import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gray-100 dark:bg-slate-900 text-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-2">
        Oops! Page not found
      </h2>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        This page doesn't exist or the URL is incorrect.
        <br />
        Please go back to the homepage.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition my-3"
      >
        <FaHome />
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
