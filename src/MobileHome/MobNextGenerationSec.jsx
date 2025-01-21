import React from "react";
import nexticn1 from "../assets/NextGen/nwxticon (9).svg";
import nexticn2 from "../assets/NextGen/nwxticon (8).svg";
import nexticn3 from "../assets/NextGen/nwxticon (7).svg";
import nexticn4 from "../assets/NextGen/nwxticon (6).svg";
import nexticn5 from "../assets/NextGen/nwxticon (5).svg";
import nexticn6 from "../assets/NextGen/nwxticon (4).svg";
import nexticn7 from "../assets/NextGen/nwxticon (3).svg";
import nexticn8 from "../assets/NextGen/nwxticon (2).svg";
import nexticn9 from "../assets/NextGen/nwxticon (1).svg";

function MobNextGenerationSec() {
  return (
    <div className="pt-[24px] pb-[24px] bg-[#FBFBFB]">
      <div className="w-[90%] mx-auto space-y-[24px]">
        <h3 className="text-[32px] font-[700] leading-[114%] text-center">
          The Ultimate <br /> Trading Experience
        </h3>
        <div className="gap-y-[20px] grid grid-cols-2">
          <div className="flex flex-col min-w-[185px] items-center space-y-[10px]">
            <img
              src={"/mobile/ultimate/point1.svg"}
              alt=""
              className="h-[40px]"
            />
            <p className="text-[15px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              Team with 25 Years <br /> Of Experience
            </p>
          </div>
          <div className="flex flex-col min-w-[122px] items-center space-y-[10px]">
            <img
              src={"/mobile/ultimate/point2.svg"}
              alt=""
              className="h-[40px]"
            />
            <p className="text-[15px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              500+ <br /> Assets
            </p>
          </div>
          <div className="flex flex-col min-w-[137px] items-center space-y-[10px]">
            <img
              src={"/mobile/ultimate/point3.svg"}
              alt=""
              className="h-[30px]"
            />
            <p className="text-[15px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              Ultra <br /> Tight Spreads
            </p>
          </div>
          <div className="flex flex-col items-center min-w-[145px] space-y-[10px]">
            <img
              src={"/mobile/ultimate/point4.svg"}
              alt=""
              className="h-[40px]"
            />
            <p className="text-[15px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              24/7 Live <br /> Chat Support
            </p>
          </div>
          <div className="flex flex-col items-center min-w-[129px] space-y-[10px]">
            <img
              src={"/mobile/ultimate/point5.svg"}
              alt=""
              className="h-[40px]"
            />
            <p className="text-[15px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              Register <br /> in 1 Min
            </p>
          </div>
          <div className="flex min-w-[185px] flex-col items-center space-y-[10px]">
            <img
              src={"/mobile/ultimate/point6.svg"}
              alt=""
              className="h-[40px]"
            />
            <p className="text-[15px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              One-Click <br /> Trading
            </p>
          </div>
          <div className="flex flex-col min-w-[122px] items-center space-y-[10px]">
            <img
              src={"/mobile/ultimate/point7.svg"}
              alt=""
              className="h-[33px]"
            />
            <p className="text-[15px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              Leverage <br /> Trading
            </p>
          </div>
          <div className="flex flex-col min-w-[137px] items-center space-y-[10px]">
            <img
              src={"/mobile/ultimate/point8.svg"}
              alt=""
              className="h-[40px]"
            />
            <p className="text-[15px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              Up to 9 <br /> Charts
            </p>
          </div>
          <div className="flex flex-col min-w-[145px] items-center space-y-[10px]">
            <img
              src={"/mobile/ultimate/point9.svg"}
              alt=""
              className="h-[40px]"
            />
            <p className="text-[15px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              100+ <br /> Indicators
            </p>
          </div>
          <div className="flex flex-col min-w-[129px] items-center space-y-[10px]">
            <img
              src={"/mobile/ultimate/point10.svg"}
              alt=""
              className="h-[40px]"
            />
            <p className="text-[15px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              Monthly <br /> Tournaments
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center pt-[10px] space-x-[12px]">
          <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] m-0 rounded-[8px] max-w-[152px] w-[100%] h-[40px]">
            Start Trading Now
          </button>
          <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[159px] w-[100%] h-[40px]">
            Free Demo Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobNextGenerationSec;
