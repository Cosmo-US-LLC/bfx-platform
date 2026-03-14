import React from "react";
import { useTranslation } from 'react-i18next';

import rwdimg1 from "../assets/OurAwardSec/rwdimg (1).png";
import rwdimg2 from "../assets/OurAwardSec/rwdimg (2).webp";
import rwdimg3 from "../assets/OurAwardSec/rwdimg (3).webp";

function OurAwardSec() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FAFAFA] " id="win">
      <div className="max-w-[1032.65px] min-h-[690px] flex flex-col justify-center relative space-y-[20px] w-[100%] mx-auto py-[80px]">
        <div className="space-y-[1px]">
          <h4 className="text-[18px] capitalize font-[400] text-center leading-[30px] text-[#181A20] tracking-[-1px]">
            {t('ourAwards.subtitle')}
          </h4>
          <h3 className="text-[30px] font-[700] capitalize text-center leading-[58px] text-[#181A20] tracking-[-1px]">
            {t('ourAwards.title')}
          </h3>
        </div>
        <div className="flex flex-row justify-center gap-8 items-stretch">
          <div
            className="max-w-[318px] space-y-[10px] px-[35px] min-h-[443px] pt-[35px] rounded-[20px] w-[100%] border border-[#9D9D9D]"
            style={{
              background: "rgba(241, 241, 241)",
              backdropFilter: "blur(49.51113510131836px)",
            }}
          >
            <div className="space-y-[10px] flex items-center justify-center flex-col relative mx-auto">
              <h3 className="relative z-10 text-[10px] text-center text-[#181A20] uppercase font-[700]">
                {t('ourAwards.award1Source')}
              </h3>
              <p className="relative z-10 text-[13px] text-center leading-[15px] uppercase text-[#181A20] font-[500]">
                {t('ourAwards.award1Label')}
              </p>
              <img
                src={rwdimg1}
                className="absolute top-[-25px] h-auto w-full"
                alt=""
              />
            </div>
            <div className="flex justify-center pt-12">
              <img className="h-[263px] object-cover" src={rwdimg2} alt="" />
            </div>
          </div>
          <div
            className="max-w-[318px] space-y-[10px] px-[35px] min-h-[443px] pt-[35px] rounded-[20px] w-[100%] border border-[#9D9D9D]"
            style={{
              background: "rgba(241, 241, 241)",
              backdropFilter: "blur(49.51113510131836px)",
            }}
          >
            <div className="space-y-[10px] flex items-center justify-center flex-col relative">
              <h3 className="relative z-10 text-[10px] text-center text-[#181A20] uppercase font-[700]">
                {t('ourAwards.award2Source')}
              </h3>
              <p className="relative z-10 text-[13px] text-center leading-[15px] uppercase text-[#181A20] font-[500]">
                {t('ourAwards.award2Label')}
              </p>
              <img
                src={rwdimg1}
                className="absolute top-[-25px] h-auto w-full"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <img src={rwdimg3} className="w-full object-cover h-[266px] mt-12" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurAwardSec;
