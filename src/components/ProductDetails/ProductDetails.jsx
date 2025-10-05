import React, { useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { addToTheBuyList, addToTheWishList, getBuyList } from "../../utility/AddToDb";
import { FaHeart } from "react-icons/fa";
import { render } from "react-dom";
import ReactStars from 'react-stars'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const id = parseInt(product_id);
  const product = data.find((prod) => prod.product_id === id);
  const {
    product_id: productId,
    product_image,
    price,
    product_title,
    description,
    rating,
    availability,
    specification,
  } = product;
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleAddToCart = (id) => {

    const existingCart = getBuyList();
    const isAlreadyInCart = existingCart.includes(id);

    
    if(isAlreadyInCart){
      toast.warning("This product is already in your cart!");
    }
    else{
      addToTheBuyList(id);
      toast.success("This product is added in your cart!");
    }
  };

  const handleAddToWish = (id) => {
    addToTheWishList(id);
  };

  const [liked, setLiked] = useState(false);

  return (
    <div className="text-black mx-auto relative h-[900px]">
      <div className="bg-[#9538E2] text-center text-white pt-10 pb-[250px] relative">
        <h2 className="text-3xl font-bold">This is product details</h2>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>

      <div className="bg-white w-[90%] mx-auto rounded-3xl absolute top-0  left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="flex p-6 gap-10">
          <div className="w-[30%] ">
            <img className="rounded-2xl h-[400px]" src={product_image} alt="" />
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className="text-3xl font-bold">{product_title}</h3>
            <h4 className="font-bold text-[#484747] text-xl">Price: {price}</h4>
            {
              <p>
                {availability ? (
                  <span className="text-green-400 px-3 py-1 font-bold border rounded-3xl border-green-400 bg-green-100">
                    In stock
                  </span>
                ) : (
                  <span className="text-red-400 px-3 py-1 font-bold border rounded-3xl border-red-400 bg-red-100">
                    Out of stock
                  </span>
                )}
              </p>
            }
            <p className="text-[#484747] font-bold">{description}</p>
            <p className="text-xl font-bold">Specification:</p>
            <ol>
              {specification.map((spec, index) => (
                <li className="text-[#484747] font-medium" key={index}>
                  {spec}
                </li>
              ))}
            </ol>
            <p className="font-bold text-xl">Rating</p>
            <p>{rating}</p>
            <ReactStars
              count={5}
              value={4.5}
              isHalf={true}
              edit={false}
              size={24}
              activeColor="#FFD700"
            />
            {/* id pass korte hole onclick e arrow function nite hoy */}
            <div className="flex gap-x-5 items-center">
              <button
                onClick={() => handleAddToCart(productId)}
                class="btn w-[40%] border-none bg-[#9538E2] text-white hover:bg-white hover:text-[#9538E2] font-bold rounded-2xl"
              >
                Add To Cart
              </button>
              <button
                className="border rounded-full border-gray-400 p-2"
                onClick={() => {
                  setLiked(!liked);
                  handleAddToWish(productId);
                }}
              >
                <FaHeart
                  className={` text-xl 
              ${
                liked
                  ? "text-red-500 transition-colors duration-200"
                  : "text-gray-500 transition-colors duration-200"
              }
              `}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-44"></div>
    </div>
  );
};

export default ProductDetails;
