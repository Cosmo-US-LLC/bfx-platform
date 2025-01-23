import React from "react";
import heroimg from "../assets/herosection/heroimg.png"
import fobicn from "../assets/herosection/forbes-ar21 1.svg"
import herobnr2 from "../assets/herosection/bnrhero (4).svg"
import herobnr3 from "../assets/herosection/bnrhero (3).svg"
import herobnr4 from "../assets/herosection/bnrhero (2).svg"
import herobnr5 from "../assets/herosection/binance.png"

function MobileHero() {
  return (
    <div className="pt-[6rem] bg-[#FFFFFF]">
      <div className="w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <div>
            <h4 className="text-[16px]  leading-[100%] font-[400] text-center text-[#000] tracking-[-1px] capitalize">
              Maximize Your Trading Potential
            </h4>
            <h2 className="pt-6 pb-8 text-[32px] font-[700] leading-[111.375%] tracking-[-1px] text-[#000] text-center">
              Trade Crypto <br /> Forex, Stocks and More
            </h2>
            <p className="px-4 text-[15px] max-w-[865px] w-[100%] mx-auto font-[400] leading-[153.667%] text-center text-[#000] tracking-[-0.32px] ">
            Explore global markets with BlockchainFX, the all-in-one trading platform. Trade Crypto, Forex, ETFs, Stocks, Indices, ETFs, Futures, Options, Bonds Commodities and CFDs across 500+ assets. Elevate your trading game with state-of-the-art analysis tools and indicators. Start trading smarter today. 
            </p>
          </div>
          <div className="flex justify-center items-center space-x-[17px]">
            <button className="text-white bg-[#E5AE00] px-[14px] hover:text-black hover:bg-transparent text-[14px] font-[500] border border-[#E5AE00] hover:border-[#000] rounded-[8px]  h-[40px]">
              Start Trading Now
            </button>
            <button className="hover:text-white hover:bg-[#E5AE00] px-[14px] text-black bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px]  h-[40px]">
              Free Demo Account
            </button>
          </div>
          <div>
            <div className="flex justify-center mb-1.5">
              <img src={"/mobile/hero_mob.png"} alt="" />
            </div>
            <div className="border border-neutral-400 rounded-[6px] py-[12px] px-[13px]">
              <h3 className="text-center text-[15px] font-[600]">Featured In:</h3>
            <div className="flex justify-center items-center space-x-[10px]">
            {/* <img className="h-[12px]" src={herobnr1} alt="" /> */}
              <img className="h-[11px]" src={"/mobile/featured/bloomberg.svg"} alt="" />
              <img className="h-[20px]" src={"/mobile/featured/crypto.svg"} alt="" />
              <img className="h-[15px]" src={"/mobile/featured/coin.svg"} alt="" />
              <img className="h-[10.6px]" src={herobnr5} alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHero;
