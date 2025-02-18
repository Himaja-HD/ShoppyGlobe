import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Use for accessing Redux state and dispatching actions
import { removeFromCart } from "../redux/cartSlice"; // Import your remove action
import { Link } from "react-router-dom";

const Checkout = () => {
  // Access cart items 
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-bold mb-4">Checkout</h2>

      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item, index) => (
            <div key={item.id || index} className="flex justify-between items-center border-b pb-2 mb-2">
              <span className="mr-2 text-sm font-semibold">{index + 1}.</span> 
              <img src={item.thumbnail} alt={item.title} className="w-12 h-12 rounded-md" />
              <div className="flex-1 ml-3">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 text-xs">
                <i className="fa fa-trash"></i> 
              </button>
            </div>
          ))}

          {/* Summary */}
          <div className="flex justify-around mt-4 p-2 bg-gray-100 rounded">
            <p className="text-sm font-semibold">Items: ({cartCount})</p>
            <p className="text-sm font-semibold">Total Price: ${totalPrice}</p>
          </div>
<br />
<br />
<hr className=" border-2"/>
          {/* Payment Options */}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Select Payment Method</h3>
            <div className="mt-4 items-center justify-around flex flex-row">
              <div className="flex gap-4">
              <button className="w-10 h-10 border-2 border-amber-600 bg-blue-500 text-white text-3xl p-4 rounded-full flex items-center justify-center">
                <i className="fa-brands fa-google-pay"></i>
              </button>
              <button className="w-10 font-bold h-10 border-2 border-gray-800 bg-purple-600 rounded-full text-white py-2 rounded flex items-center justify-center">
               Pe</button>
               </div>
              <button className=" font-bold mt-4 w-auto h-10 bg-gray-700 px-2 text-white rounded-full">
                Credit/Debit Card
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      )}

      <Link to="/" className="block  text-center mt-4 text-white bg-gray-800 p-3 rounded">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Checkout;
