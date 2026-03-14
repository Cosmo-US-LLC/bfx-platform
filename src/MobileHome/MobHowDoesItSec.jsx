import React from "react";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arw from "../assets/PremiumSec/arw.svg";

import cardicn1 from "../assets/HowDoesItSec/icns (1).svg";
import cardicn2 from "../assets/HowDoesItSec/icns (2).svg";
import cardicn3 from "../assets/HowDoesItSec/icns (3).svg";
import cardicn4 from "../assets/HowDoesItSec/icns (4).svg";
import cardicn5 from "../assets/HowDoesItSec/icns (5).svg";
import cardicn6 from "../assets/HowDoesItSec/icns (6).svg";

function MobHowDoesItSec() {
  const { t } = useTranslation();

  const cardItems = [
    {
      icon:cardicn1,
      title: t('howDoesIt.step1Title'),
      description: t('howDoesIt.step1Desc'),
    },
    {
      icon:cardicn2,
      title: t('howDoesIt.step2Title'),
      description: t('howDoesIt.step2Desc'),
    },
    {
      icon:cardicn3,
      title: t('howDoesIt.step3Title'),
      description: t('howDoesIt.step3Desc'),
    },
    {
      icon:cardicn4,
      title: t('howDoesIt.step4Title'),
      description: t('howDoesIt.step4Desc'),
    },
    {
      icon:cardicn5,
      title: t('howDoesIt.step5Title'),
      description: t('howDoesIt.step5Desc'),
    },
    {
      icon:cardicn6,
      title: t('howDoesIt.step6Title'),
      description: t('howDoesIt.step6Desc'),
    },
  ];

  return (
    <div className="pt-[24px] pb-[24px]">
      <div className="max-w-[1400px] w-[100%] mx-auto relative">
        <div>
          <h3 className="text-[32px] leading-[100%] text-[#181A20] text-center font-[700]">
            {t('howDoesIt.title')}
          </h3>
        </div>
        <div className=" pt-[30px] w-[90%] mx-auto ">
          <div className="w-[100%]">
            <div className="relative px-[28px]">
              <button className="swiper-button-prev rotate-[182deg] absolute z-10 !left-[-3%] top-[50%] transform -translate-y-1/2 !w-[37.545px] !h-[37.545px]">
                <img className="" src={arw} alt="" />
              </button>
              <button className="swiper-button-next !w-[37.545px] !h-[37.545px] absolute z-10 !right-[-3%] top-[50%] transform -translate-y-1/2">
                <img className="" src={arw} alt="" />
              </button>

              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation]}
                loop={false}
                className="mySwiper"
              >
                {cardItems.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      key={item.id}
                      className="px-[20px] max-h-[340px] flex space-y-[20px] flex-col justify-centetr py-[32px] min-h-[284px] bg-[#F9FAFB] rounded-[8px] border "
                    >
                      <div className="flex justify-center">
                        <img src={item.icon} alt="" />
                      </div>
                      <div className="pt-[10px]">
                        <h3 className="text-[20px] text-center text-[#000] font-[700] leading-[115%]">
                          {item.title}
                        </h3>
                      </div>
                      <h4 className="text-[15px]  text-center text-[#000] font-[400] leading-[153.333%]">
                        {item.description}
                      </h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobHowDoesItSec;
