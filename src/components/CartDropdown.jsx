import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CartDropdown = ({ cartItems, onAdd, onRemove }) => {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="absolute top-15 right-5 mt-2 w-80 bg-white text-black shadow-lg p-4 rounded-lg z-50">
      <h2 className="text-lg font-bold mb-2">Your Cart</h2>

      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2 mb-2">
              <img src={item.thumbnail} alt={item.title} className="w-12 h-12 rounded-md" />
              <div className="flex-1 ml-3">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-1">
                 
                  <button 
                    onClick={() => onRemove(item.id)} 
                    className="bg-gray-500 text-white text-xs px-2 py-1 rounded"
                  >
                    {item.quantity === 1 ? <i className="fa-solid fa-trash"></i> : "-"}
                  </button>

                  <span className="text-sm">{item.quantity}</span>
                  
                  <button 
                    onClick={() => item.quantity < 10 && onAdd(item)} 
                    className={`bg-gray-500 text-white text-xs px-2 py-1 rounded ${item.quantity === 10 ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={item.quantity === 10}
                  >+</button>
                </div>
              </div>
            </div>
          ))}

          {/* 🛒 Cart Summary */}
          <div className="flex justify-around mt-4 p-2 bg-gray-100 rounded">
            <p className="text-sm font-semibold">Items: ({cartCount})</p>
            <p className="text-sm font-semibold">Total Price: ${totalPrice}</p>
          </div>

          <Link to="/Checkout" className="block text-center mt-3 bg-gray-600 text-white py-2 rounded">
            Check Out
          </Link>
        </>
      ) : (
        <p className="text-gray-500 text-center">Cart is empty</p>
      )}
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartDropdown;
