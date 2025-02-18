import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; 

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center text-gray-600">No product found.</p>;

  return (
    <div className="flex flex-col sm:flex-row max-w-2xl mx-auto sm:mt-6 mt-40 p-6 bg-white shadow-lg rounded-lg">
      <img 
        className="w-full sm:w-1/2 h-64 object-cover rounded-md" 
        src={product.thumbnail} 
        alt={product.title} 
      />
      <div className="sm:ml-6 mt-4 sm:mt-0 flex flex-col">
        <h2 className="text-2xl sm:text-4xl font-bold">{product.title}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-lg font-semibold text-black mt-2">${product.price}</p>
        <button 
          onClick={() => dispatch(addToCart(product))}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-700 transition w-full sm:w-auto">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
