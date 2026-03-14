import React from "react";
import { useTranslation } from 'react-i18next';

import rwdimg1 from "../assets/OurAwardSec/rwdimg (1).png";
import rwdimg2 from "../assets/OurAwardSec/rwdimg (2).webp";
import rwdimg3 from "../assets/OurAwardSec/rwdimg (3).webp";

function MobOurAwardSec() {
  const { t } = useTranslation();

  return (
    <div id="awards" className="bg-white py-[24px] px-[18px] pb-[64px]">
      <div className="relative space-y-[30px] w-[90%] mx-auto">
        <div className="space-y-[10px]">
          <h4 className="text-[16px] font-[400] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t('ourAwards.subtitle')}
          </h4>
          <h3 className="text-[28px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t('ourAwards.title')}
          </h3>
        </div>
        <div className="space-y-[30px]">
          <div
            className="overflow-hidden space-y-[10px] px-[20px] pt-[25px] pb-[10px] rounded-[16px] w-[100%] border border-[#9D9D9D]"
            style={{
              background: "rgba(241, 241, 241)",
              backdropFilter: "blur(49.51px)",
            }}
          >
            <div className="space-y-[8px] flex items-center justify-center flex-col relative mx-auto max-w-[250px]">
              <h3 className="relative z-10 text-[9px] text-center text-[#181A20] uppercase font-[700]">
                {t('ourAwards.award1Source')}
              </h3>
              <p className="relative z-10 text-[12px] text-center leading-[14px] uppercase text-[#181A20] font-[500] min-h-[28px] flex items-center">
                {t('ourAwards.award1Label')}
              </p>
              <img
                src={rwdimg1}
                className="absolute top-[-20px] h-auto w-full"
                alt=""
              />
            </div>
            <div className="flex justify-center pt-8">
              <img className="h-[200px] object-cover" src={rwdimg2} alt="" />
            </div>
          </div>
          <div
            className="overflow-hidden space-y-[10px] px-[20px] pt-[25px] pb-[10px] rounded-[16px] w-[100%] border border-[#9D9D9D]"
            style={{
              background: "rgba(241, 241, 241)",
              backdropFilter: "blur(49.51px)",
            }}
          >
            <div className="space-y-[8px] flex items-center justify-center flex-col relative mx-auto max-w-[250px]">
              <h3 className="relative z-10 text-[9px] text-center text-[#181A20] uppercase font-[700]">
                {t('ourAwards.award2Source')}
              </h3>
              <p className="relative z-10 text-[12px] text-center leading-[14px] uppercase text-[#181A20] font-[500] min-h-[28px] flex items-center">
                {t('ourAwards.award2Label')}
              </p>
              <img
                src={rwdimg1}
                className="absolute top-[-20px] h-auto w-full"
                alt=""
              />
            </div>
            <div className="flex justify-center pt-8">
              <img src={rwdimg3} className="w-full object-cover h-[200px]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobOurAwardSec;
