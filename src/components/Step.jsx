import React from "react";
import UserImage from "../assets/user.png";
import PackageImage from "../assets/package.png"
import RocketImage from "../assets/rocket.png"

const Step = () => {
  return (
    <div className="max-w-[1100px] mx-auto mt-6 py-">
      <div className="justify-center text-center items-center">
        <h1 className="text-2xl font-bold mb-3">Get Started in 3 Steps</h1>
        <p className="text-[16px] text-[#627382] mb-4">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className=" shadow-lg">
          <div className="absolute top-0 right-0 ">
            <p className="bg-amber-400 ab font-bold p-1 ">01</p>
          </div>
          <div className=" flex flex-col justify-center items-center text-center py-6">
            <img className="justify-center items-center "
              src={UserImage}
              alt=""
            />
            <h3 className="font-bold text-2xl">Create Account</h3>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className=" shadow-2xl">
          <div className="absolute top-0 right-0 ">
            <p className="bg-amber-400 ab font-bold p-1 ">01</p>
          </div>
          <div className=" flex flex-col justify-center items-center text-center py-6">
            <img className="justify-center items-center "
              src={PackageImage}
              alt=""
            />
            <h3 className="font-bold text-2xl">Create Account</h3>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className=" shadow-2xl">
          <div className="absolute top-0 right-0 ">
            <p className="bg-amber-400 ab font-bold p-1 ">01</p>
          </div>
          <div className=" flex flex-col justify-center items-center text-center py-6">
            <img className="justify-center items-center "
              src={RocketImage}
              alt=""
            />
            <h3 className="font-bold text-2xl">Create Account</h3>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
