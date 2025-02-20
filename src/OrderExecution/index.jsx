import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function OrderExecution() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] space-y-[30px] mx-auto pt-[120px] pb-[50px]">
      <div className="space-y-[20px]">
        <h3 className="2xl:text-[30px] pb-[25px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]">
          Order Execution Policy
        </h3>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Digital Smart LLC</span> (hereinafter the
          Company) is required to establish and provide its Clients (as defined
          in the Agreement) and potential clients an order execution policy in
          the form of the present (hereinafter called the “Policy”) and take all
          reasonable steps to obtain the best possible result (or “best
          execution”) on behalf of Clients. <br />
          <br />
          This Policy forms part of the Company’s Terms & Conditions (the{" "}
          <span className="font-[600]">Agreement</span> or{" "}
          <span className="font-[600]">Terms and Conditions</span>). <br />
          <br />
          By opening a trading account, you acknowledge that the Financial
          Instruments (as defined below) offered by the Company are traded over
          the counter (OTC) and therefore consent to the fact that your orders
          will be executed outside a regulated exchange or multilateral trading
          facility. <br />
          <br />
          Where this Policy refers to Financial Instruments, it shall be taken
          to mean all the Company’s products (as these are listed below)
          collectively.
        </p>
        <h3 className="2xl:text-[20px] pt-[15px] pb-[10px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] font-[700] leading-[130%]">
          Scope of Application
        </h3>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          The Company is executing Clients’ orders in relation to the following
          Financial Instruments:
        </p>
        <ul className="pl-8 space-y-[15px] list-disc">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            Option contracts (i.e. Digital Options and/or Binary Options and/or
            Blitz Options and/or Trailing Options) in stocks and/or commodities
            and/or indices and/or currency pairs.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            Contracts for Differences (CFDs) on stocks, commodities, ETFs,
            currency pairs and cryptocurrencies
          </li>
        </ul>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          It is up to the Company’s sole discretion to decide which types of
          Financial Instruments to make available
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          It is understood that trades are placed with the Company via the
          online trading platform only and that the Company does not facilitate
          telephone orders or face-to-face trading, i.e. all trading activity is
          100% automated. The Company is the counterparty to clients’ trades and
          transacts with clients as principal. The Company automatically records
          all orders and allocates them in sequential order, ensuring their fair
          and prompt execution.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          The Company publishes, through its Trading Platform, the
          live-streaming prices at which the Financial Instruments offered can
          be traded.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          The Company acts as the sole Execution Venue (as defined further
          below) and as principal to the Clients’ trades. Clients’ positions are
          not transferable, and Clients can only close their positions with the
          Company.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          All information relating to executed trades is immediately available
          on your platform, and your profit and loss for an associated closed
          trade is reflected in the balance of your trading account.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          This Policy ensures compliance with the Company’s obligation to
          execute orders on terms most favorable to Clients.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          Best Execution Factors & Criteria
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          When executing Clients’ orders, the Company takes into account the
          following “Execution Factors”, in order to obtain the best possible
          result for its Clients:
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Price
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Costs
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Speed and likelihood of execution and settlement
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Size and nature
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Market conditions and variations
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Size and nature
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Market conditions and variations
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Any other consideration relevant to the execution of the order
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Price and costs will ordinarily be of high relative importance in
          obtaining the best possible results.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          However, in some circumstances, reference to the “Execution Criteria”
          may appropriately determine that Execution Factors have greater
          importance in achieving the best possible result for the Client. The
          Company shall determine the relative importance of the Execution
          Factors by taking into account the characteristics of the following
          Execution Criteria:
        </p>
        <ul className="pl-8 space-y-[15px] list-disc">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            The Client’s order
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            The Financial Instruments that are the subject of that order, and
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            TAny other Execution Venues to which that order may be directed.{" "}
          </li>
        </ul>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          For retail clients, the best possible result shall be determined in
          terms of the total consideration, representing the price of the
          Financial Instrument and the costs related to execution, which shall
          include all expenses incurred by the Client which are directly related
          to the execution of the order and any other fees paid to third parties
          involved in the execution of the order and any other fees paid to
          third parties involved in the execution of the order (if applicable).
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          It is the Company’s policy to maintain such internal procedures and
          principles in order to determine and to act for the best interest of
          its Clients and provide them with the best possible result (or “best
          execution”) when dealing with them.
        </p>
      </div>

      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          Clients Trading in Option Contracts
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Price:</span> The Company will quote one
          price at which the Client can open an order. Prices for any given
          option are calculated by reference to the BID and ASK prices of the
          relevant underlying financial instrument and can be found on the
          Company’s trading platform.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Prices are updated frequently as the limitations of technology and
          communication links allow.{" "}
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          The Company ensures that the Client will receive the best price by
          guaranteeing that the calculation of the quoted prices is made with
          reference and compared to a range of underlying price providers and
          data sources.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Please note that despite taking reasonable steps to obtain the best
          possible results for Clients, the Company is unable to guarantee, when
          executing orders, that the prices offered will be more favorable than
          prices that might be available elsewhere.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Under certain trading conditions, the Client should note that it may
          be impossible to execute an Order at their requested price. In such
          cases, the Company reserves the right to execute the Order at the
          first available price. Such instances may occur during times of high
          market volatility and price fluctuations, e.g. when the price of an
          asset rises or falls in one trading session to such an extent that,
          under the rules of the relevant exchange, trading is suspended or
          restricted. The available prices provided by the Company are
          calculated as (ASK+BID)/2, i.e. the average between the BID and ASK
          prices.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Costs:</span> No commissions or financing
          fees are charged by the Company for Option Contracts trading.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          The Company reserves the right to, at any time, apply such charges in
          the future with prior notice to the Client. Such notice may be sent
          personally to the Client and/or posted on the Company’s website.
          Should the Company at any period of time decide not to charge any
          costs, it shall not be construed as a waiver of its rights to apply
          them in the future.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Speed of Execution:</span> The Company
          executes the Client orders as a principal to principal against the
          Client, i.e. the Company is the execution venue for the execution of
          the Client’s Order. The Company strives to offer a high speed of
          execution, however, in certain circumstances, for example low internet
          speed or market volatility, the quoted price may no longer be
          representative of the underlying market price and may result in the
          Client placing his/her Order at a delay, this may result in orders
          being executed at a better or worse prevailing price offered by the
          Company.{" "}
        </p>

        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Likelihood of Execution:</span> The
          Company acts as principal and not as an agent on the Client’s behalf.
          The Company relies on its price fed providers for pricing, hence the
          execution of the Client orders shall depend on the availability of
          services of the price feed providers. Although the Company executes
          all Client orders, in some instances, it may not be possible to
          arrange an Order for execution during abnormal market conditions. This
          can occur, but is not limited to, the following examples: overnight,
          during news times, the opening of trading sessions, volatile markets
          (where prices may move significantly up or down and away from declared
          prices), where there is rapid price movement, where there is
          insufficient liquidity for the execution of the specific volume at the
          declared price or a force majeure event has occurred.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          For clarification purposes, abnormal market conditions as indicated
          above, might include situations where the underlying asset might be
          subject to split and/or reverse split; in such instances the Company,
          may decide (upon its absolute discretion) to close the client’s
          position(s) held in the referred asset with the last available price
          on the platform prior to the occurrence of the split and/or reverse
          split event, and the client will receive a notification in this regard
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          In the event where the Company is unable to proceed with an Order in
          relation to price or size or for any reason, the Order will be
          executed at the first available price or not executed at all. In
          addition, please note, that the Company is entitled, at any time and
          at its discretion, without giving any notice or explanation to the
          Client, to decline or refuse to execute any Order or request of the
          Client in circumstances explained in the Terms & Conditions.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          The Company does not accept any orders outside of the market hours of
          the relevant underlying financial instrument.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Likelihood of Settlement:</span> The
          Company shall proceed to the settlement of all transactions upon
          execution of such transactions. The Options offered by the Company do
          not involve the delivery of the underlying asset, so they are not
          settled physically as there would be, for example if the Client had
          bought Shares. All Options are cash settled.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          The Company shall proceed with the settlement of all transactions upon
          the execution and/or time of expiration of the specific transaction.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Size of Order:</span> All orders are
          placed in monetary values. The Client is able to place an order as
          long as they have enough balance in their trading account. The minimum
          size of an Order may be different for each type of Option, please
          refer to the Company’s trading platform for the value of the minimum
          size of an Order in each Option, as well as the value of the maximum
          size of a single Order.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          If the Client wishes to execute a large Order, in some cases the price
          may become less favorable. The Company reserves the right to decline
          an Order in case the size of the Order is large and cannot be filled
          by the Company.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Market Impact:</span> Some factors may
          rapidly affect the price of the underlying instrument/product from
          which the Company’s quoted price is derived, and may also affect other
          factors listed herein. The Company will take all reasonable steps to
          obtain the best possible result for its Clients.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          The Company does not consider the above list exhaustive, and the order
          in which the above factors are presented shall not be taken as a
          priority factor.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Different Types of Options:</span> The
          Company offers the following types of Options on its platform:
        </p>
        <ul className="pl-8 space-y-[15px] list-disc">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            Digital Options with multiple strike prices.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            Binary Options, Trailing Options and Blitz Options with one strike
            price (current market price).
          </li>
        </ul>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          Further information can be found on the Company’s trading platform.
        </p>
        <ul className="pl-8 space-y-[15px] list-disc">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            <span className="font-[600]">Types of Orders:</span> The Client may
            give instruction to execute or initiate a trade with the Company by
            way of a Market Order (trade request) whereby the Client gives
            instructions to immediately buy or sell at the best available price.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        Clients Trading in CFDs
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Price:</span> The price for a given contract is calculated by reference to the price of the relevant
underlying financial instrument. For any given CFD, the Company will quote two prices: the
higher price (ASK) at which the Client can buy (go long) that CFD, and the lower price (BID) at
which the Client can sell (go short) that CFD. Collectively, the ASK and BID prices are referred
to as the Company’s prices and can be found on the Company’s trading platform.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        The difference between the lower and the higher price of a given CFD is the spread.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        Prices are updated frequently as the limitations of technology and communication links allow.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        The Company ensures that the Client will receive the best price by guaranteeing that the
calculation of the quoted prices is made with reference and compared to a range of underlying
price providers and data sources.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        Please note that despite taking reasonable steps to obtain the best possible results for Clients,
the Company is unable to guarantee, when executing orders, that the prices offered will be more
favorable than prices that might be available elsewhere.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        Under certain trading conditions, the Client should note that it may be impossible to execute an
Order at their requested price. In such cases, the Company reserves the right to execute the
Order at the first available price. Such instances may occur during times of high market volatility
and price fluctuations, e.g. when the price of an asset rises or falls in one trading session to
such an extent that, under the rules of the relevant exchange, trading is suspended or restricted.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Costs:</span> In most circumstances, a spread is applied. The spread is dynamic for certain Financial
Instruments, and may take into account factors such as liquidity in external markets for the
underlying financial instrument and competitive pricing. The Company reserves the right to
charge the Client a swap fee (of up to 0.5% of the face value of the position) for keeping a
position open overnight. This swap fee can be subject to changes in the future.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        In certain circumstances (such as increased volatility or illiquidity in relation to the underlying
            market concerned) the Company reserves the right to alter the spreads offered.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">In other circumstances, Clients may be charged overnight funding premiums.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">The Company reserves the right to, at any time, apply such charges in the future with prior
notice to the Client. Such notice may be sent personally to the Client and/or posted on the
Company’s website. Should the Company at any period of time decide not to charge any costs,
it shall not be construed as a waiver of its rights to apply them in the future.
</p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Speed of Execution:</span> The Company executes the Client orders in CFDs as a principal to
principal against the Client, i.e. the Company is the execution venue for the execution of the
Client’s Order. The Company strives to offer a high speed of execution, however, in certain
circumstances, for example low internet speed or market volatility, the quoted price may no
longer be representative of the underlying market price and may result in the Client placing
his/her Order at a delay, this may result in orders being executed at a better or worse prevailing
price offered by the Company.
        </p>

        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Likelihood of Execution:</span> The likelihood of execution depends on the availability of the prices of
the price feed providers of the Company. In some instances, it may not be possible to arrange
an Order for execution during abnormal market conditions. This can occur, but is not limited to,
the following examples: overnight, during news times, the opening of trading sessions, volatile
markets (where prices may move significantly up or down and away from declared prices),
where there is rapid price movement, where there is insufficient liquidity for the execution of the
specific volume at the declared price or a force majeure event has occurred.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        For clarification purposes, abnormal market conditions as indicated above, might include
situations where the underlying asset might be subject to split and/or reverse split; in such
instances the Company, may decide (upon its absolute discretion) to close the client’s
position(s) held in the referred asset with the last available price on the platform prior to the
occurrence of the split and/or reverse split event and the client will receive a notification in this
regard.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        In the event that the Company is unable to proceed with an Order in relation to price or size or
for any reason, the Order will be executed at the first available price or not executed at all. In
addition, please note, that the Company is entitled, at any time and at its discretion, without
giving any notice or explanation to the Client, to decline or refuse to execute any Order or
request of the Client in circumstances explained in the Terms & Conditions.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        The Company does not accept any orders outside of the market hours of the relevant underlying
financial instrument.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Likelihood of Settlement:</span> The Company shall proceed to the settlement of all transactions
upon execution of such transactions. The CFDs offered by the Company do not involve the
delivery of the underlying asset, so they are not settled physically as there would be for example
if the Client had bought Shares. All CFDs are cash settled.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        The Company shall proceed with the settlement of all transactions upon the execution and/or
time of expiration of the specific transaction.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Size of Order:</span> All orders are placed in monetary values. The Client is able to place an order as
long as they have enough balance in their trading account. The minimum size of an Order may
be different for each type of CFD, please refer to the Company’s trading platform for the value of
the minimum size of an Order in each CFD, as well as the value of the maximum size of a single
Order.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        If the Client wishes to execute a large Order, in some cases the price may become less
favorable. The Company reserves the right to decline an Order in case the size of the Order is
large and cannot be filled by the Company.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Market Impact:</span> Some factors may rapidly affect the price of the underlying instrument/product
from which the Company’s quoted price is derived, and may also affect other factors listed
herein. The Company will take all reasonable steps to obtain the best possible result for its
Clients.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        The Company does not consider the above list exhaustive, and the order in which the above
factors are presented shall not be taken as a priority factor.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Different Types of Options:</span> The Company offers the following types of CFDs on its platform:
        </p>
        <ul className="pl-8 space-y-[15px] list-disc">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          “Forex”: CFDs in currency pairs (FX)
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          “Stocks”: CFD in Stocks
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          “Crypto”: CFDs in Cryptocurrencies
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          ETFs
          </li>
        </ul>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> <span className="font-[600]">Types of Orders:</span> The Client may give instruction to execute or initiate a trade with the
        Company by way of:
        </p>
        <ul className="pl-8 space-y-[15px] list-disc">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Market Order: whereby the Client gives instructions to immediately buy or sell at the best
available price.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Limit Order: whereby the Client gives instruction to buy or sell at a maximum or minimum
price he specifies.
</li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        Execution Practices in CFDs
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Slippage:</span> You are warned that Slippage may occur when trading in CFDs. Slippage is the
difference between the expected price of an Order, and the price the Order is actually executed
at. In some situations, at the time an Order is presented for execution, the specific price shown
to the Client may not be available; therefore, the Order will be executed close to or a number of
pips away from the Client’s requested price.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Slippage can occur at times of low liquidity or high volatility (e.g. after economic events or news
announcements) and is a normal element of trading in CFDs.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        <span className="font-[600]">Leverage (Multiplier):</span> The use of the multiplier tool in CFD trading enables the client to trade in
the markets and increase proportionally the returns of his/her invested amount, in relation to the
returns in the market. However, the maximum loss a client can incur from a trade is limited to
his/her original investment amount, meaning the remaining amount of his/her equity is secured.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">E.g. (for long positions): A trader decides to invest €1,000 (Investment Amount) on the upwards
movement of EUR/USD. He/she also chooses to use a multiplier of 50 for this trade. After one
day, the trader decides to close the position. At that moment, the price of EUR/USD moved from
1.153250 (opening price) to 1.158000 (closing price) or otherwise 0.41188%. The realized profit
for the client will be €205.94 or otherwise 20.594%. To better understand the calculations, the
invested capital increased by the percentage move in the market multiplied by the multiplier
(0.41188% x 50 = 20.594%)
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">(Closing Price / Opening Price -1) x Multiplier x Investment Amount = Profit/Loss
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">i.e. (1.158000 / 1.153250 -1) x 50 x 1000 = 205.93973553 or €205.94
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">For short positions: i.e (1-closing price / opening price) x Multiplier x Investment Amount =
Profit/Loss
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Without the use of the multiplier tool the trader’s profit would have been 4.1187947106 or €4.12
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">In the opposite scenario, if the market had moved against his/her position, the realized losses
would have been larger with the use of the multiplier compared to a position opened without the
use of it. To demonstrate with the same example, if the market had moved 1% down from the
opening price of 1.153250, because of the use of the multiplier tool, the invested capital will
decrease by 50% (1% x 50)
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">i.e. 1% x 50 x 1000 = €500
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Without the use of the multiplier tool, the trader’s losses would have been €10
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">If the trader had used a lower multiplier, both the profit and loss amount in the examples above,
would have been smaller as well.</p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">E.g. Using a multiplier of 20, the realized profit in the first example would be (1.158000 /
1.153250 -1) x 20 x 1000 = 82.374 or €82.40 and 1% x 20 x €1,000 = €200 for the second
example.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Warning: Trading CFDs carries a high level of risk, since the multiplier tool (leverage) can work
both in your advantage and disadvantage. As a result, it may not be suitable for all investors
because you may lose all your invested capital.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          <span className="font-[600]">Maintenance Margin:</span> The Maintenance Margin is the minimum amount of equity in a position
required to maintain the open position. Should this amount fall below 5% of the initial
investment, the Company will automatically close the position.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        E.g. Using the data from the previous example with €1,000 investment in EURUSD and using a
multiplier of 50, the maintenance margin is calculated as 5% x €1,000 = €50. Therefore, the
maximum loss the trader can occur, before their position is closed by the Company, is 95% or
€950.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">The price when the position will be closed by the Company, and only if the trader hasn’t decided
to already close the position, is 1.131338. At this price, the remaining amount of the investment
will have reached the maintenance margin.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">To better understand the calculations, the return in the market when 95% of the investment
        amount will be lost is 1.9% on the downside since the position is long the EURUSD
</p>
<p>Maximum Loss / multiplier = return in market</p>
<p>i.e. 95% / 50 = 1.9%*</p>
<p>For an opening price of 1.153250, a 1.9% decline will cause the price to move to 1.131338</p>
<p>Opening Price x (1 – return in market) = price when position will be closed</p>
<p>i.e. 1.153250 x (1-1.9%) = 1.131338
</p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">*In most cases, a position will be automatically closed as soon as it declines by 95%. It can
happen that the position will be closed in a range between 95% and 100%, such situations can
occur at times of low liquidity or high volatility (e.g. after economic events or news
announcements) and is a normal element of trading in CFDs
        </p>

        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">In case of 100% loss, calculations will be like this:
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Maximum Loss / multiplier = return in market
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">i.e. 100%/50 = 2%
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">For an opening price of 1.153250, a 1.9% decline will cause the price to move to 1.130185
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Opening Price x (1 – return in market) = price when position will be closed
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">i.e. 1.153250 x (1-2%) = 1.130185
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">The Company assigns the following importance level to the Best Execution Factors:
        </p>
        <div className="max-w-[500px] border border-b-none">
            <div className="flex border-b">
               <div className="py-[10px] w-[50%] p-2"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[600] ">Best Execution Factor</h4></div>
               <div className="py-[10px] w-[50%] p-2 border-l"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[600] ">Level of Importance</h4></div>
            </div>
            <div className="flex border-b">
               <div className="py-[10px] w-[50%] p-2"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">Price</h4></div>
               <div className="py-[10px] w-[50%] p-2 border-l"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">High</h4></div>
            </div>
            <div className="flex border-b">
               <div className="py-[10px] w-[50%] p-2"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">Costs</h4></div>
               <div className="py-[10px] w-[50%] p-2 border-l"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">High</h4></div>
            </div>
            <div className="flex border-b">
               <div className="py-[10px] w-[50%] p-2"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">Speed of Execution</h4></div>
               <div className="py-[10px] w-[50%] p-2 border-l"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">High</h4></div>
            </div>
            <div className="flex border-b">
               <div className="py-[10px] w-[50%] p-2"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">Likelihood of Execution</h4></div>
               <div className="py-[10px] w-[50%] p-2 border-l"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">High</h4></div>
            </div>
            <div className="flex border-b">
               <div className="py-[10px] w-[50%] p-2"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">Likelihood of Settlement</h4></div>
               <div className="py-[10px] w-[50%] p-2 border-l"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">Medium</h4></div>
            </div>
            <div className="flex border-b">
               <div className="py-[10px] w-[50%] p-2"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">Size of Order</h4></div>
               <div className="py-[10px] w-[50%] p-2 border-l"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">Medium</h4></div>
            </div>
            <div className="flex border-b">
               <div className="py-[10px] w-[50%] p-2"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">Market Impact</h4></div>
               <div className="py-[10px] w-[50%] p-2 border-l"> <h4 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">Medium</h4></div>
            </div>
        </div>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        Execution Venues
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">For the purposes of the provisions relating to best execution, “Execution Venue” shall mean a
regulated market, multilateral trading facilities (MTF), systematic internalizers (SI), market
makers, liquidity providers or any other entity that facilitates trading of Financial Instruments. For
the purpose of this policy, it is understood that the Company is the sole Execution Venue.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">For the purposes of the provisions relating to best execution, “Execution Venue” shall mean a
regulated market, multilateral trading facilities (MTF), systematic internalizers (SI), market
makers, liquidity providers or any other entity that facilitates trading of Financial Instruments. For
the purpose of this policy, it is understood that the Company is the sole Execution Venue.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Although the Company may at its own discretion transmit your orders for execution to third-party
liquidity providers, contractually the Company is the counterparty to your trades and any
execution of orders is done in the Company’s name; therefore, the Company is the sole
Execution Venue for the execution of the clients’ orders and acts as a principal and not as an
agent on the Clients’ behalf.

        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">The client acknowledges that the transactions entered in Financial Instruments with the
Company are not undertaken on a recognized exchange.
        </p>
       
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        Specific Client Instructions
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Where the client provides the Company with specific instructions as to the execution of an
Order, the Company shall execute the Order in accordance with that specific instruction, and will
proceed in taking all reasonable steps to obtain the best possible result. It should be noted that
specific instructions may prevent the Company from following this Policy.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Where the client’s instruction relates to only part of the Order, the Company will continue to
apply its Order Execution Policy to those aspects of the Order not covered by the specific
instruction.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">Trading Hours
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Details of the opening times in relation to particular Financial Instruments are available through
the Trading Platform.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">Monitoring and Review
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">The Company will monitor on a regular basis the effectiveness of this Policy and the execution
quality of the procedures explained in this Policy, making any changes where appropriate.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">As part of the monitoring process, the Company will consider the following:
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Reconciliation of trades: As the Company executes the Client’s trades, it is the responsibility of
the Company to ensure that these orders are executed in line with this Policy. The Company
monitors all best execution factors via numerous internal controls and processes.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Price: The Company has established sound arrangements, controls and procedures in relation
to price feed monitoring by cross-checking the prices offered to its Clients with the prices offered
by the feed providers and reliant market data sources. Any price deviations are further
investigated.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">In addition, the Company will review this Policy at least once a year and will notify its clients of
any material changes (including changes to the selected Execution Venues and third-party
brokers, if applicable). Upon request, the Company will demonstrate to its Clients that it has
executed their orders in accordance with its Order Execution Policy.

        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">Client Consent
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">When establishing a business relation with the Client, the Company is required to obtain the
Client’s prior consent to this Policy.
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">The Client shall be deemed to have provided such consent to the Order Execution Policy, as in
force and as amended from time to time, by accepting the Agreement or by effecting a
transaction following the amendment of this Policy and/or the Agreement and/or receipt of the
notice of any amendment of the Order Execution Policy.
        </p>
      </div>
    </div>
  );
}

export default OrderExecution;
