import { createSlice } from "@reduxjs/toolkit";


const productListSlice = createSlice({
  name: "productList",
  initialState:{
    products: [], 
    categories: [],
    selectedCategory: "",


  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
   
  },
});

export const {
  setProducts,
  setCategories,
  setSelectedCategory,
} = productListSlice.actions;

export default productListSlice.reducer;