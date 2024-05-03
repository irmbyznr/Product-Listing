"use client";
import ProductList from "@/components/products/product-list";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
}
