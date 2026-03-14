import React from "react";
import { useTranslation } from 'react-i18next';

import vector1 from "../assets/Roadmap/vector (11).png";
import vector2 from "../assets/Roadmap/vector (10).png";
import vector3 from "../assets/Roadmap/vector (9).png";
import vector4 from "../assets/Roadmap/vector (8).png";
import vector5 from "../assets/Roadmap/vector (7).png";
import vector6 from "../assets/Roadmap/vector (6).png";
import vector7 from "../assets/Roadmap/vector (5).png";
import vector8 from "../assets/Roadmap/vector (4).png";
import vector9 from "../assets/Roadmap/vector (3).png";
import vector10 from "../assets/Roadmap/vector (2).png";
import vector11 from "../assets/Roadmap/vector (1).png";

function RoadmapSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[77px] space-y-[35px] pb-[80px]" id="roadmap">
      <div className="max-w-[1220px] relative space-y-[120px] w-[100%] mx-auto ">
        <div className="">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          {t('roadmap.title')}
          </h3>
        </div>
      <div className="space-y-[62px]">
      <div className="w-[100%] border border-[#9D9D9D] rounded-[8px] max-w-[799px] pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px] pt-[10px]">
            <img src={vector1} className="border border-[#000]" alt="" />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[32px] font-[500] leading-[138%]">{t('roadmap.phase1Title')}</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase1Item1')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase1Item2')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase1Item3')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase1Item4')}</p>
                </div>
            </div>
        </div>
        <img src={vector2} className="absolute right-[24%] top-[-34%]" alt="" />
        <img src={vector4} className="absolute z-[-1] right-[-18%] top-[50%]" alt="" />
       </div>
       <div className="w-[100%] border border-[#9D9D9D] rounded-[8px] max-w-[799px] ml-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px] pt-[10px]">
            <img src={vector1} className="border border-[#000]" alt="" />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[32px] font-[500] leading-[138%]">{t('roadmap.phase2Title')}</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase2Item1')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase2Item2')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase2Item3')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase2Item4')}</p>
                </div>
            </div>
        </div>
        <img src={vector7} className="absolute right-[5%] top-[-51%]" alt="" />
        <img src={vector3} className="absolute z-[-1] left-[-15%] top-[50%]" alt="" />
       </div>
       <div className="w-[100%] border border-[#9D9D9D] rounded-[8px] max-w-[799px] mr-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px] pt-[10px]">
            <img src={vector5} className="" alt="" />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[32px] font-[500] leading-[138%]">{t('roadmap.phase3Title')}</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase3Item1')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase3Item2')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase3Item3')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase3Item4')}</p>
                </div>
            </div>
        </div>
        <img src={vector8} className="absolute left-[14%] top-[-72%]" alt="" />
        <img src={vector4} className="absolute right-[-15%] z-[-1] top-[50%]" alt="" />
       </div>
       <div className="w-[100%] border border-[#9D9D9D] rounded-[8px] max-w-[799px] ml-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px] pt-[10px]">
            <img src={vector5} className="" alt="" />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[32px] font-[500] leading-[138%]">{t('roadmap.phase4Title')}</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase4Item1')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase4Item2')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase4Item3')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase4Item4')}</p>
                </div>
            </div>
        </div>
        <img src={vector11} className="absolute right-[18%] top-[-32%]" alt="" />
        <img src={vector10} className="absolute left-[-25%]  top-[-25%]" alt="" />
        <img src={vector3} className="absolute left-[-15%] z-[-1] top-[50%]" alt="" />
       </div>
       <div className="w-[100%] border border-[#9D9D9D] rounded-[8px] max-w-[799px] mr-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px] pt-[10px]">
            <img src={vector5} className="" alt="" />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[32px] font-[500] leading-[138%]">{t('roadmap.phase5Title')}</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase5Item1')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase5Item2')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase5Item3')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase5Item4')}</p>
                </div>
            </div>
        </div>
        <img src={vector6} className="absolute left-[0%] top-[-62%]" alt="" />
        <img src={vector4} className="absolute right-[-15%] z-[-1] top-[50%]" alt="" />
       </div>
       <div className="w-[100%] border border-[#9D9D9D] rounded-[8px] max-w-[799px] ml-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px] pt-[10px]">
            <img src={vector1} className="border border-[#000]" alt="" />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[32px] font-[500] leading-[138%]">{t('roadmap.phase6Title')}</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase6Item1')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase6Item2')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase6Item3')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p>{t('roadmap.phase6Item4')}</p>
                </div>
            </div>
        </div>
        <img src={vector8} className="absolute right-[19%] top-[-45%]" alt="" />
       </div>
      </div>
      </div>
    </div>
  );
}

export default RoadmapSec;
