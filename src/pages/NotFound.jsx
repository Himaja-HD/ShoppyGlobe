import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-1/2 h-screen bg-gray-50 text-center px-6">
      <h1 className="text-6xl font-extrabold text-red-500">404-Page Not Found</h1>
      <p className="text-gray-700 mt-1">The page you are looking for might have been removed or is temporarily unavailable.</p>
      
      <Link
        to="/"
        className="mt-6 bg-gray-800 text-white px-6 py-2 rounded-md text-sm font-medium shadow-md hover:bg-gray-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
