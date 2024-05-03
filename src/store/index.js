import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./slice/product-list"


export const store = configureStore({
    reducer: {
        productList: productListSlice,
    }
});