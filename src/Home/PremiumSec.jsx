import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import starticn from "../assets/PremiumSec/start.svg";
import arw from "../assets/PremiumSec/arw.svg";
import faq1 from "../assets/PremiumSec/faq (1).svg";
import faq2 from "../assets/PremiumSec/faq (2).svg";
import line from "../assets/PremiumSec/line.png";
import cardimg1 from "../assets/PremiumSec/cardimg (3).png";
import cardimg2 from "../assets/PremiumSec/cardimg (2).png";
import cardimg3 from "../assets/PremiumSec/cardimg (1).png";
import cardimg4 from "../assets/PremiumSec/cardimg (4).png";
import cardimg5 from "../assets/PremiumSec/cardimg (5).png";
import cardimg6 from "../assets/PremiumSec/cardimg (6).png";
import cardimg7 from "../assets/PremiumSec/cardimg (7).png";

function PremiumSec() {
  const { t } = useTranslation();

  const cards = [
    {
      id: 1,
      img: cardimg1,
      title: t('premium.novice'),
      price: t('premium.novicePrice'),
      reviews: [true, false, false, false, false],
      points: [t('premium.earlyAccess'), t('premium.bonus10')],
      buttonLabel: t('premium.buyButton'),
    },
    {
      id: 2,
      img: cardimg2,
      title: t('premium.advanced'),
      price: t('premium.advancedPrice'),
      reviews: [true, true, false, false, false],
      points: [t('premium.earlyAccess'), t('premium.bonus20'), t('premium.tradingAccount200')],
      buttonLabel: t('premium.buyButton'),
    },
    {
      id: 3,
      img: cardimg3,
      title: t('premium.pro'),
      price: t('premium.proPrice'),
      reviews: [true, true, true, false, false],
      points: [t('premium.earlyAccess'), t('premium.bonus30'), t('premium.tradingAccount500')],
      buttonLabel: t('premium.buyButton'),
    },
    {
      id: 4,
      img: cardimg4,
      title: t('premium.expert'),
      price: t('premium.expertPrice'),
      reviews: [true, true, true, true, false],
      points: [
        t('premium.earlyAccess'),
        t('premium.bonus40'),
        t('premium.dailyUsdtRewards'),
        t('premium.bonusFunds1200'),
      ],
      buttonLabel: t('premium.buyButton'),
    },
    {
      id: 5,
      img: cardimg5,
      title: t('premium.master'),
      price: t('premium.masterPrice'),
      reviews: [true, true, true, true, true],
      points: [
        t('premium.earlyAccess'),
        t('premium.bonus50'),
        t('premium.dailyUsdtRewards'),
        t('premium.bonusFunds3000'),
      ],
      buttonLabel: t('premium.buyButton'),
    },
    {
      id: 6,
      img: cardimg6,
      title: t('premium.elite'),
      price: t('premium.elitePrice'),
      reviews: [true, true, true, true, true, true],
      points: [
        t('premium.earlyAccess'),
        t('premium.bonus60'),
        t('premium.dailyUsdtRewards'),
        t('premium.bonusFunds10000'),
      ],
      buttonLabel: t('premium.buyButton'),
    },
    {
      id: 7,
      img: cardimg7,
      title: t('premium.legend'),
      price: t('premium.legendPrice'),
      reviews: [true, true, true, true, true, true, true],
      points: [
        t('premium.earlyAccess'),
        t('premium.bonus80'),
        t('premium.dailyUsdtRewards'),
        t('premium.bonusFunds25000'),
        t('premium.personalisedPortfolio'),
      ],
      buttonLabel: t('premium.buyButton'),
    },
  ];

  const Bundles = [
    {
      id: 1,
      question: t('premium.bundleFaq1Question'),
      answer: t('premium.bundleFaq1Answer'),
    },
    {
      id: 2,
      question: t('premium.bundleFaq2Question'),
      answer: t('premium.bundleFaq2Answer'),
    },
    {
      id: 3,
      question: t('premium.bundleFaq3Question'),
      answer: t('premium.bundleFaq3Answer'),
    },
    {
      id: 4,
      question: t('premium.bundleFaq4Question'),
      answer: t('premium.bundleFaq4Answer'),
    },
  ];

  const [openBundles, setOpenBundles] = useState(0);
  const toggleBundles = (id) => {
    setOpenBundles(id === openBundles ? null : id);
  };
  return (
    <div className="pt-[53px] pb-[51px]">
      <div className="max-w-[1400px] w-[100%] space-y-[50px] mx-auto relative">
        <div className="space-y-[40px]">
          <h3 className="text-[50px] leading-[100%] text-[#000] text-center font-[700]">
            {t('premium.title')}
          </h3>
          <p className="text-[18px] leading-[166.667%] max-w-[750px] mx-auto text-[#000] text-center font-[400] tracking-[-0.32px]">
            {t('premium.description')}
          </p>
        </div>
        <div className="max-w-[1109px] w-[100%] mx-auto ">
          <div className="relative">
            <button className="swiper-button-prev rotate-[182deg] absolute z-10 !left-[-5%] top-[50%] transform -translate-y-1/2">
              <img className="w-[37.545px] h-[37.545px]" src={arw} alt="" />
            </button>
            <button className="swiper-button-next  absolute z-10 !right-[-5%] top-[50%] transform -translate-y-1/2">
              <img className="w-[37.545px] h-[37.545px]" src={arw} alt="" />
            </button>

            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
              loop={false}
              className="mySwiper"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div
                    style={{
                      background: "rgba(241, 241, 241, 0.36)",
                    }}
                    className="p-[20px] rounded-[8px] flex flex-col justify-between border border-[#9D9D9D] !min-h-[680px] max-h-[680px] h-[100%]"
                  >
                    <div>
                      <img
                        src={card.img}
                        className="rounded-[8px]"
                        alt={card.title}
                      />

                      <div className="flex justify-between py-[15px]">
                        <div>
                          <h3 className="text-[#000] flex flex-col justify-end text-[20px] font-[600] leading-[115%]">
                            {card.title} <br />
                            <span className="text-[#7C7C7C] text-start text-[18px] font-[600]">
                              {card.price}
                            </span>
                          </h3>
                        </div>

                        <ul className="flex justify-center">
                          {card.reviews.map((isStarFilled, index) =>
                            isStarFilled ? (
                              <li key={index}>
                                <img src={starticn} alt="rating star" />
                              </li>
                            ) : null
                          )}
                        </ul>
                      </div>

                      <ul className="text-left mt-[12px]">
                        {card.points.map((point, index) => (
                          <li
                            key={index}
                            className="mb-2 rounded-[8px] px-[10px] h-[48px] flex items-center text-[#181A20] text-[18px] font-[400] leading-[127.778%] tracking-[-0.32px]"
                            style={{
                              background: "rgba(124, 124, 124, 0.07)",
                            }}
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-start">
                      <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[18px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[152px] w-[100%] h-[58px]">
                        {t('premium.buyButton')}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="max-w-[1109px] ] w-[100%] mx-auto bg-[#F5F5F5] border border-[#797979] rounded-[13px] px-[26px] py-[34px] space-y-[20px]">
          <div className="flex justify-center">
            <img src={line} alt="" />
          </div>
          <div className="flex justify-between pl-2">
            <div className="w-[100%] max-w-[70px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                {t('premium.novice')}
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                {t('premium.scaleNovicePrice')}
              </p>
            </div>
            <div className="w-[100%] max-w-[120px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                {t('premium.advanced')}
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                {t('premium.scaleAdvancedPrice')}
              </p>
            </div>
            <div className="w-[100%] max-w-[60px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                {t('premium.pro')}
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                {t('premium.scaleProPrice')}
              </p>
            </div>
            <div className="w-[100%] max-w-[120px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                {t('premium.expert')}
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                {t('premium.scaleExpertPrice')}
              </p>
            </div>
            <div className="w-[100%] max-w-[100px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                {t('premium.master')}
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                {t('premium.scaleMasterPrice')}
              </p>
            </div>
            <div className="w-[100%] max-w-[70px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                {t('premium.elite')}
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                {t('premium.scaleElitePrice')}
              </p>
            </div>
            <div className="w-[100%] max-w-[98px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                {t('premium.legend')}
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                {t('premium.scaleLegendPrice')}
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1109px]  w-[100%] mx-auto bg-[#F5F5F5] border border-[#797979] rounded-[13px] px-[30px]  pt-[40px] pb-[60px] space-y-[20px]">
          <div>
            <h3 className="text-[30px] text-center font-[700] text-[#181A20] tracking-[-1px]">
              {t('premium.bundleFaqTitle')}
            </h3>
          </div>

          <div>
            {Bundles.map((item) => (
              <div key={item.id} className="border-b border-[#000] py-[24px] ">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleBundles(item.id)}
                >
                  <h3
                    className={`text-[20px] font-[600] leading-[170.05% ] ${
                      openBundles === item.id ? "text-[#E5AE00]" : "text-black"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <span className="text-xl font-bold">
                    {openBundles === item.id ? (
                      <>
                        <img src={faq1} alt="" />
                      </>
                    ) : (
                      <>
                        <img src={faq2} alt="" />
                      </>
                    )}
                  </span>
                </div>
                {openBundles === item.id && (
                  <p className="mt-2 text-[18px] text-[#181A20] font-[400] tracking-[-0.32px]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumSec;
