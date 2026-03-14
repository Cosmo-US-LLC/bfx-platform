import React from "react";
import { useTranslation } from 'react-i18next';
import account from "../assets/HowToStart/account.svg";
import trade from "../assets/HowToStart/trade.svg";
import practice from "../assets/HowToStart/practice.svg";
import withdraw from "../assets/HowToStart/withdraw.webp";

function HowToStart() {
  const { t } = useTranslation();
  return (
    <div id="start">
      <div className="bg-[#FFF]">
        <div className="max-w-[1200px] h-[480px] flex flex-col justify-center px-12 space-y-[60px] w-[100%] mx-auto ">
          <div className="space-y-[20px]">
            <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
              {t('howToStart.title')}
            </h3>
            <p className="text-[14px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[142%] text-[#181A20] tracking-[-0.32px]">
              {t('howToStart.subtitle')}
            </p>
          </div>

          <div className="flex justify-center items-center gap-[85px]">
            <div>
              <img
                src={account}
                alt="Card"
                className="h-[48px] w-[48px] mb-5"
              />
              <h4 className="text-[16px] font-[700] leading-[28px] mb-3">
                {t('howToStart.step1Title')}
              </h4>
              <p className="text-[14px] leading-[23px]">
                {t('howToStart.step1Desc')}
              </p>
            </div>

            <div>
              <img
                src={practice}
                alt="Card"
                className="h-[48px] w-[48px] mb-5"
              />
              <h4 className="text-[16px] font-[700] leading-[28px] mb-3">
                {t('howToStart.step2Title')}
              </h4>
              <p className="text-[14px] leading-[23px]">
                {t('howToStart.step2Desc')}
              </p>
            </div>

            <div>
              <img src={trade} alt="Card" className="h-[48px] w-[50px] mb-5" />
              <h4 className="text-[16px] font-[700] leading-[28px] mb-3">
                {t('howToStart.step3Title')}
              </h4>
              <p className="text-[14px] leading-[23px]">
                {t('howToStart.step3Desc')}
              </p>
            </div>

            <div>
              <img src={withdraw} alt="Card" className="h-[48px] w-[50px] mb-5" />
              <h4 className="text-[16px] font-[700] leading-[28px] mb-3">
                {t('howToStart.step4Title')}
              </h4>
              <p className="text-[14px] leading-[23px]">
                {t('howToStart.step4Desc')}
              </p>
            </div>

          </div>
        </div>
      </div>

      <div id="demo" className="bg-[#FBFBFB] py-[45px]">
        <div className="flex justify-around max-w-[1200px] w-[100%] mx-auto">
          <div className="space-y-[15px]">
            <h2 className="text-[30px] font-[600] leading-[35px] tracking-[-1px]">
              {t('howToStart.demoTitle')}{" "}
              <span className="font-[800] text-[#E5AE00]">{t('howToStart.demoHighlight')}</span>
            </h2>
            <p className="text-[16px] leading-[23px]">
              {t('howToStart.demoSubtitle')}
            </p>
          </div>
          <div className="flex justify-center items-center space-x-[17px] w-[40%]">
            <a href="https://trade.blockfx.com/traderoom" target="_blank" rel="noopener noreferrer" className="max-w-[200px] w-[100%]">
            <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] w-[100%] h-[50px]">
              {t('howToStart.demoCtaPrimary')}
            </button>
            </a>
            <a href="https://trade.blockfx.com/traderoom" target="_blank" rel="noopener noreferrer" className="!w-[200px]">
            <button className="hover:text-white hover:bg-[#E5AE00] px-[6px] text-black bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px] !w-[100%]  h-[50px]">
              {t('howToStart.demoCtaSecondary')}
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToStart;
