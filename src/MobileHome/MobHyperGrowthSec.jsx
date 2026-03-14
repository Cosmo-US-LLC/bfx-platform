import React from "react";
import { useTranslation } from 'react-i18next';

import graph from "../assets/HyperGrowth/Graph.png";

function MobHyperGrowthSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[24px] pb-[24px] bg-[#FAFAFA]">
      <div className="space-y-[30px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          {t('hyperGrowth.title')}
          </h3>
          <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          {t('hyperGrowth.description')}
          </p>
        </div>
        <div className="space-y-[20px] bg-[#fff] rounded-[5.712px] p-[28.32px]" 
        style={{
            boxShadow:"0px 7.032px 35.16px 0px rgba(169, 169, 169, 0.30)"
        }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-[#000] font-[500] text-[10.56px]">{t('hyperGrowth.chartTitle')}</h4>
            <div className="flex space-x-3 items-center">
                <hr className="h-[2px] w-[8px] bg-[#E5AE00]"/>
                <p className="text-[7px] text-[#949494] font-[500]">{t('hyperGrowth.legendBlockchainFX')}</p>
            </div>
            <div className="flex space-x-3 items-center">
                <hr className="h-[2px] w-[8px] bg-[#CE2A96]"/>
                <p className="text-[7px] text-[#949494] font-[500]">{t('hyperGrowth.legendRegularPlatform')}</p>
            </div>
          </div>
          <div>
            <img src={graph} alt="" />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default MobHyperGrowthSec;
