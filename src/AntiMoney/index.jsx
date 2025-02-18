import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AntiMoney() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

  return (
    <div className="max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] space-y-[30px] mx-auto py-[130px] pb-[50px]">
      <div className="space-y-[10px]">
        <h3 className="2xl:text-[30px] pb-[10px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]">
          Anti Money Laundering (AML) and Know Your Customer (KYC) Policy
        </h3>
     
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
          It is the Policy of Digital Smart LLC and its affiliates (hereinafter
          referred to as “the Company”) to prohibit and actively pursue the
          prevention of money laundering and any activity that facilitates money
          laundering or the funding of terrorist or criminal activities. The
          Company requires its officers, employees, and affiliates to adhere to
          these standards in preventing the use of its products and services for
          money laundering purposes
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
          For the purposes of this Policy, money laundering is generally defined
          as engaging in acts designed to conceal or disguise the true origins
          of criminally derived proceeds so that the unlawful proceeds appear to
          have been derived from legitimate origins or constitute legitimate
          assets.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
          Generally, money laundering occurs in three stages. Cash first enters
          the financial system at the “placement” stage, where the cash
          generated from criminal activities is converted into monetary
          instruments or deposited into accounts at financial institutions. At
          the “layering” stage, the funds are transferred or moved into other
          accounts or other financial institutions to further separate the money
          from its criminal origin. At the “integration” stage, the funds are
          reintroduced into the economy and used to purchase legitimate assets
          or to fund other criminal activities or legitimate businesses.
          Terrorist financing may not involve the proceeds of criminal conduct,
          but rather an attempt to conceal the origin or intended use of the
          funds, which will later be used for criminal purposes.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
        Each employee of the Company, whose duties are associated with the provision of products and
services of the Company and who directly or indirectly deals with the clientele of the Company, is
expected to know the requirements of the applicable laws and regulations which affect his or her job
responsibilities, and it shall be the affirmative duty of such employee to carry out these
responsibilities at all times in a manner that complies with the requirements of the relevant laws and
regulations.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
        The laws and regulations include, but not limited to: “Customer Due Diligence for Banks” (2001) and
“General Guide to Account Opening and Customer Identification” (2003) of Basel Committee on
Banking Supervision, Forty Recommendations for Money Laundering of FATF, USA Patriot Act
(2001), Prevention and Suppression of Money Laundering Activities Law (1996).

        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
        To ensure that this general policy is carried out, management of the Company has established and
maintains an ongoing program for the purpose of assuring compliance with the relevant laws and
regulations and the prevention of money laundering. This program seeks to coordinate the specific
regulatory requirements throughout the group within a consolidated framework in order to effectively
manage the group’s risk of exposure to money laundering and terrorist financing across all business
units, functions, and legal entities.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">Each of the affiliates of the Company are required to comply with AML and KYC policies.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">All identification documents and services records shall be kept for the minimum period of time
        required by local law.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">All new employees shall receive anti-money laundering training as part of the mandatory new-hire
training program. All applicable employees are also required to complete AML and KYC training
annually. Participation in additional targeted training programs is required for all employees with
day-to-day AML and KYC responsibilities.
        </p>
      </div>
    </div>
  );
}

export default AntiMoney;
