import React from "react";
import { useTranslation } from 'react-i18next';

import cardicon1 from "../assets/SecurityBuilt/secicn (1).svg";
import cardicon2 from "../assets/SecurityBuilt/secicn (2).svg";
import cardicon3 from "../assets/SecurityBuilt/secicn (3).svg";
import cardicon4 from "../assets/SecurityBuilt/secicn (4).svg";
import cardicon5 from "../assets/SecurityBuilt/secicn (5).svg";
import cardicon6 from "../assets/SecurityBuilt/secicn (6).svg";

function MobSecurityBuiltSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[24px] space-y-[35px] pb-[24px] bg-[#fff]">
      <div className="space-y-[30px] w-[90%] mx-auto ">
        <div className="">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          {t('securityBuilt.title')}
          </h3>
        </div>
        <div className=" grid grid-cols-2 gap-y-[2rem]  " 
        >
          <div className=" flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon1} alt="" />
            <h4 className="text-[15px] font-[400] tracking-[-0.32px] text-center">{t('securityBuilt.feature1')}</h4>
          </div>
          <div className=" flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon2} alt="" />
            <h4 className="text-[15px] font-[400] tracking-[-0.32px] text-center">{t('securityBuilt.feature2')}</h4>
          </div>
          <div className=" flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon3} alt="" />
            <h4 className="text-[15px] font-[400] tracking-[-0.32px] text-center">{t('securityBuilt.feature3')}</h4>
          </div>
          <div className=" flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon4} alt="" />
            <h4 className="text-[15px] font-[400] tracking-[-0.32px] text-center">{t('securityBuilt.feature4')}</h4>
          </div>
          <div className=" flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon5} alt="" />
            <h4 className="text-[15px] font-[400] tracking-[-0.32px] text-center">{t('securityBuilt.feature5')}</h4>
          </div>
          <div className=" flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon6} alt="" />
            <h4 className="text-[15px] font-[400] tracking-[-0.32px] text-center">{t('securityBuilt.feature6')}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobSecurityBuiltSec;
