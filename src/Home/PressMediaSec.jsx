import React from "react";
import { useTranslation } from 'react-i18next';

import medai1 from "../assets/Press&Media/medicn (3).svg";
import medai2 from "../assets/Press&Media/medicn (2).svg";
import medai3 from "../assets/Press&Media/medicn (1).svg";

function PressMediaSec() {
  const { t } = useTranslation();

  return (
    <div className="  bg-[#fff] ">
      <div className="max-w-[1076px] h-[463px] flex flex-col justify-center relative space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t('pressMedia.title')}
          </h3>
        </div>
        <div className="flex justify-center gap-x-4">
          <div className="bg-[#FBFBFB] max-w-[311px] rounded-[8px]  px-[17.6px] py-[37px] w-[100%] ">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai1} className="h-[30px]" alt="" />
              </div>
              <p className="text-[13px] text-center leading-[187.5%] font-[400]">
              {t('pressMedia.quote1')}
              </p>
            </div>
          </div>
          <div className="bg-[#FBFBFB] max-w-[311px] rounded-[8px]  px-[17px] py-[37px] w-[100%] ">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai2} className="h-[30px]" alt="" />
              </div>
              <p className="text-[13px] text-center leading-[187.5%] font-[400]">
              {t('pressMedia.quote2')}
              </p>
            </div>
          </div>
          <div className="bg-[#FBFBFB] max-w-[311px] rounded-[8px]  px-[17.6px] pt-[37px] pb-[29px] w-[100%] ">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai3} className="h-[30px]" alt="" />
              </div>
              <p className="text-[13px] text-center leading-[187.5%] font-[400]">
              {t('pressMedia.quote3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressMediaSec;
