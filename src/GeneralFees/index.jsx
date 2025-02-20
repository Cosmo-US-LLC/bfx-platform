import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GeneralFees() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

  return (
    <div className="max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] space-y-[30px] mx-auto py-[130px] pb-[50px]">
      <div className="space-y-[30px]">
        <h3 className="2xl:text-[30px] pb-[10px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]">
          General Fees
        </h3>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
          This document outlines all relevant fees for Digital Smart LLC (the
          “Company”). Make sure that you familiarize yourself with all costs and
          associated charges for each financial instrument offered by the
          Company, since these may affect the overall cost of a financial
          instrument as well as the cumulative effect on return of your
          investment. Also, make sure that you read the Further Information
          section at the end of this document, which sets out further
          information on the applicable fees.
        </p>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
          Any examples in the tables are for illustration purposes only.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          CFDs (Forex, ETFs, Stocks, Commodities, Indices and cryptocurrencies)
        </h2>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="">
              <th className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] text-start">Nature</th>
              <th className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] text-start">Type</th>
              <th className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] text-start">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                One-off costs
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Spread
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                The difference between the bid (sell) price and the ask (buy)
                price. The difference is presented in pips and reflects the cost
                of opening a position. Spread is dependent on many different
                factors, including, but not limited to, the underlying liquidity
                and volatility, time of day and notional trade size. For
                example, if the underlying asset/ EUR/USD is trading at 1.2029,
                our ask (buy) price might be 1.2030 and the bid (sell) price
                might be 1.2028. The spread in this example is (ask-sell price)
                = 2 pips
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Ongoing costs
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Swap fee
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                The Company reserves the right to charge the Client a swap fee
                of 0.01% – 0.5% and in extreme circumstances up to 1.7% of the
                face value of the position for keeping a position open
                overnight. The swap fee from Friday to Saturday will be 3
                (‘’three’’) times higher than the normal swap fee. The swap fee
                can be subject to changes in the future.
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Other costs
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Dormant account fees
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                In the absence of any account activity for a period of at least
                ninety (90) consecutive days, an amount of €10 (Euro ten or the
                equivalent amount in another currency on the day of deduction of
                the fee) every month in order to maintain the account, on the
                condition that the Client account has the available funds.
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[600]">
            Option contracts (Trailing Options on currency pairs and Binary
            Options, Digital Options and Blitz Options on stocks and/or
            commodities and/or indices and/or currency pairs)
          </p>
        </div>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="">
              <th className="border p-2 py-[20px] text-start 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Nature
              </th>
              <th className="border p-2 py-[20px] text-start 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Type
              </th>
              <th className="border p-2 py-[20px] text-start 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                One-off costs
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Premium
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                The premium charged to purchase options is displayed inside the
                trading interface and represents the fee to pay to buy an
                option. Such premium contains bid and ask price thus, it also
                includes spread and possible mark-up.
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Ongoing costs
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                —
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                —
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Other costs
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Dormant account fees
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                In the absence of any account activity for a period of at least
                ninety (90) consecutive days, an amount of €10 (Euro ten or the
                equivalent amount in another currency on the day of deduction of
                the fee) every month in order to maintain the account, on the
                condition that the Client account has the available funds.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="space-y-[20px]">
          <h4 className="2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-[600]">
            Further information on fees:
          </h4>
          <div className="space-y-[10px]">
            <h4 className="2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-[600]">
              1. Deposit and Withdrawal Fees
            </h4>
            <p className="pl-5 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">
              <span className="block">A.</span> The Company reserves the right
              to apply a conversion fee of up to 3% for each transaction (i.e
              deposits and withdrawals) when converting from or to your trading
              account currency and the processing currency of the payment.
            </p>
          </div>
          <div className="space-y-[10px]">
            <h4 className="2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-[600]">
              2. Withdrawal Fees
            </h4>
            <p className="pl-5 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">
              Upon the discretion of the Company, withdrawal fees shall be
              applicable in either of the following ways:
            </p>
            <p className="pl-5 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">
              <span className="block">2.1.</span> The Company may decide to impose
              a withdrawal fee of 2%-10%, where the maximum fee is 10% or the
              maximum amount presented in the below table.
            </p>
          </div>
        </div>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="">
              <th className="border p-2 py-[20px] text-start 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Currency
              </th>
              <th className="border p-2 py-[20px] text-start 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Minimum fee
              </th>
              <th className="border p-2 py-[20px] text-start 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                Maximum fee
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                RUB Russia Ruble
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                50
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                1,500
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                GBP Pound sterling
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                1
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                25
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                THB Thai baht
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                30
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                1,000
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                EUR Euro
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                1
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                30
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                BRL Brazilian Rea
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                5
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                125
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                USD United States Dollar
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                1
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                30
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                PHP Philippine peso
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                50
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                1,500
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                ZAR South African rand
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                15
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                450
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                TRY Turkish lira
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                32
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                941
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                IDR Indonesian Rupiah
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                15,000
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                450,000
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                MYR Malaysian Ringgit
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                5
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                125
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                VND Vietnamese Dong
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                25,000
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                750,000
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                CNY Chinese Yuan
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                7
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                200
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                INR Indian rupee
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                74
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                2207
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                COP Colombian peso
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                3600
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                106600
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                AED UAE Dirham
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                3.67
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                110
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                SAR Saudi Riyal
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                3.75
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                112.52
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                EGP Egyptian Pound{" "}
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                30
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                900
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                CRC Costa Rican Colon
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                550
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                16500
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                DOP Dominican Peso
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                60
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                1700
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                HKD Hong Kong Dolla
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                8
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                240
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                KRW Won
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                1300
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                39000
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                MAD Moroccan Dirham
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                11
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                310
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                NGN Naira
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                1590
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                47620
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                QAR Qatari Rial
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                4
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                110
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                TWD New Taiwan Dolla
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                30
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                910
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                MXN Mexican Peso
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                21
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                620
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                SGD Singapore Dollar
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                1.50
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                43
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                PEN Sol
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                4
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                114
              </td>
            </tr>
            <tr>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                CLP Chilean Peso
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                1000
              </td>
              <td className="border p-2 py-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400]">
                30000
              </td>
            </tr>
          </tbody>
        </table>
        <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">
        2.2. b. In the event that the Client makes any deposits with the Company
          and proceeds to withdraw all or more than 80% of the total amount
          deposited without proceeding to any placement of a trade (Behavior),
          then the Company shall have the right, but not the obligation, to
          withhold, during a withdrawal request, an amount equivalent to the
          fees incurred by the Company in connection with such deposit and
          withdrawal. Such fees relate to the fees applicable by any payment
          service providers and/or any other third parties against the Company
          in relation to the execution of such deposit/withdrawal transactions.
          The Company may reasonably assume in the event of such Behavior that
          the Client contracted with the Company with an intention to defraud
          the Company.
        </p>
        <div className="space-y-[10px]">
            <h4 className="2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-[600]">
            3. Dormant Account Fees
            </h4>
            <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">
            An account that has no trading and/or financial activity performed (i.e. deposit, and/or new
trading operation and/or trading operation that has remained open) for a period of 90 days shall
be considered to be dormant and/or inactive. Furthermore, logging in and out of the trading
account is not considered to be account activity
            </p>
            <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">The administration fee shall be deducted from the Client’s account on the 90th calendar day of
inactivity when the account is considered dormant. Further to this, each month the Company will
consider the activity over the past 90 days in determining if the administrative fee will be
charged again.
            </p>
            <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">The Company strives to ensure and keep correspondence with each respective Client and will
inform the Client by email that their account will be treated as a Dormant Account.

            </p>
            <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">If the Client account does not have the necessary funds for the administration fee, the Company
reserves the right to charge a lower amount to cover administrative expenses and close the
account completely.
            </p>
            <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">All the amounts of the fees and other expenses are stated without any taxes and charges that
            may be imposed on the mentioned fees either from the side of the Client or the Company
            </p>
          </div>
          <div className="space-y-[10px]">
            <h4 className="2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-[600]">
            4. Underage account closure fee
            </h4>
            <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">The Company shall be entitled to charge the client an administrative fee of 20 USD (“twenty
dollars”) for the closure of their account, where it has been identified that the client has not
reached the age of maturity in the country, which the client is a citizen of or resides in
            </p>
            <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">In case the remaining balance is less than 20 USD (“twenty dollars”), the Company shall reserve
the right to charge up to 20 USD (“twenty dollars”) from the client’s account.

            </p>
            
          </div>
          <div className="space-y-[10px]">
            <h4 className="2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-[600]">
            5. Document Fraud Fee
            </h4>
            <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">The Company shall be entitled to charge the client an administrative fee of 20 USD (“twenty
dollars”) where it has been identified that the client has not provided accurate, complete and
true information about himself and/or the information and/or documents submitted to the
Company are inauthentic and/or the client attempts to bypass any verification procedure by
using fraudulent means).
            </p>
            <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">In case the remaining balance is less than 20 USD (“twenty dollars”), the Company shall reserve
            the right to charge a lower amount from the client’s account
            </p>
            <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]   font-[400] flex">The administrative fee, among others, represents an approximate and reasonable cost of the
Company in such circumstances, including time spent for communication and/or actions that
must be taken.
            </p>
            
            
          </div>
      </div>
    </div>
  );
}

export default GeneralFees;
