import React from "react";

import medai1 from "../assets/Press&Media/medicn (3).svg";
import medai2 from "../assets/Press&Media/medicn (2).svg";
import medai3 from "../assets/Press&Media/medicn (1).svg";

function PressMediaSec() {
  return (
    <div className="  bg-[#fff] ">
      <div className="max-w-[1076px] h-[463px] flex flex-col justify-center relative space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Press & Media
          </h3>
        </div>
        <div className="flex justify-center gap-x-4">
          <div className="bg-[#FBFBFB] max-w-[311px] rounded-[8px]  px-[17.6px] py-[37px] w-[100%] ">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai1} className="h-[30px]" alt="" />
              </div>
              <p className="text-[13px] text-center leading-[187.5%] font-[400]">
              BlockchainFX is quickly becoming the go-to trading platform in 2025, offering access to 500+ assets and rewarding benefits for users.
              </p>
            </div>
          </div>
          <div className="bg-[#FBFBFB] max-w-[311px] rounded-[8px]  px-[17px] py-[37px] w-[100%] ">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai2} className="h-[30px]" alt="" />
              </div>
              <p className="text-[13px] text-center leading-[187.5%] font-[400]">
              BlockchainFX is set to revolutionise the trading landscape as the first all-in-one crypto trading platform.
              </p>
            </div>
          </div>
          <div className="bg-[#FBFBFB] max-w-[311px] rounded-[8px]  px-[17.6px] pt-[37px] pb-[29px] w-[100%] ">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai3} className="h-[30px]" alt="" />
              </div>
              <p className="text-[13px] text-center leading-[187.5%] font-[400]">
              BlockchainFX is the first trading app that lets users earn daily USDT passive income directly from trading fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressMediaSec;

// import React from "react";

// import medai1 from "../assets/Press&Media/media (1).svg";
// import medai2 from "../assets/Press&Media/media (2).svg";
// import medai3 from "../assets/Press&Media/media (3).svg";

// function PressMediaSec() {
//   return (
//     <div className="pt-[77px] bg-[#fff] space-y-[35px] bg-[#FAFAFA] pb-[80px]">
//       <div className="max-w-[1222px] relative space-y-[40px] w-[100%] mx-auto ">
//         <div className="space-y-[30px]">
//           <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
//             Press & Media
//           </h3>
//         </div>
//         <div className="flex justify-between">
//           <div className="bg-[#fff] max-w-[393px] rounded-[8px]  px-[20px] py-[37px] w-[100%] border border-[#F1F1F1]">
//             <div className="space-y-[32px]">
//               <div className="flex items-center justify-center h-[30px]">
//                 <img src={medai1} className="h-[30px]" alt="" />
//               </div>
//               <p className="text-[16px] text-center leading-[187.5%] font-[400]">
//               BlockchainFX can be described as a hybrid of Binance and Robinhood, delivering a seamless trading experience with exceptional speed and simplicity, powered by instant crypto deposits and trading.
//               </p>
//             </div>
//           </div>
//           <div className="bg-[#FBFBFB] max-w-[393px] rounded-[8px]  px-[20px] py-[37px] w-[100%] border border-[#F1F1F1]">
//             <div className="space-y-[32px]">
//               <div className="flex items-center justify-center h-[30px]">
//                 <img src={medai2} className="h-[50px]" alt="" />
//               </div>
//               <p className="text-[16px] text-center leading-[187.5%] font-[400]">
//               BFX is pioneering a new era of cryptocurrency by seamlessly connecting it to global markets such as Forex, Commodities, and ETFs. This unprecedented integration creates endless trading opportunities for traders.
//               </p>
//             </div>
//           </div>
//           <div className="bg-[#fff] max-w-[393px] rounded-[8px]  px-[20px] py-[37px] w-[100%] border border-[#F1F1F1]">
//             <div className="space-y-[32px]">
//               <div className="flex items-center justify-center h-[30px]">
//                 <img src={medai3} className="h-[30px]" alt="" />
//               </div>
//               <p className="text-[16px] text-center leading-[187.5%] font-[400]">
//               BlockchainFX gives 560 million crypto users direct access to global financial markets, enabling seamless transitions across asset classes like Silver and BTC in seconds with advanced trading tools.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PressMediaSec;
