import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function DemoAccount() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

  return (
    <div className="max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] space-y-[30px] mx-auto py-[130px] pb-[50px]">
      <div className="space-y-[10px]">
        <h3 className="2xl:text-[30px] pb-[10px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]">
          Demo and Tournament Accounts
        </h3>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[600] ">
          Agreement for the provision of a practice account to a retail person
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
          This Agreement is entered into by and between:
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
          <span className="font-[600]">Digital Smart LLC,</span> with Company
          business number L 22205 and registered at: Lighthouse Trust Nevis Ltd,
          Suite 1, A.L. Evelyn Ltd Building, Main Street, Charlestown, Nevis
          (hereinafter referred to as the Company) on the one part and the
          individual client who has registered for a Demo Account (as defined
          below) with the Company, on the other part (hereinafter referred to as
          the Client).
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
          (collectively the Company and the Client hereinafter referred to as
          the Parties)
        </p>
      </div>
      <div className="space-y-[15px]">
        <div className="space-y-[10px]">
          <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
            1. Application of these Terms & Conditions
          </h4>
          <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
            By the creation and registration of a Demo Account by a client, the
            Client agrees to and accepts: <br />
            <span className="pl-5 block pt-[10px]">
              a. these Terms & Conditions of use of his Demo Account which
              constitute a legal agreement between the Client and the Company
              and will bind the Client.
              <br />
              b. The Company does not provide to the Client any investment
              services until the client registers a trading account and accepts
              the terms and conditions for the investment services.
              <br />
              c. To have acknowledged that he/she has read, understood and
              accepted the provisions of the Privacy Policy on the Company’s
              website www.exnova.com (the Website) in which, among others, the
              terms of use by the Company of any data and/or information of the
              Client (personal or sensitive), is described and/or stated. The
              Privacy Policy should be read in conjunction with the provisions
              of paragraph 4 of these Terms & Conditions.
            </span>
          </p>
        </div>
        <div className="space-y-[10px]">
          <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
            2. Provision of a Free Account
          </h4>
          <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
            The Company will provide a Free Practice Account to the Client and
            credit virtual funds to the balance of such account (Demo Account).
            The virtual funds are NOT considered real money and have no value.
            Virtual funds may not be withdrawn or transferred to other accounts
            you hold with the Company or with third parties.
          </p>
          <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
            The Company agrees to provide the Client with the Demo Account
            subject to the Client:
          </p>
          <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
            Being over 18 years old and of legal competence and sound mind;
          </p>
          <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
            Being a resident of a country in which the Company provides its
            services, in accordance with its General Terms and Conditions;
          </p>
          <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
            Not residing in and/or being a citizen of any country where
            distribution or provision of financial products or services offered
            by the Company would be contrary to local laws or regulations;
          </p>
          <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
            Not being a US Reportable Person;
          </p>
          <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
            The Client by registering for a Demo Account declares and confirms
            all the above representations.
          </p>
          <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
            Without derogation from the above, the Company reserves the right,
            acting reasonably, to suspend or refuse access to and use of the
            Company’s trading platform to anyone at its sole and absolute
            discretion
          </p>
          <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[400] ">
            The Demo Account is provided to give Clients a demonstration of the
            Company’s trading platform and to offer Clients the opportunity to
            trade on simulated real trading conditions. This further allows the
            Client to gain more experience prior to trading with real funds and
            facing actual risk. Clients may test their trading strategies and
            become familiar with the trading platform at their own pace.
          </p>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            The Client is able to place trades and open positions (demo deals)
            in the Company’s trading platform and these positions will be kept
            open for a maximum period of one (1) month, except where the number
            of open positions exceeds the Company’s internal threshold. However,
            it should be noted that these trades are not executed in the market.
          </p>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            The Client is able to use charts, follow market trends, utilize and
            familiarize themselves with all the tools offered on the Company’s
            trading platform and participate in free of charge trading
            Tournaments offered by the Company (“Tournaments”). In case the
            Client participates in Tournaments, the provision of section 6 and
            the Terms and Conditions of the Agreement for the Provision of real
            accounts shall apply.
          </p>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            The Client is able to request additional virtual funds through the
            Demo Account and trade for an unlimited period of time with no
            obligation to deposit real funds.
          </p>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            The Company is unable to and, for the avoidance of doubt, in no way
            does the Company hereby guarantee that the information, content and
            functionality provided through the Demo Account will be error-free
            and/or does not accept any liability for losses incurred (either
            directly or indirectly) as a result of trading on a Demo Account.
          </p>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            The Company reserves the right to make changes, amend, alter,
            modify, delete or add, at any time and without notice, to these
            Terms & Conditions and to the content and availability of the Demo
            Account (the Changes). The Company shall post such Changes and/or
            add such Changes to the Terms & Conditions on the Company’s Website,
            and such notification shall be deemed as sufficient notice to the
            Client and the Changes shall be deemed as accepted by the Client
            upon the next time the Client shall log in to his Demo Account or
            following three days from the date of the Changes, whichever occurs
            earlier.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
            3. Client Warranties and Representations
          </h4>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400]">
            The Client, upon his/her registration and/or creation of a Demo
            Account, hereby warrants and represents to the Company the
            following:
             <br />
            <span className="pl-5 block pt-[10px] leading-[140%]">
              a. The Client has the authority to enter into this Agreement and
              to execute the provisions thereof;
              <br />
               <br />
              b. The Client is not under any legal disability with respect to,
              and is not subject to any law or regulation which prevents his
              performance of this Agreement;
              <br />
               <br />
              c. The Client acts as principal and not as an authorized
              representative/attorney or trustee of any third party.
              <br />
               <br />
              d. The Client certifies that he has provided accurate, complete and true information about
himself upon registration and will maintain the accuracy of the provided information by
promptly updating any registration information that may have changed. Failure to do so
may result in Demo Account closure without notice by the Company;
              <br />
               <br />
              e. The Client confirms that he/she is not a US Reportable Person
              <br />
               <br />
              f. The Client confirms that he has reached the age of maturity in the country of his/her
              residency
              <br />
               <br />
              g. The Client confirms that he is of legal competence and/or of sound mind;
              <br />
               <br />
              h. The Client confirms that the purpose and reason for registering and operating a Demo
Account is to practice trading, on their own behalf, in the financial products offered by the
Company and to take advantage of the services offered by the Company. The Client
warrants that should the reason for operating a Trading account change, they will inform
the Company immediately.
              <br />
               <br />
              i. The Client acknowledges that the Company relies on and takes into consideration the
Client’s above warranties and representations in the offering of the services connected to
a Demo Account, to the Client.
            </span>
          </p>
        </div>
        <div className="space-y-[10px]">
          <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          4. Confidentiality
          </h4>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          The Parties agree to keep confidential and not to disclose to any third party any confidential information
given by the other Party under this Agreement, including without limitation all the communication,
documentation or other information exchanged between them, both during the term of the Agreement as
well as after its termination.

          </p>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          By registering and/or creating a Demo Account, the Client acknowledges and consents to the processing
of any personal data provided by him/her to the Company in the manner as described herein and at all
times as permitted by applicable laws.

          </p>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          The Company has the right, without prior notice to the Client, to disclose personal data or details of the
transactions of the Client in order to comply with the requirements of regulatory authorities. The
Company may also disclose such information to its auditors/consultants, provided if they are informed
and committed to the confidentiality of the information communicated.
          </p>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          The Company will handle all Clients’ personal data according to the relevant laws and regulations for the
protection of personal data, as this may be amended from time to time.

          </p>
          
        </div>
        <div className="space-y-[10px]">
          <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          5. Warning
          </h4>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Trading using a Demo Account simulates real trading conditions but does not expose you to the risk of
loss of real funds. Trading in a Demo Account exposes you to virtual risk and cannot give you an
indication of the emotions linked to trading with real funds and real losses. If you feel you are ready to
move onto a real trading account, understand that you may not have developed proper risk management
techniques and/or market awareness and/or trading skills, by using the Demo Account

          </p>
          
        </div>
        <div className="space-y-[10px]">
          <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          6. Tournaments
          </h4>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Clients are given the opportunity to enter into Tournaments in which virtual funds are traded. The top
traders in the tournaments are awarded real funds into their trading accounts. They accept that the
Company cannot guarantee fair play amongst all participants in the tournaments and enter them at their
own risk.
          </p>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Clients are given the opportunity to enter into Tournaments in Clients shall accept the Terms and Conditions for the Provision of Investment Services, Activities, and
Ancillary Services for real accounts by clicking the acceptance box upon registering for a tournament
account
          </p>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">The Client acknowledges and agrees that the Company will have the right, at any time and for any reason
and without justification, at its sole discretion, to cease offering Tournaments.

          </p>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">In the event that a technical misconfiguration or failure of any kind results in the incorrect reward being
credited to a Client’s account, the Company reserves the right to correct this by removing any rewards and
accrued winnings, and re-adding the reward with the correct configuration. No consent will be required
from the Client in order for the Company to proceed per this clause.

          </p>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">The Company reserves the right at its discretion to terminate the Client’s trading account where it has
identified that the Client has performed an act with the intention and/or effect of manipulating and/or
abusing the Company’s Tournament scheme. The Company shall have no liability towards the Client and
no obligation to pay the profit of the Client for such reasons.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default DemoAccount;
