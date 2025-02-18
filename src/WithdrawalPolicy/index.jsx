import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function WithdrawalPolicy() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

  return (
    <div className="max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] space-y-[30px] mx-auto py-[130px] pb-[50px]">
      <div className="space-y-[10px]">
        <h3 className="2xl:text-[30px] pb-[10px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]">
          Withdrawal Policy
        </h3>
      </div>
      <div className="space-y-[15px]">
        <ul className="pl-8 list-disc space-y-[15px]">
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            To withdraw funds from his/her verified account, the Client shall
            submit a withdrawal request from his/her personal profile. In order
            to fill in the withdrawal request properly, the Client shall choose
            one of the withdrawal methods shown in the list and specify all the
            necessary details.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            After the Client submits a withdrawal request, such request will be
            assigned a “Requested” status. When the request is being processed,
            it has an “In Process” status. After the “In Process” status is
            assigned, the requested funds will be debited from the Client's
            account balance. After the withdrawal request is assigned a
            “Processed” status, the requested funds will be transferred to the
            payment system.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            Withdrawal requests are processed by the financial department of the
            Company one-at-a-time. The processing time is 3 business days. The
            Company reserves the right to increase the processing time; in such
            case, the Company shall notify the Client via any contact method
            specified by the Client in his/her profile.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            The Company may not process withdrawals less than the minimum amount
            set by the relevant payment provider and/or due to technical
            limitations
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
            The Company reserves the right to increase the processing time
            and/or cancel withdrawal requests submitted by the Client, without
            prior notice, during an internal risk assessment of the Client’s
            account in relation to activities which insinuates the following
            (this list is not exhaustive): <br />
            <span className="ml-5 block">
              i. Fraud; <br /> ii. Money laundering; <br /> iii. Unfair usage of the Company’s
              General Fees Policy and the Terms of the Agreement; <br /> iv. other
              activities by the Client which may indicate breach of provisions
              of the Agreement and/or the applicable law; <br /> For the purpose of the
              risk assessment, the Company shall be entitled to block the
              account immediately (without giving prior notice) and to request
              from the Client additional supporting documents as it may deem
              necessary.
            </span>
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          The Client has the right to withdraw funds only to the payment system that was used to
deposit funds to his/her account. In cases where it is technically impossible to withdraw
funds to the payment system that was used to deposit funds, an alternative payment method
shall be chosen, and the payment details shall meet the conditions specified by the Client in
his/her personal info.

          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          The Client is fully responsible for the information he/she provides to the Company through
          the withdrawal request.
          </li>
          <li className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px]  font-[400] ">
          If the Client uses a bank card for making deposits, withdrawals shall be made to this bank
card in the amounts not exceeding the amount deposited within 180 (one hundred eighty)
calendar days from the last deposit. Withdrawals to bank cards have greater priority than
other types of withdrawals.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WithdrawalPolicy;
