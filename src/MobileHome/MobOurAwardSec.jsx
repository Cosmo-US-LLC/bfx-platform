import React from "react";

import rwdimg1 from "../assets/OurAwardSec/rwdimg (1).png";
import rwdimg2 from "../assets/OurAwardSec/rwdimg (2).webp";
import rwdimg3 from "../assets/OurAwardSec/rwdimg (3).webp";

function MobOurAwardSec() {
  return (
    <div id="awards" className="bg-white py-[24px] px-[18px]  pb-[64px]">
      <div className="relative space-y-[30px] w-[90%] mx-auto">
        <div className="space-y-[10px]">
          <h4 className="text-[20px] font-[400] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Multi-Awarded Trading Platform
          </h4>
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Our Awards Speak <br /> For Themselves
          </h3>
        </div>
        <div className=" space-y-[40px]">
          <img src="/mobile/awards/best.png" alt="Award" />
          <img src="/mobile/awards/fastest.png" alt="Award" />
        </div>
      </div>
    </div>
  );
}

export default MobOurAwardSec;
