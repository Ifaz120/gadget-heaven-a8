import React from "react";
import { Link } from "react-router-dom";

const Product = ({ jinish }) => {
  const { product_title, price, product_image ,product_id} = jinish;
  return (
    <div className="text-left">
      <div className="card shadow-xl ">
        <figure className="px-5 pt-10 ">
          <img 
            src={product_image}
            alt="Shoes"
            className="rounded-xl h-[240px] w-full"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{product_title}</h2>
          <p>${price}</p>
          <div className="card-actions">
            <Link to={`/products/${product_id}`}>
            <button className="btn border-none hover:bg-[#9538E2] hover:text-white bg-white text-[#9538E2]">View Details</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
