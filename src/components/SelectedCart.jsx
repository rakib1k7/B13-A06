import React from "react";

const SelectedCart = ({ cartData, setCartData }) => {
  const TotalPrice = cartData.reduce(
    (sum, SelectedCart) => sum + SelectedCart.price,
    0,
  );
  const handleProceedBtn = () => {
    setCartData([]);
  };
  const handleRemove = (SelectedCart) => {
    const fillteredBtn = cartData.filter (cart => cart.id !== SelectedCart.id)
    setCartData(fillteredBtn)

  }
  return (
    <div className=" max-w-[1100px] mx-auto shadow-lg py-3">
      <h1 className="font-bold text-2xl mb-3">Your cart</h1>

      {cartData.length === 0 ? (
        <h1 className="justify-center text-center items-center font-semibold text-2xl py-7">
          Your Cart is empty
        </h1>
      ) : (
        <>
          <div className="space-y-4">
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
                      <div className="justify-center items-center text-center">
                        <h1 className="font-bold text-2xl">
                          {SelectedCart.Name}
                        </h1>
                        <p>${SelectedCart.price}/mon</p>
                      </div>
                    </div>
                    <div>
                      <button onClick={()=>handleRemove(SelectedCart)} className="text-2xl text-red-600">Remove</button>
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
              <button
                onClick={handleProceedBtn}
                className="w-full bg-[#4F39F6] p-1 rounded-3xl"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedCart;
