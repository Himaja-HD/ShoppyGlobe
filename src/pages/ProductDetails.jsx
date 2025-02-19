import React, { useEffect, useState } from "react"; // Import
import { useParams } from "react-router-dom"; // Params
import { useDispatch } from "react-redux"; // Redux
import { addToCart } from "../redux/cartSlice"; // Action

const ProductDetails = () => {
  const { id } = useParams(); // Get ID
  const dispatch = useDispatch(); // Dispatch
  const [product, setProduct] = useState(null); // State
  const [loading, setLoading] = useState(true); // Loading
  const [error, setError] = useState(null); // Error

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`); // Fetch
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`); // Error
        }
        const data = await response.json(); // Convert
        setProduct(data); // Set Data
      } catch (err) {
        setError(err.message); // Set Error
      } finally {
        setLoading(false); // Stop Loading
      }
    };

    fetchProductDetails();
  }, [id]); // Dependency

  if (loading) return <p className="text-center text-lg">Loading...</p>; // Loading UI
  if (error) return <p className="text-center text-red-500">{error}</p>; // Error UI
  if (!product) return <p className="text-center text-gray-600">No product found.</p>; // No Data UI

  return (
    <div className="flex flex-col sm:flex-row max-w-2xl mx-auto sm:mt-6 mt-40 p-6 bg-white shadow-lg rounded-lg">
      <img 
        className="w-full sm:w-1/2 h-64 object-cover rounded-md" 
        src={product.thumbnail} 
        alt={product.title} // Image
      />
      <div className="sm:ml-6 mt-4 sm:mt-0 flex flex-col">
        <h2 className="text-2xl sm:text-4xl font-bold">{product.title}</h2> {/* Title */}
        <p className="text-gray-700 mt-2">{product.description}</p> {/* Description */}
        <p className="text-lg font-semibold text-black mt-2">${product.price}</p> {/* Price */}
        <button 
          onClick={() => dispatch(addToCart(product))} // Add to Cart
          className="bg-gray-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-700 transition w-full sm:w-auto">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails; // Export
