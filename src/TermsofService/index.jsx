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
            2.1. The subject of the Agreement shall be the provision of Services
            to the Client by the Company under the Agreement and through the
            Trading Platform.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2.2. The Company shall carry out all transactions as provided in
            this Agreement on an execution-only basis, neither managing the
            account nor advising the Client. The Company is entitled to execute
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
            2.3. The Investment and Ancillary Services which the Company should
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
            3.1. Subject to the provisions of this Agreement, the Company agrees
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
            3.2. The Company will offer Services to the Client at the absolute
            discretion of the Company, subject to the provisions of this
            Agreement.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            3.3. The Client is prohibited and shall not, under no circumstances,
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
            4.1. Services – services provided by the Company to the Client
            through the Trading Platform of the Company, including without
            limitation to customer, analytics, news and marketing information
            services.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4.2. The Company shall facilitate the execution of trade
            activities/orders and/or transactions of the Client, but the Client
            hereby acknowledges and accepts that the Company shall not at any
            time provide any trust services and/or trading consultation or
            advisory services to the Client.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4.3. The Company shall process all transactions/Operations of the
            Client in accordance with the terms and conditions of this Agreement
            and on an execution-only basis. The Company shall not manage the
            Client’s Account nor advise the Client in any way.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4.4. The Company shall process the orders/transactions requested by
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
            4.5. The Company shall not be financially liable for any operations
            conducted by the Client through the Account and/or on the Trading
            Platform.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4.6. Each Client shall be the only authorized user of the Company’s
            services and of the corresponding Account. The Client is granted an
            exclusive and non-assignable right to the use of and to access the
            Account, and it is his/her responsibility to ensure that no other
            third party, including, without limitation, to any next of kin
            and/or to members of his/her immediate family, shall gain access to
            and/or trade through the Account assigned to her/him
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4.7. The Client shall be liable for all orders given through his
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
            4.8. If the Client acts on behalf of any third party and/or on
            behalf of any third party’s name, the Company shall not accept this
            person as a Client and shall not be liable before this person,
            regardless if such person was identified or not.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4.9. The Client has the right to cancel his order given to the
            Company within 3 seconds after the moment of giving such order to
            the Company (hereinafter referred to as the “Cancellation”). The
            client agrees and understands that the three seconds cancellation
            option offered by the Company is applicable and available for the
            client as long as the price remains unchanged. Three seconds from
            the moment of giving the order to the Company by the Client via the
            platform, the Company may (but is not obliged to) offer to buyout
            the option from the Client and the Client has the right to agree to
            such offer (hereinafter referred to as the “Buyout”). The Client is
            entitled to use such Cancellation or Buyout option subject to the
            conditions specified on the platform. Such conditions can also
            include the fee charged by the Company. Such a fee is specified on
            the platform. The Company is obliged to provide all necessary
            information as to the conditions of Cancellation and Buyout, their
            cost, etc. The Client acknowledges and agrees that the provision of
            such information on the platform is sufficient. The Client
            acknowledges and agrees that the use of Cancellation or Buyout is
            very risky to the Client as long as the cost of Cancellation and/or
            Buyout depends on the market situation. The Client acknowledges and
            agrees that he bears all the risks associated with the use of
            Cancellation and/or Buyout.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4.10. The Client is entitled to use such Cancellation or Buyout
            option subject to the conditions specified on the Trading
            Platform/Website, including without limitation to any fee to be
            charged by the Company. The Company shall be obliged to provide all
            necessary information as to the conditions of Cancellation and
            Buyout, including any applicable costs, etc. The Client
            acknowledges, accepts and agrees that the provision of such
            information on the Trading Platform is sufficient. The Client
            acknowledges, accepts and agrees that the use of Cancellation or
            Buyout option entails large risks for the Client, especially in the
            case where the costs associated with Cancellation and/or Buyout,
            depend on the market situation. The Client acknowledges, accepts and
            agrees that he/she shall bear all risks associated with the use of
            the Cancellation and/or Buyout option.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4.11. It is understood and agreed by the Client that the Company may
            from time to time, at its sole discretion, utilize a third party to
            hold the Client’s funds and/or for the purpose of receiving payment
            execution services. These funds will be held in segregated accounts
            from such third party’s own funds and will not affect the rights of
            the Client to such funds.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4.12. The Company offers internal live chats where clients can share
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
            4.13. Provision of investment advice shall only be carried out by
            the Company subject to a separate written agreement with the Client
            and after assessing the Client’s personal circumstances. Unless such
            written agreement has been entered into between the Client and the
            Company, the provision of reports, news, opinions and any other
            information by the Company to the Client does not constitute
            investment advice or investment research.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            4.14. AI CHATBOT DISCLAIMER: The following disclaimer is intended to
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
            5.1. By accepting this Agreement, the Client accepts that he has
            read and understood all provisions of this Agreement and related
            information on the Website. The Client accepts and understands that
            all orders received shall be executed by the Company as the
            counterparty of the transaction in its capacity of Market Maker. The
            Company shall act as a principal and not as an agent on the Client’s
            behalf for the purpose of the Execution of orders. The Client is
            informed that Conflicts of Interest may arise because of this model.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5.2. Reception of the order by the Company shall not constitute
            acceptance, and acceptance shall only be constituted by the
            execution of the order by the Company. Moreover, the Client further
            accepts that the Company may transmit some orders and act as an
            intermediary for Clients’ transactions.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5.3. The Company shall be obliged to execute the Client's orders
            sequentially and promptly.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5.4. The Client acknowledges and accepts a) the risk of mistakes or
            misinterpretations in the orders sent through the Trading Platform
            due to technical or mechanical failures of such electronic means, b)
            the risk of any delays or other problems as well as c) the risk that
            the orders may be placed by persons unauthorized to use and/or
            access the Account, and the Client agrees to indemnify the Company
            in full for any loss incurred as a result of acting in accordance
            with such orders.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5.5. The Client accepts that during the reception and transmission
            of his/her order, the Company shall have no responsibility as to its
            content and/or to the identity of the person placing the order,
            except where there is gross negligence, willful default or fraud by
            the Company.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5.6. The Client acknowledges that the Company will not take action
            based on the orders transmitted to the Company for execution by
            electronic means other than those orders transmitted using the
            predetermined electronic means such as the Trading Platform, and the
            Company shall have no liability towards the Client for failing to
            take action based on such orders.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5.7. The Client acknowledges and agrees that the Company shall bear
            no responsibility for any financial losses and/or technical issues
            which may arise in the event that an external trading bot is used
            when trading; the Client shall use the bot at their own risk;
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5.8. The client acknowledges and agrees that any products or
            services that may be offered by the Company may not always be
            available for purchasing or use for trading purposes, and it is in
            the Company's absolute discretion whether it will make these
            products available or not to the clients at any time. The Company
            shall bear no liability, monetary or otherwise, in relation to this
            section, including without limitation to not making available any
            product at any given time.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5.9. The client agrees and understands the following in
            consideration of the below corporate actions:
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
            5.10. The Client acknowledges that the Company will have the right,
            at any time and for any reason and without justification, at its
            sole discretion, to refuse to execute orders, including, without
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
            6.1. The Company does not guarantee uninterrupted service, safe and
            errors-free, and immunity from unauthorized access to the trading
            sites' servers nor disruptions caused from damages, malfunctions or
            failures in hardware, software, communications and systems in the
            Client's computers and in the Company's suppliers. s model.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            6.2. Supplying services by the Company depends, inter alia, on third
            parties and the Company bears no responsibility for any actions or
            omissions of third parties and bears no responsibility for any
            damage and/or loss and/or expense caused to the Client and/or third
            party as a result of and/or in relation to any aforesaid action or
            omission.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            6.3. The Company will bear no responsibility for any damage of any
            kind allegedly caused to the Client, which involves force majeure or
            any such event that the Company has no control of and which has
            influenced the accessibility of its trading site.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            6.4. Under no circumstances will the Company or its Agent(s) hold
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
            7.1. The Company shall proceed to a settlement of all transactions
            upon execution of such transactions.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            7.2. An online statement of Account will be available for printing
            to the Client on the Trading Platform of the Company, at all times.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          8. Rights, Obligations and Guarantees of the Parties
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            8.1. The Client shall be entitled to:
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
            8.2. The Client:
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
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                o. Acknowledges and agrees that the Company has the right to
                close any transaction, at its sole and absolute discretion
                without providing prior notice to the Client if the underlying
                asset or contract on which the transaction is based settles on
                an expiry date as determined by the relevant financial market,
                on which the said asset is traded (such time referred to as
                'Closing Time' and the relevant expiring transaction referred to
                as an 'Expiring Transaction'). The Company shall not be
                obligated to take actions to roll over an open position in an
                Expiring Transaction.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                p. Acknowledges that the Company prohibits third-party or
                anonymous payments into the Client’s Account. Only funds sent
                from an account held in the Client’s name and belonging to the
                Client are acceptable. The Company reserves the right at its
                discretion, if it has identified third-party or anonymous
                deposits, to block the Account. The Client should note that any
                remaining funds will be returned to the third-party source via
                the same payment method, and any profits accumulated by the
                Client using third-party or anonymous funds will not be made
                available to the Client.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                q. Agrees that in case the Company carries out a
                transaction/Operation on his/her behalf which is not covered by
                the balance of his/her Account, the Company shall have the right
                to liquidate his/her assets and use the proceeds to cover part
                or the total difference.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                r. Irrevocably accepts that he/she is solely responsible for any
                technical deficiencies that may occur in Client’s connection to
                the Trading Platform, in Client's equipment used for receiving
                the services (including, but not limited to, personal computer,
                laptop, mobile phone etc.), and confirms that he/she shall have
                no claims whatsoever against the Company for any direct and/or
                indirect damages the Client may suffer due to such deficiencies.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                s. Acknowledges that the Company has the right to refuse to
                execute any transaction/Operation requested by the Client and/or
                any other action required, under this Agreement, for as long as
                it maintains any claims against the Client, whether these are
                due, future or contingent and regardless of whether these arise
                from the same transaction/Operation from which such obligations
                arise.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                t. Acknowledges that the Company has the right to refuse to
                execute any transaction/Operation, place restrictions and/or
                close the client’s trading accounts operated by the Company
                under this brand and any other associated brands. The Company
                may exercise this right for reasons including, but not limited
                to, fraudulent activities and/or other violations of the
                Company’s terms and conditions. Clients acknowledge and agree
                that such actions by the Company shall not give rise to any
                claims or liabilities against the Company
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                u. Acknowledges and accepts that this Agreement and/or any
                materials made available on the Website may be amended
                unilaterally, from time to time, by the Company, and that he/she
                shall be responsible to check on the Website frequently in order
                to ensure that he/she has made himself/herself aware of any
                changes effected in such manner. Upon the submission of a
                request by the Client of any transaction/Operation, any changes
                effected to this Agreement and/or to any materials made
                available on the Website shall be deemed as acknowledged and
                accepted by the Client.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                v. If the Company deems that the amendments are material, such
                amendments will take effect on the date specified in the notice
                to the Client and if no date is specified, then on the date of
                receipt of the notice.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                w. The Client understands and agrees that her/his consent is not
                necessary for any change to be effective. Whether the Client
                does not respond and/or disagrees with the content of the
                amendments implemented in the Company’s Terms and Conditions,
                this will be considered as an acceptance by the Client of the
                contents of the amendment and of the amended Terms and
                Conditions. Further, any order of the Client to execute a
                transaction(s) following the receipt of the notice and/or login
                into his Account, shall be deemed as acceptance by the Client of
                the contents of the amendment and of the Agreement as amended.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                x. The Client understands that it is his/her sole responsibility
                to remain up-to-date with all changes. The applicable version
                shall be the latest version uploaded on the Company’s website,
                and in the event of a dispute, the latest version shall prevail.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                y. In case the Client does not agree with the amendments, the
                Client shall be entitled to terminate this Agreement in
                accordance with the Duration and Termination of the Agreement
                section herein included.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            8.3. The Client hereby warrants and represents to the Company that
            he/she:
            <ul className="pl-5 space-y-[15px]">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                a. Is not a USA/territories of the US national and is not
                residing in any country where distribution or provision of
                financial products or services offered by the Company would be
                contrary to local law or regulations.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                b. Is responsible for ascertaining the terms of, and shall
                comply with, any and all applicable local laws and/or
                regulations to which he/she is subject to.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                c. Has the legal capacity/competence, is of sound mind and has
                reached the age of maturity in the country which he is resident
                or citizen;
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                d. Is not a citizen of the USA/territories of the US, North
                Korea, Palestine, Vatican and/or a resident of either the
                USA/territories of the US, Canada, Afghanistan, Australia,
                Belgium, Bouvet Island, Cuba, Democratic Republic of the Congo,
                Eritrea, Ethiopia, Gibraltar, Haiti, Iran, Israel, Libya, Mali,
                Myanmar, North Korea, Palestine, South Sudan, Sudan, Syria, the
                Russian Federation, the United Kingdom, Ukraine, Vatican, any
                country of the European Economic Area and/or other non-serviced
                countries.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                e. Is not under any legal disability with respect to, and is not
                subject to, any laws or regulations which prevents his/her
                performance of this Agreement or any contract or transaction
                contemplated by this Agreement.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                f. The Client acts as principal and not as an authorized
                representative / attorney or trustee of any third party.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                g. The monetary funds and/or financial instruments and other
                assets delivered for any purpose by the Client to the Company
                are not connected directly or indirectly to any illegal and/or
                criminal activities and/or terrorism.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                h. The monetary funds and/or financial instruments and other
                assets delivered for any purpose by the Client to the Company,
                shall belong exclusively to the Client and at all times be free
                from any charge, lien, pledge or encumbrance, unless the Client
                has otherwise disclosed to the Company in writing.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                i. The financial instruments, information and/or legal
                documents, which the Client delivers to the Company are
                authentic, valid and free of any defect, and they shall have the
                legal effect which they contend to have.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                j. The Client certifies that he has provided accurate, complete
                and true information about himself upon registration and will
                maintain the accuracy of the provided information by promptly
                updating any registration information that may have changed.
                Failure to do so may result in Account closure, Account
                limitations and/or voiding of any transactions.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                k. The Client will provide KYC documents to the Company within a
                period not exceeding 7 days from the moment of depositing funds.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                l. The Client confirms that the purpose and reason for
                registering and operating an Account is to trade, on his/her
                personal/own behalf, in any financial instruments and to take
                advantage of the Services offered by the Company. The Client
                warrants that should the reason for operating an Account change,
                he/she will inform the Company immediately.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                m. The Client warrants and/or shall repeat the above warranties
                at all times, including, without limitation, during and/or upon
                the execution of any transaction/Operation and/or trade, through
                the Account and the provision of the Services.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            8.4. The Company shall be entitled to:
            <ul className="pl-5 space-y-[15px]">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                a. Modify the size of the value of the Company’s financial
                obligations to the Client with changes of the appropriate entry
                of the trade operations register in case of violation of one or
                several provisions of the Agreement herein by the Client.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                b. The Company reserves the right to change, add or set as
                default the option payments rate, return rate, the possibility
                of adjusting the return rate, the possibility of acquiring the
                option type, the minimum and/or the maximum option amount, the
                possible expiration periods for one, several or all of the
                assets. The company shall be entitled to limit the maximum
                amount of purchased options for 1 (one) minute, 1 (one) hour, 1
                (one) calendar day.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                c. Contact the Client with any question concerning the Agreement
                herein, including, in order to clarify the Client's intentions
                regarding his/her actions through the Account.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                d. Unilaterally modify and/or amend and/or restate the terms and
                conditions of this Agreement and/or the material made available
                on the Website. The Company shall notify the Client of any such
                changes through the Website and/or by the delivery of an email
                to the Client.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                e. Modify the size of the value of the Company’s financial
                obligations to the Client, if fulfillment of Operations on the
                Trading Platform does not comply with conditions of the
                Agreement herein.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                f. Engage third parties with a view to cooperating in order to
                facilitate and/or enhance any and/or the provision of the
                Services under this Agreement.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                g. With regard to any matters and/or obligations that are not
                covered by this Agreement, the Company shall act accordingly
                upon its own discretion, but at all times in accordance with
                business custom and existing practices within the line of the
                Services.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                h. The Company reserves the right to request additional
                supporting documents and/or information during the verification
                of the Client’s Trading Account and on an ongoing basis during
                the business relationship if such information is necessary so as
                the Company may efficiently offer its services to the Client. In
                case the Client fails to provide the Company with any additional
                supporting documents including, inter alia, up-to-date
                verification documents, within the specified timeframe, the
                Company shall be entitled to terminate this Agreement
                immediately, close the account and all open positions.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            8.5. Obligations of the Company:
            <ul className="pl-5 space-y-[15px]">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                a. Subject to the provisions of this Agreement and the Company
                being reasonably satisfied that the Client is compliant with the
                terms and conditions of this Agreement and/or has not in any way
                breached any terms of this Agreement, the Company shall offer
                the Services through the Website;
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                b. To fulfill the provisions of the Agreement herein.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          9. Indemnity and Liability
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            9.1. The Client shall indemnify and keep indemnified the Company and
            its directors, officers, employees or representatives against all
            direct or indirect liabilities (including without limitation all
            losses, damages, claims, costs or expenses), incurred by the Company
            or any other third party in respect to any act or omission by the
            Client in the performance of his/her obligations under this
            Agreement and/or the liquidation of any financial instruments of the
            Client in settlement of any claims with the Company, unless such
            liabilities result from gross negligence, willful default or fraud
            by the Company. This indemnity shall survive termination of this
            Agreement.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            9.2. The Company shall not be liable for any direct and/or indirect
            loss, expense, cost or liability incurred by the Client in relation
            to this Agreement, unless such loss, expense, cost or liability is a
            result of gross negligence, willful default or fraud by the Company.
            Notwithstanding the provisions of section 8.1 above, the Company
            shall have no liability to the Client whether in tort (including
            negligence), breach of statutory duty, or otherwise, for any loss of
            profit, or for any indirect or consequential loss arising under
            and/or in connection with the Agreement.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            9.3. The Company shall not be liable for any loss of opportunity as
            a result of which the value of the financial instruments of the
            Client could have been increased or for any decrease in the value of
            the financial instruments of the Client, regardless of the cause,
            unless such loss is directly due to gross negligence, willful
            default or fraud on the part of the Company.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            9.4. The Company shall not be liable for any loss which is the
            result of misrepresentation of facts, error in judgment or any act
            done or which the Company has omitted to do, whenever caused, unless
            such act or omission resulted from gross negligence, willful default
            or fraud by the Company.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            9.5. The Company shall not be liable for any act or omission or for
            the insolvency of any counterparty, bank, custodian or other third
            party which acts on behalf of the Client or with or through whom
            transactions on behalf of the Client are carried out.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            9.6. In the event that the Company acts as an intermediary to
            Clients transactions, the Client hereby agrees and acknowledges
            that:
            <ul className="pl-5 space-y-[15px]">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                i. under certain market conditions at the time of execution
                and/or depending on the risk management framework of the
                third-party market maker, the Company may have to cancel the
                Client’s trade(s) and/or transaction(s) and return the relevant
                invested funds to the Client’s trading account balance. The
                Company undertakes to provide adequate notification to the
                Client in such a case.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                ii. Should the aforementioned occur, the Client will have no
                right, claim or demand from the Company and undertakes to
                indemnify the Company for any damage caused by the Company's
                aforesaid action.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          10. Personal Data
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            10.1. By accepting the terms and conditions of this Agreement, the
            Client irrevocably consents to the collection and processing of
            his/her personal data/information by the Company without the use of
            automatic controls, as the same are provided by him/her to the
            Company. The term personal data for the purposes of this Agreement
            shall mean: the Name, Surname, Patronymic, gender, address, phone
            number, e-mail, IP address of the Client, Cookies and information
            that relates to the provision of Services to the Client (for
            example, the Client’s trading story).
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            10.2. The Client shall be obliged to provide correct, accurate and
            complete personal data/information as requested by the Company.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            10.3. The purpose of collecting and processing the personal data is
            to comply with applicable regulating legislation requirements,
            including, without limitation, the anti-money laundering
            regulations, as well as for any and all purposes in relation to this
            Agreement, including without limitation to enable the Company to
            discharge its obligations towards the Client.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            10.4. The Client acknowledges and consents to that, for the purposes
            described in the section directly above, the Company shall be
            entitled to collect, record, systematize, accumulate, store, adjust
            (update, change), extract, use, transfer (disseminate, provide,
            access), anonymize, block, delete, destroy such personal data and/or
            perform any other actions according to the current regulating
            legislation.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            10.5. The Client acknowledges and consents to the Company storing,
            maintaining and processing his/her personal data in the manner as
            described in this Agreement during the term of the Agreement and for
            a minimum of 7 years following any termination of the Agreement.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            10.6. The Client hereby acknowledges, accepts, agrees and consents
            to the disclosure of personal data by the Company to third parties
            and their representatives, solely for the purposes of the Agreement,
            including without limitation in order to facilitate
            processing/execution of the Client’s orders/Operations, provided
            that at all times (i) the amount of personal data to be disclosed to
            any such third party is proportionate and/or limited solely to
            facilitate to the actions as described above, and (ii) the Company
            shall ensure that such third party shall treat the personal data in
            accordance with applicable laws and regulations.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            10.7. The Company shall not be entitled to make available the
            personal data in public and/or disclose such personal data for any
            other purposes, subject to disclosure required under applicable laws
            and regulations
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            10.8. During processing of the personal data, the Company shall take
            necessary legal, organizational and technical measures to protect
            such personal data from unauthorized or accidental access,
            destruction, change, blocking, copying, provision, and dissemination
            as well as from any other illegal actions.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          11. Assignment
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            11.1. The Agreement shall be personal to the Client, and the Client
            shall not be entitled to assign or transfer any of his/her rights or
            obligations under this Agreement.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            11.2.The Company may at any time assign or transfer any of its
            rights or obligations under this Agreement to a third party. The
            Company shall notify the Client of any such assignment.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          12. Risk Statement
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          The Client hereby confirms to have read, understood and hereby accepts
          the risk statement relating to the use of Services on the Website, as
          the same is available electronically via the Website.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          By accepting this Agreement, the Client accepts that the Client has
          read and understood the information contained in this Agreement and
          the Company’s general description of the nature and risks of different
          Financial Instruments and/or Service(s) which can be found in our Risk
          Disclosure
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          13. One-Click Trading Terms and Conditions
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          One-Click Trading mode allows you to perform trading operations on the
          platform with only one click on the Buy/Call or Sell/Put buttons,
          without any additional confirmations
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Opting in for the One-Click Trading mode means that you acknowledge
          that you have read and understood the following terms and conditions,
          and you agree to be bound hereby
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Your current version of the platform enables you to choose between the
          following modes for order submission. You agree that you will be bound
          by the procedures and conditions specified herein with respect to each
          such mode.
        </p>
        <ul className="pl-5 space-y-[15px] list-disc">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            There are several steps you have to follow when using the default
            mode for the submission of orders. Using the default mode, you first
            invoke the instruments menu and choose the assets you want to trade.
            Then you select all parameters depending on the instrument you have
            chosen and confirm your order submission by clicking either Buy/Call
            or Sell/Put buttons depending on the particular order type selected
            and your trading intentions. Using the default mode, a confirmation
            window will appear, and you will have to confirm your intentions and
            the trade details in order to confirm the transaction. Your order
            will not be submitted until you have completed the aforementioned
            procedure
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            The One-Click Trading mode for order submission (“One-click
            trading”) is a one-step process. You will be submitting orders when
            you single-click either Buy/Call/Higher or Sell/Put/Lower buttons.
          </li>
        </ul>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Your current version of the platform enables you to choose between the
          following modes for order submission. You agree that you will be bound
          by the procedures and conditions specified herein with respect to each
          such mode.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          There will be no subsequent confirmation prompt for you to click;
          hence you should ensure beforehand that all parameters are set based
          on your trading intentions. You will not be able to withdraw your
          order once you click the Buy/Call/Higher or Sell/Put/Lower buttons
          (with the exemption of a 3-second cancellation period for binary
          options) and only certain parameters such as stop loss and take profit
          orders for CFDs can be modified after having opened a trade. Under
          normal market conditions and system performance, a market order will
          be promptly filled after submission, and you will have entered into a
          binding transaction.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          You can activate or deactivate One-Click Trading mode in the settings
          of the platform. One-Click Trading can be activated or deactivated for
          one or several instruments in the settings.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          By selecting the One-Click Trading mode, you understand that your
          orders will be submitted by clicking the Buy/Call or Sell/Put button,
          without any further order confirmation. You agree to accept all risks
          associated with the use of the order submission mode you have chosen,
          including, without limitation, the risk of errors, omissions or
          mistakes made in submitting any order.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          You agree to fully indemnify and hold harmless the Company from any
          and all losses, costs and expenses that may incur as a result of any
          such errors, omissions or mistakes by you or any other person trading
          on your behalf.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          If you accept the One-Click Trading terms and conditions, tick the
          “buy in one click” option when opening trades on the platform. If you
          do not accept the conditions, do not tick the box and do not use the
          One-Click Trading function.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          14. Charges and Fees
        </h4>
        <ul className="pl-8 space-y-[15px] list-disc">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            The Company shall be entitled to receive a fee from the Client
            regarding the Service(s), provided by the Company
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            The Company may pay fee/commission to business introducers,
            referring agents, or other third parties based on written agreement.
            This fee/commission is related to the frequency/volume of
            transactions and/or other parameters.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            The Company may pay fee/commission to business introducers,
            referring agents, or other third parties based on written agreement.
            This fee/commission is related to the frequency/volume of
            transactions and/or other parameters. All applicable fees or charges
            can be found on the Company’s Website (General Fees). The Company
            has the right to amend its fees and charges from time to time.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            Ongoing trading fees, including inter alia swaps, shall be charged
            and deducted from the Client’s account balance. In case the Client
            does not maintain enough funds in his/her balance, the relevant
            position subject to swap will be closed by the Company.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            The Client agrees that any amounts sent by the Client will be
            deposited to the Account at the value on the date of the payment
            received and net of any charges / fees charged by the bank or any
            other intermediary involved in such transaction process and/or in
            any other case, the Client shall authorize the Company to withdraw
            the fee by way of transfer from the Client’s Account.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          15. Governing Law
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            15.1. The terms and conditions of this Agreement as well as any
            matters pertaining to this agreement, including without limitation
            to matters of interpretation and/or disputes, shall be governed by
            the laws of Saint Kitts and Nevis.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            15.2. The Company and the Clients irrevocably submit to the
            jurisdiction of the courts of Saint Kitts and Nevis.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            15.3. The Company shall be entitled to use the interpreter's
            services during the court trial in case of dealing with a disputable
            situation according to the legislation of the Saint Kitts and Nevis
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          16. Duration and Termination of the Agreement
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            16.1. The Agreement herein shall be concluded for an indefinite term
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            16.2 The Agreement herein shall come into force when the Client
            accepts the Agreement and makes an advance payment to the Company
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            16.3. In case of any discrepancies between the text of the Agreement
            in English and its translation in any other language, the text of
            the Agreement in English as a whole shall prevail, as well as the
            English version/text of any other documentation/information
            published on the Website.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            16.4. The Agreement may be terminated in any of the following
            circumstances:
            <ul className="pl-5 space-y-[15px] c">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                a. Each Party shall be entitled to terminate this Agreement at
                any time by giving to the other Party 15 (fifteen) days written
                notice. During the 15 days notice, the Company may limit the
                services available to the Client; however, access will be
                granted in order for the Client to withdraw any remaining
                balance.
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                b. The Company shall be entitled to terminate this Agreement
                immediately, close all open positions, block the Client’s
                account, and return any remaining funds (if applicable) and
                without giving prior notice under the following circumstances:
                <ul className="pl-5 space-y-[15px] c">
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    i. Death or legal incompetence of the Client.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    ii. If any application is made or any order is issued, or a
                    meeting is convened, or a resolution is approved, or any
                    measures of bankruptcy or winding up of the Client are
                    taken.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    iii. The Client violates, or the Company has reasonable
                    grounds to believe that the Client violated, any of the
                    Client’s obligations under and/or terms of, this Agreement
                    and/or is in breach of any of the warranties and
                    representations made by her/him in this Agreement.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    iv. If it comes to the Company’s attention and/or the
                    Company has reasonable grounds to believe that the Client
                    has not reached the age of maturity in the country in which
                    he is resident or citizen, as applicable.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    v. If it comes to the Company’s attention and/or the Company
                    has reasonable grounds to believe that the Client became a
                    citizen of the USA/territories of the US, North Korea,
                    Palestine, Vatican and/or a resident of either the
                    USA/territories of the US, Canada, Afghanistan, Australia,
                    Belgium, Bouvet Island, Cuba, Democratic Republic of the
                    Congo, Eritrea, Ethiopia, Gibraltar, Haiti, Iran, Israel,
                    Libya, Mali, Myanmar, North Korea, Palestine, South Sudan,
                    Sudan, Syria, the Russian Federation, the United Kingdom,
                    Ukraine, Vatican, any country of the European Economic Area
                    and/or other non-serviced countries.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    vi. If it comes to the Company’s attention and/or the
                    Company has reasonable grounds to believe that the Client is
                    or became a Ukraine resident and his/her Account was
                    registered after the 10th of May 2022.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    vii. The Company has suspicion based on available
                    information that the Client:
                    <ul className="pl-5 space-y-[15px]">
                      <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                        a. Is and/or has been using fraudulent means or was
                        involved in a fraudulent scheme in relation to the
                        performance of this Agreement;
                      </li>
                      <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                        b. Has illegally and/or improperly and/or unfairly
                        and/or otherwise gained an unfair advantage, over and/or
                        to the detriment of (i) other clients of the Company
                        and/or (ii) the Company;
                      </li>
                      <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                        c. Has unjustly enriched by using information which was
                        intentionally and/or negligently and/or otherwise
                        concealed and/or not disclosed in advance by the Client
                        to the Company and/or of which the Company had known in
                        advance, it would have not consented and/or it would not
                        have authorized the use of such information by the
                        Client for the purposes of this Agreement; and/or
                      </li>
                      <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                        d. Has performed acts with the intention and/or effect
                        of manipulating and/or abusing the market and/or the
                        Company’s trading systems and/or deceiving the Company
                        and/or defrauding the Company; and/or
                      </li>
                      <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                        e. Has acted in bad faith during the performance of his
                        obligations under the Agreement.
                      </li>
                    </ul>
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    viii. The Client being guilty, or the Company has suspicions
                    that the Client is guilty, of malicious conduct or gross
                    negligence or fraud or of using fraudulent means or was
                    involved in a fraud scheme in relation to the performance of
                    this Agreement.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    ix. The termination is required under applicable law
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    x. In case the Client receives 2 warnings regarding verbal
                    abuse against employees of the Company.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    xi. If the Client didn’t provide to the Company his KYC
                    documents within 14 days from the moment of acceptance of
                    this Agreement, constituting, thus, his/her Account as an
                    unverified Account.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    xii. In case the Client uses and/or there are indications
                    that lead the Company to reasonably believe that the Client
                    uses different IP addresses from different countries and/or
                    VPN and/or VPS during the course of executing any
                    transactions and/or trades through the Trading Account
                    and/or the provision of the Services. Whether the Client has
                    provided notice to the Company for any change to its IP
                    address and/or of the use of VPN and/or VPS is irrelevant.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    xiii. The Client has initiated a chargeback in relation to
                    the funds held in the Client’s Account. In case the Company
                    identifies that the Client created any additional trading
                    account(s) following the chargeback dispute, the Company
                    shall be entitled to, without giving prior notice, terminate
                    the Agreement immediately, close all open positions, block
                    the account(s), and return any remaining own funds (if
                    applicable) excluding profits.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    xiv. Where the Company identifies that the Client is
                    involved and/or is using a high-frequency trading software
                    with the purpose of manipulating the Company’s systems
                    and/or trading platform and/or has illegally and/or
                    improperly and/or maliciously and/or knowingly gained an
                    unfair advantage over and/or to the detriment of other
                    clients of the Company and/or the Company and/or this
                    high-frequency trading software is designed to abuse the
                    Company’s systems and/or trading platform.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    xv. Where the Company identifies that the Client’s funds
                    and/or payment account(s) have been used to fund a
                    third-party account, and it has reasonable suspicion that
                    the Client and/or third party is circumventing any of the
                    clauses of the present Agreement by doing so and/or is
                    acting in collaboration with a third party circumventing any
                    of the clauses of this Agreement.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    xvi. The client is and/or has been convicted of a criminal
                    offense and/or is cautioned and/or charged by the police or
                    other competent authority with a criminal offense.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            16.5. In case of termination of this Agreement for a reason
            indicated in section 15.b, subclauses (iii – ix) and (xii – xvi) of
            this Agreement, the Company shall have no liability towards the
            Client and no obligation to pay the profit of the Client (if any).
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            16.6. In case of termination of this Agreement for a reason
            indicated in sections 15.a of this Agreement, the Company shall have
            either to wire to the Client the remaining balance or to give to the
            Client the opportunity to withdraw his/her remaining balance. In
            case of termination of this Agreement for a reason indicated in
            section 16.b of this Agreement, the Company shall have to wire to
            the Client the remaining balance excluding any profit.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          17. Terms and Conditions for 1-Click Service
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            17.1. The Client shall agree to make a deposit to his/her Account to
            use the Company Services or any other additional services ordered by
            the Client on the Website as well as all additional expenses (if
            necessary), including but not limited to any taxes, duties, etc. The
            Client shall be completely responsible for timely depositing the
            funds into his/her Account. Provider of payment services shall
            ensure only fulfillment of payment in the amount defined by the Site
            and shall not be liable for payment of the above-mentioned
            additional amounts by the Website’s Client.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            16.2. The payment is considered to be processed and cannot be
            returned after clicking the “Payment” button. By clicking the
            “Payment” button, the Client shall agree that he/she cannot return
            the payment or require its recall. Additionally, by accepting the
            terms and conditions herein contained, the Client as the owner of
            the payment card confirms that he/she shall be entitled to use the
            Services offered on the Website.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            16.3. By accepting the terms and conditions of this Agreement and
            depositing funds to the Account, the Client agrees to use the
            Website’s Services and accepts that the processing of any of the
            Client’s payment shall be executed by a provider of payment
            services, being a third party to this Agreement (the “Provider”),
            and the Client further acknowledges and accepts that no legal right
            exists for return of already purchased Services or other options of
            payment cancellation. In case if the Client is willing to refuse
            from using the 1-Click service for the next purchase of the Service,
            the Client can refuse from 1-Click service using the Account on the
            Website.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            17.4. Note that 1-click deposits (recurring payments) are not
            processed as 3-D secure transactions, the client needs to enable the
            3-D secure function if he would like the payments to be processed as
            3-D secure.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            17.5. The Provider shall not be in any case liable for the
            refusal/impossibility to process the data connected with the payment
            card of the Client, or for the refusal connected with failure to
            obtain permission from the issue bank to process payment using the
            payment card of the Client. The Provider shall not be in any case
            liable for the quality, amount, and price of any service, offered to
            the Client or purchased by the Client of the Website using the
            payment card of the Client. Paying for any Services of the Website,
            the Client first of all shall be obliged to fulfill the rules of
            using the Website. We are asking to consider that only the Client as
            the owner of the payment card shall be liable for timely payment of
            any service ordered via the Website and for all additional
            expenses/fees connected with this payment. The Provider shall only
            be the performer of payment in the amount specified by the Website
            and shall not be in any case liable for any pricing, general prices
            and/or total sums.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            17.6. In case of the situation connected with the Client’s dissent
            with the terms mentioned above and/or any other reasons, we are
            asking the Client to promptly refuse from making a payment and to
            directly address the administrator/support of the Website if
            necessary.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          Annex 1 – General Terms
        </h4>
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          Technical Regulation
        </h4>
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          1. The Client’s Responsibility
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.1. The Client acknowledges that these General Terms are an
            integral part of this Agreement.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.2. It is the Client's responsibility to verify that all
            transactions and Service(s) received are not contradictory to any
            applicable law and to undertake any other legal duty emanating from
            the use of the Website at the Client’s sole option, discretion and
            risk, and the Client is solely responsible for ascertaining whether
            it is legal in the Client's jurisdiction and/or place of residence.
            The Client holds sole liability for all transactions in his Trading
            Account, including all card transactions or other means of deposit
            and withdrawal transactions (as stated below). The Client
            acknowledges that the Company reserves the right to accept or
            decline any deposit and/or funding and/or withdrawal request by the
            Client depending on the payment method that the Client chooses
            (which includes but is not limited to the third party financial
            institution from which the Client wishes to deposit/withdraw funds
            with the Company (Third-Party Institutions), and the Company may
            suggest to the Client an alternative for its request. It is
            important to note that the Company does not have and cannot in any
            way have any, control over such Third-Party Institutions and any
            transactions made by the Client through the Platform using such
            institutions, and it is hereby acknowledged and agreed that the
            Company shall bear no liability, monetary or otherwise, in relation
            to any loss of funds incurred by the Client pursuant to any actions
            or omissions of Third-Party Institutions.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.3. The Client is responsible for securing his/her Username and
            Password for his Trading Account. The Client holds sole
            responsibility for any damage caused due to any act or omission of
            the Client causing inappropriate or irregular use of the Client
            Trading Account.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.4. It is clearly stated and agreed by the Client that the Client
            bears sole responsibility for any decision made and/or to be made by
            the Client relying on the content of the Website and no claim and/or
            suit of any kind will arise to that effect against the Company
            and/or its directors and/or employees and/or functionaries and/or
            Agents (the Company and/or its Agents). The Company and/or its
            Agents will hold no responsibility for loss of profits due to and/or
            related to the Website, Transactions carried out by the Client,
            Services and the General Terms of use or any other damages,
            including special damages and/or indirect damages or circumstantial
            damages caused, except in the event of malicious acts made by the
            Company.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.5. Without limitation of the aforesaid and only in the event of
            definitive judgment by court or other authorized legal institution
            resolving that the Company and/or its Agent(s) hold liability
            towards the Client or third party, the Company's liability, in any
            event, will be limited to the amount of money deposited and/or
            transferred by the Client to the Trading Account in respect of the
            transaction which caused the liability of the Company and/or its
            Agent(s) (if such was caused).
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.6. No Trading Account will be approved without the completion of
            the Company’s compliance procedures, including the identification
            and verification of the Account.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          2. Risks
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2.1. The value of the Financial Instruments offered by the Company
            may increase or decrease. The Client acknowledges that they fully
            understand the risks involved in trading CFDs (and other similar
            products), including, but not limited to, the risk of loss of all
            funds.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            12.2. CFD Trading does not give you any right to the underlying
            instrument of the Transaction. This means that you do not have any
            interests in, or the right to purchase, any underlying shares in
            relation to such instruments because the CFDs represent a notional
            value only.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2.3. The Client acknowledges that he has read, understood and
            accepted the Company’s risk disclosure information found on the
            Company’s Website.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          3. Financial Information
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            3.1. The Company should not be held responsible for any losses that
            the Client may incur (or to a third party) due to reliance on
            inaccurate or erroneous financial information on the Website.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            3.2. The Client should verify the accuracy and reliability of the
            information on the Website and its appropriateness in comparison
            with other dependable information sources. The Company will not be
            held responsible for any allegedly caused claim, cost, loss or
            damage of any kind
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            3.3. The Client approves and accepts that any oral information given
            to him/her in respect of his Trading Account might be partial and
            unverified. The Client accepts sole risk and responsibility for any
            reliance on the aforementioned information. The Company does not
            give any warranty that pricing or other information supplied by it
            through its trading software or any other form is correct or that it
            reflects current market conditions.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          4. Processing of Trade Requests and Orders
        </h4>
        <ul className="pl-5 list-disc space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            A. The processing of a Client’s request and/or order shall be
            carried out as follows:
            <ul className="pl-5 list-disc space-y-[15px]">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                Following submission of a request/order, such request/order
                shall undergo a correctness test on the Trading Platform;
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                The request/order shall be sent from the Trading Platform to the
                server;
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                The request/order shall undergo a correctness test by the
                server;
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                The server shall then forward the results of the correctness
                test to the Trading Platform;
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                In case that the connection between the trading platform and the
                server is correct, the trading platform will receive the results
                of processing of the Client request or order by the Company.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            B. The time of the process may vary and depends on the quality of
            the communication between the Trading Platform and the server of the
            Company, as well as on the market conditions. In normal market
            conditions, the time of the process usually varies between 0–4
            seconds. In market conditions that differ from normal, the time of
            Client request/order processing can be higher than that.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            C. The server of the Company may refuse the Client’s request/order
            in the following cases:
            <ul className="pl-5 list-disc space-y-[15px]">
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                1. If there is not enough funds in the Client’s account for
                opening a new position;
                <ul className="pl-5 list-disc space-y-[15px]">
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    2. If the Client sends the request/order before the opening
                    of the trading session;
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                    3. When market conditions differ from normal, such as there
                    is significant volatility or instability in the markets, or
                    the industry as a whole, preventing us from providing our
                    services in an orderly manner, including any instances where
                    we are unable to receive data and/or we receive incorrect
                    data from our service providers.
                  </li>
                </ul>
              </li>
              <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                b. When using the trading platform, it is allowed to use only
                one tab of the browser. In case of using several tabs of the
                browser, the results of trade can be corrected and/or canceled
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        5. Quotes
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5.1. The Client acknowledges that the only reliable source of quote flow information is the main
server for customer requests. The quotes on the Trading Platform cannot serve as a reliable
source of information about the real quotes flow, as in the case of unstable connection
between the Trading Platform and the server, part of the quotes from the flow may not reach
the Trading Platform
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5.2. The graphs displayed on the Trading Platform are indicative. Thus, the Company does not
guarantee that the transaction will be made at the same prices specified on the graphs in the
Trading Platform at the time of submission of the other customer transactions.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            5.3. The price displayed on the Trading Platform is formed by the formula (Bid+Ask)/2.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          5.4. Non-market quote – the price on the Trading Platform which does not correspond to the price
on the market at this moment of time (hereinafter referred to as the “Non-market price”).
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          5.5 In case that the Company executed the Client’s request/order for Non-market quote, the
          following shall be imposed on the Company’s duty:
          <ul className="pl-5 space-y-[15px]">
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                  a. In case of position closing – correction of the financial result between incorrect
closing of the position and closing according to real market price corresponding to
the closing moment of transaction according to Non-market price.
                  </li>
                  <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
                  b. In case of position opening – the Company reserves the right to cancel the financial
result regarding such position.

                  </li>
                </ul>
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        6. Copyright

        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          6.1. Digital Smart LLC a company registered at Lighthouse Trust Nevis Ltd, Suite 1, A.L. Evelyn
Ltd Building, Main Street, Charlestown, Nevis (hereinafter “We” or “Company” or “Exnova”).
We are the controller and responsible for the data of the Client disclosed to us in order to
register for a Trading Account, Demo Account and/or to make use of any other services
offered by us through the website (hereinafter “Website”) (this term shall at all times include
Website’s desktop and mobile versions).

          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">6.2. Copyrights and Intellectual Property (IP) on the Website are the Company's property or of
third parties which have authorized the Company to use such IP on the Website and
Service(s). It is forbidden to copy, distribute, duplicate, present in public, or deliver the
copyrighted material, in whole or in part, to third parties. It is forbidden to alter, advertise,
broadcast, transfer, sell, distribute or make any commercial use of the copyrighted material,
in whole or in part, except with duly signed prior permission from the Company
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          6.3. Unless explicitly stated otherwise, any material and/or message, including without limitation,
idea, knowledge, technique, marketing plan, information, questions, answers, suggestions,
emails and comments (hereinafter – “Information”) delivered to the Company shall not be
considered the Client's confidential or proprietary right of. Consent to the Agreement will be
considered as authorization to the Company to use the entire Clients' Information (excluding
Clients' Information designated for personal identification), at the absolute and sole
discretion of the Company without requirement of any additional permission from the Client
and/or the payment of any compensation due to such use.

          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">6.4. The Client undertakes that any notice, message or any other material supplied by the Client
shall be appropriate and shall not harm other persons, including their proprietary rights.
Client shall refrain from uploading or sending any illegal and/or harmful and/or disturbing to
other Clients material, and is strictly forbidden from taking any action, which might damage
the Company.

          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        7. Content and Third Parties’ Websites
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          7.1. The Website might include general information, news, comments, quotes and other
information related to financial markets and/or advertising. Some information is supplied to
the Website by unaffiliated companies.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">7.2. The Company does not provide investment research. All news, comments, quotes and other
information related to financial markets published by the Company are of a
promotional/marketing nature only.

          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          7.3. The Company does not prepare, edit or promote the information/links and/or other
information provided by unaffiliated companies.


          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">7.4. The Company will not be liable for the content of any third-party websites or the actions or
omissions of their proprietors, nor for the contents of third-party advertisements and
sponsorship on those websites. The hyperlinks to other websites are provided for information
purposes only. Any Client and/or potential client uses any such links at his/her own risk.


          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        8. Processing of Client Orders to Open Positions
        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          8.1. If the amount of available funds is sufficient to open a position, the position will be opened.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">8.2. If the size of the available funds is insufficient to open a position, the position will not be
          opened.

          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          8.3. The Client’s order to open a position is processed, and the position is opened only after the
corresponding entry in the server log file. Each new position is assigned with a serial
number.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">7.4. The Company will not be liable for the content of any third-party websites or the actions or
omissions of their proprietors, nor for the contents of third-party advertisements and
sponsorship on those websites. The hyperlinks to other websites are provided for information
purposes only. Any Client and/or potential client uses any such links at his/her own risk.


          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        9. Processing of Client Orders to Close Positions
        </h4>
        <p>Closing of trading positions occurs at the current price at the trading server at the moment of closing
of the trading operation.
</p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        10. OTC Assets

        </h4>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          10.1. An OTC Asset or “over the counter” is an asset that is traded out of the regular market
          (hereinafter referred to as the “Asset”).
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">10.2. The Asset’s price is formed from data for trade requests and orders of the Clients, received
          by the Company
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          10.3. The Client acknowledges that by making trade requests and orders on such Asset, he/she
          understands the essence of the work of such an Asset and the pricing algorithm of the Asset.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">10.4. The Client acknowledges that by making trade requests and orders on such Assets, he/she
admits that the only reliable source of quoting information is the main server for the trade
orders of the Clients.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        11. Fraud
        </h4>
        <p  className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">In the event that the Company has reasonable suspicion to believe and/or comes to its attention that
the Client has acted fraudulently with regard to the subject matter of the Agreement, including
without limitation to the following occurrences:
</p>
        <ul className="pl-5 list-disc space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> Fraud associated with credit card transactions and other ways to fill a balance that
          does not belong to the Client;
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Fraud associated with the use of software for false trading results;

          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Fraud associated with errors and system failures for false trading results,

          </li>
        </ul>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">The Company shall be entitled to block the Client's account without prior notice and without the
possibility of further money withdrawal, and/or entitled to unilaterally terminate the Agreement in the
extrajudicial procedure.
</p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        12. Benefits
        </h4>
        <p  className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">The Company may provide benefits to clients, including but not limited to, VIP status, tournaments
and/or other privileges (“Benefits”), at its absolute discretion and subject to fulfilling the required
conditions.

</p>
<p  className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">The Client acknowledges and accepts:
</p>
        <ul className="pl-5 list-disc space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">  12.1. The Company reserves the right, without prior notification, to amend or cancel any of the
Benefits provided at any time for any reason;

          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> 12.2. Conditions are subject to change at any time and may vary depending on each region;


          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> 12.3. It is prohibited to abuse any of the privileges provided by the Company (e.g. creating multiple
trading accounts to claim these Benefits);


          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> 12.4. The client may submit a request to support@exnova.com to stop receiving such Benefits at
          any time
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        13. Foreign Exchange
        </h4>
        <ul className="pl-5  space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">  13.1. For any conversion required to be effected from one currency to another for the execution of
any order, the Company is entitled at its absolute discretion to debit the Client’s Trading
Account with the equivalent amount of the transaction in the currency in which the Client
holds the Trading Account.


          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> 13.2. The Client acknowledges and agrees that he shall undertake all risks deriving from any such
conversion and, in particular, the risk of loss which may be incurred as a result of the
fluctuation in the exchange rates.


          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        14. Boom Options / Volatility Index
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">By using this product, the Client agrees and acknowledges to the following:</p>
        <ul className="pl-5  space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">  13.1. The round is generated randomly, and the expiration time can vary from 0.1 to 60
seconds. To ensure fairness and equal chances for all Clients, the Boom Option
algorithm determines the deal specification before the round starts. These
specifications can be decrypted by Clients after the round expires.

          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> 13.2. To receive a payout, the Client shall (a) accurately predict whether the starting point
of the round will expire 'higher' or 'lower', and (b) close the deal before the expiration
time.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> 13.3. The“auto mode”, automates the opening of the deals on a continuous basis at the
beginning of each round and automatically closes transactions when the
predetermined take profit percentage is reached. The Client retains the right to opt
out and disable the auto mode functionality on the platform at any time.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> 13.4. The Client may close the deal only under the following conditions: (a) before the
round starts, and (b) before the expiration of the round, provided that the deal is in a
profitable state.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TermsofService;
