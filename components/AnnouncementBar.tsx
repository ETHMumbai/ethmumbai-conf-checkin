"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface TicketInfo {
  title: string;
  type: string;
  remainingQuantity: number;
  fiat: number;
}

export default function AnnouncementBar() {
  const [ticketInfo, setTicketInfo] = useState<TicketInfo | null>(null);

  // Fetch current ticket from backend
  const fetchTicket = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/t/current`, {
        cache: "no-store",
      });
      const data = await res.json();

      if (data && data.remainingQuantity > 0) {
        setTicketInfo({
          title: data.title,
          type: data.type,
          remainingQuantity: data.remainingQuantity,
          fiat: data.fiat,
        });
      } else {
        // Sold out, try fetching fallback ticket (earlybird)
        const fallbackRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/tickets/earlybird`,
          { cache: "no-store" }
        );
        const fallbackData = await fallbackRes.json();

        if (fallbackData && fallbackData.remainingQuantity > 0) {
          setTicketInfo({
            title: fallbackData.title,
            type: fallbackData.type,
            remainingQuantity: fallbackData.remainingQuantity,
            fiat: fallbackData.fiat,
          });
        } else {
          setTicketInfo(null);
        }
      }
    } catch (err) {
      console.error("Ticket fetch failed", err);
      setTicketInfo(null);
    }
  };

  useEffect(() => {
    fetchTicket();
    // Poll every 5 seconds to keep the ticket count updated
    const interval = setInterval(fetchTicket, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-10 w-full z-[60] bg-[#FFD600] text-black px-3 py-2 flex items-center justify-center text-center">
      <div className="flex items-center justify-center text-center">
        <span className="text-[12px] sm:text-sm md:text-base font-bold tracking-wide leading-tight sm:whitespace-nowrap">
          {ticketInfo ? (
            <>
              {ticketInfo.remainingQuantity} tickets are available at 50% OFF.{" "}
              <Link
                href="/tickets"
                className="underline underline-offset-2 hover:opacity-80 transition"
              >
                Buy now
              </Link>{" "}
              🥳
            </>
          ) : (
            " "
          )}
        </span>
        {/* <span className="text-[12px] sm:text-sm md:text-base font-bold tracking-wide leading-tight sm:whitespace-nowrap">
          {ticketInfo ? (
            ticketInfo.type === "earlybird" ? (
              <>
                {ticketInfo.remainingQuantity} {ticketInfo.title} tickets available at ₹{ticketInfo.fiat}.{" "}
                <Link
                  href="/tickets"
                  className="underline underline-offset-2 hover:opacity-80 transition"
                >
                  Buy now
                </Link>{" "}
                🤩
              </>
            ) : (
              "Earlybird tickets are sold out."
            )
          ) : (
            ""
          )}
        </span> */}
      </div>
    </div>
  );
}
