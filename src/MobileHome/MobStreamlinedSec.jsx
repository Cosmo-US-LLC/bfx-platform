import React from "react";
import { useTranslation } from 'react-i18next';

import icon1 from "../assets/StreamlinedSec/sticn (3).svg";
import icon2 from "../assets/StreamlinedSec/sticn (2).svg";
import icon3 from "../assets/StreamlinedSec/sticn (1).svg";
import lines from "../assets/StreamlinedSec/linesmob.png";

function MobStreamlinedSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[24px]  pb-[24px] overflow-hidden">
      <div className="space-y-[30px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[32px] text-center font-[700] leading-[95%] text-[#181A20] tracking-[-1px]">
            {t('streamlined.title')}
          </h3>
          <p className="text-[15px] font-[400] max-w-[793px] text-center mx-auto w-[100%] leading-[130%] text-[#181A20] tracking-[-0.32px]">
            {t('streamlined.description')}
          </p>
        </div>
        <div className="flex justify-between relative items-center">
            <div className=" absolute left-[14.5%] top-[5.4%] w-[100%] mx-auto">
                <img src={lines} className="" alt="" />
            </div>
          <div className="max-w-[106px] w-[100%] space-y-[9px] relative z-1">
            <div className="flex bg-[#F0F0F0] !mb-[31px] rounded-[11px] px-[9px] py-[12px] justify-end space-x-2">
                <h3 className="text-[8px] font-[600] text-[#000] tracking-[-0.32px]">{t('streamlined.tradingPlatform')}</h3>
                <img className="h-[11px] w-[12.283px]" src={icon1} alt="" />
            </div>
            <div className="bg-[#F0F0F0] rounded-[11px] px-[9px] py-[12px]">
                <h3 className="text-[8px] font-[600] text-right text-[#000] tracking-[-0.32px]">{t('streamlined.trading')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[11px] px-[9px] py-[12px]">
                <h3 className="text-[8px] font-[600] text-right text-[#000] tracking-[-0.32px]">{t('streamlined.onboardingFlow')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[11px] px-[9px] py-[12px]">
                <h3 className="text-[8px] font-[600] text-right text-[#000] tracking-[-0.32px]">{t('streamlined.userCommunication')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[11px] px-[9px] py-[12px]">
                <h3 className="text-[8px] font-[600] text-right text-[#000] tracking-[-0.32px]">{t('streamlined.demoAccount')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[11px] px-[9px] py-[12px]">
                <h3 className="text-[8px] font-[600] text-right text-[#000] tracking-[-0.32px]">{t('streamlined.liveChat')}</h3>
            </div>
          </div>
          <div className="max-w-[106px] mt-[80px] relative z-1 flex items-end w-[100%] ">
            <div className="bg-[#F0F0F0] w-[100%] flex flex-col items-center rounded-[21.052px] px-[20px] spacy-y-[18px] py-[22px]">
                <img className="h-[30.424px] w-[30.424px]" src={icon2} alt="" />
                <h3 className="text-[8px] font-[600] text-center text-[#000] tracking-[-0.32px]">{t('streamlined.centerLabel')}</h3>
            </div>
            
          </div>
          <div className="max-w-[106px] w-[100%] space-y-[9px] relative z-1">
          <div className="flex bg-[#F0F0F0] !mb-[31px] rounded-[11px] px-[9px] py-[12px] justify-start space-x-2">
                <img src={icon3} className="h-[11px] w-[12.283px]"  alt="" />
                <h3 className="text-[10px] font-[600] text-[#000] tracking-[-0.32px]">{t('streamlined.backOffice')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[11px] px-[9px] py-[12px]">
                <h3 className="text-[8px] font-[600] text-start text-[#000] tracking-[-0.32px]">{t('streamlined.marketData')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[11px] px-[9px] py-[12px]">
                <h3 className="text-[8px] font-[600] text-start text-[#000] tracking-[-0.32px]">{t('streamlined.affiliateSystem')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[11px] px-[9px] py-[12px]">
                <h3 className="text-[8px] font-[600] text-start text-[#000] tracking-[-0.32px]">{t('streamlined.antiFraud')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[11px] px-[9px] py-[12px]">
                <h3 className="text-[8px] font-[600] text-start text-[#000] tracking-[-0.32px]">{t('streamlined.education')}</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-[11px] px-[9px] py-[12px]">
                <h3 className="text-[8px] font-[600] text-start text-[#000] tracking-[-0.32px]">{t('streamlined.ticketSystem')}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobStreamlinedSec;
