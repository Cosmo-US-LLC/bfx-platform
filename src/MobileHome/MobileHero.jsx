import React from "react";
import herogif from "../assets/herosection/herogif.gif";
import fobicn from "../assets/herosection/forbes-ar21 1.svg";
import herobnr2 from "../assets/herosection/bnrhero (4).svg";
import herobnr3 from "../assets/herosection/bnrhero (3).svg";
import herobnr4 from "../assets/herosection/bnrhero (2).svg";
import herobnr5 from "../assets/herosection/binance.png";

function MobileHero() {
  return (
    <div className="pt-[6rem] bg-[#FFFFFF]">
      <div className="w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <div>
            <h4 className="text-[16px]  leading-[100%] font-[400] text-center text-[#000] tracking-[-1px] capitalize">
              Endless Opportunities Await
            </h4>
            <h2 className="pt-6 pb-8 text-[32px] font-[700] leading-[111.375%] tracking-[-1px] text-[#000] text-center">
              The Ultimate Trading App
            </h2>
            <p className="px-4 text-[15px] max-w-[865px] w-[100%] mx-auto font-[400] leading-[153.667%] text-center text-[#000] tracking-[-0.32px] ">
              BlockchainFX is a pioneering platform that bridges crypto and
              traditional finance, giving you access to 500+ assets. Experience
              lightning-fast trades and seamless access to the world's largest
              financial markets.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-[17px]">
            <a href="https://trade.blockchainfx.io/en/login?redirect_url=traderoom" target="_blank" rel="noopener noreferrer">
            <button className="text-white bg-[#E5AE00] px-[14px] hover:text-black hover:bg-transparent text-[14px] font-[700] border border-[#E5AE00] hover:border-[#000] rounded-[8px]  h-[40px]">
              Start Trading Now
            </button>
            </a>
            <a href="https://trade.blockchainfx.io/en/login?redirect_url=traderoom" target="_blank" rel="noopener noreferrer">
            <button className="hover:text-white hover:bg-[#E5AE00] px-[14px] text-black bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px]  h-[40px]">
              Free Demo Account
            </button>
            </a>
          </div>
          <div>
            <div className="flex justify-center pb-[20px]">
              <img src={herogif} alt="" />
            </div>

            {/* <div className="border border-neutral-400 rounded-[6px] py-[20px] px-[13px]">
              <h3 className="text-center text-[15px] font-[600]">
                Featured In:
              </h3>
              <div className="flex justify-center items-center space-x-[10px]">
                 
                <img
                  className="h-[11px]"
                  src={"/mobile/featured/bloomberg.svg"}
                  alt=""
                />
                <img
                  className="h-[20px]"
                  src={"/mobile/featured/crypto.svg"}
                  alt=""
                />
                <img
                  className="h-[15px]"
                  src={"/mobile/featured/coin.svg"}
                  alt=""
                />
                <img
                  className="h-[10.6px]"
                  src={"/mobile/featured/binance.svg"}
                  alt=""
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHero;
