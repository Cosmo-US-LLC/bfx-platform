import React from "react";
import { useTranslation } from 'react-i18next';

import copy from "../assets/TokenAllocationSec/fa-solid_copy.svg";

function MobTokenDetailsSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[24px]  bg-[#FAFAFA] pb-[24px]">
      <div className="relative space-y-[20px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          {t('tokenDetails.title')}
          </h3>
          <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          {t('tokenDetails.description')}
          </p>
        </div>
      <div className="space-y-[20px]">
      <div className="w-[100%] mx-auto space-x-[2rem] flex justify-between items-center ">
        <div className=" w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-[#000]">
            <h4 className="text-[#444] text-[12px] font-[400]">{t('tokenDetails.tokenNameLabel')}</h4>
            <h3 className="text-[#444] text-[15px] font-[700]">{t('tokenDetails.tokenNameValue')}</h3>
        </div>
        <div className=" w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-[#000]">
            <h4 className="text-[#444] text-[12px] font-[400]">{t('tokenDetails.launchOnLabel')}</h4>
            <h3 className="text-[#444] text-[15px] font-[700]">{t('tokenDetails.launchOnValue')}</h3>
        </div>
       </div>
       <div className="w-[100%] mx-auto space-x-[2rem] flex justify-between items-center ">
        <div className=" w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-[#000]">
            <h4 className="text-[#444] text-[12px] font-[400]">{t('tokenDetails.tokenSymbolLabel')}</h4>
            <h3 className="text-[#444] text-[15px] font-[700]">{t('tokenDetails.tokenSymbolValue')}</h3>
        </div>
        <div className=" w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-[#000]">
            <h4 className="text-[#444] text-[12px] font-[400]">{t('tokenDetails.tokenTypeLabel')}</h4>
            <h3 className="text-[#444] text-[15px] font-[700]">{t('tokenDetails.tokenTypeValue')}</h3>
        </div>
       </div>
       <div className="w-[100%] mx-auto space-x-[2rem] flex justify-between items-center ">
       <div className=" w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-[#000]">
            <h4 className="text-[#444] text-[12px] font-[400]">{t('tokenDetails.decimalLabel')}</h4>
            <h3 className="text-[#444] text-[15px] font-[700]">{t('tokenDetails.decimalValue')}</h3>
        </div>
        <div className=" w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-[#000]">
            <h4 className="text-[#444] text-[12px] font-[400]">{t('tokenDetails.totalSupplyLabel')}</h4>
            <h3 className="text-[#444] text-[15px] font-[700]">{t('tokenDetails.totalSupplyValue')}</h3>
        </div>
       </div>
       <div className="w-[100%] mx-auto space-x-[2rem] flex justify-between items-center ">
        <div className="border px-[12px] rounded-[6px] w-[100%] pt-[12px] pb-[12px] border-[#000]">
            <h4 className="text-[#444] text-[12px] font-[400]">{t('tokenDetails.contractAddressLabel')}</h4>
            <h3 className="text-[#444] flex items-center text-[12px] font-[700]">0xfe588f4cfaf1126446d421cf00ec50cbe19b70cf <img src={copy} className="h-[18px] ml-2" alt="" /></h3>
        </div>
       </div>
      </div>
      </div>
    </div>
  );
}

export default MobTokenDetailsSec;
