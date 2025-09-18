import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <div className="hero bgBanner rounded-3xl bg min-h-screen ">
  <div className="hero-content text-center">
    <div className="max-w-4xl">
      <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6">
       Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn btn-primary">Shop Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;