import React from "react";
import { useTranslation } from 'react-i18next';

import graph from "../assets/LessThanSec/Frame 1410125779 (1).png";

function MobileLessThanSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[24px] pb-[24px] bg-[#e8e8e885]">
      <div className="space-y-[32px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t('lessThan.title')}
          </h3>
          <p className="text-[15px] font-[400]  w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            {t('lessThan.description')}
          </p>
        </div>
        <div className="space-y-[70px]">
          <h4 className="text-[15px] space-y-[70px] font-[700] text-center leading-[130%] text-[#181A20] tracking-[-1px]">
            {t('lessThan.chartTitle')}
          </h4>
          <div className="relative">
            <div className="flex justify-end">
              <img src={graph} className="max-w-[236px] max-h-[236px]" alt="" />
            </div>
            <p className="text-[#6F6F6F] top-[-19%] left-[41%] absolute leading-[110%] text-[15px] font-[700] tracking-[-0.787px]">
              {t('lessThan.labelBonds')}
            </p>
            <p className="text-[#6F6F6F] leading-[110%] absolute top-[-8%] left-[4%] text-[15px] font-[700] tracking-[-0.787px]">
              {t('lessThan.labelUsStocks')}
            </p>
            <p className="text-[#6F6F6F] leading-[110%] absolute top-[11%] left-[0%] text-[15px] font-[700] tracking-[-0.787px]">
              {t('lessThan.labelCommodities')}
            </p>
            <p className="text-[#6F6F6F] leading-[110%] absolute top-[30%] left-[-%]  text-[15px] font-[700] tracking-[-0.787px]">
              {t('lessThan.labelCrypto')}
            </p>
            <p className="text-[#6F6F6F] leading-[110%] absolute bottom-[-19%] right-[13%]  text-[15px] font-[700] tracking-[-0.787px]">
              {t('lessThan.labelForex')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-[1rem] pt-[20px] mx-auto w-[100%]">
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#E9AD2F] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[15px] font-[700] tracking-[-1px] ">
                {t('lessThan.legendForex')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#DCDCDC] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[15px] font-[700] tracking-[-1px] ">
                {t('lessThan.legendBonds')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#B6B6B6] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[15px] font-[700] tracking-[-1px] ">
                {t('lessThan.legendUsStock')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#7DBB6C] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[15px] font-[700] tracking-[-1px] ">
                {t('lessThan.legendCommodities')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#A36E00] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[15px] font-[700] tracking-[-1px] ">
                {t('lessThan.legendCrypto')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileLessThanSec;
