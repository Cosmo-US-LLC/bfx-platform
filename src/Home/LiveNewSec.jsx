import React from "react";
import { useTranslation } from 'react-i18next';

import liveming from "../assets/LiveNews/liveimg.png";

function LiveNewSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[98px]  pb-[92px] bg-[#FFF]">
      <div className="max-w-[1220px] w-[100%] mx-auto ">
          <div className="space-y-[20px]">
            <h3 className="text-[50px] text-center font-[700] leading-[95%] text-[#181A20] tracking-[-1px]">
            {t('liveNews.title')}
            </h3>
            <p className="text-[20px] font-[400] max-w-[832px] mx-auto w-[100%] leading-[130%] text-[#181A20] tracking-[-0.32px]">
            {t('liveNews.description')}
            </p>
          </div>
          <div>
            <img className="" src={liveming} alt="" />
          </div>
      </div>
    </div>
  );
}

export default LiveNewSec;
