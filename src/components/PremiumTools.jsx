import React, { use, useState } from "react";
import AiCards from "./AiCards";

const PremiumTools = ({ AiPromise, cartData, setCartData}) => {
  const premiumAiTools = use(AiPromise);

  
  //   console.log(selectedBtn, "selectedBtn");

  return (
    <div className="py-5">
      <div className="max-w-[1100px] mx-auto flex justify-center text-center items-center mt-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">Premium Digital Tools</h1>
          <p className="text-[#627382]">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.z
          </p>

        
          {/* <div className="flex justify-center text-center items-center gap-5 ">
            <button onClick={()=> setSelectedBtn("Tools")} className={`${selectedBtn === "Tools" ? "bg-[#4F39F6]" : "bg-transparent" } text-black px-5 py-2 rounded-lg shadow `}>
              Products
            </button>
            <button onClick={()=> setSelectedBtn("selected")} className={`${selectedBtn === "selected" ? "bg-[#4F39F6]" : "bg-transparent" } text-black px-5 py-2 rounded-lg shadow`} >
              Cart
            </button>
          </div> */}
        </div>
      </div>

      {/* premium cart section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 max-w-[1100px] mx-auto">
        {premiumAiTools.map((premiumAiTools) => (
          <AiCards premiumAiTools={premiumAiTools} cartData = {cartData} setCartData = {setCartData} />
        ))}
      </div>
    </div>
  );
};

export default PremiumTools;
