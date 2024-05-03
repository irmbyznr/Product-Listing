import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }) => {
  const { title, price, description, category, image } = product;
  return (
    <section className="pt-32 h-screen container mx-auto">
      <div className="pb-10 gap-2 px-10 flex flex-col items-center justify-center ">
      <h2 className="pt-4 text-center font-semibold">{title}</h2>

<div className="flex flex-col justify-center items-center gap-3">
  <div>
    <img
      src={image}
      alt={image}
      className="object-cover object-center h-80"
    />
  </div>
  <span className="mt-6 text-sm text-gray-500 capitalize">{category}</span>
  <p className="text-gray-900">{description}</p>
  <p className="font-bold">{price}$</p>
</div>
      </div>
    </section>
  );
};

export default ProductDetails;
