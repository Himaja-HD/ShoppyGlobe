import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import CartDropdown from "./CartDropdown";

const Header = () => {
  // State
  const [isOrange, setIsOrange] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOrange((prev) => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    // Header
    <header className="bg-gray-800 sticky top-0 z-15 text-white h-20 p-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-xl font-bold flex items-center gap-2">
      <Link to="/" className="flex items-center gap-2"> 
        <span className="first-letter:text-yellow-400 first-letter:text-3xl">Shoppy</span>
        <span className="first-letter:text-yellow-400 first-letter:text-3xl">Globe</span>
        <i className={`fas fa-globe ${isOrange ? "text-yellow-400" : "text-white"}`}></i>
      </Link>
      </h1>

      {/* Navigation */}
      <nav
        className={`absolute top-20 left-0 w-full bg-gray-700 z-12
          sm:static sm:flex sm:w-auto sm:bg-transparent transition-transform ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col lg:relative lg:left-60 font-bold sm:flex-row sm:gap-6 text-center p-4 sm:p-0">
          <li><Link to="/" className="hover:underline block py-2">Home</Link></li>
          <li><Link to="/products" className="hover:underline block py-2">Products</Link></li>
          <li><Link to="/contact" className="hover:underline block py-2">Contact</Link></li>
        </ul>
      </nav>

      {/* Actions */}
      <div className="flex flex-row-reverse items-center gap-3">

        {/* Menu */}
        <button className="sm:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
        </button>

        {/* Cart */}
        <div className="relative">
          <button onClick={() => setShowCart(!showCart)} className="relative p-2 bg-gray-700 rounded-full">
            <i className="fas fa-shopping-cart text-xl"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown */}
      {showCart && (
        <CartDropdown 
          cartItems={cartItems} 
          onAdd={(item) => dispatch(addToCart(item))} 
          onRemove={(id) => dispatch(removeFromCart(id))} 
        />
      )}
      
    </header>
  );
};

export default Header;
