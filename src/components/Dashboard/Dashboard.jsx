import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <div className="bg-[#9538E2] text-center text-white pt-10 pb-[250px] relative">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <button className='btn'>Cart</button>
        <button className='btn'>Wishlist</button>
      </div>
    </div>
  );
};

export default Dashboard;