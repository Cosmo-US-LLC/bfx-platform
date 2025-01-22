import React from "react";

function MobileHowToStart() {
  return (
    <div className="space-y-[14px]">
      <div className="bg-white px-[18px] py-[24px] space-y-5">
        <div className="space-y-[12px] text-center">
          <h1 className="text-[32px] font-[700] leading-[40px]">
            How To Start
          </h1>
          <p className="text-[15px] leading-[23px] text-[#181A20]">
            Getting started with BlockchainFX is simple.
            <br />
            Here is what you need to do.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="p-5 space-y-[18px]">
            <img
              src="/mobile/how-start/account.svg"
              alt="Card Icon"
              className="h-[45px] w-[45px]"
            />
            <div className="space-y-[11px]">
              <h3 className="text-[18px] font-[600] leading-[28px]">
                Register Your Account
              </h3>
              <p className="text-[15px] leading-[23px]">
                Register an account for free
                <br />
                to get access to the platform.
              </p>
            </div>
          </div>

          <div className="p-5 space-y-[18px]">
            <img
              src="/mobile/how-start/chart.svg"
              alt="Card Icon"
              className="h-[45px] w-[45px]"
            />
            <div className="space-y-[11px]">
              <h3 className="text-[18px] font-[600] leading-[28px]">
                Practice with Demo
              </h3>
              <p className="text-[15px] leading-[23px]">
                Test strategies with a free
                <br />
                refillable demo account.
              </p>
            </div>
          </div>

          <div className="p-5 space-y-[18px]">
            <img
              src="/mobile/how-start/trade.svg"
              alt="Card Icon"
              className="h-[45px] w-[45px]"
            />
            <div className="space-y-[11px]">
              <h3 className="text-[18px] font-[600] leading-[28px]">
                Start trading
              </h3>
              <p className="text-[15px] leading-[23px]">
                Make a deposit, start trading
                <br />
                and withdraw your first profit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FBFBFB] px-[19px] py-[30px]">
        <div className="space-y-[12px] text-center">
          <h2 className="text-[24px] font-[500]">
            Open A Demo Account{" "}
            <span className="text-[#E5AE00] font-[700]">
              For Free
            </span>
          </h2>
          <p className="text-[15px] leading-[23px]">
          Make your first step into the world of trading.
          </p>
        </div>
        
        <div className="flex justify-between items-center px-2 pt-[22px] pb-[12px] gap-[12px]">
          <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[700] border border-[#E5AE00] hover:border-[#000] m-0 rounded-[8px] w-[100%] h-[40px]">
            Start Trading Now
          </button>
          <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[14px] font-[700] border hover:border-[#E5AE00] border-[#000] rounded-[8px] w-[100%] h-[40px]">
            Free Demo Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileHowToStart;
