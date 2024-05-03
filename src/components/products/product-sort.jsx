import { setProducts } from "@/store/slice/product-list";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductSort = ({allProducts}) => {
  const dispatch = useDispatch();
  const products= useSelector((state) => state.productList.products);

  const handleDefaultSort = () => {
    dispatch(setProducts(allProducts))

  };
  const handlePriceSort = (sortDirection) => {
    const sorted = [...products].sort((a, b) => {
      if (sortDirection === "asc") {
        return a.price - b.price; // Low to high
      } else {
        return b.price - a.price; // High to low
      }
    });
    dispatch(setProducts(sorted));
  };
  return (
    <div className="pt-10 sm:pt-0 font-semibold flex sm:flex-row flex-col items-center justify-center gap-5 text-orange-600">
      <button onClick={handleDefaultSort}>Default</button>
      <button onClick={() => handlePriceSort("asc")}>Low to High Price</button>
      <button onClick={() => handlePriceSort("desc")}>High to Low Price</button>
    </div>
  );
};

export default ProductSort;
