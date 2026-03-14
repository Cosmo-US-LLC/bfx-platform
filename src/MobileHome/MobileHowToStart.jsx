import React from "react";
import { useTranslation } from 'react-i18next';

function MobileHowToStart() {
  const { t } = useTranslation();
  return (
    <div id="start" className="space-y-[14px]">
      <div className="bg-white px-[18px] py-[24px] space-y-5">
        <div className="space-y-[12px] text-center">
          <h1 className="text-[32px] font-[700] leading-[40px]">
            {t('howToStart.title')}
          </h1>
          <p className="text-[15px] leading-[23px] text-[#181A20]">
            {t('howToStart.subtitle')}
          </p>
        </div>

        <div className="flex flex-col">
          <div className="p-5 space-y-[18px]">
            <img
              src="/mobile/how-start/account.svg"
              alt="Card Icon"
              className="h-[45px] w-[45px]"
            />
            <div className="space-y-[11px]">
              <h3 className="text-[18px] font-[600] leading-[28px]">
                {t('howToStart.step1Title')}
              </h3>
              <p className="text-[15px] leading-[23px]">
                {t('howToStart.step1Desc')}
              </p>
            </div>
          </div>

          <div className="p-5 space-y-[18px]">
            <img
              src="/mobile/how-start/chart.svg"
              alt="Card Icon"
              className="h-[45px] w-[45px]"
            />
            <div className="space-y-[11px]">
              <h3 className="text-[18px] font-[600] leading-[28px]">
                {t('howToStart.step2Title')}
              </h3>
              <p className="text-[15px] leading-[23px]">
                {t('howToStart.step2Desc')}
              </p>
            </div>
          </div>

          <div className="p-5 space-y-[18px]">
            <img
              src="/mobile/how-start/trade.svg"
              alt="Card Icon"
              className="h-[45px] w-[45px]"
            />
            <div className="space-y-[11px]">
              <h3 className="text-[18px] font-[600] leading-[28px]">
                {t('howToStart.step3Title')}
              </h3>
              <p className="text-[15px] leading-[23px]">
                {t('howToStart.step3Desc')}
              </p>
            </div>
          </div>
          <div className="p-5 space-y-[18px]">
            <img
              src="/mobile/how-start/withdraw.webp"
              alt="Card Icon"
              className="h-[45px] w-[45px]"
            />
            <div className="space-y-[11px]">
              <h3 className="text-[18px] font-[600] leading-[28px]">
              {t('howToStart.step4Title')}
              </h3>
              <p className="text-[15px] leading-[23px]">
              {t('howToStart.step4Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="demo" className="bg-[#FBFBFB] px-[19px] py-[30px]">
        <div className="space-y-[12px] text-center">
          <h2 className="text-[24px] font-[500] tracking-[-1px]">
            {t('howToStart.demoTitle')}{" "}
            <span className="text-[#E5AE00] font-[700]">
              {t('howToStart.demoHighlight')}
            </span>
          </h2>
          <p className="text-[15px] leading-[10px]">
          {t('howToStart.demoSubtitle')}
          </p>
        </div>

        <div className="flex justify-between items-center px-2 pt-[22px] pb-[12px] gap-[12px]">
          <a href="https://trade.blockfx.com/traderoom" target="_blank" rel="noopener noreferrer" className="w-[100%]">
          <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[700] border border-[#E5AE00] hover:border-[#000] m-0 rounded-[8px] w-[100%] h-[40px]">
            {t('howToStart.demoCtaPrimary')}
          </button>
          </a>
          <a href="https://trade.blockfx.com/traderoom" target="_blank" rel="noopener noreferrer" className="w-[100%]">
          <button className="hover:text-white hover:bg-[#E5AE00] px-[6px] text-black bg-transparent text-[14px] font-[700] border hover:border-[#E5AE00] border-[#000] rounded-[8px] w-[100%] h-[40px]">
            {t('howToStart.demoCtaSecondary')}
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileHowToStart;
