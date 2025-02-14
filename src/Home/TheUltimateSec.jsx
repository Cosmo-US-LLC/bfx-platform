import React from "react";

import logo from "../assets/TheUltimateSec/logo.svg";

function TheUltimateSec() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };
  return (
    <div className="flex bgtheylt">
      <div className="max-w-[717px] min-h-[400px] max-h-[480px] flex flex-col items-center justify-center w-[100%] mx-auto  ">
        <div className="flex justify-center pb-[20px]">
          <img src={logo} className="h-[54.54px]" alt="" />
        </div>
        <h3 className="text-[40px] text-[#fff] font-[700] text-center leading-[117.143%]  tracking-[-1px]">
          The Ultimate <br />
          Trading Experience
        </h3>
        <div className="flex justify-center items-center px-[2rem] pt-[35px] space-x-[17px]">
          <a href="https://trade.blockchainfx.io/en/login?redirect_url=traderoom" target="_blank" rel="noopener noreferrer">
          <button
            onClick={handleScroll}
            className="text-white bg-[#E5AE00]  hover:text-[#FFF] hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#fff] rounded-[8px] w-[170px]   h-[44px]"
          >
            Start Trading Now
          </button>
          </a>
          <a href="https://trade.blockchainfx.io/en/login?redirect_url=traderoom" target="_blank" rel="noopener noreferrer">
          <button className="hover:text-white hover:bg-[#E5AE00]  text-[#FFF] bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#fff] rounded-[8px] w-[168px]   h-[44px]">
            Free Demo Account
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TheUltimateSec;
