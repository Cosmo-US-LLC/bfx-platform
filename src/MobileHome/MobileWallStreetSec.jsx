import React from "react";
import { useTranslation } from 'react-i18next';

import cardicon1 from "../assets/WallStreet/wallicn (1).svg";
import cardicon2 from "../assets/WallStreet/wallicn (2).svg";
import cardicon3 from "../assets/WallStreet/wallicn (3).svg";
import cardicon4 from "../assets/WallStreet/wallicn (4).svg";
import cardicon5 from "../assets/WallStreet/wallicn (5).svg";
import cardicon6 from "../assets/WallStreet/wallicn (6).svg";

function MobileWallStreetSec() {
  const { t } = useTranslation();
  const features = [
    {
      img: "/mobile/wall-street/market.svg",
      title: t('wallStreet.feature1')
    },
    {
      img: "/mobile/wall-street/instrument.svg",
      title: t('wallStreet.feature2')
    },
    {
      img: "/mobile/wall-street/global.svg",
      title: t('wallStreet.feature3')
    },
    {
      img: "/mobile/wall-street/ultra.svg",
      title: t('wallStreet.feature4')
    },
    {
      img: "/mobile/wall-street/deep.svg",
      title: t('wallStreet.feature5')
    },
    {
      img: "/mobile/wall-street/fast.svg",
      title: t('wallStreet.feature6')
    },
  ]

  return (
    <div className="pt-[24px] pb-[24px] bg-[#FFF]">
      <div className="space-y-[40px] w-[90%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px] capitalize">
          {t('wallStreet.title')}
          </h3>
          <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[100%] px-3 text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          {t('wallStreet.description')}
          </p>
        </div>
        <div className=" grid grid-cols-2 gap-y-[2rem]  "
        >
          {features?.map((feature, id) => (<>
            <div key={id} className=" flex flex-col space-y-[10px] justyfy-center items-center w-[100%]">
              <img src={feature?.img} alt="" />
              <h4 className="text-[15px] font-[400] tracking-[-0.32px] text-center">{feature?.title}</h4>
            </div>
          </>))}
          {/* <div className=" flex flex-col space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon2} alt="" />
            <h4 className="text-[15px] font-[400] tracking-[-0.32px] text-center">800 <br />Instruments</h4>
          </div>
          <div className=" flex flex-col space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon3} alt="" />
            <h4 className="text-[15px] font-[400] tracking-[-0.32px] text-center">All global  <br />markets in one place</h4>
          </div>
          <div className=" flex flex-col space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon4} alt="" />
            <h4 className="text-[15px] font-[400] tracking-[-0.32px] text-center">Ultra-Fast <br />Trading Execution</h4>
          </div>
          <div className=" flex flex-col space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon5} alt="" />
            <h4 className="text-[15px] font-[400] tracking-[-0.32px] text-center">Deep <br />Liquidity</h4>
          </div>
          <div className=" flex flex-col space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon6} alt="" />
            <h4 className="text-[15px] font-[400] tracking-[-0.32px] text-center">Fast <br /> Withdrawals</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MobileWallStreetSec;
