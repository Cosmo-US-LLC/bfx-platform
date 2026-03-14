import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import iconapon from "../assets/HowToBuySec/ei_arrow-up.svg";
import iconcls from "../assets/HowToBuySec/ei_arrow-up (1).svg";
import imghow from "../assets/HowToBuySec/Frame 1410125732.png";

function MobHowToBuySec() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      icon: oneicon1,
      title: t('howToBuy.step1Title'),
      description: t('howToBuy.step1Desc'),
    },
    {
      icon: oneicon2,
      title: t('howToBuy.step2Title'),
      description: t('howToBuy.step2Desc'),
    },
    {
      icon: oneicon3,
      title: t('howToBuy.step3Title'),
      description: t('howToBuy.step3Desc'),
    },
    {
      icon: oneicon4,
      title: t('howToBuy.step4Title'),
      description: t('howToBuy.step4Desc'),
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="pt-[24px] space-y-[20px] pb-[50px] bg-[#FAFAFA] " id="how-to-buy">
    <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] leading-[-1px]">
    {t('howToBuy.title')}
          </h3>
     <div className="w-[90%] mx-auto ">
        <div className="w-[100%] space-y-[20px]">
          <div className="">
            {items.map((item, index) => (
              <div
                key={index}
                className={`py-[14px] px-4 border-b last:border-none  transition-all duration-300 ${
                  index === activeIndex ? "bg-" : "bg-"
                }`}
              >
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex w-[100%]  justify-between items-center space-x-4 space-y-[15px]">
                    
                    <div className="w-[100%]">
                      <div className="flex justify-between items-center">
                        <h3 className="text-[15px] font-[600] text-[#181A20]">
                          {item.title}
                        </h3>
                        <div>
                          <img
                            src={index === activeIndex ? iconcls : iconapon}
                            alt="icon"
                            className="w-[24px] h-[24px]"
                          />
                        </div>
                      </div>
                      <p
                        className={`mt-[6px] text-[14px] font-[400] text-[#000] overflow-hidden transition-all duration-300 ${
                          index === activeIndex
                            ? "max-h-[200px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                        style={{
                          transition: "max-height 0.3s ease, opacity 0.3s ease",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[100%]">
          <img src={imghow} className="" alt="" />
        </div>
        <div className="flex justify-center pt-[24px] items-center px-[2rem] space-x-[17px]">
            <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[102px] w-[100%] h-[40px]">
              {t('howToBuy.buyButton')}
            </button>
            <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[14px] font-[1000] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[122px] w-[100%] h-[40px]">
            {t('howToBuy.helpButton')}
            </button>
          </div>
     </div>
    </div>
  );
}

export default MobHowToBuySec;
