import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import swpbtn from "../assets/PremiumSec/arw.svg";

import medai1 from "../assets/Press&Media/media (1).svg";
import medai2 from "../assets/Press&Media/media (2).svg";
import medai3 from "../assets/Press&Media/media (3).svg";

function MobPressMediaSec() {
  const press = [
    {
      img: "/mobile/press/bitcoin.png",
      body: "BlockchainFX can be described as a hybrid of Binance and Robinhood, delivering a seamless trading experience with exceptional speed and simplicity, powered by instant crypto deposits and trading."
    },
    {
      img: "/mobile/press/coin.svg",
      body: "BFX is pioneering a new era of cryptocurrency by seamlessly connecting it to global markets such as Forex, Commodities, and ETFs. This unprecedented integration creates endless trading opportunities for traders."
    },
    {
      img: "/mobile/press/finbold.svg",
      body: "BlockchainFX gives 560 million crypto users direct access to global financial markets, enabling seamless transitions across asset classes like Silver and BTC in seconds with advanced trading tools."
    }
  ]

  return (
    <div
      className="bg-[#FAFAFA] py-[42px]"
      style={{
        background: "rgba(250, 250, 250, 0.98)",
      }}
    >
      <div className=" relative space-y-[20px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Press & Media
          </h3>
        </div>
        <div className="relative">
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
            {press?.map((item, id) => (
              <SwiperSlide key={id} className="border-transparent">
                <div className="bg-[#fff] max-w-[284px] border-transparent mx-auto rounded-[5.7px] px-[14px] py-[30px] w-[100%] border border-[#F1F1F1]">
                  <div className={`${id == 1 ? "space-y-[13px]" : "space-y-[13px]"}`}>
                    <div className="flex items-center justify-center h-[30px]">
                      <img src={item.img} className={`${id == 1 ? "h-[28px]" : "h-[18px]"}`} alt="" />
                    </div>
                    <p className="text-[15px] text-center leading-[21.6px] font-[400]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev rotate-[180deg]  absolute z-10 !left-[0%] !top-[53%] transform -translate-y-1/2">
            <img className="w-[50.545px] h-[30.545px] " src={swpbtn} alt="" />
          </button>
          <button className="swiper-button-next  absolute z-10 !right-[0%] !top-[53%] transform -translate-y-1/2">
            <img className="w-[50.545px] h-[30.545px]" src={swpbtn} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobPressMediaSec;
