"use client";

import dynamic from "next/dynamic";
import { Ticket } from "./types";
import { useRouter } from "next/navigation";
import { fetchActiveTicket } from "@/lib/tickets";
import { useRef, useEffect, useState } from "react";

/* Daimo */
export const DaimoPayButtonCustom = dynamic(
  () => import("@daimo/pay").then((m) => m.DaimoPayButton.Custom),
  { ssr: false }
);

interface PaymentButtonsProps {
  orderId: string;
  payId: string;
  quantity: number;
  loadingINR: boolean;
  loadingCrypto: boolean;
  checkoutValid: boolean;
  handlePayWithCrypto: (e: React.MouseEvent) => void;
  handlePayWithRazorpay: () => void;
}

const isValidPayId = (payId: string) =>
  typeof payId === "string" && payId.length > 2 && payId !== "0x";

const PaymentButtons: React.FC<PaymentButtonsProps> = ({
  orderId,
  payId,
  quantity,
  loadingINR,
  loadingCrypto,
  checkoutValid,
  handlePayWithCrypto,
  handlePayWithRazorpay,
}) => {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [activeTicket, setActiveTicket] = useState<Ticket | null>(null);

  /* -------------------------------
     Fetch active ticket on mount
  -------------------------------- */
  useEffect(() => {
    const loadTicket = async () => {
      try {
        const ticket = await fetchActiveTicket();
        setActiveTicket(ticket || null);
      } catch (err) {
        console.error("Failed to fetch active ticket:", err);
      }
    };
    loadTicket();
  }, []);

  // ---------------- Sold out logic ----------------
const soldOut =
  !activeTicket || activeTicket.remainingQuantity <= 0;


  const hasValidPayId = isValidPayId(payId);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 py-4 mt-6">
      {/* ================= Crypto ================= */}
      <div
        ref={wrapperRef}
        onClick={checkoutValid && !soldOut ? handlePayWithCrypto : undefined}
        style={{
          position: "relative",
          display: "inline-block",
          cursor: checkoutValid && !soldOut ? "pointer" : "not-allowed",
        }}
        aria-busy={loading}
      >
        {loading && !payId && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              fontSize: 14,
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(2px)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            Creating order…
          </div>
        )}

        <DaimoPayButtonCustom
          payId={checkoutValid && hasValidPayId && !soldOut ? payId : ""}
          onPaymentCompleted={async () => {
            try {
              setLoading(true);

              const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/payments/verify`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    paymentType: "DAIMO",
                    paymentId: payId,
                  }),
                }
              );

              if (!res.ok) throw new Error("Payment verification failed");

              // Re-check active ticket before redirect
              const latestTicket = await fetchActiveTicket();
              if (!latestTicket || latestTicket.remainingQuantity <= 0) {
                alert("Tickets are sold out.");
                return;
              }

              router.replace(`/conference/payment-success?orderId=${orderId}`);
            } catch (err) {
              console.error("Error verifying Daimo payment:", err);
            } finally {
              setLoading(false);
            }
          }}
          closeOnSuccess
        >
          {({ show }) => (
            <button
              onClick={() => {
                if (!checkoutValid || soldOut) {
                  document
                    .querySelector(".input-error")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  return;
                }

                if (loading) return;

                show();
              }}
              className={`w-full px-4 bg-black text-white py-3 rounded-lg ${
                checkoutValid && !loading && !soldOut
                  ? "hover:bg-gray-800 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              {soldOut ? "Sold Out" : "Pay with Crypto"}
            </button>
          )}
        </DaimoPayButtonCustom>
      </div>

      {/* ================= INR ================= */}
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          disabled
          onClick={handlePayWithRazorpay}
          className="w-full inline-flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg cursor-not-allowed disabled:opacity-50 whitespace-nowrap"
        >
          {soldOut
            ? "Sold Out"
            : loadingINR
            ? "Creating INR order…"
            : "INR Coming Soon"}
        </button>
      </div>
    </div>
  );
};

export default PaymentButtons;
