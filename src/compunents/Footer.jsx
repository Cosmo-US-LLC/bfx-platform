import React, { handleScroll } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import docs from "../assets/footer/pdf-svgrepo-com.svg"
import logo from "../assets/footer/logo.svg";
import socil1 from "../assets/footer/Vector (2).svg";
import socil2 from "../assets/footer/Vector (3).svg";
import socil3 from "../assets/footer/Vector (4).svg";

function Footer() {
  const { t } = useTranslation();
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
                {t('footer.tagline')}
              </p>
            </div>
            <div className="max-w-[150px] w-[100%] pt-[15px]">
              <ul className="max-md:list-none">
                <li className="text-[#000] text-[16px] font-[600] leading-[108.333%]  list-disc">
                  {t('footer.quickLinksTitle')} <br />
                  <a
                    className="text-[#949494] block text-[13px] pt-[10px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block" 
                    href=""
                    onClick={(e) => handleScroll(e, "faq", 60)}
                  >
                    {t('footer.faq')}
                  </a><br />
                  <a
                    className="text-[#949494] block text-[13px] pt-[10px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block"
                    href=""
                    onClick={(e) => handleScroll(e, "what-is-bfx", 20)}
                  >
                    {t('footer.features')}
                  </a><br />
                  <a
                    className="text-[#949494] block text-[13px] pt-[10px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block"
                    href=""
                    onClick={(e) => handleScroll(e, "reviews", 60)}
                  >
                    {t('footer.reviews')}
                  </a><br />
                  <a
                    className="text-[#949494] block text-[13px] pt-[10px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block"
                    href=""
                    onClick={(e) => handleScroll(e, "demo", 60)}
                  >
                   {t('footer.freeDemoAccount')}
                  </a><br />
                  {/* <a className='text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block' href="" onClick={(e) => handleScroll(e, "tokenomics", 90)} >Token Allocation</a> */}
                </li>
              </ul>
            </div>
            <div className="max-w-[150px] w-[100%] pt-[15px]">
              <ul className="max-md:list-none w-[100%]">
                <li className="text-[#000] text-[16px] list-disc font-[600] leading-[108.333%]">
                {t('footer.docsTitle')} <br />
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/kg1msj7rr6s523e0/BlockchainFX%20Anti%20Money%20Laundering%20(AML)%20and%20Know%20Your%20Customer%20(KYC)%20Policy.pdf">
                    <p className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                      {t('footer.aml')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p><br />
                  </Link>
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/jprjqaksmetb05dg/BlockchainFX%20General%20Fees.pdf">
                    <p className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.generalFees')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p><br />
                  </Link>
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/erbjqaksmetb05cg/BlockchainFX%20Risk%20Disclosure%20.pdf">
                    <p className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.riskDisclosure')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link><br />
                  <Link to="/terms-of-service">
                    <p
                  className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.termsOfService')}
                    </p>
                  </Link>
                  <br />
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/kt3jqaksmetb05e0/BlockchainFX%20Margin%20Trading.pdf">
                    <p className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.marginTrading')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-w-[150px] w-[100%] pt-[15px]">
              <ul className="max-md:list-none w-[100%]">
                <li className="text-[#000] text-[16px] list-disc font-[600] leading-[108.333%]">
                  {t('footer.policiesTitle')} <br />

                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/cmrjqaksmetb05c0/BlockchainFX%20Payment%20Policy.pdf">
                    <p
                    className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.payment')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link>
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/llpmsj7rr6s523eg/BlockchainFX%20Order%20Execution%20Policy.pdf">
                    <p
                    className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.orderExecution')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link>
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/m4rjqaksmetb05f0/BlockchainFX%20Withdrawal%20Policy.pdf">
                    <p className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.withdrawal')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link>
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/jdhmsj7rr6s523dg/BlockchainFX%20Demo%20and%20Tournament%20Accounts.pdf">
                    <p className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                     {t('footer.demoAccount')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link> <br />
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/la3jqaksmetb05eg/BlockchainFX%20Refund%20Policy.pdf">
                    <p className="text-[#949494] text-[13px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.refund')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[285px] space-y-[10px] w-[100%] pt-[12px]">
            <h4 className="text-[#000] text-[13.3px] font-[600] leading-[108.333%]">
              {t('footer.joinSocials')}
            </h4>
            <div className="flex space-x-6 pt-[10px] pb-[20px]">
              <a href="https://www.instagram.com/blockchainfx_com/" target="_blank" rel="noopener noreferrer"
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
                {t('footer.contactEmailLabel')}{" "}
              </h4>
              <h3 className="text-[#949494] text-[15px] font-[400] leading-[108.333%]">
                {t('footer.contactEmail')}
              </h3>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-[#000] py-[36px]">
          <p className="text-[10px] font-[400] text-[#000] leading-[190%]">
            {t('footer.disclaimer1')} <br />
            <br />
            {t('footer.disclaimer2')}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className=" text-[12px] text-[#000] leading-[100%]">
            {t('footer.copyright')}
          </p>
          <div className="space-x-5 ">
            <Link to="/privacy-policy" className="border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block text-[12px] text-[#000] leading-[100%]">
              {t('footer.privacyPolicy')}
            </Link>
            <a target="_blank" href="https://fsms.trade.blockchainfx.io/storage/public/d0/7l/ihrjqaksmetb05j0/BlockChainFX%20Cookies%20Policy.docx.pdf" className="border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block text-[12px] text-[#000] leading-[100%]">
              {t('footer.cookieManagement')}
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
              {t('footer.tagline')}
            </p>
          </p>
        </div>
        <div className="flex justify-between px-5">
          <div className=" w-[50%] pt-[15px]">
            <ul className="max-md:list-none">
              <li className="text-[#000] text-[16px] font-[600] leading-[108.333%]  list-disc">
                {t('footer.quickLinksTitle')}  <br />
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "faq", 90)}
                >
                  {t('footer.faq')}
                </a> <br />
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "features", 90)}
                >
                  {t('footer.features')}
                </a> <br />
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "reviews", 90)}
                >
                  {t('footer.reviews')}
                </a> <br />
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "demo", 90)}
                >
                  {t('footer.freeDemoAccount')}
                </a>
                
                {/* <a className='text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block' href="" onClick={(e) => handleScroll(e, "tokenomics", 90)} >Token Allocation</a> */}
              </li>
            </ul>
          </div>
          <div className="w-[45%] pt-[15px]">
            <ul className="max-md:list-none w-[100%]">
              <li className="text-[#000] text-[16px] list-disc font-[600] leading-[108.333%]">
              {t('footer.docsTitle')} <br />
                <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/kg1msj7rr6s523e0/BlockchainFX%20Anti%20Money%20Laundering%20(AML)%20and%20Know%20Your%20Customer%20(KYC)%20Policy.pdf">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                      {t('footer.aml')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link> <br />
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/jprjqaksmetb05dg/BlockchainFX%20General%20Fees.pdf">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.generalFees')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link> <br />
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/erbjqaksmetb05cg/BlockchainFX%20Risk%20Disclosure%20.pdf">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.riskDisclosure')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link> <br />
                <Link to="/terms-of-service">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">{t('footer.termsOfService')}
                    </p>
                  </Link>
                  <br />
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/kt3jqaksmetb05e0/BlockchainFX%20Margin%20Trading.pdf">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.marginTrading')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[200px] w-[100%] pt-[15px] px-5">
            <ul className="max-md:list-none w-[100%]">
              <li className="text-[#000] text-[16px] list-disc font-[600] leading-[108.333%]">
                {t('footer.policiesTitle')}  <br />
                <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/cmrjqaksmetb05c0/BlockchainFX%20Payment%20Policy.pdf">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.payment')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link> <br />
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/llpmsj7rr6s523eg/BlockchainFX%20Order%20Execution%20Policy.pdf">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.orderExecution')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link>
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/m4rjqaksmetb05f0/BlockchainFX%20Withdrawal%20Policy.pdf">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.withdrawal')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link>
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/jdhmsj7rr6s523dg/BlockchainFX%20Demo%20and%20Tournament%20Accounts.pdf">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.demoAccount')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link>
                  <Link target="_blank" to="https://fsms.trade.blockchainfx.io/storage/public/d0/7j/la3jqaksmetb05eg/BlockchainFX%20Refund%20Policy.pdf">
                    <p className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
                    {t('footer.refund')} <span><img className="inline h-[18px]" src={docs} alt="" /></span>
                    </p>
                  </Link>
              </li>
            </ul>
          </div>
        <div className="flex justify-between">
          <div className="max-w-[285px] space-y-[25px] pt-[3px] w-[100%] ">
            <h4 className="text-[#000] text-[16px] font-[600] leading-[108.333%]">
              {t('footer.joinSocials')}
            </h4>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/blockchainfx_com/" target="_blank" rel="noopener noreferrer" 
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
                {t('footer.contactEmailLabel')}{" "}
              </h4>
              <h3 className="text-[#949494] text-[15px] font-[400] leading-[108.333%]">
                {t('footer.contactEmail')}
              </h3>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-[#000] py-[18px]">
          <p className="text-[10px] font-[400] text-[#000] leading-[190%]">
            {t('footer.disclaimer1')} <br />
            <br />
            {t('footer.disclaimer2')}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="space-x-4">
            <Link to="/privacy-policy" className="text-[12px] text-[#000] leading-[100%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
              {t('footer.privacyPolicy')}
            </Link>
            <a target="_blank" href="https://fsms.trade.blockchainfx.io/storage/public/d0/7l/ihrjqaksmetb05j0/BlockChainFX%20Cookies%20Policy.docx.pdf" className="text-[12px] text-[#000] leading-[100%] border border-transparent hover:border-b-[#E5AE00] pb-[3px] transition duration-300 inline-block">
              {t('footer.cookieManagement')}
            </a>
          </div>
        </div>
        <div>
          <p className="text-[10px] text-center text-[#000] leading-[100%]">
            {t('footer.copyright')}
          </p>
        </div>
      </div>

      {/* mobile version end */}
    </div>
  );
}

export default Footer;
