import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/navbar/logo.svg";
import flag from "../assets/navbar/flg.svg";
import menu from "../assets/navbar/menu.svg";
import arwdwn from "../assets/navbar/arw.svg";
import flag1 from "../assets/navbar/flg (1).svg";
import flag2 from "../assets/navbar/flg (2).svg";
import flag3 from "../assets/navbar/flg (3).svg";
import flag4 from "../assets/navbar/flg (4).svg";
import flag5 from "../assets/navbar/flg (5).svg";
import flag6 from "../assets/navbar/flg (6).svg";
import flag7 from "../assets/navbar/flg (7).svg";
import flag8 from "../assets/navbar/flg (8).svg";
import flag9 from "../assets/navbar/flg (9).svg";
import flag10 from "../assets/navbar/flg (10).svg";
import flag11 from "../assets/navbar/flg (11).svg";
import flag12 from "../assets/navbar/flg (12).svg";
import flag13 from "../assets/navbar/flg (13).svg";
import flag14 from "../assets/navbar/flg (14).svg";

const flags = [
  { flag: flag1, abbreviation: "EN", name: "English" },
  { flag: flag2, abbreviation: "VI", name: "Vietnamese" },
  { flag: flag3, abbreviation: "DE", name: "German" },
  { flag: flag4, abbreviation: "NL", name: "Dutch" },
  { flag: flag5, abbreviation: "JA", name: "Japanese" },
  { flag: flag6, abbreviation: "TR", name: "Turkish" },
  { flag: flag7, abbreviation: "KO", name: "Korean" },
  { flag: flag8, abbreviation: "IT", name: "Italian" },
  { flag: flag9, abbreviation: "NO", name: "Norwegian" },
  { flag: flag10, abbreviation: "ZH", name: "Chinese" },
  { flag: flag11, abbreviation: "RU", name: "Russian" },
  { flag: flag12, abbreviation: "FR", name: "French" },
  { flag: flag13, abbreviation: "PT", name: "Portuguese" },
  { flag: flag14, abbreviation: "ES", name: "Spanish" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedLang, setSelectedLang] = useState({
    flag: flags[0].flag,
    abbreviation: flags[0].abbreviation,
    name: flags[0].name,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectLanguage = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="fixed w-[100%] bg-[#F2F2F2] z-[999]">
      <div className="2xl:h-[63px] xl:h-[63px] lg:h-[63px] md:h-[63px] sm:h-[64px] h-[64px] max-w-[1200px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] mx-auto flex items-center justify-between">
        <div className="flex items-center max-md:space-x-3">
          <div className="md:hidden">
            <img
              src={menu}
              onClick={toggleMobileMenu}
              className="cursor-pointer"
              alt=""
            />
          </div>
          <div className="max-w-[175px] flex justify-start">
             <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
             <img
              src={logo}
              className="cursor-pointer"
              alt=""
            />
              </Link>
          </div>
        </div>
        <div className="space-x-[27px] 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden items-center">
          <a
            className="text-[14px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300"
            onClick={(e) => handleScroll(e, "start", 60)}
            href=""
          >
            Quick Start
          </a>
          <a
            className="text-[14px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300"
            onClick={(e) => handleScroll(e, "demo", 60)}
            href=""
          >
            Free Demo Account
          </a>
          <a
            className="text-[14px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300"
            onClick={(e) => handleScroll(e, "what-is-bfx", 20)}
            href=""
          >
            Features
          </a>
          {/* <a
            className="text-[14px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300"
            onClick={(e) => handleScroll(e, "win", 60)}
            href=""
          >
            Awards
          </a> */}
          <a
            className="text-[14px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300"
            onClick={(e) => handleScroll(e, "reviews", 60)}
            href=""
          >
            Reviews
          </a>
          <div
            ref={dropdownRef}
            className="relative flex items-center justify-center space-x-2"
          >
            <img
              className="w-[18px]"
              src={selectedLang.flag}
              alt={selectedLang.name}
            />
            <span className="text-[#000] text-[14px] font-[600]">
              {selectedLang.abbreviation}
            </span>

            <img
              src={arwdwn}
              alt="Dropdown Arrow"
              onClick={toggleDropdown}
              className={`cursor-pointer transform transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />

            {isOpen && (
              <div className="absolute !top-[43px] w-[439px] rounded-[13px] px-[55px] py-[41px] bg-white shadow-lg">
                <h3 className="text-[20px] text-[#444] font-[700] mb-4">
                  Languages
                </h3>
                <div className="grid grid-cols-2">
                  {flags.map((lang, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 mb-[15px] rounded"
                      onClick={() => handleSelectLanguage(lang)}
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-[33px] h-[33px]"
                      />
                      <span className="text-[17.599px] font-[500] text-[#444]">
                        {lang.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* mobile menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[100%] min-h-[100vh] left-0 w-full bg-white shadow-md z-50 p-6">
            <a
              className="inline-block text-[16px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
              href=""
              onClick={(e) => handleScroll(e, "start", 90)}
            >
              Quick Start
            </a><br />
            <a
              className="inline-block text-[16px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
              href=""
              onClick={(e) => handleScroll(e, "demo", 90)}
            >
              Free Demo Account
            </a><br />
            <a
              className="inline-block text-[16px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
              href=""
              onClick={(e) => handleScroll(e, "features", 90)}
            >
              Features
            </a><br />
            {/* <a
              className="inline-block text-[16px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
              href="#"
              onClick={(e) => handleScroll(e, "awards", 90)}
            >
              Awards
            </a> */}
            <a
              className="inline-block text-[16px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
              href=""
              onClick={(e) => handleScroll(e, "reviews", 90)}
            >
              Reviews
            </a><br />
            <div
              ref={dropdownRef}
              className="relative flex items-center justify-start space-x-2"
            >
              <img
                className="w-[20px]"
                src={selectedLang.flag}
                alt={selectedLang.name}
              />
              <span className="text-[#000] text-[16px] font-[600]">
                {selectedLang.abbreviation}
              </span>

              <img
                src={arwdwn}
                alt="Dropdown Arrow"
                onClick={toggleDropdown}
                className={`cursor-pointer transform transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />

              {isOpen && (
                <div className="absolute !top-[30px] w-[300px] pb-2 rounded-[8px] px-[10px] bg-white shadow-lg">
                  <h3 className="text-[14px] text-[#444] font-[700] mb-1">
                    Languages
                  </h3>
                  <div className="grid grid-cols-2">
                    {flags.map((lang, index) => (
                      <div
                        key={index}
                        className="flex items-center p-1 space-x-1 rounded cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSelectLanguage(lang)}
                      >
                        <img
                          src={lang.flag}
                          alt={lang.name}
                          className="w-[14px] h-[14px]"
                        />
                        <span className="text-[12.599px] font-[500] text-[#444]">
                          {lang.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex gap-[15px]">
          <a href="https://trade.blockchainfx.io/en/login?redirect_url=traderoom" target="_blank" rel="noopener noreferrer">
          <button className="max-md:hidden w-[100px] hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[18px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[152px] h-[40px]">
            Log In
          </button>
          </a>
          <a href="https://trade.blockchainfx.io/en/login?redirect_url=traderoom" target="_blank" rel="noopener noreferrer">
          <button className="w-[135px] text-white bg-[#E5AE00] 2xl:px-[12px] xl:px-[12px] lg:px-[12px] md:px-[12px] sm:px-[10px] px-[10px] hover:text-black hover:bg-transparent 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] 2xl:max-w-[179px] xl:max-w-[179px] lg:max-w-[179px] md:max-w-[179px] sm:max-w-[150px] max-w-[150px] 2xl:h-[40px] xl:h-[40px] lg:h-[40px] md:h-[40px] sm:h-[40px] h-[40px]">
            Register<span className="md:hidden"> Now</span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
