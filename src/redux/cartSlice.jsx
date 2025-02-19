import { createSlice } from "@reduxjs/toolkit"; // Import createSlice from Redux Toolkit

// Define the cart slice
const cartSlice = createSlice({
  name: "cart", // Slice Name  
  initialState: {
    cartItems: [], // Initial state with an empty cart
  },
  reducers: {
    // Reducer to add an item to the cart
    addToCart: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If the item exists, increase the quantity but limit it to 10
        existingItem.quantity = Math.min(existingItem.quantity + 1, 10);
      } else {
        // If the item is not in the cart, add it with quantity 1
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    // Reducer to remove an item from the cart
    removeFromCart: (state, action) => {
      // Find the item in the cart
      const existingItem = state.cartItems.find((item) => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          // If quantity is greater than 1, decrease it by 1
          existingItem.quantity -= 1;
        } else {
          // If quantity is 1, remove the item from the cart
          state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});

// Export actions for use in components
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export the reducer to be added to the Redux store
export default cartSlice.reducer;
