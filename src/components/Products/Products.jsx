import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [cards, setCards] = useState([]);
  useEffect(()=>{
    fetch('/gadgetData.json')
    .then(res => res.json())
    .then(data => setCards(data));
  },[]);
  return (
    <div className='text-black mt-20 w-[90%] mx-auto text-center '>
      <div>
      <h2 className='font-bold text-4xl'>Explore Cutting-Edge Gadgets</h2>

      </div>
      <div className='flex gap-x-10'>
      <div className='flex flex-col p-4  bg-white h-[350px] gap-4 w-[10%]'>
         <button className="btn border-none bg-[#ADADAD] text-black">All products</button>
          <button className="btn border-none hover:#9538E2 bg-white text-[#9538E2]">Laptops</button>
           <button className="btn border-none hover:#9538E2 bg-white text-[#9538E2]">Phones</button>
            <button className="btn border-none hover:#9538E2 bg-white text-[#9538E2]">Accessories</button>
            <button className="btn border-none hover:#9538E2 bg-white text-[#9538E2]">Smartwatch</button>
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