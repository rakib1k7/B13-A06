import React from "react";
import BannerImage from "../assets/banner.png"

const Banner = () => {
  return (
    <div className="max-w-[1100px] mx-auto flex justify-between items-center mt-7">
      <div>
        <button className='bg-blue-200 rounded-2xl pl-3 pr-3 font-normal text-[#9514FA] text-[17px] mb-5'>New: AI-Powered Tools Available</button>
        <h1 className="text-5xl font-bold mb-5">
          Supercharge Your <br />
          <span className="text-[#9514FA]">Digital Workflow</span>
        </h1>
        <p className="text-[#627382] mb-5">
          Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex gap-5" >
            <button className='font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 py-2 rounded-lg shadow hover:opacity-90'>Explore Products</button>
            <button className='font-bold bg-transparent border-[#9514FA] text-[#9514FA] px-5 py-2 rounded-lg shadow hover:opacity-90'>Watch Demo</button>
        </div>
      </div>
      <div>
        <img src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
