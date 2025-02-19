import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // Import Redux Toolkit

// Thunk to fetch all products from API
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://dummyjson.com/products"); // API call to fetch products
  const data = await response.json(); // Convert response to JSON
  return data.products; // Return the list of products
});

// Thunk to fetch products based on category from API
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category) => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`); // API call to fetch category-specific products
    const data = await response.json(); // Convert response to JSON
    return data.products; // Return the list of filtered products
  }
);

// Create the product slice
const productSlice = createSlice({
  name: "products", // Name of the slice
  initialState: {
    products: [], // Stores all products
    filteredProducts: [], // Stores filtered products by category
    loading: false, // Loading state to indicate data fetching
    error: null, // Error state to store any fetching errors
  },
  reducers: {
    // Reducer to clear the filtered products list
    clearFilteredProducts: (state) => {
      state.filteredProducts = []; // Reset the filtered products array
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchProducts lifecycle
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true; // Set loading state to true when fetching starts
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false; // Stop loading once data is received
        state.products = action.payload; // Store the fetched products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false; // Stop loading on error
        state.error = action.error.message; // Store the error message
      })

      // Handle fetchProductsByCategory lifecycle
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true; // Set loading state when category fetch starts
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false; // Stop loading once data is received
        state.filteredProducts = action.payload; // Store the filtered products
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false; // Stop loading on error
        state.error = action.error.message; // Store the error message
      });
  },
});

// Export reducer actions
export const { clearFilteredProducts } = productSlice.actions; // Export action to clear filtered products

// Export the reducer to be used in the Redux store
export default productSlice.reducer;
