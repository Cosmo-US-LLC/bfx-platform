import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import tradimg from "../assets/TraderReviewsSec/tradimg.png";
import user from "../assets/TraderReviewsSec/image.png";
import user2 from "../assets/TraderReviewsSec/Image2.png";
import user3 from "../assets/TraderReviewsSec/image3.png";
import user4 from "../assets/TraderReviewsSec/image4.png";
import tick from "../assets/TraderReviewsSec/teenyicons_tick-circle-solid.svg";
import swpbtnl from "../assets/TraderReviewsSec/arwr.svg";
import swpbtnr from "../assets/TraderReviewsSec/arw.svg";

function TraderReviewsSec() {
  const [isEnd, setIsEnd] = useState(false);
  const comments = [
    {
      text: "Finally, a platform that gets it right! I traded CFDs, bought APPLE stocks, sold them for GBY, and grabbed some $PEPE, all within 30 minutes. Highly recommend it for both beginners and pros!",
      img: "/mobile/reviews/comment1.png",
      name: "PrimeNic.eth",
      tag: "@primeniceth",
    },
    {
      text: "That’s exactly what we needed. A trading broker designed to bridge crypto with Forex, ETFs, and stocks, giving you real access to the markets with deep liquidity.",
      img: "/mobile/reviews/comment2.png",
      name: "Winny.eth",
      tag: "@winnyeth",
    },
    {
      text: "Trading on 9 different windows and having access to dozens trading analytic tools and risk management is giving me a long-term edge over the competition trading on other platforms.",
      img: "/mobile/reviews/comment3.png",
      name: "Shiny.Mo",
      tag: "@shinymo",
    },
    {
      text: "BlockchainFX gives you endless trading opportunities. This just makes sense since markets are interconnected. Finally there’s no need to waste time switching between brokers.",
      img: "/mobile/reviews/comment4.png",
      name: "Gohan.ox",
      tag: "@gohanox",
    },
    {
      text: "BlockchainFX has completely leveled up my trading game. It's super intuitive, lets you access multiple markets simultaneously, and offers lightning-fast transactions. A huge win for crypto!",
      img: "/mobile/reviews/comment5.png",
      name: "Blacik.ko",
      tag: "@blacikko",
    },
  ];

  return (
    <div
      id="reviews"
      className="py-[77px]  max-w-[1440px] mx-auto space-y-[35px] bg-[#FAFAFA]"
    >
      <div className=" relative space-y-[40px] w-[100%]  ">
        <div className="space-y-[30px]">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Trader Reviews
          </h3>
        </div>
        <div className="flex justify-between 2xl:pl-[0 brem] xl:pl-[0rem] lg:pl-[1rem] md:pl-[2rem] sm:pl-[0rem] pl-[0rem] items-end ml-auto max-w-[1330px]">
          <div className="max-w-[400.003px] space-y-[30px] w-[100%]">
            <div className="space-y-[15px]">
              <h4 className="text-[25px] bg-[#D9D9D9] text-center font-[400] max-w-[211px] py-[10px] mx-auto">
                4.79 out of 5
              </h4>
              <p className="text-center text-[#7C7C7C] text-[20px] font-[400]">
                1000+ trader ratings
              </p>
            </div>
            <div className=" w-[100%] space-y-[38px]">
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[25px] font-[400] w-[30px]">5</span>
                <div className="h-[17px] max-w-[350px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[80%]"></div>
                </div>
                <span className="text-[25px] font-[400] w-[50px]">80%</span>
              </div>
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[25px] font-[400] w-[30px]">4</span>
                <div className="h-[17px] max-w-[350px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[20%]"></div>
                </div>
                <span className="text-[25px] font-[400] w-[50px]">20%</span>
              </div>
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[25px] font-[400] w-[30px]">3</span>
                <div className="h-[17px] max-w-[350px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[15%]"></div>
                </div>
                <span className="text-[25px] font-[400] w-[50px]">15%</span>
              </div>
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[25px] font-[400] w-[30px]">2</span>
                <div className="h-[17px] max-w-[350px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[10%]"></div>
                </div>
                <span className="text-[25px] font-[400] w-[50px]">10%</span>
              </div>
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[25px] font-[400] w-[30px]">1</span>
                <div className="h-[17px] max-w-[350px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[6%]"></div>
                </div>
                <span className="text-[25px] font-[400] w-[50px]">6%</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-[880px] w-[100%]">
            <div className="relative">
              <div className="absolute z-0 overflow-visible w-[364px] left-0 top-0 h-full">
                <div className="w-[340px] h-[400px] rounded-t-[30px] bg-[#181a20] absolute bottom-0 right-3"></div>
              </div>
              <div className="absolute z-20 overflow-visible w-[364px] left-0 top-0 h-full">
                <img
                  src={"/mobile/reviews/mobile.png"}
                  alt=""
                  className="w-[364px] object-contain absolute bottom-0 right-1"
                />
              </div>
              <div className="h-[40px] absolute !right-[135px] -top-[65px] w-[110px]">
                <button className="swiper-button-prev !w-[40px] !h-[40px] ">
                  <img
                    className="w-[50.545px] h-[50.545px] "
                    src={swpbtnl}
                    alt=""
                  />
                </button>
                <button className="swiper-button-next !w-[40px] !h-[40px]">
                  <img
                    className="w-[50.545px] h-[50.545px]"
                    src={swpbtnr}
                    alt=""
                  />
                </button>
              </div>
              <Swiper
                slidesPerView={2.3}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation]}
                loop={true}
                className="mySwiper"
              >
                {comments?.map((cmt, id) => (
                  <SwiperSlide key={id} className="">
                    <div className="py-[45px] pb-[51px] min-h-[338px] flex flex-col justify-between pl-[40px] pr-[16px] border-[#9D9D9D] bg-[#181A20] rounded-[4px] w-[353.45px] space-y-[30px]">
                      <p className="text-[16px] font-[400] leading-[175%] text-[#fff]">
                        {cmt.text}
                      </p>
                      <div className="flex items-center space-x-2">
                        <img src={cmt.img} alt="" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[18px] text-[#fff] font-[600] leading-[140%]">
                              {cmt.name}
                            </h3>
                            <img src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[14px] font-[600] leading-[140%]">
                            {cmt.tag}
                          </h4>
                        </div>
                      </div>
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

export default TraderReviewsSec;
