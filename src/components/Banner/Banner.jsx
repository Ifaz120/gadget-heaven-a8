import React from "react";
import "./Banner.css";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="w-[90%] mx-auto relative">
      <div className="bgBanner rounded-b-3xl min-h-screen relative">
        <div className="hero-content pt-20 text-center flex flex-col relative z-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn btn-primary bg-white text-[#9538E2] font-bold text-lg rounded-xl">
              Shop Now
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2  w-1/2 z-30">
          <img
            className="w-full rounded-3xl shadow-lg"
            src={banner}
            alt="Banner"
          />
        </div>
      </div>

      {/* Spacer so next section doesn't overlap */}
      <div className="h-48"></div>
    </div>
  );
};

export default Banner;
