import React, { useState } from "react";
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import iconapon from "../assets/OneAppSec/iconopen (1).svg";
import iconcls from "../assets/OneAppSec/iconopen (2).svg";
import oneimg from "../assets/OneAppSec/imgonemob.png";

const items = [
  {
    icon: oneicon1,
    title: "Any Device",
    description:
      "Users can trade from any device, whether it's a PC, Mac, iOS, or Android.",
  },
  {
    icon: oneicon2,
    title: "Technical Tools",
    description:
      "Advanced technical tools designed to enhance market analysis and decision-making.",
  },
  {
    icon: oneicon3,
    title: "Risk Management",
    description: "Comprehensive risk management features to minimize risks.",
  },
  {
    icon: oneicon4,
    title: "Multiple Charts",
    description:
      "Traders can use multiple charts at the same time for better market insights.",
  },
];

function MobileOneAppSec() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div id="features" className="pt-[24px] pb-[24px] px-[18px]">
      <div className="relative">
        <div className="space-y-[10px]">
          <div className="space-y-[15px]">
            <h3 className="text-[32px] font-[700] leading-[114%] text-[#181A20] text-start">
              Everything In One App
            </h3>
            <p className="text-[15px] text-[#181A20] font-[400] leading-[127.778%] text-start"
              style={{letterSpacing: '-0.32px' }}
            >
              An innovative, modern and intuitive trading platform
            </p>
          </div>
          <div className="w-[100%] space-y-[32px]">
            <div className="">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`py-[15px] pr-5 border-b last:border-none  transition-all duration-300 ${
                    index === activeIndex ? "" : ""
                  }`}
                >
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <div className="flex w-[100%] justify-between items-center space-x-4 space-y-[0px]">
                      <div>
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-[61.446px] h-[61.446px]"
                        />
                      </div>
                      <div className="w-[80%]">
                        <div className="flex items-center justify-between">
                          <h3 className="text-[15px] font-[600] text-[#000]">
                            {item.title}
                          </h3>
                          <div>
                            <img
                              src={index === activeIndex ? iconcls : iconapon}
                              alt={
                                index === activeIndex ? "Collapse" : "Expand"
                              }
                              className="w-4 h-4"
                            />
                          </div>
                        </div>
                        <p
                          className={`mt-1 text-[15px] font-[400] text-[#000] leading-tight max-w-[400px] overflow-hidden transition-all duration-300 ${
                            index === activeIndex
                              ? "max-h-[200px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                          style={{
                            transition:
                              "max-height 0.3s ease, opacity 0.3s ease",
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
          <div className="w-[100%] flex justify-end">
            <img src={'/mobile/one-app/app.png'} className="w-[96%]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileOneAppSec;
