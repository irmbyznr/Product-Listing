
import { setCategories, setProducts, setSelectedCategory } from "@/store/slice/product-list";
import { config } from "@/utils/config";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryFilter = () => {
  const reduxCategories = useSelector((state) => state.productList.categories);
  const reduxSelectedCategory = useSelector(
    (state) => state.productList.selectedCategory
  );
  const dispatch = useDispatch();
  const getCategories = async () => {
    try {
      const resp = await axios.get(`${config.apiURL}/products/categories`);
      dispatch(setCategories(resp.data));
    } catch (error) {
      console.error(error);
    }
  };

  const getProductsByCategory = async (category) => {
    if (!category) return; // Handle empty category case (optional)
    try {
      const response = await axios.get(
        `${config.apiURL}/products/category/${category}`
      );
      dispatch(setProducts(response.data)); // Initially set sortedProducts to fetched data for category
    } catch (error) {
      console.error(error);
    }
  };
  const handleCategoryChange = (event) => {
    const selectedCat = event.target.value;
    dispatch(setSelectedCategory(selectedCat));
    getProductsByCategory(selectedCat); // Fetch and update products based on selected category
  };
  useEffect(() => {
    getProductsByCategory();
    getCategories();
  }, []);
  return (
    <form action="" className="text-orange-600 font-semibold">
      <select
        name=""
        id=""
        value={reduxSelectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="" disabled>
          Categories
        </option>
        {reduxCategories.map((category, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>
    </form>
  );
};

export default CategoryFilter;
