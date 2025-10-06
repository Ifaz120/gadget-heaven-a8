import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-black">
      <div className="w-[90%] mx-auto pt-20">
        <div className="mx-auto flex flex-col justify-center items-center gap-y-5">
          <h3 className="font-bold text-3xl">Gadget Heaven</h3>
          <p className="font-bold text-lg text-gray-500">Leading the way in cutting-edge technology and innovation</p>
        </div>
      <footer className="flex justify-between footer  p-10 ">
        
        <nav>
          <h6 className="footer-title font-bold text-lg text-black">Services</h6>
          <a className="link link-hover font-bold">Branding</a>
          <a className="link link-hover font-bold">Design</a>
          <a className="link link-hover font-bold">Marketing</a>
          <a className="link link-hover font-bold">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold text-lg text-black">Company</h6>
          <a className="link link-hover font-bold">About us</a>
          <a className="link link-hover font-bold">Contact</a>
          <a className="link link-hover font-bold">Jobs</a>
          <a className="link link-hover font-bold">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold text-lg text-black">Legal</h6>
          <a className="link link-hover font-bold">Terms of use</a>
          <a className="link link-hover font-bold">Privacy policy</a>
          <a className="link link-hover font-bold">Cookie policy</a>
        </nav>
      </footer>

      </div>
        
    </div>
  );
};

export default Footer;
