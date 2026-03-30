import React from "react";

const Rattings = () => {
  return (
    <div className="mt-5">
      <div className="min-h-[20vh] mx-auto bg-linear-to-r from-indigo-400 to-indigo-600 flex items-center">
        <div className="max-w-[1100px] mx-auto flex justify-center items-center text-center gap-20 w-full">
          <div>
            <h3 className="text-3xl font-bold text-white">50k+</h3>
            <p className="text-white">Active User</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">200+</h3>
            <p className="text-white">Premium User</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">4.9</h3>
            <p className="text-white">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rattings;
