import React from "react";
import { useTranslation } from 'react-i18next';
import takeimg1 from "../assets/TradeOver/takeimg (5).png";
import takeimg2 from "../assets/TradeOver/takeimg (1).png";
import takeimg3 from "../assets/TradeOver/takeimg (2).png";
import takeimg4 from "../assets/TradeOver/takeimg (3).png";
import takeimg5 from "../assets/TradeOver/takeimg (4).png";

function MobileTradeOverSec() {
  const { t } = useTranslation();

  const cardData = [
    {
        img:takeimg1,
        title: t('tradeOver.cryptoTitle'),
        subtitle: t('tradeOver.cryptoDesc')
    },
    {
        img:takeimg2,
        title: t('tradeOver.stocksTitle'),
        subtitle: t('tradeOver.stocksDesc')
    },
    {
        img:takeimg3,
        title: t('tradeOver.forexTitle'),
        subtitle: t('tradeOver.forexDesc')
    },
    {
        img:takeimg4,
        title: t('tradeOver.commoditiesTitle'),
        subtitle: t('tradeOver.commoditiesDesc')
    },
    {
        img:takeimg5,
        title: t('tradeOver.indicesTitle'),
        subtitle: t('tradeOver.indicesDesc')
    },
  ];

  return (
    <div className="bg-white px-[18px] py-[24px]">
      <div className="w-[90%] mx-auto space-y-[24px]">
        <h3 className="text-[32px] font-[700] leading-[40px] pt-2 text-center">
          {t('tradeOver.title')}
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
