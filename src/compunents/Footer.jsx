import React, { handleScroll } from "react";
import { Link } from "react-router-dom";

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
    <div className="bg-[#FAFAFA]">
      {/* desktop verion */}

      <div className="w-[100%] 2xl:block xl:block lg:block md:block sm:hidden hidden space-y-[40px] max-w-[1188px]  pt-[50px] mx-auto pb-[50px] ">
        <div className="flex justify-between">
          <div className="flex justify-between w-[70%]">
            <div className="max-w-[250px] mr-6 space-y-[10px] w-[100%]">
            
              <Link to="/">
              <img src={logo} alt="" />
                  </Link>
              <p className="text-[#000] text-[12px] font-[400] leading-[166.667%]">
                Experience all-in-one trading with BlockchainFX: Trade Crypto,
                Forex, ETFs, Stocks, Indices, CFDs, and more with access to over
                500 assets.
              </p>
            </div>
            <div className="max-w-[150px] w-[100%] pt-[15px]">
              <ul className="max-md:list-none">
                <li className="text-[#000] text-[16px] font-[600] leading-[108.333%]  list-disc">
                  Quick Links <br />
                  <a
                    className="text-[#949494] block text-[13px] pt-[10px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block" 
                    href=""
                    onClick={(e) => handleScroll(e, "faq", 60)}
                  >
                    FAQ
                  </a><br />
                  <a
                    className="text-[#949494] block text-[13px] pt-[10px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                    href=""
                    onClick={(e) => handleScroll(e, "what-is-bfx", 20)}
                  >
                    Features
                  </a><br />
                  <a
                    className="text-[#949494] block text-[13px] pt-[10px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                    href=""
                    onClick={(e) => handleScroll(e, "reviews", 60)}
                  >
                    Reviews
                  </a><br />
                  <a
                    className="text-[#949494] block text-[13px] pt-[10px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                    href=""
                    onClick={(e) => handleScroll(e, "demo", 60)}
                  >
                   Free Demo Account
                  </a><br />
                  {/* <a className='text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block' href="" onClick={(e) => handleScroll(e, "tokenomics", 90)} >Token Allocation</a> */}
                </li>
              </ul>
            </div>
            <div className="max-w-[150px] w-[100%] pt-[15px]">
              <ul className="max-md:list-none w-[100%]">
                <li className="text-[#000] text-[16px] list-disc font-[600] leading-[108.333%]">
                Docs <br />
                  <Link to="/anti-money">
                    <p className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                      AML
                    </p><br />
                  </Link>
                  <Link to="/general-fees">
                    <p className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    General Fees
                    </p><br />
                  </Link>
                  <Link to="/risk-disclosure">
                    <p className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    Risk Disclosure
                    </p>
                  </Link><br />
                  <Link to="/terms-of-service">
                    <p 
                  className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    Terms of Service
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-w-[150px] w-[100%] pt-[15px]">
              <ul className="max-md:list-none w-[100%]">
                <li className="text-[#000] text-[16px] list-disc font-[600] leading-[108.333%]">
                  Policies <br />

                  <Link to="/payment-policy">
                    <p 
                    className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    Payment
                    </p>
                  </Link>
                  <Link to="/order-execution">
                    <p 
                    className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    Order Execution
                    </p>
                  </Link>
                  <Link to="/withdrawal-policy">
                    <p className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    Withdrawal
                    </p>
                  </Link>
                  <Link to="/demo-account">
                    <p className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                     Demo Account
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[285px] space-y-[10px] w-[100%] pt-[12px]">
            <h4 className="text-[#000] text-[13.3px] font-[600] leading-[108.333%]">
              Join Our Socials
            </h4>
            <div className="flex space-x-6 pt-[10px] pb-[20px]">
              <a href="https://www.instagram.com/blockchain.fx?igsh=MWwybTk3cTRmbDhhcg%3D%3D" target="_blank" rel="noopener noreferrer"
               className="transition-transform duration-300 hover:scale-110"
              >
              <img src={socil1} alt="" />
              </a>
              <a href="https://t.me/blockchainfx_news" target="_blank" rel="noopener noreferrer"
               className="transition-transform duration-300 hover:scale-110"
              >
              <img src={socil2} alt="" />
              </a>
              <a href="https://x.com/BlockchainFXcom" target="_blank" rel="noopener noreferrer"
               className="transition-transform duration-300 hover:scale-110"
              >
              <img src={socil3} alt="" />
              </a>
            </div>
            <div className="space-y-[5px]">
              <h4 className="text-[#949494] text-[10.8px] font-[400] leading-[108.333%]">
                Contact E-Mail:{" "}
              </h4>
              <h3 className="text-[#949494] text-[15px] font-[400] leading-[108.333%]">
                Support@blockchainfx.com
              </h3>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-[#000] py-[36px]">
          <p className="text-[10px] font-[400] text-[#000] leading-[190%]">
            The services on this website are not available to the citizens
            and/or residents of the USA and to the residents of the following
            countries: Canada, Switzerland, Australia, Israel, Palestine, Japan,
            Sudan, Syria, Iran, North Korea, Republic of the Marshall Islands,
            Puerto Rico, Liberia, New Zealand and/or any country of the European
            Economic Area (EEA). <br />
            <br />
            Operations offered on this website may have an increased level of
            risk. By purchasing services and tools from this website, you can
            suffer significant losses or completely lose the funds from your
            guaranteed trading account. Please evaluate all risks and consult
            with an independent adviser before trading.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className=" text-[12px] text-[#000] leading-[100%]">
            Copyright 2025. All Rights Reserved.
          </p>
          <div className="space-x-5 ">
            <a href="" className="border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block text-[12px] text-[#000] leading-[100%]">
              Privacy Policy
            </a>
            <a href="" className="border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block text-[12px] text-[#000] leading-[100%]">
              Cookie Management
            </a>
          </div>
        </div>
      </div>

      {/* desktop version end */}

      {/* mobile version */}

      <div className="w-[90%] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block space-y-[35px] py-[24px] mx-auto ">
        <div className=" space-y-[10px] w-[100%]">
          <img src={logo} alt="" />
          <p className="text-[#000] text-[14px] font-[400] leading-[200%]">
            <p className="text-[#000] text-[14px] font-[400] leading-[22px]">
              Experience all-in-one trading with BlockchainFX: Trade Crypto,
              Forex, ETFs, Stocks, Indices, CFDs, and more with access to over
              500 assets.
            </p>
          </p>
        </div>
        <div className="flex justify-between px-5">
          <div className=" w-[50%] pt-[15px]">
            <ul className="max-md:list-none">
              <li className="text-[#000] text-[16px] font-[600] leading-[108.333%]  list-disc">
                Quick Links  <br />
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "faq", 90)}
                >
                  FAQ
                </a> <br />
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "features", 90)}
                >
                  Features
                </a> <br />
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "reviews", 90)}
                >
                  Reviews
                </a> <br />
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "demo", 90)}
                >
                  Free Demo Account
                </a>
                
                {/* <a className='text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block' href="" onClick={(e) => handleScroll(e, "tokenomics", 90)} >Token Allocation</a> */}
              </li>
            </ul>
          </div>
          <div className="w-[45%] pt-[15px]">
            <ul className="max-md:list-none w-[100%]">
              <li className="text-[#000] text-[16px] list-disc font-[600] leading-[108.333%]">
              Docs <br />
                <Link to="/anti-money">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                      AML
                    </p>
                  </Link> <br />
                  <Link to="/general-fees">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    General Fees
                    </p>
                  </Link> <br />
                  <Link to="/risk-disclosure">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    Risk Disclosure
                    </p>
                  </Link> <br />
                <Link to="/terms-of-service">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">Terms of Service{" "}
                    </p>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[200px] w-[100%] pt-[15px] px-5">
            <ul className="max-md:list-none w-[100%]">
              <li className="text-[#000] text-[16px] list-disc font-[600] leading-[108.333%]">
                Policies  <br />
                <Link to="/payment-policy">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    Payment
                    </p>
                  </Link> <br />
                  <Link to="/order-execution">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    Order Execution
                    </p>
                  </Link>
                  <Link to="/withdrawal-policy">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    Withdrawal
                    </p>
                  </Link>
                  <Link to="/demo-account">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    Demo Account
                    </p>
                  </Link>
              </li>
            </ul>
          </div>
        <div className="flex justify-between">
          <div className="max-w-[285px] space-y-[25px] pt-[3px] w-[100%] ">
            <h4 className="text-[#000] text-[16px] font-[600] leading-[108.333%]">
              Join Our Socials
            </h4>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/blockchain.fx?igsh=MWwybTk3cTRmbDhhcg%3D%3D" target="_blank" rel="noopener noreferrer" 
               className="transition-transform duration-300 hover:scale-110"
              >
              <img className="w-[24px] h-[24px]" src={socil1} alt="" />
              </a>
              <a href="https://t.me/blockchainfx_news" target="_blank" rel="noopener noreferrer" 
               className="transition-transform duration-300 hover:scale-110"
              >
              <img className="w-[24px] h-[24px]" src={socil2} alt="" /></a>
              <a href="https://x.com/BlockchainFXcom" target="_blank" rel="noopener noreferrer" 
               className="transition-transform duration-300 hover:scale-110"
              >
              <img className="w-[24px] h-[24px]" src={socil3} alt="" />
              </a>
            </div>
            <div className="space-y-[10px]">
              <h4 className="text-[#949494] text-[12px] font-[400] leading-[108.333%]">
                Contact E-Mail:{" "}
              </h4>
              <h3 className="text-[#949494] text-[15px] font-[400] leading-[108.333%]">
                Support@blockchainfx.com
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
            Puerto Rico, Liberia, New Zealand and/or any country of the European
            Economic Area (EEA). <br />
            <br />
            Operations offered on this website may have an increased level of
            risk. By purchasing services and tools from this website, you can
            suffer significant losses or completely lose the funds from your
            guaranteed trading account. Please evaluate all risks and consult
            with an independent adviser before trading.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="space-x-4">
            <a href="" className="text-[12px] text-[#000] leading-[100%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
              Privacy Policy
            </a>
            <a href="" className="text-[12px] text-[#000] leading-[100%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
              Cookie Management
            </a>
          </div>
        </div>
        <div>
          <p className="text-[10px] text-center text-[#000] leading-[100%]">
            Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* mobile version end */}
    </div>
  );
}

export default Footer;
