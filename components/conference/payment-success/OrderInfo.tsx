"use client";

import { DownloadIcon } from "@/icons/conference/download";
import { MailIcon } from "@/icons/conference/mail";
import { RightArrowIcon } from "@/icons/conference/rightArrow";

interface OrderInfoProps {
  orderData: {
    orderId: string;
    transactionId: string;
    ticketType: string;
    quantity: number;
    paymentMethod: string;
    purchaseDate: string;
    orderFiat: number;
    totalAmount: number;
    buyerEmail: string;
  };
}

export default function OrderInfo({ orderData }: OrderInfoProps) {
  const normalizedTicketType = orderData.ticketType
    .toLowerCase()
    .replace(/\s+/g, "");

  return (
    <section className="w-full bg-[#F9FAFB] flex justify-center px-4 py-[60px]">
      <div className="w-full max-w-[832px] flex flex-col gap-[24px]">
        {/* Order Confirmation Box */}
        <div className="w-full bg-white rounded-[14px] border border-gray-200 p-[30px]">
          {/* Header with Badge */}
          <div className="flex items-center justify-between mb-[24px]">
            <h2 className="text-[16px] text-[#0A0A0A]">Order Confirmation</h2>
            <span className="bg-[#00A63E] text-white text-[12px] font-medium px-[12px] py-[4px] rounded-lg">
              confirmed
            </span>
          </div>

          {/* Order ID and Transaction ID Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {/* Order ID - DYNAMIC */}
            <div>
              <label className="text-[14px] text-[#4A5565] mb-[8px] block">
                Order ID
              </label>
              <div className="bg-[#F3F4F6] rounded-[4px] px-[16px] py-[12px]">
                <p className="text-[14px] text-black font-medium">
                  {orderData.orderId}
                </p>
              </div>
            </div>

            {/* Transaction ID - DYNAMIC */}
            {/* <div>
              <label className="text-[14px] text-[#4A5565] mb-[8px] block">
                Transaction ID
              </label>
              <div className="bg-[#F3F4F6] rounded-[4px] px-[16px] py-[12px]">
                <p className="text-[14px] text-black font-medium">
                  {orderData.transactionId}
                </p>
              </div>
            </div> */}
          </div>

          {/* Purchase Details Section */}
          <div className="mt-[30px] border-t-2 border-gray-100">
            <h3 className="text-[18px] font-medium text-black mb-[20px] mt-5">
              Purchase Details
            </h3>

            {/* Details Grid */}
            <div className="space-y-[16px]">
              {/* Ticket Type - DYNAMIC */}
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#4A5565]">Ticket Type</span>
                <span className="text-[14px] text-black font-medium">
                  {orderData.ticketType}
                </span>
              </div>

              {/* Quantity - DYNAMIC */}
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#4A5565]">Quantity</span>
                <span className="text-[14px] text-black font-medium">
                  {orderData.quantity} ticket{orderData.quantity > 1 ? "s" : ""}
                </span>
              </div>

              {/* Payment Method - DYNAMIC */}
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#4A5565]">
                  Payment Method
                </span>
                <span className="text-[14px] text-black font-medium">
                  {orderData.paymentMethod}
                </span>
              </div>

              {/* Purchase Date - DYNAMIC */}
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#4A5565]">
                  Purchase Date
                </span>
                <span className="text-[14px] text-black font-medium">
                  {new Date(orderData.purchaseDate).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Total Amount Paid - DYNAMIC */}
          <div className="mt-[32px] pt-[24px] border-t-2 border-gray-200">
            <div className="flex justify-between items-center mb-[24px]">
              <span className="text-[20px] text-black">Total Amount Paid</span>
              <span className="text-[24px] font-bold text-[#E2231A]">
                ₹{orderData.orderFiat * orderData.quantity} ($
                {orderData.totalAmount.toFixed(2)})
              </span>
            </div>

            {/* {normalizedTicketType.includes("christmas") && (
              <div className="flex items-center gap-2 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-green-700">
                <span className="text-lg">🎄</span>
                <span className="text-sm font-medium">
                  You're saving ₹{500 * orderData.quantity} with Christmas
                  Special Price.
                </span>
              </div>
            )} */}

            {/* Download Button */}
            {/* <button className="w-full bg-[#E2231A] hover:bg-[#C51F16] text-white font-medium text-[18px] py-[14px] px-[24px] rounded-xl flex items-center justify-center gap-4 transition-colors">
              <DownloadIcon />
              Download E-Ticket
            </button> */}
            {/* <div className="flex items-center gap-2 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-green-700">
              <span className="text-lg">🎉</span>
              <span className="text-sm font-medium">
                You saved ₹{900 * orderData.quantity} with Early Bird - Special Price.
              </span>
            </div> */}
          </div>
        </div>

        {/* {orderData.ticketType === "christmas" && ( */}
        <div className="flex items-center gap-2 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-green-700">
          <span className="text-lg">😍</span>
          <span className="text-sm font-medium">
            You've saved ₹{1250 * orderData.quantity} by buying tickets at 50%
            OFF!
          </span>
        </div>
        {/* )} */}

        {/* Check Your Email Box - DYNAMIC EMAIL */}
        <div className="w-full bg-[#EFF6FF] rounded-[14px] border border-[#BEDBFF] p-[30px]">
          <div className="flex gap-[20px]">
            {/* Mail Icon */}
            <div className="flex-shrink-0 mt-1">
              <MailIcon />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-[16px] font-medium text-[#1C398E] mb-[8px] tracking-[-0.15px]">
                Check Your Email
              </h3>
              <p className="text-[14px] text-[#193CB8] leading-[20px] tracking-[-0.15px]">
                A confirmation email with your e-ticket and order details has
                been sent to{" "}
                <span className="font-medium text-[#1C398E]">
                  {orderData.buyerEmail}
                </span>
                .
              </p>
              <p className="text-[14px] text-[#193CB8] leading-[20px] tracking-[-0.15px]">
                Please check your inbox and spam folder.
              </p>
            </div>
          </div>
        </div>

        {/* Back to home + view conference schedule */}
        {/* Back to home + view conference schedule */}
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-between">
          <a href="/" className="no-underline flex-1">
            <div className="w-full h-[50px] border border-gray-200 rounded-[14px] flex items-center justify-center text-[#0A0A0A] font-medium text-[14px] bg-white">
              Back to Home
            </div>
          </a>
          <a href="/tickets" className="no-underline flex-1">
            <div className="w-full h-[50px] bg-[#E2231A] rounded-[14px] flex items-center justify-center gap-2 text-white text-[14px] font-medium">
              <span className="leading-[20px] tracking-[-0.15px]">
                Buy more tickets
              </span>
              <RightArrowIcon />
            </div>
          </a>
        </div>

        {/* Contact support */}
        {/* <div className="w-full bg-white rounded-[14px] border border-gray-200 p-[30px] flex items-center flex-col gap-[24px]">
            <div className="text-[#4A5565] text-[16px] leading-[24px] tracking-[-0.31px]">Need help with your order?</div>
            <div className="text-[#E2231A] text-[14px] font-medium leading-[20px] tracking-[-0.15px]">Contact Support</div>
        </div> */}
      </div>
    </section>
  );
}
