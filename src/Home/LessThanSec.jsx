import React from "react";
import { useTranslation } from 'react-i18next';

import graph from "../assets/LessThanSec/Frame 1410125779 (1).png";

function LessThanSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[98px] space-y-[35px] pb-[92px] bg-[#e8e8e885]">
      <div className="max-w-[1220px] space-y-[60px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t('lessThan.title')}
          </h3>
          <p className="text-[20px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            {t('lessThan.description')}
          </p>
        </div>
        <div className="space-y-[70px]">
          <h4 className="text-[20px] space-y-[70px] font-[700] text-center leading-[130%] text-[#181A20] tracking-[-1px]">
            {t('lessThan.chartTitle')}
          </h4>
          <div className="relative">
            <div className="flex justify-center">
              <img src={graph} alt="" />
            </div>
            <p className="text-[#6F6F6F] top-0 left-[18%] absolute text-[20px] font-[700] tracking-[-0.787px]">
              {t('lessThan.labelBonds')}
            </p>
            <p className="text-[#6F6F6F] absolute top-[12%] left-[10%] text-[20px] font-[700] tracking-[-0.787px]">
              {t('lessThan.labelUsStocks')}
            </p>
            <p className="text-[#6F6F6F] absolute top-[24%] left-[6%] text-[20px] font-[700] tracking-[-0.787px]">
              {t('lessThan.labelCommodities')}
            </p>
            <p className="text-[#6F6F6F] absolute top-[35%] left-[10%]  text-[20px] font-[700] tracking-[-0.787px]">
              {t('lessThan.labelCrypto')}
            </p>
            <p className="text-[#6F6F6F] absolute bottom-[7%] right-[13%]  text-[20px] font-[700] tracking-[-0.787px]">
              {t('lessThan.labelForex')}
            </p>
          </div>
          <div className="max-w-[887px] pt-[80px] flex justify-between items-center mx-auto w-[100%]">
            <div className="flex items-center space-x-2">
              <div className="w-[36px] h-[36px] bg-[#E9AD2F] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[20px] font-[700] tracking-[-1px] ">
                {t('lessThan.legendForex')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[36px] h-[36px] bg-[#DCDCDC] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[20px] font-[700] tracking-[-1px] ">
                {t('lessThan.legendBonds')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[36px] h-[36px] bg-[#B6B6B6] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[20px] font-[700] tracking-[-1px] ">
                {t('lessThan.legendUsStock')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[36px] h-[36px] bg-[#7DBB6C] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[20px] font-[700] tracking-[-1px] ">
                {t('lessThan.legendCommodities')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[36px] h-[36px] bg-[#A36E00] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[20px] font-[700] tracking-[-1px] ">
                {t('lessThan.legendCrypto')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessThanSec;
