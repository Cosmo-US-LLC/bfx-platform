import React from "react";

import trd1cn1 from "../assets/TradeLikeSec/trdicn (1).svg";
import trd1cn2 from "../assets/TradeLikeSec/trdicn (2).svg";
import trd1cn3 from "../assets/TradeLikeSec/trdicn (3).svg";
import trd1cn4 from "../assets/TradeLikeSec/trdicn (4).svg";
import trd1cn5 from "../assets/TradeLikeSec/trdicn (5).svg";
import trd1cn6 from "../assets/TradeLikeSec/trdicn (6).svg";

function TradeLikeSec() {
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
    <div className="max-w-[1200px] h-[614px] flex flex-row pb-6 justify-center gap-[100px] items-center space-y-[60px] w-[100%] mx-auto ">
      <div className="space-y-[24px] max-w-[347px]">
        <h3 className="text-[45px] capitalize font-[700] leading-[95%] text-[#181A20] tracking-[-1px]">
          Trade Like a Pro
        </h3>
        <p className="text-[14px] font-[400]   max-w-[832px] mx-auto w-[100%] leading-[130%] text-[#181A20] tracking-[-0.32px]">
          Master the markets with state-of-the-art trading and risk management
          tools. Trade with the precision of a professional Wall Street trader.
        </p>
        <div className="flex justify-start items-center space-x-[13px]">
          <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[210px] w-[100%] h-[44px]">
            Start Trading Now
          </button>
          <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[210px] w-[100%] h-[44px]">
            Free Demo Account
          </button>
        </div>
      </div>
      <div className="max-w-[420px] space-y-[11px] w-[100%]">
        <div
          style={{
            background: "rgba(241, 241, 241, 0.36)",
          }}
          className="flex justify-between items-center border border-[#9D9D9D] rounded-[100px] px-[27px] py-[21px]"
        >
          <div className="flex items-center space-x-8">
            <div className="max-w-[33px] w-[100%]">
              <img src={trd1cn1} alt="" />
            </div>
            <h4 className="text-[17.52px] font-[600] text-[#181A20]">
              Momentum
            </h4>
          </div>
          <div className="w-[69px] h-[33px] rounded-[100px] flex items-center justify-center border border-[#9D9D9D] bg-[#fff]">
            <h3 className="text-[17.52px] font-[600] text-center text-[#E5AE00]">
              21
            </h3>
          </div>
        </div>
        <div
          style={{
            background: "rgba(241, 241, 241, 0.36)",
          }}
          className="flex justify-between items-center border border-[#9D9D9D] rounded-[100px] px-[27px] py-[21px]"
        >
          <div className="flex items-center space-x-8">
            <div className="max-w-[30px] w-[100%]">
              <img src={trd1cn2} alt="" />
            </div>
            <h4 className="text-[17.52px] font-[600] text-[#181A20]">Trend</h4>
          </div>
          <div className="w-[69px] h-[33px] rounded-[100px] flex items-center justify-center border border-[#9D9D9D] bg-[#fff]">
            <h3 className="text-[17.52px] font-[600] text-center text-[#E5AE00]">
              10
            </h3>
          </div>
        </div>
        <div
          style={{
            background: "rgba(241, 241, 241, 0.36)",
          }}
          className="flex justify-between items-center border border-[#9D9D9D] rounded-[100px] px-[27px] py-[21px]"
        >
          <div className="flex items-center space-x-8">
            <div className="max-w-[33px] w-[100%]">
              <img src={trd1cn3} alt="" />
            </div>
            <h4 className="text-[17.52px] font-[600] text-[#181A20]">
              Volatility
            </h4>
          </div>
          <div className="w-[69px] h-[33px] rounded-[100px] flex items-center justify-center border border-[#9D9D9D] bg-[#fff]">
            <h3 className="text-[17.52px] font-[600] text-center text-[#E5AE00]">
              13
            </h3>
          </div>
        </div>
        <div
          style={{
            background: "rgba(241, 241, 241, 0.36)",
          }}
          className="flex justify-between items-center border border-[#9D9D9D] rounded-[100px] px-[27px] py-[21px]"
        >
          <div className="flex items-center space-x-8">
            <div className="max-w-[38px] w-[100%]">
              <img src={trd1cn4} alt="" />
            </div>
            <h4 className="text-[17.52px] font-[600] text-[#181A20]">
              Moving Averages
            </h4>
          </div>
          <div className="w-[69px] h-[33px] rounded-[100px] flex items-center justify-center border border-[#9D9D9D] bg-[#fff]">
            <h3 className="text-[17.52px] font-[600] text-center text-[#E5AE00]">
              7
            </h3>
          </div>
        </div>
        <div
          style={{
            background: "rgba(241, 241, 241, 0.36)",
          }}
          className="flex justify-between items-center border border-[#9D9D9D] rounded-[100px] px-[27px] py-[21px]"
        >
          <div className="flex items-center space-x-8">
            <div className="max-w-[31px] w-[100%]">
              <img src={trd1cn5} alt="" />
            </div>
            <h4 className="text-[17.52px] font-[600] text-[#181A20]">Volume</h4>
          </div>
          <div className="w-[69px] h-[33px] rounded-[100px] flex items-center justify-center border border-[#9D9D9D] bg-[#fff]">
            <h3 className="text-[17.52px] font-[600] text-center text-[#E5AE00]">
              4
            </h3>
          </div>
        </div>
        <div
          style={{
            background: "rgba(241, 241, 241, 0.36)",
          }}
          className="flex justify-between items-center border border-[#9D9D9D] rounded-[100px] px-[27px] py-[21px]"
        >
          <div className="flex items-center space-x-8">
            <div className="max-w-[27px] w-[100%]">
              <img src={trd1cn6} alt="" />
            </div>
            <h4 className="text-[17.52px] font-[600] text-[#181A20]">Others</h4>
          </div>
          <div className="w-[69px] h-[33px] rounded-[100px] flex items-center justify-center border border-[#9D9D9D] bg-[#fff]">
            <h3 className="text-[17.52pxF] font-[600] text-center text-[#E5AE00]">
              23
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeLikeSec;