import ProductDetails from '@/components/products/product-details';
import { config } from '@/utils/config';
import axios from 'axios';
import { notFound } from 'next/navigation';
import React from 'react'

const ProductDetailsPage = async  ({params}) => {
    const productId= params.id;
    if (!productId || isNaN(productId)) notFound()
   
    try {
      const response = await axios.get(`${config.apiURL}/products/${productId}`);
      const product = response.data;      
      return (
        <>
        <ProductDetails product={product}/>
        </>
      )
    } catch (error) {
      console.log(error);
      
    }
  
}

export default ProductDetailsPage