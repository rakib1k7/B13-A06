import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartData }) => {
  console.log(cartData);
  return (
    <div className="top-3 shadow-md">
      <div className="max-w-[1100px] mx-auto flex justify-between  ">
        <div>
          <h1 className="font-bold text-2xl text-[#4F39F6]">DigiTools</h1>
        </div>
        <ol className="flex gap-4 items-center">
          <li>Products</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ol>
        <div className="flex gap-8 items-center">
          <div className="relative ">
            <p className="text-[10px] font-semibold text-white absolute -top-2 left-3 bg-red-600 w-4 h-4 text-center rounded-4xl ">
              {cartData.length}
            </p>
            <FaShoppingCart />
          </div>

          <p>LogIn</p>
          <button class="font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white px-5 py-2 rounded-lg shadow hover:opacity-90">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
