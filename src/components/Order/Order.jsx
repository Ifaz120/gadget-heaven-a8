import React from 'react';

const Order = ({order}) => {
  const {totalCost,itemCount,items} = order;
  return (
    <div className='flex flex-col bg-white mb-10 p-5 rounded-2xl'>
      <div className='mb-4 font-bold'>
       <p>Total Items: {itemCount}</p>
      <p>total cost : {totalCost}</p>
      <p>Product names: </p>
      </div>
      <div>
        {
          items.map((product)=>{
            return(
              <div className='flex border border-1 border-black mb-6 rounded-2xl p-5 items-center gap-x-4'>
              <img className="w-24 h-24 object-cover rounded-lg mb-2" src={product.product_image} alt="" />
              <div className='font-bold'>
                <p className='text-lg'>{product.product_title}</p>
              <p>${product.price}</p>
              </div>
              
            </div>
            )
            
          })
        }
      </div>
    </div>

  );
};

export default Order;