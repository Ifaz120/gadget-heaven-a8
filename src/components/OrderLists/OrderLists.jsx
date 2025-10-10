import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import { Helmet } from 'react-helmet-async';

const OrderLists = () => {
 
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    // ekhane load korbo local storage theke
    const orderHistory = JSON.parse(localStorage.getItem("order-history")) || [];
    setOrders(orderHistory);
  },[])
  return (
    <div>
       <Helmet>
          <title>Order History | Gadget Heaven</title>
          <meta name="description" content="View your orders in order history" />
          <link rel="canonical" href="https://gadgetheavensa8.netlify.app/orders" />
        </Helmet>
      <div className="bg-[#9538E2] text-center text-white pt-10 pb-10 flex flex-col gap-y-5">
        <h2 className="text-3xl font-bold mb-20">Order History</h2>
        <p>
          Track your orders and review them easily. <br />
          Get a clear overview of performance and trends.
        </p>
      </div>
      <div className="text-black w-[90%] mx-auto">
        <h2 className="text-2xl font-bold pb-10 pt-10">Orders Overview</h2>

        <div className="flex flex-col">
          {
            orders.length === 0 ? (
            <div className='flex flex-col items-center'>
              <p className="text-xl font-semibold">no orders yet</p>
              </div>) : (
              <div className='flex flex-col mt-4'>
                {
                orders.map((order,idx)=> <Order key={idx} order={order}></Order>)
              }
              </div>
              
              )
                

          }

        </div>
      </div>
    </div>
  );
};

export default OrderLists;