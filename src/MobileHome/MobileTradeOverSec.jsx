import React from "react";
import takeimg1 from "../assets/TradeOver/takeimg (5).png";
import takeimg2 from "../assets/TradeOver/takeimg (1).png";
import takeimg3 from "../assets/TradeOver/takeimg (2).png";
import takeimg4 from "../assets/TradeOver/takeimg (3).png";
import takeimg5 from "../assets/TradeOver/takeimg (4).png";

const cardData = [
  {
    img: "/mobile/trade-over/crypto.png",
    title: "Crypto",
    subtitle:
      "Trade BTC, ETH, SOL, PEPE, DOGE, and more with leverage and advanced trading tools.",
  },
  {
    img: "/mobile/trade-over/stocks.png",
    title: "Stocks",
    subtitle:
      "Apple, Tesla, Nvidia, Netflix, Coca Cola and more. Buy your favorite stock in seconds. ",
  },
  {
    img: "/mobile/trade-over/forex.png",
    title: "Forex",
    subtitle:
      "Over 60 currency pairs to trade, including USD, EUR, JPY, GBP, and many more.",
  },
  {
    img: "/mobile/trade-over/commodities.png",
    title: "Commodities",
    subtitle:
      "Gold, Silver, Oil, Sugar and more. Diversify your portfolio with raw materials.",
  },
  {
    img: "/mobile/trade-over/indices.png",
    margin: "max-w-[264px] mx-0",
    title: "Indices",
    subtitle:
      "Dow Jones, S&P500,Nasdaq, DAX, CAC, Trade the mostpopular indices.",
  },
];

function MobileTradeOverSec() {
  return (
    <div className="bg-white px-[18px] py-[24px]">
      <div className="w-[90%] mx-auto space-y-[24px]">
        <h3 className="text-[32px] font-[700] leading-[40px] pt-2 text-center">
          Trade Over 500 <br />
          Different Assets
        </h3>
        <div className="space-y-[20px] w-fit mx-auto">
          {cardData.map((item) => (
            <div
              className={`border rounded-[8px] border-[#9D9D9D] px-[14px] pt-[14px] pb-[14px] max-w-[288px] space-y-[13px] mx-auto ${item?.margin}`}
              style={{
                background: "rgba(241, 241, 241, 0.36)",
              }}
            >
              <div className="w-[100%]">
                <img
                  src={item.img}
                  className={`w-[100%] rounded-[8px]`}
                  alt=""
                />
              </div>
              <div className="space-y-[13px]">
                <h3 className="text-[20px] text-[#181A20] font-[600] leading-[140%] tracking-[-0.32px]">
                  {item.title}
                </h3>
                <p className="text-[15px] font-[400] text-[#181A20] leading-[127.778%] tracking-[-0.32px]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileTradeOverSec;
