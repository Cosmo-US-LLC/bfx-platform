import React, { useState } from "react";

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
        className={`border flex justify-between p-[10px] items-center cursor-pointer duration-200 ${
          isOpen ? "border-[#000] bg-[#FFF]" : "border-[#E1E1E1] bg-[#F6F6F6]"
        }  border-solid`}
        onClick={handleClick}
      >
        <div className="flex items-center justify-center">
          <div className={`text-[14px] text-[#000] font-[600]`}>{question}</div>
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
        <div className="w-[100%] pt-2">
          <p
            className="text-[15px] text-[#000] leading-[25px] font-[400]"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      </div>
    </div>
  );
};

const MobFaqSec = () => {
  const faqData = [
    {
      question: "How can I start?",
      answer:
        "Getting started is quick and easy! Sign up on the BlockchainFX platform and create your free demo account. When you're ready, switch to the live platform, make a deposit, and start trading immediately.",
    },
    {
      question: "Can I start with a demo account?",
      answer:
        "Yes! BlockchainFX offers a free demo account with $10,000, refillable at any time. Practice trading strategies and explore the platform completely risk-free!",
    },
    {
      question: "What’s the best way to trade?",
      answer:
        "The best trading approach depends on your goals and experience. Beginners should start small and focus on understanding market trends. BlockchainFX offers tools, insights, and educational resources to help you trade confidently and effectively.",
    },
    {
      question: "What does BlockchainFX offer?",
      answer:
        "BlockchainFX is a versatile trading platform with features like real-time market data and access to over 500 tradable assets. Enjoy analytical tools, an intuitive interface, and dedicated 24/7 customer support to enhance your trading journey.",
    },
    {
      question: "Is BlockchainFX secure?",
      answer:
        "Absolutely! BlockchainFX prioritizes the security of your funds and personal information. The platform uses advanced encryption, two-factor authentication (2FA), and robust protocols to ensure a safe trading environment.",
    },
  ];
  const [openItems, setOpenItems] = useState([]);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#FAFAFA]" id="faq">
        <div className="space-y-[30px] px-[18px] py-[24px]">
          <div className="text-center space-y-[20px]">
            <h2 className="text-[#000] leading-[100%] text-[32px] font-[600]">
              FAQs
            </h2>
            <p className="text-[15px] font-[400] text-[#000] text-center">
            Our answers to some<br />of the most common questions.
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

export default MobFaqSec;
