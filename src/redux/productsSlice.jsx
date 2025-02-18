import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch all products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
});

// Fetch products based on category
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category) => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();
    return data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [], // Store filtered products
    loading: false,
    error: null,
  },
  reducers: {
    clearFilteredProducts: (state) => {
      state.filteredProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearFilteredProducts } = productSlice.actions;
export default productSlice.reducer;
