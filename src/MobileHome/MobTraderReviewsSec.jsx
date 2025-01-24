import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import swpbtn from "../assets/PremiumSec/arw.svg";

import tradimg from "../assets/TraderReviewsSec/tradimg.png";
import user from "../assets/TraderReviewsSec/image.png";
import user2 from "../assets/TraderReviewsSec/Image2.png";
import user3 from "../assets/TraderReviewsSec/image3.png";
import user4 from "../assets/TraderReviewsSec/image4.png";
import tick from "../assets/TraderReviewsSec/teenyicons_tick-circle-solid.svg";
import swpbtnl from "../assets/TraderReviewsSec/arwr.svg";
import swpbtnr from "../assets/TraderReviewsSec/arw.svg";

function MobTraderReviewsSec() {
    const comments = [
        {
            text: "Finally, a platform that gets it right! I traded CFDs, bought APPLE stocks, sold them for GBY, and grabbed some $PEPE, all within 30 minutes. Highly recommend it for both beginners and pros!",
            img: "/mobile/reviews/comment1.png",
            name: "PrimeNic.eth",
            tag: "@primeniceth"
        },
        {
            text: "That’s exactly what we needed. A trading broker designed to bridge crypto with Forex, ETFs, and stocks, giving you real access to the markets with deep liquidity.",
            img: "/mobile/reviews/comment2.png",
            name: "Winny.eth",
            tag: "@winnyeth"
        },
        {
            text: "Trading on 9 different windows and having access to dozens trading analytic tools and risk management is giving me a long-term edge over the competition trading on other platforms.",
            img: "/mobile/reviews/comment3.png",
            name: "Shiny.Mo",
            tag: "@shinymo"
        },
        {
            text: "BlockchainFX gives you endless trading opportunities. This just makes sense since markets are interconnected. Finally there’s no need to waste time switching between brokers.",
            img: "/mobile/reviews/comment4.png",
            name: "Gohan.ox",
            tag: "@gohanox"
        },
        {
            text: "BlockchainFX has completely leveled up my trading game. It's super intuitive, lets you access multiple markets simultaneously, and offers lightning-fast transactions. A huge win for crypto!",
            img: "/mobile/reviews/comment5.png",
            name: "Blacik.ko",
            tag: "@blacikko"
        },
    ];
  return (
    <div id="reviews" className="pt-[24px] space-y-[20px] bg-[#FAFAFA]">
      <div className=" relative space-y-[20px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Trader Reviews
          </h3>
        </div>
        <div className="w-[100%]">
          <div className=" space-y-[24px] w-[100%]">
            <div className="space-y-[15px]">
              <h4 className="text-[15px] bg-[#D9D9D9] text-center font-[400] max-w-[123px] rounded-[4px] py-[10px] mx-auto">
                4.79 out of 5
              </h4>
              <p className="text-center text-[#7C7C7C] text-[15px] font-[400]">
                1000+ trader ratings
              </p>
            </div>
            <div className=" w-[100%] space-y-[24px]">
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[15px] font-[400] w-[20px]">5</span>
                <div className="h-[14px] w-[360px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[80%]"></div>
                </div>
                <span className="text-[15px] font-[400] w-[50px]">80%</span>
              </div>
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[15px] font-[400] w-[20px]">4</span>
                <div className="h-[14px] w-[360px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[20%]"></div>
                </div>
                <span className="text-[15px] font-[400] w-[50px]">20%</span>
              </div>
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[15px] font-[400] w-[20px]">3</span>
                <div className="h-[14px] w-[360px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[15%]"></div>
                </div>
                <span className="text-[15px] font-[400] w-[50px]">15%</span>
              </div>
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[15px] font-[400] w-[20px]">2</span>
                <div className="h-[14px] w-[360px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[10%]"></div>
                </div>
                <span className="text-[15px] font-[400] w-[50px]">10%</span>
              </div>
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[15px] font-[400] w-[20px]">1</span>
                <div className="h-[14px] w-[360px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[6%]"></div>
                </div>
                <span className="text-[15px] font-[400] w-[50px]">6%</span>
              </div>
            </div>
          </div>
          <div className="w-[100%] pt-[35px]">
            <div className="relative">
              <div className="max-w-[300px] flex space-x-3 mx-auto">
                <button className="swiper-button-prev-3 rotate-[180deg] !w-[40px] !h-[40px]  absolute z-10 !left-[0%] !top-[45%]  ">
                  <img
                    className="w-[40.545px] h-[40.545px] "
                    src={swpbtn}
                    alt=""
                  />
                </button>
                <button className="swiper-button-next-3 !w-[40px] !h-[40px]  absolute z-10 !right-[0%] !top-[45%] ">
                  <img
                    className="w-[40.545px] h-[40.545px]"
                    src={swpbtn}
                    alt=""
                  />
                </button>
              </div>
              <Swiper
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-3",
                  prevEl: ".swiper-button-prev-3",
                }}
                modules={[Navigation]}
                loop={false}
                className="mySwiper relative min-h-[302px]"
              >
                <div className="absolute z-10 left-0 top-0 w-full h-full flex justify-center items-center">
                  <img
                  src={"/mobile/reviews/mobile.png"}
                  alt=""
                  className="w-[268px] object-contain"
                  />
                </div>

                {comments?.map((comment, id)=>(
                  <SwiperSlide className="h-full pt-[2px]">
                    <div className="min-h-[300px] h-full flex flex-col justify-center pl-[40px] pr-[16px] border-[#9D9D9D] bg-[#181A20] rounded-t-[40px] max-w-[233.388px] mx-auto space-y-[30px]">
                      <p className="pt-5 text-[10px] font-[400] leading-[175%] text-[#fff]">
                        {comment.text}
                      </p>
                      <div className="flex items-center space-x-2">
                        <img src={comment.img} alt="" className="h-[26px] w-[26px]" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]">
                            {comment.name}
                            </h3>
                            {/* <img src={tick} alt="" /> */}
                          </div>
                          <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]">
                            {comment.tag}
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

export default MobTraderReviewsSec;
