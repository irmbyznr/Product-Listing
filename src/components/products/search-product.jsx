import { setProducts } from "@/store/slice/product-list";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchProduct = ({allProducts}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    dispatch(setProducts(filterProducts(allProducts, searchTerm)));
  };
  const filterProducts = (allProducts, searchTerm) => {
    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  return (

 <form action="" >
      <input
      className="pr-20 pl-2 py-2 border border-orange-600 rounded"
        type="text"
        placeholder="Search for products"
        value={search}
        onChange={handleSearchChange}
      />
    </form>

   
  );
};

export default SearchProduct;
