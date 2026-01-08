"use client";

import { TicketType } from "./types";

interface OrderSummaryProps {
  ticketType: TicketType | null;
  quantity: number;
  ticketPrices: Record<TicketType, number>;
  ticketPricesUSD: Record<TicketType, number>;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  ticketType,
  quantity,
  ticketPrices,
  ticketPricesUSD,
}) => {
  const pricePerTicket =
    ticketType && ticketPrices[ticketType] ? ticketPrices[ticketType] : 0;
  const total = pricePerTicket * quantity;

  const originalPricePerTicket = 2499;
  const originalPricePerTicketUSD = 27.7;

  const pricePerTicketUSD =
    ticketType && ticketPricesUSD[ticketType] ? ticketPricesUSD[ticketType] : 0;
  const totalUSD = (pricePerTicketUSD * quantity).toFixed(2);

  // Human-readable label
  const ticketLabel =
    ticketType === "earlybird"
      ? "Early Bird"
      : ticketType === "regular"
        ? "Regular"
        : ticketType === "christmas"
          ? "Christmas"
          : "—";

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-regular mb-4">Order Summary</h2>

        <div className="flex justify-between text-sm mb-2">
          <span>Ticket Type</span>
          <span>{ticketLabel}</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Price per ticket</span>
          <span>
            ₹{originalPricePerTicket} (${originalPricePerTicketUSD.toFixed(2)})
            {/* ₹{pricePerTicket} (${pricePerTicketUSD.toFixed(2)}) */}
          </span>
        </div>

        <div className="flex justify-between text-sm mb-2 text-green-600">
          <span>Discounted price per ticket (50% OFF)</span>
          <span>
            {/* ₹{originalPricePerTicket} (${originalPricePerTicketUSD.toFixed(2)}) */}
            ₹{pricePerTicket} (${pricePerTicketUSD.toFixed(2)})
          </span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Quantity</span>
          <span>{quantity}</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>
            ₹{total} (${totalUSD})
          </span>
        </div>
      </div>
      {/* {ticketType === "regular" && ( */}
      <div className="flex items-center gap-2 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-green-700">
        <span className="text-lg">😍</span>
        <span className="text-sm font-medium">
          You're saving ₹{1250 * quantity} by buying tickets at 50% OFF!
        </span>
      </div>
      {/* )} */}
    </div>
  );
};

export default OrderSummary;
