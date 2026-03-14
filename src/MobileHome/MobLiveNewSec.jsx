import React from "react";
import { useTranslation } from 'react-i18next';

import liveming from "../assets/LiveNews/liveimgmob.png";

function MobLiveNewSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[24px]  pb-[24px] bg-[#FFF]">
      <div className=" w-[90%] mx-auto ">
          <div className="space-y-[20px]">
            <h3 className="text-[32px] text-center font-[700] leading-[95%] text-[#181A20] tracking-[-1px]">
            {t('liveNews.title')}
            </h3>
            <p className="text-[15px] font-[400] max-w-[330px] mx-auto text-center leading-[130%] text-[#181A20] ">
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

export default MobLiveNewSec;
