import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import faqicn1 from "../assets/faqs/image (3).svg";
import faqicn2 from "../assets/faqs/image (4).svg";
const FaqItem = ({ question, answer, isOpen, handleClick }) => {
  const createMarkup = () => ({ __html: answer });
  const contentStyles = {
    maxHeight: isOpen ? "1000px" : "0",
    opacity: isOpen ? "1" : "0",
    overflow: "hidden",
    transition: "max-height 0.9 ease, opacity 2s ease",
  };

  return (
    <div className="mb-[20px]">
      <div
        className={`border flex justify-between py-[10px] px-[10px] bg-[#FFF] rounded-[4px] items-center cursor-pointer ${
          isOpen ? "border-[#000]" : "border-[#000]"
        }  border-solid`}
        onClick={handleClick}
      >
        <div className="flex items-center justify-center">
          <div className={`text-[16px] text-[#000] font-[600]`}>{question}</div>
        </div>

        <h4
          className={`text-[18px] xs:text-[10px] rounded-full w-[26px] h-[26px] xs:h-[16px] xs:w-[16px]  flex items-center justify-center plusIcon  ${
            !isOpen
              ? "text-[#C3BABA] border-none rotate-0"
              : " border-none text-[#c3baba]"
          }`}
        >
          {isOpen ? (
            <>
              <div>
                <img src={faqicn1} alt="" />
              </div>
            </>
          ) : (
            <>
              <div>
                <img src={faqicn2} alt="" />
              </div>
            </>
          )}
        </h4>
      </div>
      <div style={contentStyles}>
        <div className="w-[100%]  px-[25px] py-[20px]">
          <p
            className="pb-[10px]  text-[16px] text-[#000] leading-[150%] font-[400]"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      </div>
    </div>
  );
};

const FaqSec = () => {
  const { t } = useTranslation();

  const faqData = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3'),
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4'),
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5'),
    },
  ];
  const [openItems, setOpenItems] = useState([]);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#FFF]" id="faq">
        <div className=" w-[100%] max-w-[990px] h-[600px] gap-6  flex flex-col justify-center  mx-auto px-[105px]">
          <div className="text-center space-y-[20px]">
            <h2 className="text-[#000] leading-[100%] text-[30px] font-[600]">
              {t('faq.title')}
            </h2>
            <p className="text-[14px] font-[400] text-[#000] text-center">
              {t('faq.subtitle')}
            </p>
          </div>
          <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] mx-auto">
            <div className="">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems === index}
                  handleClick={() => handleClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSec;
