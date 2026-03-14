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

function MobRoadmapSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[24px] pb-[24px]" id="roadmap">
      <div className=" relative space-y-[40px] w-[90%] mx-auto ">
        <div className="">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          {t('roadmap.title')}
          </h3>
        </div>
      <div className="space-y-[45px]">
      <div className="w-[100%] border border-[#9D9D9D] rounded-[2.884px] max-w-[288px] pr-[5px] pl-[5px] py-[8px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[11.039px] pt-[5px]">
            <img src={vector1} className="border border-[#000]" alt="" />
        </div>
        <div className="w-[92%] space-y-[8px]">
            <h3 className="text-[13.084px] font-[500] leading-[138%]">{t('roadmap.phase1Title')}</h3>
            <div className="grid grid-cols-2 gap-x-[5px] gap-y-[8px]">
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase1Item1')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase1Item2')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase1Item3')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase1Item4')}</p>
                </div>
            </div>
        </div>
        <img src={vector2} className="absolute right-[38%] w-[26.752px] top-[-18%]" alt="" />
        <img src={vector4} className="absolute w-[46px] h-[83px] right-[-16%] top-[55%]" alt="" />
       </div>
       <div className="w-[100%] border border-[#9D9D9D] ml-auto rounded-[2.884px] max-w-[288px] pr-[5px] pl-[5px] py-[8px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[11.039px] pt-[5px]">
            <img src={vector1} className="border border-[#000]" alt="" />
        </div>
        <div className="w-[92%] space-y-[8px]">
            <h3 className="text-[13.084px] font-[500] leading-[138%]">{t('roadmap.phase2Title')}</h3>
            <div className="grid grid-cols-2 gap-x-[5px] gap-y-[8px]">
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase2Item1')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase2Item2')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase2Item3')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase2Item4')}</p>
                </div>
            </div>
        </div>
        <img src={vector7} className="absolute right-[8%] w-[62.951px] top-[-39%]" alt="" />
        <img src={vector3} className="absolute left-[-17%] h-[83px] w-[48px] top-[53%] " alt="" />
       </div>
       <div className="w-[100%] border border-[#9D9D9D] rounded-[2.884px] max-w-[288px] pr-[5px] pl-[5px] py-[8px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[11.039px] pt-[5px]">
            <img src={vector5} className="" alt="" />
        </div>
        <div className="w-[92%] space-y-[8px]">
            <h3 className="text-[13.084px] font-[500] leading-[138%]">{t('roadmap.phase3Title')}</h3>
            <div className="grid grid-cols-2 gap-x-[5px] gap-y-[8px]">
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase3Item1')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase3Item2')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase3Item3')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase3Item4')}</p>
                </div>
            </div>
        </div>
        <img src={vector8} className="absolute left-[7%] w-[38.165px] top-[-119%]" alt="" />
        <img src={vector4} className="absolute right-[-17%]  w-[46px] h-[83px] top-[54%]" alt="" />
       </div>
       <div className="w-[100%] border border-[#9D9D9D] ml-auto rounded-[2.884px] max-w-[288px] pr-[5px] pl-[5px] py-[8px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[11.039px] pt-[5px]">
            <img src={vector5} className="" alt="" />
        </div>
        <div className="w-[92%] space-y-[8px]">
            <h3 className="text-[13.084px] font-[500] leading-[138%]">{t('roadmap.phase4Title')}</h3>
            <div className="grid grid-cols-2 gap-x-[5px] gap-y-[8px]">
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase4Item1')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase4Item2')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase4Item3')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase4Item4')}</p>
                </div>
            </div>
        </div>
        <img src={vector11} className="absolute right-[18%] w-[38.165px] top-[-30%]" alt="" />
        <img src={vector10} className="absolute left-[-22%] w-[38.165px]  top-[23%]" alt="" />
        <img src={vector3} className="absolute left-[-17%] w-[46px] h-[83px]  top-[53%]" alt="" />
       </div>
       <div className="w-[100%] border border-[#9D9D9D] rounded-[2.884px] max-w-[288px] pr-[5px] pl-[5px] py-[8px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[11.039px] pt-[5px]">
            <img src={vector5} className="" alt="" />
        </div>
        <div className="w-[92%] space-y-[8px]">
            <h3 className="text-[13.084px] font-[500] leading-[138%]">{t('roadmap.phase5Title')}</h3>
            <div className="grid grid-cols-2 gap-x-[5px] gap-y-[8px]">
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase5Item1')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase5Item2')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase5Item3')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase5Item4')}</p>
                </div>
            </div>
        </div>
        <img src={vector6} className="absolute left-[3%] w-[68.171px] top-[-50%]" alt="" />
        <img src={vector4} className="absolute right-[-16.5%] w-[46px] h-[83px] top-[53%]" alt="" />
       </div>
       <div className="w-[100%] border border-[#9D9D9D] ml-auto rounded-[2.884px] max-w-[288px] pr-[5px] pl-[5px] py-[8px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[11.039px] pt-[5px]">
            <img src={vector1} className="border border-[#000]" alt="" />
        </div>
        <div className="w-[92%] space-y-[8px]">
            <h3 className="text-[13.084px] font-[500] leading-[138%]">{t('roadmap.phase6Title')}</h3>
            <div className="grid grid-cols-2 gap-x-[5px] gap-y-[8px]">
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase6Item1')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase6Item2')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase6Item3')}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[1px] w-[100%] h-[18px] bg-[#DDD]">
                    <p className="text-[8px] tracking-[-0.4px]">{t('roadmap.phase6Item4')}</p>
                </div>
            </div>
        </div>
        <img src={vector8} className="absolute right-[19%] w-[38.171px] top-[-28%]" alt="" />
       </div>
      </div>
      </div>
    </div>
  );
}

export default MobRoadmapSec;
