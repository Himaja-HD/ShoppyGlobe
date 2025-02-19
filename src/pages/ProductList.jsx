import React, { useEffect, useState, lazy, Suspense } from "react"; // Imports
import { Link } from "react-router-dom"; // Routing
import { useDispatch, useSelector } from "react-redux"; // Redux
import { fetchProducts } from "../redux/productsSlice"; // Fetch Action
import { addToCart } from "../redux/cartSlice"; // Cart Action

const Search = lazy(() => import("../components/Search")); // Lazy Load

const ProductList = () => {
  const dispatch = useDispatch(); // Dispatch
  const { products, loading, error } = useSelector((state) => state.products); // State
  const [search, setSearch] = useState(""); // Search State
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered State

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch Products
  }, [dispatch]); // Dependency

  useEffect(() => {
    setFilteredProducts(products); // Set Products
  }, [products]); // Dependency

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredProducts(products); // Reset
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) // Filter
        )
      );
    }
  }, [search, products]); // Dependencies

  if (loading) return <p className="text-center text-lg">Loading...</p>; // Loading UI
  if (error) return <p className="text-center text-red-500">{error}</p>; // Error UI

  return (
    <div className="p-6">
      {/* Search Component */}
      <Suspense fallback={<p className="text-center text-gray-500">Loading search...</p>}>
        <Search search={search} onSearchChange={setSearch} />
      </Suspense>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="p-4 rounded-lg shadow-xl hover:scale-105">
              <img 
                className="w-full h-40 object-contain rounded-md" 
                src={product.thumbnail} 
                alt={product.title} // Image
              />
              <h2 className="text-xl font-bold mt-2">{product.title}</h2> {/* Title */}
              <p className="text-gray-700">${product.price}</p> {/* Price */}
              <div className="flex mt-2 justify-between">
                <Link 
                  to={`/product/${product.id}`} 
                  className="text-gray-800 hover:font-bold px-4 py-2 rounded-lg">
                  View Details {/* Link */}
                </Link>
                <button 
                  onClick={() => dispatch(addToCart(product))} // Add to Cart
                  className="bg-gray-700 hover:bg-gray-950 text-white px-4 py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No products found</p> // No Data UI
        )}
      </div>
    </div>
  );
};

export default ProductList; // Export
