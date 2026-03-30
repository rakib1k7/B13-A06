import React, { useState } from "react";

const AiCards = ({ premiumAiTools }) => {
  const [isBuy, setBuy] = useState(false)
  const handleBuy = () => {
    setBuy(true)
  }

  return (
    <div className="shadow-lg rounded-2xl p-4 ">
      <div>
        <div className="flex justify-between">
          <img
            className="w-[100px] h-[100px] mb-3"
            src={premiumAiTools.image}
            alt=""
          />
          <button>{premiumAiTools.status}</button>
        </div>
        <h2 className="text-2xl font-bold mb-3">{premiumAiTools.Name}</h2>
        <p className="mb-3 text-[#627382]">{premiumAiTools.description}</p>
        <h1 className="mb-3 font-bold text-2xl ">
          ${premiumAiTools.price}<span>/mon</span>
        </h1>
        {premiumAiTools.features.map((f) => (
          <p className="text-[#627382] mb-3">{f}</p>
        ))}
        <button
          onClick={handleBuy}
          className="font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 py-2 rounded-lg shadow hover:opacity-90 w-full"
        >
          {isBuy ? "Done" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default AiCards;
