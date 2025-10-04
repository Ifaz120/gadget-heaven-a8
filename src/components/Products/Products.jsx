import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [cards, setCards] = useState([]);
  useEffect(()=>{
    fetch('/gadgetData.json')
    .then(res => res.json())
    .then(data => setCards(data));
  },[]);
  const [active, setActive] = useState("all");
  return (
    <div className='text-black mt-20 w-[90%] mx-auto text-center '>
      <div>
      <h2 className='font-bold text-4xl'>Explore Cutting-Edge Gadgets</h2>

      </div>
      <div className='flex gap-x-10'>
      <div className='flex flex-col p-4  bg-white h-[350px] gap-4 w-[10%]'>
         <button onClick={()=>setActive("all")} className={` btn border-none  rounded-2xl
          ${active === "all" ? "bg-[#9538E2] text-white" :" bg-[#d5d4d4] text-gray-700"} `}>All</button>

          <button onClick={()=>setActive("laptops")} className={` btn border-none  rounded-2xl
          ${active === "laptops" ? "bg-[#9538E2] text-white" :" bg-[#d5d4d4] text-gray-700"} `}>Laptops</button>

           <button onClick={()=>setActive("phones")} className={` btn border-none  rounded-2xl
          ${active === "phones" ? "bg-[#9538E2] text-white" :" bg-[#d5d4d4] text-gray-700"} `}>Phones</button>

            <button onClick={()=>setActive("accessories")} className={` btn border-none  rounded-2xl
          ${active === "accessories" ? "bg-[#9538E2] text-white" :" bg-[#d5d4d4] text-gray-700"} `}>Accessories</button>

            <button onClick={()=>setActive("watch")} className={` btn border-none  rounded-2xl
          ${active === "watch" ? "bg-[#9538E2] text-white" :" bg-[#d5d4d4] text-gray-700"} `}>Smartwatch</button>
      </div>
      <div className='grid grid-cols-3 gap-x-10'>
      {
        cards.map(jinish => <Product key={jinish.product_id} jinish={jinish}></Product>)
      }

      </div>

      </div>
    </div>
  );
};

export default Products;