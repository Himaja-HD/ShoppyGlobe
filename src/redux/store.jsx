import { configureStore } from "@reduxjs/toolkit"; // Import Redux Toolkit's configureStore function
import productReducer from "./productsSlice"; // Import the product slice reducer
import cartReducer from "./cartSlice"; // Import the cart slice reducer

// Configure the Redux store
const store = configureStore({
  reducer: {
    products: productReducer, // Manages the state for products (fetching, filtering)
    cart: cartReducer // Manages the state for cart (adding/removing items)
  },
});

export default store; // Export the configured store for use in the application
