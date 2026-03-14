import React from "react";
import { useTranslation } from 'react-i18next';
import takeimg1 from "../assets/TradeOver/takeimg (5).webp";
import takeimg2 from "../assets/TradeOver/takeimg (1).png";
import takeimg3 from "../assets/TradeOver/takeimg (2).webp";
import takeimg4 from "../assets/TradeOver/takeimg (3).webp";
import takeimg5 from "../assets/TradeOver/takeimg (4).webp";

function TradeOverSec() {
  const { t } = useTranslation();

  const cardData = [
    {
      img: takeimg1,
      title: t('tradeOver.cryptoTitle'),
      subtitle: t('tradeOver.cryptoDesc'),
    },
    {
      img: takeimg2,
      title: t('tradeOver.stocksTitle'),
      subtitle: t('tradeOver.stocksDesc'),
    },
    {
      img: takeimg3,
      title: t('tradeOver.forexTitle'),
      subtitle: t('tradeOver.forexDesc'),
    },
    {
      img: takeimg4,
      title: t('tradeOver.commoditiesTitle'),
      subtitle: t('tradeOver.commoditiesDesc'),
    },
    {
      img: takeimg5,
      title: t('tradeOver.indicesTitle'),
      subtitle: t('tradeOver.indicesDesc'),
    },
  ];

  return (
    <div className="  bg-[#fff]">
      <div className="max-w-[1200px] h-[550px] w-[100%] flex flex-col justify-center mx-auto space-y-[46px]">
        <h3 className="text-[30px] font-[700] leading-[114%] text-center capitalize">
          {t('tradeOver.title')}
        </h3>
        <div className="flex justify-center space-x-[14px]">
          {cardData.map((item) => (
            <div
              className="border rounded-[8px] border-[#9D9D9D] px-[14px] pt-[14px] pb-[17px] max-w-[233px] w-[100%] space-y-[13px]"
              style={{
                background: "rgba(241, 241, 241, 0.36)",
              }}
            >
              <div className="">
                <img src={item.img} className="min-h-[167px] w-[100%] object-cover" alt="" />
              </div>
              <div className="space-y-[13px]">
                <h3 className="text-[16px] text-[#181A20] font-[700] leading-[140%] tracking-[-0.32px]">
                  {item.title}
                </h3>
                <p className="text-[14px] font-[400] text-[#181A20] leading-[127.778%] tracking-[-0.32px]">
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

export default TradeOverSec;
