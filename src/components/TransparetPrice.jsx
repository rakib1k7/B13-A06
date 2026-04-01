import React from "react";

const TransparetPrice = () => {
  return (
    <div className="py-12 max-w-[1100px] mx-auto grid space-y-7">
      <div className="justify-center text-center items-center space-y-4">
        <h1 className="font-bold text-4xl">Simple, Transparent Pricing</h1>
        <p className="text-[14px] text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="space-y-4 shadow-lg bg-gray-700 p-5 rounded-3xl">
          <div>
            <h1 className="font-bold text-2xl">Stater</h1>
            <p className="text-[12px] text-[#d9dfe4]">
              Perfect for getting started
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl">
              $0 <span>/mon</span>
            </h1>
          </div>
          <div>
            <p className="text-[12px] text-[#d9dfe4]">
              Access to 10 free tools
            </p>
            <p className="text-[12px] text-[#d9dfe4]">Basic templates</p>
            <p className="text-[12px] text-[#d9dfe4]">Community support</p>
            <p className="text-[12px] text-[#d9dfe4]">1 project per month</p>
          </div>
          <div>
            
          </div>
          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-2xl p-2">
            Get Started Free
          </button>
        </div>

        <div className="space-y-4 shadow-lg bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-5 rounded-3xl">
            <div className="relative">
                <button className="absolute -top-9 bg-[#FEF3C6] text-[#BB4D00] p-1 rounded-3xl left-25 ">Most Popular</button>
            </div>
          <div>
            <h1 className="font-bold text-2xl">Pro</h1>
            <p className="text-[12px] text-[#d9dfe4]">
              Best for professionals
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl">
              $29 <span>/mon</span>
            </h1>
          </div>
          <div>
            <p className="text-[12px] text-[#d9dfe4]">
              Access to all premium tools
            </p>
            <p className="text-[12px] text-[#d9dfe4]">Unlimited templates</p>
            <p className="text-[12px] text-[#d9dfe4]">Priority support</p>
            <p className="text-[12px] text-[#d9dfe4]">Unlimited projects</p>
            <p className="text-[12px] text-[#d9dfe4]">Cloud sync</p>
            <p className="text-[12px] text-[#d9dfe4]">Advanced analytics</p>
          </div>
          <button className=" bg-amber-100 text-[#9514FA] w-full rounded-2xl p-2">
            Get Started Free
          </button>
        </div>

        <div className="space-y-4 shadow-lg bg-gray-700 p-5 rounded-3xl">
          <div>
            <h1 className="font-bold text-2xl">Enterprise</h1>
            <p className="text-[12px] text-[#d9dfe4]">
              For teams and businesses
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl">
              $99 <span>/mon</span>
            </h1>
          </div>
          <div>
            <p className="text-[12px] text-[#d9dfe4]">
              Everything in Pro
            </p>
            <p className="text-[12px] text-[#d9dfe4]">Team collaboration</p>
            <p className="text-[12px] text-[#d9dfe4]">Custom integrations</p>
            <p className="text-[12px] text-[#d9dfe4]">Dedicated support</p>
            <p className="text-[12px] text-[#d9dfe4]">SLA guarantee</p>
            <p className="text-[12px] text-[#d9dfe4]">Custom branding</p>
          </div>
          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-2xl p-2">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransparetPrice;
