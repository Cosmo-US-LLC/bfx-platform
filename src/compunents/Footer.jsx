import React, { handleScroll } from "react";

import logo from "../assets/footer/logo.svg";
import socil1 from "../assets/footer/Vector (2).svg";
import socil2 from "../assets/footer/Vector (3).svg";
import socil3 from "../assets/footer/Vector (4).svg";

function Footer() {
  const handleScroll = (event, targetId, offset) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* desktop verion */}

      <div className="w-[100%] 2xl:block xl:block lg:block md:block sm:hidden hidden space-y-[40px] max-w-[1220px]  pt-[73px] mx-auto pb-[85px] ">
        <div className="flex justify-between">
          <div className="flex justify-between w-[60%]">
            <div className="max-w-[245px] space-y-[10px] w-[100%]">
              <img src={logo} alt="" />
              <p className="text-[#000] text-[14px] font-[400] leading-[200%] tracking-tight">
                Experience all-in-one trading with BlockchainFX: Trade Crypto,
                Forex, ETFs, Stocks, Indices, CFDs, and more with access to over
                500 assets.
              </p>
            </div>
            <div className="max-w-[150px] w-[100%] pt-[15px]">
              <ul className="max-md:list-none">
                <li className="text-[#000] text-[16px] font-[600] leading-[108.333%]  list-disc">
                  Quick Links
                  <a
                    className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]"
                    href=""
                    onClick={(e) => handleScroll(e, "faq", 90)}
                  >
                    FAQ
                  </a>
                  <a
                    className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]"
                    href=""
                    onClick={(e) => handleScroll(e, "features", 90)}
                  >
                    Features
                  </a>
                  <a
                    className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]"
                    href=""
                    onClick={(e) => handleScroll(e, "reviews", 90)}
                  >
                    Reviews
                  </a>
                  <a
                    className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]"
                    href=""
                    onClick={(e) => handleScroll(e, "demo", 90)}
                  >
                    Demo Account
                  </a>
                  {/* <a className='text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]' href="" onClick={(e) => handleScroll(e, "tokenomics", 90)} >Token Allocation</a> */}
                </li>
              </ul>
            </div>
            <div className="max-w-[200px] w-[100%] pt-[15px]">
              <ul className="max-md:list-none w-[100%]">
                <li className="text-[#000] text-[16px] list-disc font-[600] leading-[108.333%]">
                  Policies
                  <a
                    className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%]"
                    href="https://blockchainfx.io/legal/terms"
                  >
                    Terms of Service{" "}
                  </a>
                  <a
                    className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%]"
                    href="https://blockchainfx.io/legal/payment-policy"
                  >
                    Payment Policy{" "}
                  </a>
                  <a
                    className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%]"
                    href="https://blockchainfx.io/legal/order-execution"
                  >
                    Order Execution Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[285px] space-y-[20px] w-[100%] pt-[12px]">
            <h4 className="text-[#000] text-[16px] font-[600] leading-[108.333%]">
              Join Our Socials
            </h4>
            <div className="flex space-x-6 px-[10px] pt-[10px] pb-[20px]">
              <img src={socil1} alt="" />
              <img src={socil2} alt="" />
              <img src={socil3} alt="" />
            </div>
            <div className="space-y-[5px]">
              <h4 className="text-[#949494] text-[13px] font-[400] leading-[108.333%]">
                Contact E-Mail:{" "}
              </h4>
              <h3 className="text-[#949494] text-[18px] font-[400] leading-[108.333%]">
                Hello@blockchainfx.com
              </h3>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-[#000] py-[46px]">
          <p className="text-[10px] font-[400] text-[#000] leading-[190%]">
          The services on this website are not available to the citizens
            and/or residents of the USA and to the residents of the following
            countries: Canada, Switzerland, Australia, Israel, Palestine, Japan,
            Sudan, Syria, Iran, North Korea, Republic of the Marshall Islands,
            Puerto Rico, Liberia, New Zealand and/or any
            country of the European Economic Area (EEA). <br />
            <br />
            Operations offered on this website may have an increased level of
            risk. By purchasing services and tools from this website, you can
            suffer significant losses or completely lose the funds from your
            guaranteed trading account. Please evaluate all risks and consult
            with an independent adviser before trading.
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[14px] text-[#000] leading-[100%]">
            Copyright 2024. All Rights Reserved.
          </p>
          <div
            className="
          space-x-5"
          >
            <a href="" className="text-[14px] text-[#000] leading-[100%]">
              Legal Documents
            </a>
            <a href="https://blockchainfx.io/legal/privacy" className="text-[14px] text-[#000] leading-[100%]">
              Privacy Policy
            </a>
            <a href="https://blockchainfx.io/legal/cookies" className="text-[14px] text-[#000] leading-[100%]">
              Cookie Management
            </a>
          </div>
        </div>
      </div>

      {/* desktop version end */}

      {/* mobile version */}

      <div className="w-[90%] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block space-y-[18px] py-[24px] mx-auto ">
        <div className=" space-y-[15px] w-[100%]">
          <img src={logo} alt="" />
          <p className="text-[#000] text-[14px] font-[400] leading-[22px]">
            Experience all-in-one trading with BlockchainFX: Trade Crypto,
            Forex, ETFs, Stocks, Indices, CFDs, and more with access to over 500
            assets.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="max-w-[150px] w-[100%] ">
            <ul className="">
              <li className="text-[#000] text-[16px] font-[600] leading-[108.333%] list-none">
                Legal
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]"
                  href="https://blockchainfx.io/legal/aml"
                  onClick={(e) => handleScroll(e, "how-to-buy", 90)}
                >
                  AML
                </a>
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]"
                  href=""
                  onClick={(e) => handleScroll(e, "what-is-bfx", 90)}
                >
                  KYC
                </a>
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]"
                  href="https://blockchainfx.io/legal/general-fees"
                  onClick={(e) => handleScroll(e, "roadmap", 90)}
                >
                  General Fees
                </a>
                {/* <a className='text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]' href="" onClick={(e) => handleScroll(e, "tokenomics", 90)} >Token Allocation</a> */}
              </li>
            </ul>
          </div>
          <div className="max-w-[200px] w-[100%] ">
            <ul className="w-[100%]">
              <li className="text-[#000] list-none text-[16px] font-[600] leading-[108.333%]">
                Policies
                <a
                  className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%]"
                  href=""
                >
                  Terms of Service{" "}
                </a>
                <a
                  className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%]"
                  href="https://blockchainfx.io/legal/payment-policy"
                >
                  Payment Policy{" "}
                </a>
                <a
                  className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%]"
                  href="https://blockchainfx.io/legal/order-execution"
                >
                  Order Execution Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="max-w-[285px] space-y-[25px] pt-[3px] w-[100%] ">
            <h4 className="text-[#000] text-[16px] font-[600] leading-[108.333%]">
              Join Our Socials
            </h4>
            <div className="flex space-x-3">
              <img src={socil1} alt="" />
              <img src={socil2} alt="" />
              <img src={socil3} alt="" />
            </div>
            <div className="space-y-[6px]">
              <h4 className="text-[#202020] text-[12px] font-[400] leading-[108.333%]">
                Contact E-Mail:{" "}
              </h4>
              <h3 className="text-[#949494] text-[15px] font-[400] leading-[108.333%]">
                Hello@blockchainfx.com
              </h3>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-[#000] py-[18px]">
          <p className="text-[10px] font-[400] text-[#000] leading-[190%]">
            The services on this website are not available to the citizens
            and/or residents of the USA and to the residents of the following
            countries: Canada, Switzerland, Australia, Israel, Palestine, Japan,
            Sudan, Syria, Iran, North Korea, Republic of the Marshall Islands,
            Puerto Rico, Liberia, New Zealand and/or any
            country of the European Economic Area (EEA). <br />
            <br />
            Operations offered on this website may have an increased level of
            risk. By purchasing services and tools from this website, you can
            suffer significant losses or completely lose the funds from your
            guaranteed trading account. Please evaluate all risks and consult
            with an independent adviser before trading.
          </p>
        </div>
        <div className="flex justify-center gap-x-4">
            <a href="" className="text-[12px] text-[#000] leading-[100%]">
              Legal Documents
            </a>
            <a href="https://blockchainfx.io/legal/privacy" className="text-[12px] text-[#000] leading-[100%]">
              Privacy Policy
            </a>
            <a href="https://blockchainfx.io/legal/cookies" className="text-[12px] text-[#000] leading-[100%]">
              Cookie Management
            </a>
          {/* <div className="space-x-4">
          </div> */}
        </div>
        <div>
          <p className="text-[10px] text-center text-[#000] leading-[100%]">
            Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* mobile version end */}
    </div>
  );
}

export default Footer;
