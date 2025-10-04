import React from 'react';
import { addToTheBuyList, removeFromWishList } from '../../utility/AddToDb';
import { RxCross2 } from "react-icons/rx";

const WishList = ({setWishList, jinish, setBuyList,allProduct}) => {
  const { product_id, product_image, product_title, description, price } = jinish;

  const handleAddToCart = (id) => {
    addToTheBuyList(id);
    // ekhane react er state update korte hobe jeno new kichu add korle shegula change hoy ,
    const productToAdd = allProduct.find(prod => prod.product_id === id);
    if(productToAdd){
      setBuyList((prev) => {
        // ekhon check korbo amar product cart e exist kore kina 
        const exists= prev.some(item=> item.product_id === id);
        if(!exists){
          return [...prev, productToAdd];
        }
        return prev;
      })
    }
  }
  return (
    <div className="mb-10">
      <div className="bg-white p-5 rounded-3xl flex gap-x-10">
        <div className="w-[30%] flex justify-center">
          <img className="h-40 w-50" src={product_image} alt="" />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-y-3">
            <h3 className="font-semibold text-2xl ">{product_title}</h3>
            <p className="text-xl text-[#484747]">{description}</p>
            <p className="text-xl text-[#484747] font-medium">Price: {price}</p>
            <button
            onClick={()=> handleAddToCart(product_id)}
            
            className="btn w-[40%] border-none bg-[#9538E2] hover:bg-white hover:text-[#9538E2] font-bold rounded-2xl text-white">Add To Cart</button>
          </div>
          <div className="">
            <button onClick={() =>
             {removeFromWishList(product_id);
              setWishList((prev)=>prev.filter((items)=>items.product_id !== product_id))
             }
             
          } className="border border-red-500 rounded-full p-2">
              <RxCross2 className="text-red-500 font-bold text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;