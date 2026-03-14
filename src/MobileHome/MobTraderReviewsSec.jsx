import React from "react";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import swpbtn from "../assets/PremiumSec/arw.svg";

import fram from "../assets/TraderReviewsSec/fram.png";
import usern from "../assets/TraderReviewsSec/user.png";
import user1 from "../assets/TraderReviewsSec/rew (5).png";
import user2 from "../assets/TraderReviewsSec/rew (4).png";
import user3 from "../assets/TraderReviewsSec/rew (3).png";
import user4 from "../assets/TraderReviewsSec/rew (2).png";
import user5 from "../assets/TraderReviewsSec/rew (1).png";
import tick from "../assets/TraderReviewsSec/Vector.svg";
import swpbtnl from "../assets/TraderReviewsSec/arwr.svg";
import swpbtnr from "../assets/TraderReviewsSec/arw.svg";

function MobTraderReviewsSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[24px] space-y-[20px] bg-[#FAFAFA]" id="reviews">
      <div className=" relative space-y-[20px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          {t('traderReviews.title')}
          </h3>
        </div>
        <div className="w-[100%]">
         <div className=" space-y-[30px] w-[100%]">
            <div className="space-y-[15px]">
                <h4 className="text-[15px] bg-[#D9D9D9] text-center font-[400] max-w-[123px] rounded-[4px] py-[10px] mx-auto">{t('traderReviews.ratingBadge')}</h4>
                <p className="text-center text-[#7C7C7C] text-[15px] font-[400]">{t('traderReviews.verifiedRatings')}</p>
            </div>
            <div className=" w-[100%] space-y-[24px]">
                <div className="flex items-center justify-between space-x-4">
                    <span className="text-[15px] font-[400] w-[20px]">5</span>
                    <div className="h-[17px] w-[360px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                        <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[86%]"></div>
                    </div>
                    <span className="text-[15px] font-[400] w-[50px]">86%</span>
                </div>
                <div className="flex items-center justify-between space-x-4">
                    <span className="text-[15px] font-[400] w-[20px]">4</span>
                    <div className="h-[17px] w-[360px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                        <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[12%]"></div>
                    </div>
                    <span className="text-[15px] font-[400] w-[50px]">8%</span>
                </div>
                <div className="flex items-center justify-between space-x-4">
                    <span className="text-[15px] font-[400] w-[20px]">3</span>
                    <div className="h-[17px] w-[360px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                        <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[7%]"></div>
                    </div>
                    <span className="text-[15px] font-[400] w-[50px]">3%</span>
                </div>
                <div className="flex items-center justify-between space-x-4">
                    <span className="text-[15px] font-[400] w-[20px]">2</span>
                    <div className="h-[17px] w-[360px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                        <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[6%]"></div>
                    </div>
                    <span className="text-[15px] font-[400] w-[50px]">2%</span>
                </div>
                <div className="flex items-center justify-between space-x-4">
                    <span className="text-[15px] font-[400] w-[20px]">1</span>
                    <div className="h-[17px] w-[360px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                        <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[5%]"></div>
                    </div>
                    <span className="text-[15px] font-[400] w-[50px]">1%</span>
                </div>
            </div>
         </div>
         <div className="w-[100%] pt-[35px]">
         <div className="relative">
            <div className="max-w-[300px] flex space-x-3 mx-auto">
            <button className="swiper-button-prev-3 rotate-[180deg] !w-[40px] !h-[40px]  absolute z-10 !left-[0%] !top-[45%]  ">
              <img className="w-[40.545px] h-[40.545px] " src={swpbtn} alt="" />
            </button>
            <button className="swiper-button-next-3 !w-[40px] !h-[40px]  absolute z-10 !right-[0%] !top-[45%] ">
              <img className="w-[40.545px] h-[40.545px]" src={swpbtn} alt="" />
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
              className="mySwiper"
            >
                
                 <SwiperSlide>
                <div className="py-[45px] pb-[51px] min-h-[220px] flex flex-col justify-between pl-[40px] pr-[16px]  rounded-[4px] max-w-[233.388px] mx-auto space-y-[30px] relative"
               
                >
                    <img src={fram} className="absolute left-[-20%] top-[-7%] min-w-[325px] min-h-[330px] z-[-1]" alt="" />
                    <p className="h-[100px] text-[10px] font-[400] leading-[175%] text-[#fff]">{t('traderReviews.review1Text')}</p>
                    <div className="flex items-center space-x-2">
                        <img src={usern} className="h-[26px] w-[26px]" alt="" />
                        <div>
                            <div className="flex items-center space-x-2">
                            <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]"> {t('traderReviews.review1Name')}</h3>
                            <img src={tick} alt="" />
                            </div>
                            <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]"> {t('traderReviews.review1Handle')}</h4>
                            <h4 className="text-[#CFCFCF] text-[9px] font-[600] leading-[140%]">{t('traderReviews.review1Followers')}</h4>
                        </div>
                    </div>
                    <a href="https://x.com/LacosteBtc/status/1899365804845548013" target="_blank" rel="noopener noreferrer"  className="text-[#fff] text-center pr-6 underline !mt-[10px] relative !z-[9]  text-[9px] font-[600] leading-[140%]">{t('traderReviews.viewReviewLink')}</a>
                   
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="py-[45px] pb-[51px] min-h-[220px] flex flex-col justify-between pl-[40px] pr-[16px]  rounded-[4px] max-w-[233.388px] mx-auto space-y-[30px] relative"
               
                >
                    <img src={fram} className="absolute left-[-20%] top-[-7%] min-w-[325px] min-h-[330px] z-[-1]" alt="" />
                    <p className="h-[100px] text-[10px] font-[400] leading-[175%] text-[#fff]">{t('traderReviews.review2Text')}</p>
                    <div className="flex items-center space-x-2">
                        <img src={user1} className="w-[26px] h-[26px]" alt="" />
                        <div>
                            <div className="flex items-center space-x-2">
                            <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]"> {t('traderReviews.review2Name')}</h3>
                            <img src={tick} alt="" />
                            </div>
                            <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]"> {t('traderReviews.review2Handle')}</h4>
                            <h4 className="text-[#CFCFCF] text-[9px] font-[600] leading-[140%]">  {t('traderReviews.review2Followers')}</h4>
                        </div>
                    </div>
                    <a href="https://x.com/MrX_Crypto/status/1900845071240515647" target="_blank" rel="noopener noreferrer"  className="text-[#fff] text-center pr-6 underline !mt-[10px] relative !z-[9]  text-[9px] font-[600] leading-[140%]">{t('traderReviews.viewReviewLink')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className=" py-[45px] pb-[51px] min-h-[220px] flex flex-col justify-between pl-[40px] pr-[16px]  rounded-[4px] max-w-[233.388px] mx-auto space-y-[30px] relative"
               
                >
                     <img src={fram} className="absolute left-[-20%] top-[-7%] min-w-[325px] min-h-[330px] z-[-1]" alt="" />
                    <p className="text-[10px] h-[100px] font-[400] leading-[175%] text-[#fff]">{t('traderReviews.review3Text')}</p>
                    <div className="flex items-center space-x-2">
                        <img src={user2} className="w-[25px] h-[25px]" alt="" />
                        <div>
                            <div className="flex items-center space-x-2">
                            <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]"> {t('traderReviews.review3Name')}</h3>
                            <img src={tick} alt="" />
                            </div>
                            <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]">{t('traderReviews.review3Handle')}</h4>
                            <h4 className="text-[#CFCFCF] text-[9px] font-[600] leading-[140%]">{t('traderReviews.review3Followers')}</h4>
                        </div>
                    </div>
                    <a href="https://x.com/silvinaescudero/status/1900845896302027108" target="_blank" rel="noopener noreferrer"  className="text-[#fff] text-center pr-6 underline !mt-[10px] relative !z-[9]  text-[9px] font-[600] leading-[140%]">{t('traderReviews.viewReviewLink')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="py-[45px] pb-[51px] min-h-[220px] flex flex-col justify-between pl-[40px] pr-[16px] relative rounded-[4px] max-w-[233.388px] mx-auto space-y-[30px]"
               
                >
                      <img src={fram} className="absolute left-[-20%] top-[-7%] min-w-[325px] min-h-[330px] z-[-1]" alt="" />
                    <p className="text-[10px]  h-[100px] font-[400] leading-[175%] text-[#fff]">{t('traderReviews.review4Text')}</p>
                    <div className="flex items-center space-x-2">
                        <img src={user3} className="w-[26px] h-[26px]" alt="" />
                        <div>
                            <div className="flex items-center space-x-2">
                            <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]">{t('traderReviews.review4Name')}</h3>
                            <img src={tick} alt="" />
                            </div>
                            <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]"> {t('traderReviews.review4Handle')}</h4>
                            <h4 className="text-[#CFCFCF] text-[9px] font-[600] leading-[140%]">{t('traderReviews.review4Followers')}</h4>
                        </div>
                    </div>
                    <a href="https://x.com/defi_avaxx/status/1900847259874627732" target="_blank" rel="noopener noreferrer"  className="text-[#fff] text-center pr-6 underline !mt-[10px] relative !z-[9]  text-[9px] font-[600] leading-[140%]">{t('traderReviews.viewReviewLink')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className=" py-[45px] pb-[51px] min-h-[220px] flex flex-col justify-between pl-[40px] pr-[16px] relative rounded-[4px] max-w-[233.388px] mx-auto space-y-[30px]"
               
                >
                     <img src={fram} className="absolute left-[-20%] top-[-7%] min-w-[325px] min-h-[330px] z-[-1]" alt="" />
                    <p className="text-[10px] h-[100px] font-[400] leading-[175%] text-[#fff]">{t('traderReviews.review5Text')}</p>
                    <div className="flex items-center space-x-2">
                        <img src={user4} className="w-[26px] h-[26px]" alt="" />
                        <div>
                            <div className="flex items-center space-x-2">
                            <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]">  {t('traderReviews.review5Name')}</h3>
                            <img src={tick}  alt="" />
                            </div>
                            <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]"> {t('traderReviews.review5Handle')}</h4>
                            <h4 className="text-[#CFCFCF] text-[9px] font-[600] leading-[140%]">{t('traderReviews.review5Followers')}</h4>
                        </div>
                    </div>
                    <a href="https://x.com/HoneyEth_/status/1900870121477820837" target="_blank" rel="noopener noreferrer"  className="text-[#fff] text-center pr-6 underline !mt-[10px] relative !z-[9]  text-[9px] font-[600] leading-[140%]">{t('traderReviews.viewReviewLink')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className=" py-[45px] pb-[51px] min-h-[220px] flex flex-col justify-between pl-[40px] pr-[16px] relative rounded-[4px] max-w-[233.388px] mx-auto space-y-[30px]"
               
                >
                     <img src={fram} className="absolute left-[-20%] top-[-7%] min-w-[325px] min-h-[330px] z-[-1]" alt="" />
                    <p className="text-[10px] h-[100px] font-[400] leading-[175%] text-[#fff]">{t('traderReviews.review6Text')}</p>
                    <div className="flex items-center space-x-2">
                        <img src={user5} className="w-[26px] h-[26px]" alt="" />
                        <div>
                            <div className="flex items-center space-x-2">
                            <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]"> {t('traderReviews.review6Name')}</h3>
                            <img src={tick}  alt="" />
                            </div>
                            <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]">{t('traderReviews.review6Handle')}</h4>
                            <h4 className="text-[#CFCFCF] text-[9px] font-[600] leading-[140%]">{t('traderReviews.review6Followers')}</h4>
                        </div>
                    </div>
                    <a href="https://x.com/cryptobri_/status/1901419367289512075" target="_blank" rel="noopener noreferrer"  className="text-[#fff] text-center pr-6 underline !mt-[10px] relative !z-[9]  text-[9px] font-[600] leading-[140%]">{t('traderReviews.viewReviewLink')}</a>
                </div>
                </SwiperSlide>
            </Swiper>
           
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default MobTraderReviewsSec;
