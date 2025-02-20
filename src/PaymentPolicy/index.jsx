import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PaymentPolicy() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] space-y-[30px] mx-auto pt-[120px] pb-[50px]">
      <div className="space-y-[10px]">
        <h3 className="2xl:text-[30px] pb-[25px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]">
          Payment Policy
        </h3>
        <h3 className="2xl:text-[20px] pb-[10px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] font-[700] leading-[130%]">
          1. Payment Policy
        </h3>
        <ul className="pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.1. The Company is financially responsible for the Client's account
            balance at any moment
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.2. The Company’s financial responsibility starts with the first
            record about the Client’s deposit and continues up to the full
            withdrawal of the funds.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.3. The Client has the right to demand from the Company any amount
            of funds which is available in their account at the time of the
            inquiry
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.4. The only official deposit/withdrawal methods are the methods
            that appear on the Company’s official Website. The Client is taking
            all the risks related to the use of the payment methods unless these
            payment methods are provided by the Company’s partners or are the
            Company’s responsibility. The Company isn’t responsible for any
            delay or cancellation of financial transactions that may be caused
            by the selected payment system. In case where the Client has any
            claims related to any of the payment systems, it’s their
            responsibility to contact the support service of the payment system
            and to notify the Company of their claims.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.5. The Company shall not be responsible for the activities of any
            third-party service providers that the Client may use in order to
            make any deposit/withdrawal. The Company’s financial responsibility
            for the Client’s funds starts when the funds arrive to the Company’s
            bank account or any other account related to the Company and this
            fact appears on the Payment Methods page of the Website. In case any
            fraud appears during the financial transaction or after it, the
            Company reserves the right to cancel the transaction and to freeze
            the Client's account.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.6. The Company’s responsibility as to the Client’s funds ends when
            the funds leave the Company’s bank account or any other account
            related to the Company and this fact appears on the Payment Methods
            page of the Website.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            1.7. In case of any technical errors that may appear when processing
            the financial transaction, the Company reserves the right to cancel
            that transaction and all other Client’s financial activity on the
            Company’s Website.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          2. Client’s Registration
        </h4>
        <ul className=" pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2.1. Client’s registration procedure is based on two main steps:
            <ul className="pl-8">
              <li className=" list-disc 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400]">
                1.1. Client’s web registration
              </li>
              <li className=" list-disc 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400]">
                1.2. Client’s identity verification
              </li>
            </ul>
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2.2. To complete the first step, the Client must:
            <ul className="pl-8">
              <li className=" list-disc 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400]">
                2.1. Provide the Company their real identity and contact
                details.
              </li>
              <li className=" list-disc 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400]">
                2.2. Accept the Company’s agreement and submit an application.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2.3. To complete the first step, the Client must:
            <ul className="pl-8">
              <li className=" list-disc 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400]">
                3.1. Provide a full copy of their Passport and/or (if available)
                ID card with a photo and personal details.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2.4. The Company reserves the right to demand from the Client other documents, such as paying
bills, bank confirmation, bank card scans or any other document that may be necessary
during the verification process
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            2.5. The identification process shall be completed in 10 business days since the Company's
request to identify the Client. In some cases, the Company may increase the identification
process up to 30 working days.

          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        3. Depositing Procedure
        </h4>
        <ul className=" pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          3.1. To make a deposit, the Client shall make an inquiry from their personal profile. To complete
the inquiry, the Client shall choose any of the payment methods from the list, fill in all the
required details and proceed to the payment page.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          3.2. The processing time of the inquiry depends on the selected payment method and may vary
from one method to another. The Company cannot regulate the processing time. In case of
using electronic payment methods, the transaction time can vary from seconds to days. In
case of using direct bank wire, the transaction time can be up to 45 business days.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        4. Taxes
        </h4>
        <ul className=" pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          4.1. The Company is not a tax agent and therefore shall not provide financial information on the
Client to any third parties. This information shall not be disclosed unless officially requested
by government authorities.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        5. One-Click Payments
        </h4>
        <ul className=" pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          5.1. You agree to pay for all goods and/or services or other additional services you ordered on
the Website, as well as for any additional expenses (if any), including, but not limited to, all
possible taxes, charges, etc. You bear full responsibility for timely payments on the Website.
The Payment Service Provider only facilitates payments for the amounts indicated on the
Website and it is not responsible for the payment of any additional fees/expenses by the
Website user. After you click the “Pay” button, the transaction is deemed to be irrevocably
processed and executed. After clicking the “Pay” button, you agree that you will not be
eligible to cancel the payment or request to cancel it. By placing the order on the Website,
you confirm and state that you do not violate the laws of any country. Also, by accepting
these Regulations (and/or Terms & Conditions), you, as a cardholder, confirm that you are
entitled to use the Services offered on the Website. When using the Website services, you
make a legally binding declaration that you have reached or surpassed the legal age that is
considered as such by your jurisdiction for using the Services provided on the Website. By
starting to use the Website Services, including those of specific nature, you bear legal
responsibility for violating the legislation of any country where these Services are being used
and confirm that the Payment Service Provider is not responsible for any such unlawful or
unauthorised violation. By agreeing to use the Website Services, you understand and accept
that processing of any of your payments is executed by the Payment Service Provider and
there is no statutory right of revocation of already purchased goods and/or services or any
other opportunities to cancel the payment. If you wish to reject to use Services for your next
purchases of goods and/or services or other facilities on the Website, you can do that by
using your personal account/profile on the Website. The Payment Service Provider is not
responsible for any failure to process the data related to your payment card, or for the
issuing bank’s refusal to provide authorization for the payment with your payment card. The
Payment Service Provider is not responsible for the quality, quantity, price, terms or
conditions of any goods and/or services or other facilities offered to you or purchased by
you from the Website by using your payment card. When you pay for any of the Website’s
goods and/or services, you are primarily bound by the Website Terms and Conditions. Please
note that only you, as the cardholder, are responsible for paying for all goods and/or services
you have ordered on the Website and for any additional expenses/fees that can be applied to
this payment. The Payment Service Provider acts only as the executor of the payment in the
amount stated on the Website and it is not responsible for pricing, total prices and/or total
sums. In case there is a situation when you do not agree with the terms and conditions
and/or other reasons, we ask you not to proceed with the payment and, if necessary, contact
directly the Administration/Support Team of the Website.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PaymentPolicy;
