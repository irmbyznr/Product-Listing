import { setProducts } from "@/store/slice/product-list";
import { config } from "@/utils/config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryFilter from "./product-category-filter";
import ProductsItem from "./product-item";
import ProductSort from "./product-sort";
import SearchProduct from "./search-product";

const ProductList =  () => {
  const [allProducts, setAllProdcuts] = useState([])
 const reduxProducts = useSelector((state) => state.productList.products); 
 const dispatch = useDispatch()
  const getProducts = async () =>{
    try {
      const allProducts= await axios.get(`${config.apiURL}/products`)
      setAllProdcuts(allProducts.data)
      dispatch(setProducts(allProducts.data))
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getProducts()
    dispatch(setProducts(reduxProducts));
  }, [dispatch]);


  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">

      <div className="flex flex-col gap-5 pt-16 items-center justify-center">
        <div className="flex sm:flex-row flex-col gap-5 items-center ">
        <ProductSort allProducts={allProducts}/>
        <CategoryFilter />
        </div>
        <div>
        <SearchProduct allProducts={allProducts}/>

        </div>
      </div>
      <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {reduxProducts.map((product) => (
          <div key={product.id}>
            <ProductsItem {...product} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductList;
