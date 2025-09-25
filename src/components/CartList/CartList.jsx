import React, { useEffect } from 'react';

const CartList = ({jinish}) => {
  const {product_id,product_image,product_title,description,price} = jinish;
  // useEffect(()=>{
  //   fetch('/gadgetData.json')
  //   .then(res => res.json())
  //   .then()
  // },[])
  return (
    <div className='  mb-10'>
      <div className='bg-white p-5 rounded-3xl flex gap-x-10'>
        <div className=''>
          <img className='h-40 w-50' src={product_image} alt="" />
        </div>
        <div className='flex flex-col gap-y-3'>
          <h3 className='font-semibold text-2xl '>{product_title}</h3>
          <p className='text-xl text-[#484747]'>{description}</p>
          <p className='text-xl text-[#484747] font-medium'>Price: {price}</p>
        </div>

      </div>


    </div>
  );
};

export default CartList;