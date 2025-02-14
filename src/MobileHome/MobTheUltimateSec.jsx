import React from "react";

import logo from "../assets/TheUltimateSec/logo.svg";

function MobTheUltimateSec() {
  return (
    <div className="bgtheyltMb min-h-[400px] flex justify-center items-center">
      <div className="space-y-[25px] min-h-[215px] pb-5">
        <div className="flex justify-center">
          <img src={logo} className="h-[50px]" alt="" />
        </div>
        <h3 className="text-[33.358px] text-[#fff] font-[700] text-center leading-[117.143%] tracking-[-1px]">
          The Ultimate <br />
          Trading Experience
        </h3>
        <div className="flex justify-center items-center gap-[12px]">
          <a className="w-[100%] " href="https://trade.blockchainfx.io/en/login?redirect_url=traderoom" target="_blank" rel="noopener noreferrer">
          <button className="text-white bg-[#E5AE00] px-[6px] hover:text-black hover:bg-white text-[14px] font-[700] border border-[#E5AE00] hover:border-[#000] m-0 rounded-[8px] w-fit h-[40px]">
            Start Trading Now
          </button>
          </a>
          <a href="https://trade.blockchainfx.io/en/login?redirect_url=traderoom" target="_blank" rel="noopener noreferrer" className="w-[100%]">
          <button className="hover:text-white hover:bg-[#E5AE00] px-[6px] text-black bg-white text-[14px] font-[700] border hover:border-[#E5AE00] border-[#000] rounded-[8px] w-fit h-[40px]">
            Free Demo Account
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobTheUltimateSec;
