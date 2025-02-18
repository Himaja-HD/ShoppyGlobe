import React, { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import { addToCart } from "../redux/cartSlice";

const Search = lazy(() => import("../components/Search"));

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Set filtered products only when `products` change
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // Efficient filtering: apply only when `search` is not empty
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, products]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6">
      {/* Wrap Search in Suspense for lazy loading */}
      <Suspense fallback={<p className="text-center text-gray-500">Loading search...</p>}>
        <Search search={search} onSearchChange={setSearch} />
      </Suspense>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="p-4 rounded-lg shadow-xl hover:scale-105">
              <img className="w-full h-40 object-contain rounded-md" src={product.thumbnail} alt={product.title} />
              <h2 className="text-xl font-bold mt-2">{product.title}</h2>
              <p className="text-gray-700">${product.price}</p>
              <div className="flex mt-2 justify-between">
                <Link to={`/product/${product.id}`} className="text-gray-800 hover:font-bold px-4 py-2 rounded-lg">
                  View Details
                </Link>
                <button 
                  onClick={() => dispatch(addToCart(product))}
                  className="bg-gray-700 hover:bg-gray-950 text-white px-4 py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
