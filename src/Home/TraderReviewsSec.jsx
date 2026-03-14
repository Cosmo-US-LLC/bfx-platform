import React from "react";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import tradimg from "../assets/TraderReviewsSec/framdes.png";
import user1 from "../assets/TraderReviewsSec/rew (5).png";
import user2 from "../assets/TraderReviewsSec/rew (4).png";
import user3 from "../assets/TraderReviewsSec/rew (3).png";
import user4 from "../assets/TraderReviewsSec/rew (2).png";
import user5 from "../assets/TraderReviewsSec/rew (1).png";
import usern from "../assets/TraderReviewsSec/user.png";
import tick from "../assets/TraderReviewsSec/Vector.svg";
import swpbtnl from "../assets/TraderReviewsSec/arwr.svg";
import swpbtnr from "../assets/TraderReviewsSec/arw.svg";

function TraderReviewsSec() {
  const { t } = useTranslation();

  return (
    <div className=" bg-[#FAFAFA]">
      <div
        className="pt-[50px] space-y-[35px] max-w-[1200px] w-[100%] mx-auto"
        id="reviews"
      >
        <div className=" relative space-y-[40px] w-[100%]  ">
          <div className="space-y-[30px]">
            <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
              {t('traderReviews.title')}
            </h3>
          </div>
          <div className="flex justify-between gap-x-[1rem] pl-[0rem] 2xl:pl-[0rem] xl:pl-[0rem] lg:pl-[1rem] md:pl-[2rem] sm:pl-[0rem] pl-[0rem] items-center ml-auto max-w-[1080px]">
            <div className="max-w-[286px] space-y-[30px] w-[100%] pb-5">
              <div className="space-y-[15px]">
                <h4 className="text-[19.3px] bg-[#D9D9D9] text-center font-[400] max-w-[163.5px] py-[10px] mx-auto">
                  {t('traderReviews.ratingBadge')}
                </h4>
                <p className="text-center text-[#7C7C7C] text-[15px] font-[400]">
               {t('traderReviews.verifiedRatings')}
                </p>
              </div>
              <div className=" w-[100%] space-y-[28px]">
                <div className="flex items-center justify-between space-x-4">
                  <span className="text-[19.3px] font-[400] w-[30px]">5</span>
                  <div className="h-[14px] w-[205px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                    <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[86%]"></div>
                  </div>
                  <span className="text-[19.3px] font-[400] w-[50px]">86%</span>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <span className="text-[19.3px] font-[400] w-[30px]">4</span>
                  <div className="h-[14px] w-[205px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                    <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[12%]"></div>
                  </div>
                  <span className="text-[19.3px] font-[400] w-[50px]">8%</span>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <span className="text-[19.3px] font-[400] w-[30px]">3</span>
                  <div className="h-[14px] w-[205px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                    <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[9%]"></div>
                  </div>
                  <span className="text-[19.3px] font-[400] w-[50px]">3%</span>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <span className="text-[19.3px] font-[400] w-[30px]">2</span>
                  <div className="h-[14px] w-[205px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                    <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[8%]"></div>
                  </div>
                  <span className="text-[19.3px] font-[400] w-[50px]">2%</span>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <span className="text-[19.3px] font-[400] w-[30px]">1</span>
                  <div className="h-[14px] w-[205px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                    <div className="bg-[#E5AE00] h-[14px] rounded-[100%] w-[6%]"></div>
                  </div>
                  <span className="text-[19.3px] font-[400] w-[50px]">1%</span>
                </div>
              </div>
            </div>

            <div className="w-[100%] relative flex flex-col h-[500px] justify-center overflow-y-hidden overflow-x-auto">
              <div className="relative h-[20px] rounded-[60px] ">
                <img loading="lazy"
                  src={tradimg}
                  className="h-[435px] absolute w-[330px] top-[-200%]  !z-[1] "
                  alt=""
                />
                <div className="w-[305px] bg-[#181A20] h-[422px] z-[1] top-[-135%] rounded-t-[40px] left-3 absolute"></div>
              </div>
              <div className="relative pt-[2rem]">
                <div className="max-w-[100px] w-[100%] flex space-x-2 ml-auto">
                  <button className="swiper-button-prev !w-[40px] !h-[40px]  absolute z-10 !left-[80%] !top-[-10%]  ">
                    <img loading="lazy"
                      className="w-[50.545px] h-[50.545px] "
                      src={swpbtnl}
                      alt=""
                    />
                  </button>
                  <button className="swiper-button-next !w-[40px] !h-[40px]  absolute z-10 !right-[6%] !top-[-10%] ">
                    <img loading="lazy"
                      className="w-[50.545px] h-[50.545px]"
                      src={swpbtnr}
                      alt=""
                    />
                  </button>
                </div>

                <Swiper
                  slidesPerView={2.2}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  modules={[Navigation]}
                  loop={true}
                  className="mySwiper !ml-4 "
                >
                  <SwiperSlide>
                    <div className="py-[35px] relative z-[9]  min-h-[340px] max-h-[340px] flex flex-col justify-between pl-[35px] pr-[14px]  bg-[#181A20] rounded-[4px] w-[294px] space-y-[30px]">
                      <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      {t('traderReviews.review1Text')}
                      </p>
                      <div className="flex items-center space-x-2">
                        <img loading="lazy" src={usern} alt="" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                            {t('traderReviews.review1Name')}
                            </h3>
                            <img loading="lazy" src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[10px] font-[600] leading-[140%]">
                          {t('traderReviews.review1Handle')}
                          </h4>
                          <h4 className="text-[#CFCFCF] text-[11.6px] font-[600] leading-[160%]">
                          {t('traderReviews.review1Followers')}
                          </h4>
                        </div>
                      </div>
                          <a href="https://x.com/LacosteBtc/status/1899365804845548013" target="_blank" rel="noopener noreferrer"  className="text-[#fff] text-center pr-6 underline !mt-[20px] relative !z-[9]  text-[10px] font-[600] leading-[140%]">{t('traderReviews.viewReviewLink')}</a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="py-[35px] relative z-[9] min-h-[340px] max-h-[340px] flex flex-col justify-between pl-[33px] pr-[14px]  bg-[#181A20] rounded-[4px] w-[294px] space-y-[30px]">
                      <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      {t('traderReviews.review2Text')}
                      </p>
                      <div className="flex items-center space-x-2">
                        <img loading="lazy" src={user1} alt="" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                            {t('traderReviews.review2Name')}
                            </h3>
                            <img loading="lazy" src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[10px] font-[600] leading-[140%]">
                          {t('traderReviews.review2Handle')}
                          </h4>
                          <h4 className="text-[#CFCFCF] text-[11.6px] font-[600] leading-[160%]">
                          {t('traderReviews.review2Followers')}
                          </h4>
                        </div>
                      </div>
                      <a href="https://x.com/MrX_Crypto/status/1900845071240515647" target="_blank" rel="noopener noreferrer"  className="text-[#fff] text-center pr-6 underline !mt-[20px] relative !z-[9]  text-[10px] font-[600] leading-[140%]">{t('traderReviews.viewReviewLink')}</a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="py-[35px] relative z-[9]  min-h-[340px] max-h-[340px] flex flex-col justify-between pl-[35px] pr-[14px]  bg-[#181A20] rounded-[4px] w-[294px] space-y-[30px]">
                      <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      {t('traderReviews.review3Text')}
                      </p>
                      <div className="flex items-center space-x-2">
                        <img loading="lazy" src={user2} alt="" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                            {t('traderReviews.review3Name')}
                            </h3>
                            <img loading="lazy" src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[10px] font-[600] leading-[140%]">
                          {t('traderReviews.review3Handle')}
                          </h4>
                          <h4 className="text-[#CFCFCF] text-[11.6px] font-[600] leading-[160%]">
                          {t('traderReviews.review3Followers')}
                          </h4>
                        </div>
                      </div>
                      <a href="https://x.com/silvinaescudero/status/1900845896302027108" target="_blank" rel="noopener noreferrer"  className="text-[#fff] text-center pr-6 underline !mt-[20px] relative !z-[9]  text-[10px] font-[600] leading-[140%]">{t('traderReviews.viewReviewLink')}</a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="py-[35px] relative z-[9]  min-h-[340px] max-h-[340px] flex flex-col justify-between pl-[35px] pr-[14px]  bg-[#181A20] rounded-[4px] w-[294px] space-y-[30px]">
                      <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      {t('traderReviews.review4Text')}
                      </p>
                      <div className="flex items-center space-x-2">
                        <img loading="lazy" src={user3} alt="" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                            {t('traderReviews.review4Name')}
                            </h3>
                            <img loading="lazy" src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[10px] font-[600] leading-[140%]">
                          {t('traderReviews.review4Handle')}
                          </h4>
                          <h4 className="text-[#CFCFCF] text-[11.6px] font-[600] leading-[160%]">
                          {t('traderReviews.review4Followers')}
                          </h4>
                        </div>
                      </div>
                      <a href="https://x.com/defi_avaxx/status/1900847259874627732" target="_blank" rel="noopener noreferrer"  className="text-[#fff] text-center pr-6 underline !mt-[20px] relative !z-[9]  text-[10px] font-[600] leading-[140%]">{t('traderReviews.viewReviewLink')}</a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="py-[35px] relative z-[9] pb-[51px] min-h-[340px] max-h-[340px] flex flex-col justify-between pl-[35px] pr-[14px]  bg-[#181A20] rounded-[4px] w-[294px] space-y-[30px]">
                      <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      {t('traderReviews.review5Text')}
                      </p>
                      <div className="flex items-center space-x-2">
                        <img loading="lazy" src={user4} alt="" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                            {t('traderReviews.review5Name')}
                            </h3>
                            <img loading="lazy" src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[10px] font-[600] leading-[140%]">
                          {t('traderReviews.review5Handle')}
                          </h4>
                          <h4 className="text-[#CFCFCF] text-[11.6px] font-[600] leading-[160%]">
                          {t('traderReviews.review5Followers')}
                          </h4>
                        </div>
                      </div>
                      <a href="https://x.com/HoneyEth_/status/1900870121477820837" target="_blank" rel="noopener noreferrer"  className="text-[#fff] text-center pr-6 underline !mt-[20px] relative !z-[9]  text-[10px] font-[600] leading-[140%]">{t('traderReviews.viewReviewLink')}</a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="py-[35px] relative z-[9] pb-[51px] min-h-[340px] max-h-[340px] flex flex-col justify-between pl-[35px] pr-[14px]  bg-[#181A20] rounded-[4px] w-[294px] space-y-[30px]">
                      <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      {t('traderReviews.review6Text')}
                      </p>
                      <div className="flex items-center space-x-2">
                        <img loading="lazy" src={user5} alt="" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                            {t('traderReviews.review6Name')}
                            </h3>
                            <img loading="lazy" src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[10px] font-[600] leading-[140%]">
                          {t('traderReviews.review6Handle')}
                          </h4>
                          <h4 className="text-[#CFCFCF] text-[11.6px] font-[600] leading-[160%]">
                          {t('traderReviews.review6Followers')}
                          </h4>
                        </div>
                      </div>
                      <a href="https://x.com/cryptobri_/status/1901419367289512075" target="_blank" rel="noopener noreferrer"  className="text-[#fff] text-center pr-6 underline !mt-[20px] relative !z-[9]  text-[10px] font-[600] leading-[140%]">{t('traderReviews.viewReviewLink')}</a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraderReviewsSec;
