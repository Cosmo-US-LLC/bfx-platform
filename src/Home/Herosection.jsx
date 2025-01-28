import React from "react";
import herogif from "../assets/herosection/herogif.gif";
import herobnr1 from "../assets/herosection/bnrhero (5).svg";
import herobnr2 from "../assets/herosection/bnrhero (4).svg";
import herobnr3 from "../assets/herosection/bnrhero (3).svg";
import herobnr4 from "../assets/herosection/bnrhero (2).svg";
import herobnr5 from "../assets/herosection/bnrhero (1).svg";

function Herosection() {
  return (
    <div className="pt-[9rem] pb-[2rem] bg-[#FFFFFF]">
      <div className="max-w-[1220px]  w-[100%] mx-auto ">
        <div className="space-y-[35px]">
          <div>
            <h4 className="text-[18px]  leading-[100%] font-[400] text-center text-[#000] tracking-[-1px] capitalize">
              Maximize Your Trading Potential
            </h4>
            <h2 className="pt-6 pb-8 text-[64px] font-[700] leading-[100.375%] tracking-[-1px] text-[#000] text-center">
              Trade Crypto <br /> Forex, Stocks and More
            </h2>
            <p className="text-[18px] max-w-[865px] w-[100%] mx-auto font-[400] leading-[166.667%] text-center text-[#000] tracking-[-0.32px] ">
              Explore global markets with BlockchainFX, the all-in-one trading
              platform. Trade Crypto, Forex, ETFs, Stocks, Indices, ETFs,
              Futures, Options, Bonds Commodities and CFDs across 500+ assets.
              Elevate your trading game with state-of-the-art analysis tools and
              indicators. Start trading smarter today.
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
          <div className="flex justify-center  max-w-[619px] mx-auto">
            <img src={herogif} className="max-h-[550px]" alt="" />
          </div>
          <div className="flex justify-center space-x-[52px] border rounded-[20px] pt-[30px] pb-[35px]">
            <img src={herobnr1} alt="" />
            <img src={herobnr2} alt="" />
            <img src={herobnr3} alt="" />
            <img src={herobnr4} alt="" />
            <img src={herobnr5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
