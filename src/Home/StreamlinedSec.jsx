import React from "react";
import { useTranslation } from 'react-i18next';

import icon1 from "../assets/StreamlinedSec/sticn (3).svg";
import icon2 from "../assets/StreamlinedSec/sticn (2).svg";
import icon3 from "../assets/StreamlinedSec/sticn (1).svg";
import lines from "../assets/StreamlinedSec/lines.png";

function StreamlinedSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[98px]  pb-[92px]">
      <div className="max-w-[1220px] space-y-[61px] w-[100%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[50px] text-center font-[700] leading-[95%] text-[#181A20] tracking-[-1px]">
            {t('streamlined.title')}
          </h3>
          <p className="text-[20px] font-[400] max-w-[793px] text-center mx-auto w-[100%] leading-[130%] text-[#181A20] tracking-[-0.32px]">
            {t('streamlined.description')}
          </p>
        </div>
        <div className="flex justify-between relative items-center">
            <div className="max-w-[886px] absolute left-[13.1%] top-[6.4%] w-[100%] mx-auto">
                <img src={lines} className="min-h-[854px]" alt="" />
            </div>
          <div className="max-w-[339px] w-[100%] space-y-[30px] relative z-1">
            <div className="flex bg-[#F0F0F0] !mb-[107px] rounded-[40px] px-[32px] py-[42px] justify-end space-x-2">
                <h3 className="text-[25px] font-[600] text-[#000] tracking-[-0.32px]">{t('streamlined.tradingPlatform')}</h3>
                <img src={icon1} alt="" />
            </div>
            <div className="bg-[#F0F0F0] rounded-[40px] px-[32px] py-[42px]">
                <h3 className="text-[25px] font-[600] text-right text-[#000] tracking-[-0.32px]">{t('streamlined.trading')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[40px] px-[32px] py-[42px]">
                <h3 className="text-[25px] font-[600] text-right text-[#000] tracking-[-0.32px]">{t('streamlined.onboardingFlow')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[40px] px-[32px] py-[42px]">
                <h3 className="text-[25px] font-[600] text-right text-[#000] tracking-[-0.32px]">{t('streamlined.userCommunication')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[40px] px-[32px] py-[42px]">
                <h3 className="text-[25px] font-[600] text-right text-[#000] tracking-[-0.32px]">{t('streamlined.demoAccount')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[40px] px-[32px] py-[42px]">
                <h3 className="text-[25px] font-[600] text-right text-[#000] tracking-[-0.32px]">{t('streamlined.liveChat')}</h3>
            </div>
          </div>
          <div className="max-w-[363px] mt-[300px] relative z-1 flex items-end w-[100%] ">
            <div className="bg-[#F0F0F0] w-[100%] flex flex-col items-center rounded-[40px] px-[83px] spacy-y-[18px] py-[91px]">
                <img src={icon2} alt="" />
                <h3 className="text-[25px] font-[600] text-center text-[#000] tracking-[-0.32px]">{t('streamlined.centerLabel')}</h3>
            </div>

          </div>
          <div className="max-w-[340px] w-[100%] space-y-[30px] relative z-1">
          <div className="flex bg-[#F0F0F0] !mb-[107px] rounded-[40px] px-[32px] py-[42px] justify-start space-x-2">
                <img src={icon3} alt="" />
                <h3 className="text-[25px] font-[600] text-[#000] tracking-[-0.32px]">{t('streamlined.backOffice')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[40px] px-[32px] py-[42px]">
                <h3 className="text-[25px] font-[600] text-start text-[#000] tracking-[-0.32px]">{t('streamlined.marketData')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[40px] px-[32px] py-[42px]">
                <h3 className="text-[25px] font-[600] text-start text-[#000] tracking-[-0.32px]">{t('streamlined.affiliateSystem')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[40px] px-[32px] py-[42px]">
                <h3 className="text-[25px] font-[600] text-start text-[#000] tracking-[-0.32px]">{t('streamlined.antiFraud')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[40px] px-[32px] py-[42px]">
                <h3 className="text-[25px] font-[600] text-start text-[#000] tracking-[-0.32px]">{t('streamlined.education')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[40px] px-[32px] py-[42px]">
                <h3 className="text-[25px] font-[600] text-start text-[#000] tracking-[-0.32px]">{t('streamlined.ticketSystem')}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StreamlinedSec;
