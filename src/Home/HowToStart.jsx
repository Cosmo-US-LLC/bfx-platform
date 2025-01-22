import React from "react";
import account from "../assets/HowToStart/account.svg";
import trade from "../assets/HowToStart/trade.svg";
import practice from "../assets/HowToStart/practice.svg";

function HowToStart() {
  return (
    <div id="start">
      <div className="pt-[55px] space-y-[55px] pb-[105px] bg-[#FFF]">
        <div className="max-w-5xl space-y-[100px] w-[100%] mx-auto ">
          <div className="space-y-[30px]">
            <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
              How To Start
            </h3>
            <p className="text-[20px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
              Getting started with BlockchainFX is simple. Here is what you need
              to do.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[85px]">
            <div>
              <img
                src={account}
                alt="Card"
                className="h-[52px] w-[52px] mb-7"
              />
              <h4 className="text-[20px] font-[600] leading-[28px] mb-3">
                Register Your Account
              </h4>
              <p className="text-[18px] leading-[23px]">
                Register an account for free
                <br /> to get access to the platform.
              </p>
            </div>

            <div>
              <img
                src={practice}
                alt="Card"
                className="h-[52px] w-[52px] mb-7"
              />
              <h4 className="text-[20px] font-[600] leading-[28px] mb-3">
                Practice with Demo
              </h4>
              <p className="text-[18px] leading-[23px]">
                Test strategies with a free
                <br /> refillable demo account.
              </p>
            </div>

            <div>
              <img src={trade} alt="Card" className="h-[52px] w-[52px] mb-7" />
              <h4 className="text-[20px] font-[600] leading-[28px] mb-3">
                Start Trading
              </h4>
              <p className="text-[18px] leading-[23px]">
                Make a deposit, start trading
                <br />
                and get your first profit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="demo" className="bg-[#FBFBFB] py-[45px]">
        <div className="max-w-5xl mx-auto grid grid-cols-2">
          <div className="space-y-[23px]">
            <h2 className="text-[35px] font-[500] leading-[35px] tracking-[-1px]">
              Open A Demo Account{" "}
              <span className="font-[700] text-[#E5AE00]">For Free</span>
            </h2>
            <p className="text-[18px] leading-[23px]">
              Make your first step into the engagin world of trading.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-[17px]">
            <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[18px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[210px] w-[100%] h-[58px]">
              Start Trading Now
            </button>
            <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[18px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[210px] w-[100%] h-[58px]">
              Free Demo Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToStart;
