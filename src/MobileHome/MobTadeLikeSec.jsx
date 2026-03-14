import React from "react";
import { useTranslation } from 'react-i18next';

import trd1cn1 from "../assets/TradeLikeSec/trdicn (1).svg";
import trd1cn2 from "../assets/TradeLikeSec/trdicn (2).svg";
import trd1cn3 from "../assets/TradeLikeSec/trdicn (3).svg";
import trd1cn4 from "../assets/TradeLikeSec/trdicn (4).svg";
import trd1cn5 from "../assets/TradeLikeSec/trdicn (5).svg";
import trd1cn6 from "../assets/TradeLikeSec/trdicn (6).svg";

function MobTadeLikeSec() {
  const { t } = useTranslation();
  return (
    <div className="py-[24px] bg-[#FAFAFA]">
      <div className="w-[90%] mx-auto">
        <div className="space-y-[32px]">
          <div className="space-y-[20px]">
            <h3 className="text-[32px] text-center font-[700] leading-[40px] text-[#181A20] tracking-[-1px] capitalize">
              {t('tradeLike.title')}
            </h3>
            <p className="text-[15px] text-center px-2 font-[400] leading-[130%] text-[#181A20] tracking-[-0.32px]">
              {t('tradeLike.description')}
            </p>
          </div>
          <div className="max-w-[600px] space-y-[16px] w-[100%]">
            <div
              style={{
                background: "rgba(241, 241, 241, 0.36)",
              }}
              className="flex justify-between items-center border border-[#9D9D9D] rounded-[100px] px-[23px] py-[20px]"
            >
              <div className="flex items-center space-x-8">
                <div className="max-w-[28.512px] w-[100%]">
                  <img src={trd1cn1} alt="" />
                </div>
                <h4 className="text-[15px] font-[600] text-[#181A20]">
                  {t('tradeLike.momentum')}
                </h4>
              </div>
              <div className="w-[58.807px] h-[27px] rounded-[100px] flex items-center justify-center border border-[#9D9D9D] bg-[#fff]">
                <h3 className="text-[15px] font-[600] text-center text-[#E5AE00]">
                  {t('tradeLike.momentumCount')}
                </h3>
              </div>
            </div>
            <div
              style={{
                background: "rgba(241, 241, 241, 0.36)",
              }}
              className="flex justify-between items-center border border-[#9D9D9D] rounded-[100px] px-[23px] py-[20px]"
            >
              <div className="flex items-center space-x-8">
                <div className="max-w-[28.512px] w-[100%]">
                  <img src={trd1cn2} alt="" />
                </div>
                <h4 className="text-[15px] font-[600] text-[#181A20]">{t('tradeLike.trend')}</h4>
              </div>
              <div className="w-[58.807px] h-[27px] rounded-[100px] flex items-center justify-center border border-[#9D9D9D] bg-[#fff]">
                <h3 className="text-[15px] font-[600] text-center text-[#E5AE00]">
                  {t('tradeLike.trendCount')}
                </h3>
              </div>
            </div>
            <div
              style={{
                background: "rgba(241, 241, 241, 0.36)",
              }}
              className="flex justify-between items-center border border-[#9D9D9D] rounded-[100px] px-[23px] py-[20px]"
            >
              <div className="flex items-center space-x-8">
                <div className="max-w-[28.512px] w-[100%]">
                  <img src={trd1cn3} alt="" />
                </div>
                <h4 className="text-[15px] font-[600] text-[#181A20]">
                  {t('tradeLike.volatility')}
                </h4>
              </div>
              <div className="w-[58.807px] h-[27px] rounded-[100px] flex items-center justify-center border border-[#9D9D9D] bg-[#fff]">
                <h3 className="text-[15px] font-[600] text-center text-[#E5AE00]">
                  {t('tradeLike.volatilityCount')}
                </h3>
              </div>
            </div>
            <div
              style={{
                background: "rgba(241, 241, 241, 0.36)",
              }}
              className="flex justify-between items-center border border-[#9D9D9D] rounded-[100px] px-[23px] py-[20px]"
            >
              <div className="flex items-center space-x-8">
                <div className="max-w-[28.512px] w-[100%]">
                  <img src={trd1cn4} alt="" />
                </div>
                <h4 className="text-[15px] font-[600] text-[#181A20]">
                  {t('tradeLike.movingAverages')}
                </h4>
              </div>
              <div className="w-[58.807px] h-[27px] rounded-[100px] flex items-center justify-center border border-[#9D9D9D] bg-[#fff]">
                <h3 className="text-[15px] font-[600] text-center text-[#E5AE00]">
                  {t('tradeLike.movingAveragesCount')}
                </h3>
              </div>
            </div>
            <div
              style={{
                background: "rgba(241, 241, 241, 0.36)",
              }}
              className="flex justify-between items-center border border-[#9D9D9D] rounded-[100px] px-[23px] py-[20px]"
            >
              <div className="flex items-center space-x-8">
                <div className="max-w-[28.512px] w-[100%]">
                  <img src={trd1cn5} alt="" />
                </div>
                <h4 className="text-[15px] font-[600] text-[#181A20]">
                  {t('tradeLike.volume')}
                </h4>
              </div>
              <div className="w-[58.807px] h-[27px] rounded-[100px] flex items-center justify-center border border-[#9D9D9D] bg-[#fff]">
                <h3 className="text-[15px] font-[600] text-center text-[#E5AE00]">
                  {t('tradeLike.volumeCount')}
                </h3>
              </div>
            </div>
            <div
              style={{
                background: "rgba(241, 241, 241, 0.36)",
              }}
              className="flex justify-between items-center border border-[#9D9D9D] rounded-[100px] px-[23px] py-[20px]"
            >
              <div className="flex items-center space-x-8">
                <div className="max-w-[28.512px] w-[100%]">
                  <img src={trd1cn6} alt="" />
                </div>
                <h4 className="text-[15px] font-[600] text-[#181A20]">
                  {t('tradeLike.others')}
                </h4>
              </div>
              <div className="w-[58.807px] h-[27px] rounded-[100px] flex items-center justify-center border border-[#9D9D9D] bg-[#fff]">
                <h3 className="text-[15px] font-[600] text-center text-[#E5AE00]">
                  {t('tradeLike.othersCount')}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center px-2 gap-[12px]">
            <a href="https://trade.blockfx.com/traderoom" target="_blank" rel="noopener noreferrer" className="w-[100%] ">
            <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[700] border border-[#E5AE00] hover:border-[#000] m-0 rounded-[8px] w-[100%] h-[40px]">
              {t('tradeLike.ctaPrimary')}
            </button>
            </a>
            <a href="https://trade.blockfx.com/traderoom" target="_blank" rel="noopener noreferrer" className="w-[100%] ">
            <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[14px] font-[700] border hover:border-[#E5AE00] border-[#000] rounded-[8px] w-[100%] h-[40px]">
              {t('tradeLike.ctaSecondary')}
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobTadeLikeSec;
