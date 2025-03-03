import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RiskDisclosure() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] space-y-[30px] mx-auto py-[130px] pb-[50px]">
      <div className="space-y-[10px]">
        <h3 className="2xl:text-[30px] pb-[10px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]">
          Risk Disclosure
        </h3>
        <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
          Before you (our client and/or prospective client) apply for a trading
          account with the Company and begin trading on nancial markets, please
          review carefully the below list of risks in conjunction with the Terms
          & Conditions.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          Risk Warning
        </h4>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          The nancial products offered by the Company, including Contracts for
          Difference (‘CFDs’) are complex nancial products, most of which have
          no set maturity date. Therefore, a CFD position matures on the date
          you choose to close an existing open position. Trading CFDs carries a
          high level of risk since the multiplier tool (leverage) can work both
          to your advantage and disadvantage. As a result, it may not be
          suitable for all investors because you may lose all your invested
          capital. You should not risk more capital than you are prepared to
          lose. Before trading you should understand the risks involved and take
          into account your level of experience. You should seek independent
          advice if necessary.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          Introduction
        </h4>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          This Risk Disclosure is intended to inform you of the general risks
          that exist in trading activities on our website and of dealing in the
          Financial Instruments offered by the Company. You must recognize that
          these risks entail a chance of losing money while trading. This
          disclosure is informational and must not be considered a list of all
          possible risks.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          Trading in the Financial Instruments offered through this website is
          VERY SPECULATIVE AND HIGHLY RISKY and may involve a risk of loss of
          all your investments. The products offered by the Company are
          categorized as high-risk complex Financial Instruments and are not
          suitable for all members of the general public but only for those
          investors who:
        </p>
        <ul className="pl-8 list-decimal space-y-[15px]">
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            are willing to assume the economic, legal and other risks involved.
            You should be aware of the risks inherent in trading in these
            Financial Instruments and be able to bear such risks
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            are able to assume nancially the loss of their entire investment
            amount taking into consideration their personal nances, including
            resources and obligations.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            possess the appropriate level of experience and/or knowledge in the
            specic Financial Instruments offered by the Company. It is important
            for you to ensure that any decision to engage in trading CFDs and
            other products offered by the Company, is made on an informed basis,
            and that you understand the nature of the CFDs/products offered and
            the extent of all the risks associated with CFDs and other products
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            Please note that CFDs are leveraged nancial products and therefore
            as such, trading in CFDs using the Company’s ‘multiplier’ (leverage)
            tool involves high risk of loss as price movements are inuenced by
            the amount of multiplier (leverage) used. For more information,
            please refer to the Company’s Order Execution Policy.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          1. Risks Associated with Trading in Financial Instruments
        </h4>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          The Financial Instruments offered by the Company derive their value
          from the performance of the underlying assets/markets. It is important
          therefore that you understand the risks associated with trading in the
          relevant underlying asset/market because movements in the performance
          of the underlying asset/ market will affect the protability of your
          trade.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          Information on the previous performance of Financial Instruments does
          not guarantee the same circumstances of its current and/or future
          performance. The use of historical data does not lead to a safe
          forecast.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          Trading in the Financial Instruments offered by the Company can put
          your capital at risk. These Financial Instruments are categorized as
          high risk complex products and you may lose all or part of the amount
          invested. Trading in the Financial Instruments offered by the Company
          is not suitable for all categories of investors. Your investment
          decisions are subject to various markets, currency, economic,
          political, business risks etc., and will not necessarily be protable.
          You acknowledge, and without any reservation accept, that the value of
          any investment in a Financial Instrument may vary either upwards or
          downwards. You acknowledge, and without any reservation accept, the
          existence of a substantial risk of incurring losses and damages as a
          result of the buying or selling of any Financial Instrument offered by
          the Company and acknowledge your intent to take such risk.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          The Company will not provide you with any investment recommendations
          or with any advice that is directly or indirectly connected with the
          trading of Financial Instruments and you acknowledge that the services
          provided by us do not include investment advice. This includes
          guidance in relation to underlying assets, the market or specic
          trading strategies.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          You should note that the Company may provide you, from time to time,
          with useful information about relatable subjects created by third
          parties BUT the Company does not approve or endorse this information
          and/or these tools. Such information may be indicative of trading
          trends or trading opportunities and it should be understood that, by
          taking any actions as a result of this information/tools, you accept
          and understand that it can cause loss of all your capital. We don’t
          accept liability for any such losses resulting from actions taken by
          you based on information and or tools produced by third parties.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          The Company may also provide, at its discretion, information, news,
          market commentary or any other information through its website, agents
          or platform but when it does so, it is understood that the information
          is provided solely to enable you to make your own investment decisions
          and does not amount to investment advice. You accept that you are
          solely responsible for the trades you make and that any transaction
          you enter into is done so based on your own judgment.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          <span className="font-[600]">Market Risk:</span> Due to the high
          volatility of the Market, prices of most Financial Instruments traded
          can vary considerably over the course of a day, which may bring you
          prot as well as loss. Those Financial Instruments with volatile price
          movements should be carefully considered as there are higher risks of
          loss. Prices may uctuate due to changes in market conditions which is
          beyond your control and that of the Company and it may not be possible
          for trades to be executed at the declared prices resulting in losses.
          The volatility of the market can be affected by, but is not limited
          to, changes in the supply & demand, national & international policy,
          geopolitical instability and economical/political events or
          announcements.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          <span className="font-[600]">Liquidity Risk:</span> This is the
          nancial risk that for a certain period of time an underlying asset
          cannot be traded quickly enough in the market without impacting the
          market price. You must acknowledge that some products offered by the
          Company may suffer from liquidity strains due to adverse market
          conditions, and as such, the asset may be volatile and have a higher
          degree of risk. The volatility may be reected in a larger spread
          between the ASK and BID prices, resulting in a change in the price of
          the product.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          <span className="font-[600]">OTC/Counterparty Risk: </span> Financial
          Instruments offered by the Company are Over-the- counter (OTC) or
          off-exchange traded. This means the trading is done directly between
          two parties, without any supervision of an exchange. The Company sets
          the conditions for trading according to its obligations to provide
          best execution for our clients.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          OTC/Counterparty risk is the risk that, as there is no exchange
          market, the derivative transaction may not be closed out of an Open
          position. Prices quoted are established by dealers which consequently
          make it dicult to ensure fair pricing to assess exposure to risk.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          <span className="font-[600]">Foreign Exchange Risk: </span> If a
          Financial Instrument is traded in a currency other than the currency
          of your account, changes in exchange rate may affect the value of the
          transaction negatively resulting in nancial losses.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          2. Risks associated with trading in CFDs on cryptocurrencies
        </h4>
        <ul className="pl-8 space-y-[15px]">
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            2.1 The CFDs on Cryptocurrency Services are not suitable for all
            investors. The CFDs on Cryptocurrency Services are highly complex
            and as such Clients must always make sure that are fully aware and
            understand the specic characteristics and risks regarding the said
            CFDs on Cryptocurrency Services and have extensive knowledge and/or
            expertise of the CFDs on Cryptocurrency Services and of the
            underlying assets of the nancial instruments offered by the CFDs on
            Cryptocurrency Services.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            22. Trading on nancial instruments offered by the CFDs on
            Cryptocurrency Services carries a high risk of losing all your
            invested capital in your trading account and/or in a specic trade.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            2.3 Trading prices of the nancial instruments and underlying assets
            offered by the CFDs on Cryptocurrency Services carry high volatility
            and thereby can widely uctuate or become temporarily or permanently
            unavailable, therefore Clients should trade carefully and only with
            funds that they can afford to lose.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            2.4 The nature of Cryptocurrencies may lead to an increased risk of
            fraud or cyber-attack, and may mean that technological diculties
            experienced by the Company may prevent the access to or use of the
            CFDs on Cryptocurrency Services.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            2.5 The nancial instruments offered by the CFDs on Cryptocurrency
            Services have specic distinct risks from nancial instruments offered
            by the Company with underlying assets, currencies or commodities.
            Unlike most currencies, which are backed by governments or other
            legal entities, or by commodities such as gold or silver,
            Cryptocurrencies are a unique kind of currencies, backed by
            technology and trust. There is no central bank that can take
            corrective measures to protect the value of Cryptocurrencies in a
            crisis or issue more currency.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          3. Technical Risks
        </h4>
        <ul className="pl-8 space-y-[15px]">
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            3.1 We are not responsible for nancial losses arising from failure,
            malfunction, interruption, disconnection or malicious actions of
            information, communication, electricity, electronic or other
            systems, which are not the result of gross negligence or willful
            default of the Company.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            3.2 When working with the client terminal, you assume the risks
            arising from:
            <ul className="pl-8  space-y-[15px]">
              <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
                3.2.1. Failures in your equipment, software, and connection;
              </li>
              <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
                3.2.2. Errors in your client terminal settings;
              </li>
              <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
                3.2.3. Failure to update your version of the client terminal in
                a timely manner;
              </li>
              <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
                3.2.4. Your failure to follow the instructions for using the
                client terminal. We are not responsible for errors that occur in
                the operation of the client terminal and will not compensate for
                losses resulting from errors in the operation of the client
                terminal. <br />
                You must understand that any third-party attacks against the
                Company’s Systems which result in disruption of services or loss
                of funds, are not the responsibility of the Company and any
                liability for resulting losses will not be compensated by the
                Company.
                <br />
                The Company ensures to take all reasonable measures to deect
                such attacks and provide you with a secure and smooth trading
                experience.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            3.3 You must understand that when concluding transactions over the
            phone, you may encounter diculty getting through to an operator,
            especially during peak times. It should be noted that currently, the
            Company does not accept orders over the phone.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            3.4 You must understand that the unencrypted information transmitted
            by e-mail is not protected from any unauthorized access.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            3.5 You may suffer nancial losses caused by the materialization of
            the above-mentioned risks, and you understand that you shall be
            responsible for all related losses that you may suffer, assuming
            that these are not owed to the Company’s gross negligence or willful
            default.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          4. Abnormal Market Risks
        </h4>
        <ul className="pl-8 space-y-[15px]">
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            4.1 You agree that if market conditions become abnormal the amount
            of time required to process your orders and/or instructions may
            increase. Additionally, you agree that orders may not be executed at
            declared prices and there is a chance that they may not be executed
            at all.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            4.2 Abnormal market conditions include but are not limited to: times
            of rapid price movements, rises or falls in the same trading session
            to such an extent that, under the rules of the relevant exchange,
            trading is suspended or restricted, or there is lack of liquidity,
            or this may occur at the opening of trading sessions.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          5. Risks Associated With the Laws Of Certain Governments
        </h4>
        <ul className="pl-8 space-y-[15px]">
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            5.1 You also assume responsibility for trading and non-trading
            operations performed within countries where they are restricted or
            prohibited by law
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            5.2 Laws regarding nancial trading and contracts may be different
            throughout the world. It is your obligation to make certain that the
            use of our services is fully compliant with any law, regulation or
            directive applicable in your country of residence.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            5.3 The ability to access our website or any related website found
            from a link on our website does not mean that our services or any
            related activities are legal under the laws of your country of
            residence. These services should not be used by anyone in any
            jurisdiction in which these services are not authorized or unlawful.
            All users are required and responsible to check trading regulations
            related directly or indirectly to the Financial Instruments offered
            by the Company in their respective countries before registering at
            our trading platform.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          6. Risks Associated With the Trading Platform
        </h4>
        <ul className="pl-8  space-y-[15px]">
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            6.1 All of your instructions are sent to our server and executed in
            order. Therefore, you cannot send a second order until your previous
            order has been executed. If a second order is received before the
            rst is processed, the second order will be rejected. You assume
            responsibility for any unplanned trading operation that may be
            executed if you re-submit an order before being notied of the
            results of the rst order.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            6.2 You must understand that closing the order window or position
            window does not cancel a submitted order.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            6.3 You acknowledge that only the quotes received from our server
            are authoritative. If there is a problem in the connection between
            your client terminal and our server, you can retrieve undelivered
            quote data from the client terminal's quote database.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          7. Communication Risks
        </h4>
        <ul className="pl-8 space-y-[15px]">
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            7.1 You must be aware of the risk that information sent via
            unencrypted email may be accessed by unauthorized parties.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            7.2 We are not responsible for nancial losses arising from delayed
            or failed receipt of a Company message.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            7.3 You are responsible for the security of the credentials for your
            Personal Area and trading accounts as well as the condential
            information that we send you. We are not responsible for nancial
            losses arising from your disclosure of this information to third
            parties.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          8. Force Majeure Events
        </h4>
        <ul className="pl-8 space-y-[15px]">
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            We are not responsible for nancial losses arising from force
            majeure events. These events are extreme and irresistible
            circumstances that are independent of the will and actions of the
            agreement participants, that cannot be foreseen, prevented, or
            eliminated, including but not limited to natural disasters, res,
            man-made accidents and disasters, emergencies at utility works and
            on utility lines, DDOS attacks, riots, military actions, terrorist
            attacks, uprisings, civil unrest, strikes, and the regulatory acts
            of state- and local government authorities.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          9. Third Party Risks
        </h4>
        <ul className="pl-8 space-y-[15px]">
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            9.1 It is understood that we will promptly place all funds received
            from clients into one or more segregated account(s) (denoted as
            ‘clients’ accounts’) with reliable nancial institutions, such as a
            credit institution or a bank. It should be noted that, whilst we
            shall exercise due skill, care and diligence (in accordance with
            applicable laws) when selecting the nancial institution in which
            your funds will be placed, the Company is unable to accept liability
            and responsibility for circumstances beyond our control and as such
            do not accept any liability or responsibility for any resulting
            losses to you as a result of the insolvency or any other comparable
            proceedings or failure of the nancial institution where your money
            will be held.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            9.2 The nancial institution, to which we will pass your money, may
            hold it in an omnibus account. Hence, in the event of the insolvency
            or any other comparable proceedings in relation to that nancial
            institution, we may only have an unsecured claim against the nancial
            institution on your behalf, and you will be exposed to the risk that
            the money received by us from the nancial institution is insucient
            to satisfy your claims.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            9.3 It is understood that we execute your orders on an own account
            basis, i.e. as principal to principal against you; we are the
            counterparty of all your transactions. For more information please
            refer to our Order Execution Policy.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          10. Conicts of Interest
        </h4>
        <ul className="pl-8  space-y-[15px]">
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            10.1 When we deal with you as a client, our associates, relevant
            persons or some other persons connected with us may have an
            interest, relationship or arrangement that is in conict with your
            interest as our client.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            {" "}
            10.2 Continuing from the above point, the following occurrences may
            give rise to a conict of interest entailing a material risk of
            damage to the interests of one or more clients, as a result of
            providing investment services:
            <ul className="pl-8 space-y-[15px]">
              <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
                10.2.1. we execute your orders as a principal and our revenues
                are largely generated from your trading losses;
              </li>
              <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
                10.2.2 we may pay inducements to third parties for the referral
                of new clients or clients’ trading.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          11. No Guarantees of Prot
        </h4>
        <ul className="pl-8 space-y-[15px]">
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            We are unable to:
            <ul className="pl-8 space-y-[15px]">
              <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
                11.1. provide guarantees of prot or of avoiding losses when
                you trade in the Financial Instruments offered by the Company
              </li>
              <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
                11.2. provide guarantees of the future performance of your
                trading account.
              </li>
              <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
                11.3. provide guarantees of any specic level of performance or
                guarantee that your investment decisions/strategies will yield
                prot or nancial gain.
              </li>
              <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
                11.4. You receive no such guarantees from us or from any of
                our aliates or representatives.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RiskDisclosure;
