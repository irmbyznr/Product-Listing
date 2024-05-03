import { useRouter } from "next/navigation";
import React from "react";

const ProductsItem = ({ title, price, image, category, id }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${id}`);
  };
  return (
    <div onClick={handleClick}>
      <div className="flex flex-col items-center px-10 sm:px-0">
        <div>
          <img
            src={image}
            alt={image}
            className="h-80"
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <div className="flex flex-col justify-center gap-2">
            <p className="font-semibold text-sm capitalize">
              {category}
            </p>

            <h3> {title}</h3>
          </div>
          <p className="text-sm font-bold text-end">{price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
