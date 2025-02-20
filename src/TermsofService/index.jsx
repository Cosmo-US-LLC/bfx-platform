import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TermsofService() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] space-y-[30px] mx-auto pt-[120px] pb-[50px]">
      <div className="space-y-[20px]">
        <h3 className="2xl:text-[30px] pb-[25px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]">
          General Terms and Conditions
        </h3>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          This Agreement is entered into by and these Terms & Conditions
          (hereinafter referred to as the “Agreement”) shall regulate the
          relationship between Digital Smart LLC, with Company business number L
          22205 and registered at: Lighthouse Trust Nevis Ltd, Suite 1, A.L.
          Evelyn Ltd Building, Main Street, Charlestown, Nevis (hereinafter
          referred to as the “Company”), and the user (a natural or legal
          entity) (hereinafter referred to as the “Client”) of www.exnova.com
          (hereinafter referred as the “Website”).
        </p>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1. The Client confirms that he/she has read, understood and accepted
            all information, conditions and terms set out on the Website which
            are open to be reviewed and can be examined by the public and which
            include important legal Information.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2. By accepting this Agreement, the Client agrees and irrevocably
            accepts the terms and conditions contained in this Agreement, its
            annexes and/or appendices as well as other documentation/information
            published on the Website, including, without limitation, the Privacy
            Policy, Payment Policy, Withdrawal Policy, Code of Conduct, Order
            Execution Policy and Anti-Money Laundering Policy. The Client
            accepts this Agreement by registering an Account on the Website and
            depositing funds. By accepting the Agreement, and subject to the
            Company’s final approval, the Client enters into a legal and binding
            agreement with the Company.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            3. The terms of this Agreement shall be considered accepted
            unconditionally by the Client upon the Company’s receipt of an
            advance payment made by the Client. As soon as the Company receives
            the Client's advance payment, every operation made by the Client on
            the Trading Platform shall be subject to the terms of this Agreement
            and other documentation/information on the Website.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4. The Client hereby acknowledges that each and any Operation,
            activity, transaction, order and/or communication performed by
            him/her on the Trading Platform, including without limitation
            through the Account, and the Website, shall be governed by and/or
            must be executed in accordance with the terms and conditions of this
            Agreement and other documentation/information on the Website.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5. By accepting this current agreement, the Client confirms that
            he/she is able to receive information, including amendments to the
            present Agreement, either via email or through the Website
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            6. A client that is a legal entity can register with the Company not
            through the Website, but by sending an email with its request to
            support@exnova.com. All terms and conditions contained herein,
            including without limitation to 1 to 5 above, shall at all times be
            applicable to the Legal Entity and the latter shall conform with
            such terms and conditions, obligations and rights at all times.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          1. Terms and Definitions
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Account</span> – means a unique
          personified account registered in the name of the Client and which
          contains all the Client’s transactions/ operations on the Trading
          Platform (as defined below) of the Company.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Ask –</span> means the higher price in a
          quote. The price the Client may buy at.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Bid –</span> – means the lower price in a
          quote. The price the Client may sell at
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">CFD (contract for difference) –</span>{" "}
          means a tradable contract entered into between the Client and the
          Company, who exchange the difference in the value of an Instrument, as
          specified on the Trading Platform at the time of opening a
          Transaction, and the value of that Instrument at the contract’s end.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">
            Binary Options and/or All or Nothing Options and/or Turbo Options –
          </span>{" "}
          means financial instruments where a prediction is made on the
          direction of the price movement of an asset at a certain period of the
          day. The payout is predetermined as a fixed amount whether the option
          expires in the money or if the option expires out of the money.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">
            Binary Options and/or All or Nothing Options and/or Turbo Options –
          </span>{" "}
          means financial instruments where a prediction is made on the
          direction of the price movement of an asset at a certain period of the
          day. The payout is predetermined as a fixed amount whether the option
          expires in the money or if the option expires out of the money.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Digital Option Contract –</span> means a
          type of derivative instrument where the Client earns a payout if they
          correctly predict the price movement of the underlying asset at the
          time of the option’s expiry. The prediction can be made as to whether
          the value of the underlying asset will fall above or below the strike
          price at the time of expiration. Should the option expire at the
          selected strike price, it will be considered to expire out-of-the
          money and will result in the loss of the invested amount.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Trailing Option Contract —</span> means a
          financial derivative where a Client earns a payout by correctly
          predicting if the underlying asset's price will first hit the “Upper
          Level” or “Lower Level” line as they appear on the Trading Platform
          (Levels or each Level). The conditions of this instrument are the
          following:
        </p>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            (a) The Levels are dynamic, automatically adjusting with market
            price movements (when the price rises, the Lower Level moves by
            twice the distance of the price movement and when the price falls,
            the Upper Level moves by twice the distance of the price movement),
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            (b) The Client's open Profit and Loss (PnL) increases by 1% per
            second when the price aligns with their prediction but decreases by
            1.1% per second in the opposite direction,
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            (c) Any position is automatically closed when the price hits either
            Level,
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            (d) Profit occurs when the price hits the predicted Level first,
            while if the price hits the other Level, it results in a loss,
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            (e) The potential profit can reach a maximum up to 100% of the
            investment amount (not more) and losses cannot exceed the investment
            amount, and
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            (f) Exposure level limitations apply.
          </li>
        </ul>

        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Execution –</span> means the execution of
          Client order(s) by the Company acting as the Client's counterparty as
          per the terms of the present agreement.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Execution –</span> means the execution of
          Client order(s) by the Company acting as the Client's counterparty as
          per the terms of the present agreement.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Financial Instruments –</span> means the
          Financial Instruments as per paragraph 2.4 below that are available on
          the Company’s Trading Platform.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">KYC documents –</span> means the
          documents to be provided by the Client, including, without limitation,
          a copy of the passport or ID and utility bill of the Client, in case
          it is a natural person and/or certificates showing the management and
          ownership going all the way up to the ultimate beneficial owner, in
          case it is a legal entity, and any other documents the Company may
          request upon its sole discretion.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Market –</span> means the market on which
          the Financial Instruments are subject to and/or traded on, whether
          this market is organized / regulated or not and whether it is in Saint
          Kitts and Nevis or abroad.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Operations –</span> means actions
          performed at the Client’s Account, following an order placed by the
          Client, connected with but not limited to crediting of funds, return
          of funds, opening and closing of trade transactions/positions and/or
          that relate to financial instruments.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Prices –</span> means the prices offered
          to the Client for each transaction, which may be changed without prior
          notice. Where this is relevant, the “Prices” given through the Trading
          Platform include the Spread (see definition below).
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Services –</span> –– means the services
          described in section 3 of this Agreement.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Spread –</span> means the difference
          between the purchase price Ask (rate) and the sale price Bid (rate) at
          the same moment. For avoidance of doubt, a predefined spread is for
          the purposes of this Agreement assimilated commission.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Trading Platform –</span> means an
          electronic system on the internet that consists of all programs and
          technology that present quotes in real-time, allow the
          placement/modification/deletion of orders and calculate all mutual
          obligations of the Client and the Company
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Serviced Countries –</span> means any
          country available for registration on the Company's Website (e.g.,
          Thailand, India, Brazil)
        </p>
      </div>

      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          2. Subject of the Agreement
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1. The subject of the Agreement shall be the provision of Services
            to the Client by the Company under the Agreement and through the
            Trading Platform.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2. The Company shall carry out all transactions as provided in this
            Agreement on an execution-only basis, neither managing the account
            nor advising the Client. The Company is entitled to execute
            transactions requested by the Client as provided in this Agreement,
            even if the transaction is not beneficial for the Client. The
            Company is under no obligation, unless otherwise agreed in this
            Agreement and/or other documentation/information on the Website, to
            monitor or advise the Client on the status of any transaction, to
            make margin calls, or to close out any of the Client’s open
            positions. Unless otherwise specifically agreed, the Company is not
            obligated to make an attempt to execute the Client’s order using
            quotes more favorable than those offered through the Trading
            Platform
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            3. The Investment and Ancillary Services which the Company should
            provide under the terms of the Agreement are stated below, and the
            Company will provide them in its capacity as a market maker under
            the terms of this Agreement. In addition, the Company may, at its
            sole discretion without providing prior notice to the Client, decide
            to transmit orders and/or be an intermediary for Clients’
            transactions. The Services that the Company provides in relation to
            one or more Financial Instruments are the following (the list below
            shall not be regarded as exhaustive):
          </li>
        </ul>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          a. Investment services <br />
          <ul className="pl-5 space-y-[15px]">
            <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
              i. Reception and transmission of orders in relation to one or more
              Financial Instruments
            </li>
            <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
              ii. Execution of the orders on behalf of the Clients.
            </li>
            <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
              iii. Dealing on Own Account.
            </li>
            <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
              iv. Portfolio Management.
            </li>
            <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
              v. Investment Advice.
            </li>
          </ul>
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          b. Ancillary Services <br />
          <ul className="pl-5 space-y-[15px]">
            <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
              i. Safekeeping and administration of the Financial Instruments for
              the Client’s Trading Account, including custodianship and related
              services such as cash/collateral management
            </li>
            <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
              ii. Granting credits or loans to one or more financial
              instruments, where the firm granting the credit or loan is
              involved in the transaction.{" "}
            </li>
          </ul>
          The Company does not provide investment, tax or trading advice unless
          specified as such between the Client and the Company in a separate
          agreement. Our services include ‘execution only’ meaning that the
          Company will act on your instructions and will not advise you on any
          transaction, nor will we monitor your trading decisions to determine
          if they are appropriate for you or to help you avoid losses. You
          should obtain your own financial, legal, taxation and other
          professional advice.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          c. Financial Instruments (the list below shall not be regarded as
          exhaustive): <br />
          <ul className="pl-5 space-y-[15px]">
            <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
              i. Option contracts (i.e. Digital Options and/or Binary Options
              and/or Blitz Options and/or Trailing Options) in stocks and/or
              commodities and/or indices and/or currency pairs.
            </li>
            <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
              ii. Financial Contracts for Difference (CFDs) in stocks, currency
              pairs (FX), commodities, ETFs, indices and CFDs in
              cryptocurrencies;
            </li>
          </ul>
          Trading in CFDs and other derivatives does not give you any right,
          voting right, title or interest in the underlying instrument of the
          Transaction. You understand that you are not entitled to take delivery
          and are not entitled to ownership of any underlying instrument. CFDs
          and other derivatives are not traded on a regulated exchange and are
          not cleared on a central clearinghouse. These exchange and
          clearinghouse rules and protections do not apply. The Company reserves
          the right to, at its sole discretion and for all CFD products, impose
          the following expiration times: daily/weekly/monthly and/or no
          expiration at all.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          3. General Provisions
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1. Subject to the provisions of this Agreement, the Company agrees
            to provide the Client with the Services subject to the Client:
            <ul className="pl-5 space-y-[15px]">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                a. Being of age of maturity in accordance with the jurisdiction
                he/she resides in or is a resident of, is of legal competence
                and of sound mind.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                b. Not residing in any country where distribution or provision
                of the financial products or services offered by the Company
                would be contrary to local laws or regulations. It is the
                Client’s responsibility to ascertain the terms of and comply
                with any local laws or regulations to which they are subject.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                c. Not being a citizen of the USA/territories of the US, North
                Korea, Palestine, Vatican and/or a resident of either the
                USA/territories of the US, Canada, Afghanistan, Australia,
                Belgium, Bouvet Island, Cuba, Democratic Republic of the Congo,
                Eritrea, Ethiopia, Gibraltar, Haiti, Iran, Israel, Libya, Mali,
                Myanmar, North Korea, Palestine, South Sudan, Sudan, Syria, the
                Russian Federation, the United Kingdom, Ukraine, the Vatican,
                any country of the European Economic Area and/or other
                non-serviced countries.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2. The Company will offer Services to the Client at the absolute
            discretion of the Company, subject to the provisions of this
            Agreement.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            3. The Client is prohibited and shall not, under no circumstances,
            be allowed to execute any transactions/Operations on the Trading
            Platform, Website and/or through his/her Account, that would as a
            result exceed the total balance and/or amount of money
            deposited/maintained with his/her Account. Such deposited amounts
            shall be considered to have been provided as collateral, either in
            the form of a lien or otherwise, to the Company by the Client by
            which the obligation of the Client to pay any money to the Company
            is secured
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          4. Services of the Company
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1. Services – services provided by the Company to the Client through
            the Trading Platform of the Company, including without limitation to
            customer, analytics, news and marketing information services.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2. The Company shall facilitate the execution of trade
            activities/orders and/or transactions of the Client, but the Client
            hereby acknowledges and accepts that the Company shall not at any
            time provide any trust services and/or trading consultation or
            advisory services to the Client.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            3. The Company shall process all transactions/Operations of the
            Client in accordance with the terms and conditions of this Agreement
            and on an execution-only basis. The Company shall not manage the
            Client’s Account nor advise the Client in any way.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4. The Company shall process the orders/transactions requested by
            the Client under this Agreement, irrespective of whether such
            orders/transactions may result to not being beneficial for the
            Client. The Company is under no obligation, unless otherwise agreed
            in this Agreement and/or other documentation/information on the
            Website, to monitor or advise the Client on the status of any
            transaction/order, to make margin calls to the Client, or to close
            out any of the Client’s open positions. Unless otherwise
            specifically agreed, the Company is not obligated to process or
            attempt to process the Client’s order/transaction using quotes more
            favorable than those offered through the Trading Platform.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5. The Company shall not be financially liable for any operations
            conducted by the Client through the Account and/or on the Trading
            Platform.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            6. Each Client shall be the only authorized user of the Company’s
            services and of the corresponding Account. The Client is granted an
            exclusive and non-assignable right to the use of and to access the
            Account, and it is his/her responsibility to ensure that no other
            third party, including, without limitation, to any next of kin
            and/or to members of his/her immediate family, shall gain access to
            and/or trade through the Account assigned to her/him
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            7. The Client shall be liable for all orders given through his
            security information, and any orders received in this manner by the
            Company shall be considered to have been given by the Client. So
            long as any order is submitted through the Account of a Client, the
            Company shall reasonably assume that such orders are submitted by
            the Client and the Company shall not be under any obligation to
            investigate further into the matter. The Company shall not be liable
            to and/or does not maintain any legal relations with any third-party
            other than the Client.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            8. If the Client acts on behalf of any third party and/or on behalf
            of any third party’s name, the Company shall not accept this person
            as a Client and shall not be liable before this person, regardless
            if such person was identified or not.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            9. The Client has the right to cancel his order given to the Company
            within 3 seconds after the moment of giving such order to the
            Company (hereinafter referred to as the “Cancellation”). The client
            agrees and understands that the three seconds cancellation option
            offered by the Company is applicable and available for the client as
            long as the price remains unchanged. Three seconds from the moment
            of giving the order to the Company by the Client via the platform,
            the Company may (but is not obliged to) offer to buyout the option
            from the Client and the Client has the right to agree to such offer
            (hereinafter referred to as the “Buyout”). The Client is entitled to
            use such Cancellation or Buyout option subject to the conditions
            specified on the platform. Such conditions can also include the fee
            charged by the Company. Such a fee is specified on the platform. The
            Company is obliged to provide all necessary information as to the
            conditions of Cancellation and Buyout, their cost, etc. The Client
            acknowledges and agrees that the provision of such information on
            the platform is sufficient. The Client acknowledges and agrees that
            the use of Cancellation or Buyout is very risky to the Client as
            long as the cost of Cancellation and/or Buyout depends on the market
            situation. The Client acknowledges and agrees that he bears all the
            risks associated with the use of Cancellation and/or Buyout.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            10. The Client is entitled to use such Cancellation or Buyout option
            subject to the conditions specified on the Trading Platform/Website,
            including without limitation to any fee to be charged by the
            Company. The Company shall be obliged to provide all necessary
            information as to the conditions of Cancellation and Buyout,
            including any applicable costs, etc. The Client acknowledges,
            accepts and agrees that the provision of such information on the
            Trading Platform is sufficient. The Client acknowledges, accepts and
            agrees that the use of Cancellation or Buyout option entails large
            risks for the Client, especially in the case where the costs
            associated with Cancellation and/or Buyout, depend on the market
            situation. The Client acknowledges, accepts and agrees that he/she
            shall bear all risks associated with the use of the Cancellation
            and/or Buyout option.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            11. It is understood and agreed by the Client that the Company may
            from time to time, at its sole discretion, utilize a third party to
            hold the Client’s funds and/or for the purpose of receiving payment
            execution services. These funds will be held in segregated accounts
            from such third party’s own funds and will not affect the rights of
            the Client to such funds.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            12. The Company offers internal live chats where clients can share
            inter alia their trading ideas and/or express their general
            thoughts. The client acknowledges and agrees that the Company’s live
            chat feature is not and will not constitute a valid and/or accurate
            information and/or information addressed to the clients/potential
            clients and/or in any way information that is controlled by the
            Company and/or investment advice, as it is merely a feature allowing
            clients to inter alia express their thoughts and ideas between
            themselves.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            13. Provision of investment advice shall only be carried out by the
            Company subject to a separate written agreement with the Client and
            after assessing the Client’s personal circumstances. Unless such
            written agreement has been entered into between the Client and the
            Company, the provision of reports, news, opinions and any other
            information by the Company to the Client does not constitute
            investment advice or investment research.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            14. AI CHATBOT DISCLAIMER: The following disclaimer is intended to
            inform users of the limitations and usage guidelines of the AI
            chatbot available through your Account. Please read this disclaimer
            carefully before engaging with any Chatbot. By accessing and using
            the Chatbot through your Account, you acknowledge and agree to the
            terms of this disclaimer.
            <ul className="pl-5 space-y-[15px]">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                a. General Information Purpose only: The Chatbot is designed to
                provide general information related to the data of your Account
                and/or the Trading Platform. The information provided by the
                Chatbot should not be considered in any way as legal or
                financial or business advice or a substitute for a consultation.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                b. No Guarantee of Accuracy: While we try to provide accurate
                information through the Chatbot, we cannot guarantee the
                accuracy, completeness, or up-to-date nature of the
                output/information provided.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                c. No Liability: the Company and its agents will not be liable
                for any errors or omission in the information provided by the
                Chatbot or for any actions taken in reliance upon it. We
                recommend at all times that you double confirm the information
                provided by the Chatbot through your Account and/or the Trading
                Platform.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                d. Third-Party Links: The Chatbot may contain links to
                third-party websites. These links are provided for your
                convenience and do not constitute an endorsement or approval by
                the Company of any third-party content. We are not responsible
                for the content or privacy practices of these external sites.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                e. Information Gathering and Potential Inaccuracy: The Chatbot
                gathers information from the Trading Platform, your Account
                and/or Scripts embedded to the Chatbot. While we make efforts to
                ensure that the information provided is accurate, we cannot
                guarantee the accuracy, completeness, or up-to-date nature of
                the information obtained from these external sources. The
                Chatbot may, at times, provide information that is inaccurate or
                outdated due to a glitch in our systems, delays in updates in
                our systems or your Account, script content. We encourage you to
                verify any information provided by the Chatbot independently or
                by raising a support ticket via email, before taking any action
                or making any decisions based on the information received.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                f. Reporting Inaccuracies: If you discover any inaccuracies in
                the information provided by the Chatbot, we kindly ask you to
                notify us so that we may address the issue. Please contact us as
                support@exnova.com. Your assistance in maintaining accurate and
                up-to-date information is greatly appreciated and helps us
                provide a better service to all users of the Chatbot.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                g. Data Privacy and Security: We prioritize the privacy and
                security of our users' information. Be aware that Chatbot
                conversations may be reviewed by our content team to improve
                results. While the AI provider retains logs of these
                conversations for 30 days, except where it is required to retain
                copies under applicable laws, in which case it will isolate and
                protect the data from any further processing except to the
                extent required by applicable laws, this data is not used to
                train their AI models. Do not share any sensitive or personal
                information in your conversations.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                h. If you do not agree with the above, then please refrain from
                using the Chatbot.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          5. Execution of Orders / Electronic Trading
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1. By accepting this Agreement, the Client accepts that he has read
            and understood all provisions of this Agreement and related
            information on the Website. The Client accepts and understands that
            all orders received shall be executed by the Company as the
            counterparty of the transaction in its capacity of Market Maker. The
            Company shall act as a principal and not as an agent on the Client’s
            behalf for the purpose of the Execution of orders. The Client is
            informed that Conflicts of Interest may arise because of this model.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2. Reception of the order by the Company shall not constitute
            acceptance, and acceptance shall only be constituted by the
            execution of the order by the Company. Moreover, the Client further
            accepts that the Company may transmit some orders and act as an
            intermediary for Clients’ transactions.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            3. The Company shall be obliged to execute the Client's orders
            sequentially and promptly.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4. The Client acknowledges and accepts a) the risk of mistakes or
            misinterpretations in the orders sent through the Trading Platform
            due to technical or mechanical failures of such electronic means, b)
            the risk of any delays or other problems as well as c) the risk that
            the orders may be placed by persons unauthorized to use and/or
            access the Account, and the Client agrees to indemnify the Company
            in full for any loss incurred as a result of acting in accordance
            with such orders.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5. The Client accepts that during the reception and transmission of
            his/her order, the Company shall have no responsibility as to its
            content and/or to the identity of the person placing the order,
            except where there is gross negligence, willful default or fraud by
            the Company.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            6. The Client acknowledges that the Company will not take action
            based on the orders transmitted to the Company for execution by
            electronic means other than those orders transmitted using the
            predetermined electronic means such as the Trading Platform, and the
            Company shall have no liability towards the Client for failing to
            take action based on such orders.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            7. The Client acknowledges and agrees that the Company shall bear no
            responsibility for any financial losses and/or technical issues
            which may arise in the event that an external trading bot is used
            when trading; the Client shall use the bot at their own risk;
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            8. The client acknowledges and agrees that any products or services
            that may be offered by the Company may not always be available for
            purchasing or use for trading purposes, and it is in the Company's
            absolute discretion whether it will make these products available or
            not to the clients at any time. The Company shall bear no liability,
            monetary or otherwise, in relation to this section, including
            without limitation to not making available any product at any given
            time.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            9. The client agrees and understands the following in consideration
            of the below corporate actions:
            <ul className="pl-5 space-y-[15px]">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                a. Where it is publicly available that a specific Company has
                filled and/or is in the process of filing for Chapter 11 under
                US bankruptcy law and/or an equivalent to Chapter 11 corporate
                action related to bankruptcy and/or bankruptcy law under any
                national legislation/regulations, the Company reserves the right
                to close any and all relevant positions in regard to the
                asset(s) of such Company and suspend the related asset(s); the
                client’s position(s) held in the referred asset(s) will be
                closed by the Company with the last available price on the
                platform and the client will receive a prior notice on this
                matter. It should be noted that the Company will not be held
                liable for any losses incurred to the client in relation to the
                aforesaid closure of the position(s) and/or the suspension of
                the asset(s).
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                b. In circumstances where the underlying asset offered by the
                Company might be subject to split and/or reverse split, the
                Company may decide to close the client’s position(s) held in the
                referred asset with the last available price on the platform
                prior to the occurrence of the split and/or reverse split event
                and the client will receive a notification in this regard.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            10. The Client acknowledges that the Company will have the right, at
            any time and for any reason and without justification, at its sole
            discretion, to refuse to execute orders, including, without
            limitation, in the following circumstances:
            <ul className="pl-5 space-y-[15px]">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                a. If the execution of the order aims or may aim to manipulate
                the market price of the financial instruments (market
                manipulation);
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                b. If the execution of the order constitutes or may constitute
                abusive exploitation of confidential information (insider
                trading);
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                c. If the execution of the order contributes or may contribute
                to the legalization of the proceeds of illegal activities (money
                laundering);
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                d. If the Client has insufficient funds to cover the purchase of
                financial instruments or if there is an insufficient number of
                financial instruments to cover their sale;
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                e. If the Client fails to fulfill any of his/her obligations
                towards the Company under this Agreement;
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                f. The Company’s own exposure levels as set out in the Company’s
                internal policies have been reached in respect of the Financial
                Instrument or the underlying asset of the Financial Instrument
                the Client wishes to buy/sell;
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                g. If the Client is currently, or at any time becomes, a U.S.
                Reportable Person, a citizen of North Korea, Palestine, or
                Vatican City and/or a resident of either the USA/territories of
                the US, Canada, Afghanistan, Australia, Belgium, Bouvet Island,
                Cuba, Democratic Republic of the Congo, Eritrea, Ethiopia,
                Gibraltar, Haiti, Iran, Israel, Libya, Mali, Myanmar, North
                Korea, Palestine, South Sudan, Sudan, Syria, the Russian
                Federation, the United Kingdom, Ukraine, Vatican, any country of
                the European Economic Area and/or other non-serviced countries.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                h. Any such refusal by the Company shall not affect any
                obligation, which the Client may have towards the Company.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                i. The Client acknowledges that, at its own discretion, under
                certain market conditions and/or depending on the availability
                of the underlying asset on the relevant market, the Company may
                have to close all or a part of the Client’s positions. Including
                but not limited to positions where it has reached or surpassed
                internal exposure levels and/or where for any reason the
                underlying asset is unavailable on the relevant market. The
                Company undertakes to provide prior notification to the Client
                in case a position will be liquidated by the Company.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          6. Limitation of Liability
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1. The Company does not guarantee uninterrupted service, safe and
            errors-free, and immunity from unauthorized access to the trading
            sites' servers nor disruptions caused from damages, malfunctions or
            failures in hardware, software, communications and systems in the
            Client's computers and in the Company's suppliers. s model.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2. Supplying services by the Company depends, inter alia, on third
            parties and the Company bears no responsibility for any actions or
            omissions of third parties and bears no responsibility for any
            damage and/or loss and/or expense caused to the Client and/or third
            party as a result of and/or in relation to any aforesaid action or
            omission.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            3. The Company will bear no responsibility for any damage of any
            kind allegedly caused to the Client, which involves force majeure or
            any such event that the Company has no control of and which has
            influenced the accessibility of its trading site.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4. Under no circumstances will the Company or its Agent(s) hold
            responsibility for direct or indirect damage of any kind, even if
            the Company or its Agent(s) had been notified of the possibility of
            aforesaid damages.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          7. Settlement of Transactions
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1. The Company shall proceed to a settlement of all transactions
            upon execution of such transactions.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2. An online statement of Account will be available for printing to
            the Client on the Trading Platform of the Company, at all times.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          7. Settlement of Transactions
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1. The Client shall be entitled to:
            <ul className="pl-5 space-y-[15px]">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                a. Submit with the Company any order requesting the execution of
                a transaction/Operation on the Website in accordance with and
                subject to the terms and conditions of this Agreement;
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                b. Request withdrawal of any amounts subject and in accordance
                with the Withdrawal Policy, and provided that the Company has no
                claims against the Client and/or the Client does not have any
                outstanding debts to the Company
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                c. In the event that the Client has any alleged complaint
                against the Company and/or there is any dispute between the
                Client and the Company, then the Client can submit his/her
                complaint, to include all relevant particulars and details, to
                the Company at complaints@exnova.com. The Company shall
                acknowledge receipt of any such complaint, initiate an internal
                investigation of the matter and shall respond to the Client
                within a reasonable amount of time (i.e. within 3 months from
                the date of acknowledging receipt of the complaint). The Company
                may extend this timeframe if deemed necessary, and in such case,
                the Company shall notify the Client accordingly.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                d. Unilaterally terminate the Agreement provided that there is
                no debt outstanding from the Client toward the Company and such
                termination is made in accordance with section 16 herein.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2. The Client:
            <ul className="pl-5 space-y-[15px]">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                a. Acknowledges that the Account shall be activated upon the
                deposit of funds/advance payment into the Account.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                b. Warrants that he/she shall at all times be compliant with and
                honor all terms and conditions of this Agreement
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                c. Warrants that he/she shall ensure that at all times the
                username and password issued by the Company in relation to the
                use of the Service(s) and the Account, will only be used by
                him/her and will not be disclosed to any other person;
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                d. Shall be liable for all orders submitted through his/her
                security information, and any orders received in this manner by
                the Company shall be considered to have been given by the
                Client;
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                e. Hereby accepts the risk of orders placed by unauthorized
                persons and/or trading account used by someone without the
                client’s permission (hereinafter collectively referred to as
                ‘’unauthorized access’’ or “hacked account”) and agrees to
                indemnify the Company in full for any and all losses, costs and
                expenses derived as a result. In this case, the client further
                agrees and accepts the following:
                <ul className="pl-5 space-y-[15px]">
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    i. The client shall notify the Company immediately regarding
                    unauthorized access to his/her trading account;
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    ii. The Company shall be entitled to block immediately the
                    client’s trading account and increase the processing time
                    and/or cancel withdraw requests without prior notification
                    to the Client, and the Client will not be entitled to any
                    profits made during the time the account was unauthorized
                    accessed;
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    iii. The client shall provide the Company with any
                    information and/or documents deemed necessary in order to
                    unblock the trading account.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    d. Unilaterally terminate the Agreement provided that there
                    is no debt outstanding from the Client toward the Company
                    and such termination is made in accordance with section 16
                    herein.
                  </li>
                </ul>
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                f. Hereby acknowledges that frequent access and logins to the
                Account via different IP addresses from different countries
                and/or via the use of VPN is an indication that shall reasonably
                lead the Company to believe that sections 3 paragraph 6 and 7
                paragraph d sub-paragraph b, herein have been breached.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                g. Confirms that any trading strategies and/or investment
                decisions and/or any activities performed by him/her through
                his/her Account and on the Trading Platform are made having in
                mind/considered/being aware of all risks involved and solely on
                the basis of his/her knowledge and upon his/her sole discretion.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                h. Warrants that he/she shall take all necessary steps and
                action in order not to disclose any confidential information of
                the Company, which the Company shall disclose to and/or make
                available to the Client from time to time.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                i. Accepts any risk, including, without limitation, any risk of
                financial loss, that arises from unauthorized access to and
                operation of his/her Account by third and/or unauthorized
                parties.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                j. Shall notify the Company of any changes of his/her contact
                details and any other changes of the personal data he/she
                provided to the Company, within 7 (seven) calendar days since
                such changes came into effect
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                k. Shall register only 1 (one) Account with the Company. In case
                that the Client owns multiple accounts under this brand and any
                other associated brands, any transactions/Operations made via
                such multiple accounts and corresponding financial results of
                such transactions/Operations, can be canceled at the absolute
                discretion of the Company. All such multiple accounts can be
                blocked at the Company’s absolute discretion, and the Company
                shall be entitled to terminate this Agreement immediately, close
                the account and all open positions.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                l. Shall indemnify and hold harmless the Company of any claims
                and/or legal actions instigated against the Company as a result
                of disclosure of the Client’s personal data.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                m. Irrevocably accept full responsibility for his/her actions
                according to current tax legislation valid at the place of
                residence/living of the Client regarding any performed
                transactions/Operations, including but not limited to
                revenue/income tax.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                n. Acknowledges that the provision of the Service(s) may involve
                information being transported over an open network. Information
                is therefore transmitted regularly and without control across
                borders. The Company shall take reasonable steps to avoid
                information being intercepted and read by third parties by
                utilizing techniques such as encryption, however it is not
                always possible to avoid third party unauthorized access to/view
                of the Client’s information/personal data. The Client hereby
                acknowledges this risk and accepts and consents to this, so long
                as he/she is reasonably satisfied that any such unauthorized
                access/disclosure was not made intentionally and that the
                Company took all reasonable measures and actions in order to
                prevent such unauthorized access/disclosure.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">o. Acknowledges and agrees that the Company has the right to close any transaction,
at its sole and absolute discretion without providing prior notice to the Client if the
underlying asset or contract on which the transaction is based settles on an expiry
date as determined by the relevant financial market, on which the said asset is
traded (such time referred to as 'Closing Time' and the relevant expiring transaction
referred to as an 'Expiring Transaction'). The Company shall not be obligated to take
actions to roll over an open position in an Expiring Transaction.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">p. Acknowledges that the Company prohibits third-party or anonymous payments into
the Client’s Account. Only funds sent from an account held in the Client’s name and
belonging to the Client are acceptable. The Company reserves the right at its
discretion, if it has identified third-party or anonymous deposits, to block the Account.
The Client should note that any remaining funds will be returned to the third-party
source via the same payment method, and any profits accumulated by the Client
using third-party or anonymous funds will not be made available to the Client.

              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">q. Agrees that in case the Company carries out a transaction/Operation on his/her
behalf which is not covered by the balance of his/her Account, the Company shall
have the right to liquidate his/her assets and use the proceeds to cover part or the
total difference.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">r. Irrevocably accepts that he/she is solely responsible for any technical deficiencies
that may occur in Client’s connection to the Trading Platform, in Client's equipment
used for receiving the services (including, but not limited to, personal computer,
laptop, mobile phone etc.), and confirms that he/she shall have no claims whatsoever
against the Company for any direct and/or indirect damages the Client may suffer
due to such deficiencies.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">s. Acknowledges that the Company has the right to refuse to execute any
transaction/Operation requested by the Client and/or any other action required, under
this Agreement, for as long as it maintains any claims against the Client, whether
these are due, future or contingent and regardless of whether these arise from the
same transaction/Operation from which such obligations arise.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">t. Acknowledges that the Company has the right to refuse to execute any
transaction/Operation, place restrictions and/or close the client’s trading accounts
operated by the Company under this brand and any other associated brands. The
Company may exercise this right for reasons including, but not limited to, fraudulent
activities and/or other violations of the Company’s terms and conditions. Clients
acknowledge and agree that such actions by the Company shall not give rise to any
claims or liabilities against the Company
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">u. Acknowledges and accepts that this Agreement and/or any materials made available
on the Website may be amended unilaterally, from time to time, by the Company, and
that he/she shall be responsible to check on the Website frequently in order to
ensure that he/she has made himself/herself aware of any changes effected in such
manner. Upon the submission of a request by the Client of any
transaction/Operation, any changes effected to this Agreement and/or to any
materials made available on the Website shall be deemed as acknowledged and
accepted by the Client.

              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">v. If the Company deems that the amendments are material, such amendments will
take effect on the date specified in the notice to the Client and if no date is specified,
then on the date of receipt of the notice.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">w. The Client understands and agrees that her/his consent is not necessary for any
change to be effective. Whether the Client does not respond and/or disagrees with
the content of the amendments implemented in the Company’s Terms and
Conditions, this will be considered as an acceptance by the Client of the contents of
the amendment and of the amended Terms and Conditions. Further, any order of the
Client to execute a transaction(s) following the receipt of the notice and/or login into
his Account, shall be deemed as acceptance by the Client of the contents of the
amendment and of the Agreement as amended.

              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">x. The Client understands that it is his/her sole responsibility to remain up-to-date with
all changes. The applicable version shall be the latest version uploaded on the
Company’s website, and in the event of a dispute, the latest version shall prevail.

              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">y. In case the Client does not agree with the amendments, the Client shall be entitled to
terminate this Agreement in accordance with the Duration and Termination of the
Agreement section herein included.

              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TermsofService;
