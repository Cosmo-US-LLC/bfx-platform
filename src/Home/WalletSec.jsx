import React, { useState } from "react";
import info from "../assets/wallet/i.svg";
import arw from "../assets/navbar/arw.svg";
import wltcoin1 from "../assets/wallet/wltcoin (6).svg";
import wltcoin2 from "../assets/wallet/wltcoin (5).svg";
import wltcoin3 from "../assets/wallet/wltcoin (4).svg";
import wltcoin4 from "../assets/wallet/wltcoin (3).svg";
import wltcoin5 from "../assets/wallet/wltcoin (2).svg";
import wltcoin6 from "../assets/wallet/wltcoin (1).svg";
import bfxicn from "../assets/wallet/bfx.svg";
import swpicon from "../assets/wallet/swp.svg";
import cer from "../assets/wallet/cer.svg";

const coins = [
  { name: "ETH", icon: wltcoin1 },
  { name: "BTC", icon: wltcoin2 },
  { name: "SOL", icon: wltcoin3 },
  { name: "BNB", icon: wltcoin4 },
  { name: "USDT", icon: wltcoin5 },
  { name: "USDC", icon: wltcoin6 },
];
const Dropcoins = [
  { name: "ETH", icon: wltcoin1 },
  { name: "BTC", icon: wltcoin2 },
  { name: "SOL", icon: wltcoin3 },
  { name: "BNB", icon: wltcoin4 },
  { name: "USDT", icon: wltcoin5 },
  { name: "USDC", icon: wltcoin6 },
];

function WalletSec() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState({
    name: "ETH",
    icon: wltcoin1,
  });
  const handleSelectCoin = (coin) => {
    setSelectedCoin(coin);
    setDropdownOpen(false);
  };
  return (
    <div className="pt-[2rem] pb-[61px] space-y-[28px]">
      <div
        style={{
          background: "rgba(247, 247, 247, 0.70)",
        }}
        className="max-w-[838px] space-y-[20px] rounded-[13px] px-[68px] pt-[46px] pb-[20px] min-h-[700px] border border-[#B0B0B0]   w-[100%] mx-auto "
      >
        <div
          className="px-[24px] py-[10px] space-y-[10px] border border-[#D3D3D3]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <h3 className="text-center text-[45px] font-[700]">$210,992 SOLD</h3>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[#444] text-[16px] font-[400] leading-[150%]">
                78.92% of softcap raised
              </span>
              <img src={info} alt="" />
            </div>
            <div className="bg-[#E5E7EB] w-[100%] h-[10px] rounded-[20px]">
              <div className="bg-[#E5AE00] w-[75%] h-[10px] rounded-[20px]"></div>
            </div>
            <div>
              <p className="text-[#444] text-end text-[16px] font-[400] leading-[150%]">
                $300,000
              </p>
            </div>
          </div>
        </div >
        <div
          className="px-[24px] py-[10px] space-y-[10px] border border-[#D3D3D3]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <h4 className="text-center text-[#444] text-[18px] font-[700]">
            Price Increase In
          </h4>
          <div className="flex justify-center space-x-[46px]">
            <div className=" space-y-[8px]">
              <p className="leading-[100%] text-center text-[#444] text-[58.784px] font-[700]">
                00
              </p>
              <p className="text-center text-[#444] text-[16px] font-[700]">
                DAYS
              </p>
            </div>
            <div className=" space-y-[8px]">
              <p className="leading-[100%] text-center text-[#444] text-[58.784px] font-[700]">
                20
              </p>
              <p className="text-center text-[#444] text-[16px] font-[700]">
                HOURS
              </p>
            </div>
            <div className=" space-y-[8px]">
              <p className="leading-[100%] text-center text-[#444] text-[58.784px] font-[700]">
                37
              </p>
              <p className="text-center text-[#444] text-[16px] font-[700]">
                MINS
              </p>
            </div>
            <div className=" space-y-[8px]">
              <p className="leading-[100%] text-center text-[#444] text-[58.784px] font-[700]">
                38
              </p>
              <p className="text-center text-[#444] text-[16px] font-[700]">
                SECS
              </p>
            </div>
          </div>
        </div>
        <div
          className="px-[24px] py-[20px] space-y-[10px] border border-[#D3D3D3]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <h4 className="text-center text-[#636363] text-[20px] leading-[75%] font-[700]">
            $BFX Listing Price = $0.01
          </h4>
        </div>
        <div
          className="px-[24px] flex justify-center py-[20px] space-x-[20px]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          {coins.map((coin, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                background:
                  activeIndex === index
                    ? "rgba(176, 176, 176, 0.7)"
                    : "rgba(176, 176, 176, 0.17)",
              }}
              className={`flex justify-center items-center p-[10px] space-x-1 cursor-pointer transition-all`}
            >
              <img
                className="w-[30px] h-[30px]"
                src={coin.icon}
                alt={coin.name}
              />
              <span className="text-[#545454] font-[700] leading-[30px]">
                {coin.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center py-[20px] space-x-[15px]">
          <hr className="h-[1px] w-[35%]" />
          <span className="text-[#636363] text-end text-[20px] font-[700] leading-[75%]">
            1 BFX = $0.002
          </span>
          <hr className="h-[1px] w-[35%]" />
        </div>
        <div className="space-y-[5px]">
          <label className="text-[#2F2F2F] text-[18px] font-[700] leading-[100%]">
            You Pay in USDT:
          </label>
          <div className="border-[2px] border-[#454545] p-2 flex justify-between items-center">
            <div className="relative max-w-[75px] ">
              <div
                className="bg-[#EFEFEF] justify-center flex items-center space-x-1 p-2 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  className="w-[30px] h-[30px]"
                  src={selectedCoin.icon}
                  alt={selectedCoin.name}
                />
                <img
                  src={arw}
                  alt="Dropdown Arrow"
                  className={`transform transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {dropdownOpen && (
                <div className="absolute top-[50px] left-0 bg-white rounded-md shadow-lg w-[75px] z-10">
                  {Dropcoins.map((coin, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSelectCoin(coin)}
                    >
                      <img
                        className="w-[30px] h-[30px]"
                        src={coin.icon}
                        alt="coin"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-[80%] flex items-center justify-end space-x-2">
              <input type="text" className="h-[50px] w-[80%] text-[24px] font-[700] outline-none text-end bg-[transparent] placeholder:text-[#000]" placeholder="1000" />
              <span className="text-[#545454] text-[18px] font-[700] leading-[50px]">
                USDT
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-[5px]">
          <label className="text-[#2F2F2F] text-[18px] font-[700] leading-[100%]">
          You Receive $BFX + <span className="text-[#299A00]">Novice Trading NFT</span>
          </label>
          <div className="border-[2px] border-[#454545] p-2 flex justify-between items-center">
            <div className="relative max-w-[75px] ">
              <div
                className="bg-[#EFEFEF] justify-center flex items-center space-x-1 p-2 cursor-pointer"
              >
                <img
                  className="w-[30px] h-[30px]"
                  src={bfxicn}
                  alt=""
                />
                <span className="text-[21px] text-[#2F2F2F]">=</span>
              </div>
            </div>
            <div className="w-[80%] flex items-center justify-end space-x-2">
              <input type="text" className="h-[50px] w-[80%] text-[24px] font-[700] outline-none text-end bg-[transparent] placeholder:text-[#000]" placeholder="26039.75" />
              <span className="text-[#545454] text-[18px] font-[700] leading-[50px]">
              BFX
              </span>
            </div>
          </div>
        </div>
        <div>
          <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[24px] font-[800] border border-[#E5AE00] hover:border-[#000] w-[100%] h-[65px]">
          Buy Now
          </button>
        </div>
        <div
          className="px-[24px] py-[20px] space-y-[15px] border border-[#939393]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <h4 className="text-center text-[#636363] text-[18px] leading-[75%] font-[700]">
          You get 10% more tokens!
          </h4>
          <h4 className="text-center text-[#636363] text-[18px] leading-[75%] font-[700]">
          Buy $1,500 more to unlock 20% bonus tokens
          </h4>
        </div>
        <div className="flex justify-center items-center space-x-[24px]">
          <p className="text-[18px] font-[700] underline cursor-pointer">Bonus Code</p>
          <p className="text-[18px] font-[700] underline cursor-pointer">Full Bonus Chart</p>
          <p className="text-[18px] font-[700] underline cursor-pointer"> 5% Referral Link</p>
        </div>
      </div>
      <div  className="max-w-[838px] space-y-[25px] rounded-[13px] px-[68px] pt-[20px] pb-[30px] border border-[#B0B0B0] w-[100%] mx-auto "
       style={{
        background: "rgba(237, 237, 237, 0.40)",
      }}>
      <div
          className=" space-y-[25px]"
         
        >
          <h4 className="text-center text-[#808080] text-[20px] leading-[75%] font-[600]">
          $BFX launches on Multiple Top-Tier Exchanges
          </h4>
          <div className="flex justify-center space-x-[20px]">
            <div className="p-2 flex max-w-[129px] h-[50px] rounded-[9px] justify-center items-ccenter space-x-[8px] border border-[#ABABAB]"
            style={{
              background:"rgba(176, 176, 176, 0.17)"
            }}
            >
              <img src={swpicon} className="w-[30px] h-[30px]" alt="" />
              <h4 className="text-[14px] text-[#545454] font-[700] leading-[214.286%]">UNISWAP</h4>
            </div>
            <div className="p-2 flex max-w-[129px] h-[50px] rounded-[9px] justify-center items-ccenter space-x-[8px] border border-[#ABABAB]" 
            style={{
              background:"rgba(176, 176, 176, 0.17)",
              filter:"blur(6.5px",
              opacity: "0.73"
            }}
            >
             <div className="w-[30px] h-[30px] bg-[#F0B90B] rounded-full"></div>
              <h4 className="text-[14px] text-[#545454] font-[700] leading-[214.286%]">UNISWAP</h4>
            </div>
            <div className="p-2 flex max-w-[129px] h-[50px] rounded-[9px] justify-center items-ccenter space-x-[8px] border border-[#ABABAB]"
          style={{
            background:"rgba(176, 176, 176, 0.17)",
            filter:"blur(6.5px",
            opacity: "0.73"
          }}
          >
           <div className="w-[30px] h-[30px] bg-[#0052FE] rounded-full"></div>
              <h4 className="text-[14px] text-[#545454] font-[700] leading-[214.286%]">UNISWAP</h4>
            </div>
            <div className="p-2 flex max-w-[129px] h-[50px] rounded-[9px] justify-center items-ccenter space-x-[8px] border border-[#ABABAB]"
            style={{
              background:"rgba(176, 176, 176, 0.17)",
              filter:"blur(6.5px",
              opacity: "0.73"
            }}
            >
             <div className="w-[30px] h-[30px] bg-[#00F0FF] rounded-full"></div>
              <h4 className="text-[14px] text-[#545454] font-[700] leading-[214.286%]">UNISWAP</h4>
            </div>
            <div className="p-2 flex max-w-[129px] h-[50px] rounded-[9px] justify-center items-ccenter space-x-[8px] border border-[#ABABAB]"
            style={{
              background:"rgba(176, 176, 176, 0.17)",
              filter:"blur(6.5px",
              opacity: "0.73"
            }}
            >
             <div className="w-[30px] h-[30px] bg-[#7635F5] rounded-full"></div>
              <h4 className="text-[14px] text-[#545454] font-[700] leading-[214.286%]">UNISWAP</h4>
            </div>
            
          </div>
        </div>
      </div>
      <div  className="max-w-[838px] space-y-[25px] rounded-[13px] px-[38px] pt-[20px] pb-[25px] border border-[#B0B0B0] w-[100%] mx-auto "
       style={{
        background: "rgba(237, 237, 237, 0.40)",
      }}>
      <div
          className="flex justify-center items-center space-x-[20px]"
         
        >
          <h4 className="text-center text-[#808080] text-[20px] leading-[75%] font-[600]">
          Audited by the Leading Blockchain Security Company  
          </h4>
          <div>
            <img src={cer} className="w-[174px]"  alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletSec;
