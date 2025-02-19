import React from "react"; // Import
import { Link } from "react-router-dom"; // Navigation

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1> {/* Title */}
      <p className="text-gray-600 mt-2">Oops! The page you're looking for doesn't exist.</p> {/* Message */}
      <Link to="/" className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
        Go Home
      </Link> {/* Button */}
    </div>
  );
};

export default NotFound; // Export
