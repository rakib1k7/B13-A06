import React from "react";

const SelectedCart = ({ cartData }) => {
  const TotalPrice = cartData.reduce((sum, SelectedCart) => sum + SelectedCart.price, 0)
  console.log(TotalPrice)
  return (
    <div className=" max-w-[1100px] mx-auto shadow-lg py-3">
      <h1 className="font-bold text-2xl">Your cart</h1>
      {cartData.map((SelectedCart) => (
        <div key={SelectedCart.id}>
          <div className="space-y-6">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <img
                  className="w-20 h-20 rounded-2xl"
                  src={SelectedCart.image}
                  alt=""
                />
                <div>
                <h1>{SelectedCart.Name}</h1>
                <p>${SelectedCart.price}/mon</p>
                </div>

              </div>
              <div>
                <button className="text-2xl text-red-600">Remove</button>
              </div>
            </div>
            
          </div>
        </div>
        ))}
      <div className="flex justify-between">
              <p>Total</p>
              <h1 className="font-bold text-2xl">${TotalPrice}</h1>
            </div>
            <div className="justify-center text-center items-center">
            <button className="w-full bg-[#4F39F6] p-1 rounded-3xl">Proceed to checkout</button>
            </div>
    </div>
  );
};

export default SelectedCart;
