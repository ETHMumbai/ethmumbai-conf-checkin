"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { TicketOption, Participant, BuyerInfo as BuyerInfoType } from "./types";

import { Ticket, TicketType } from "./types";
import TicketSelection from "./TicketSelection";
import BuyerInfo from "./BuyerInfo";
import OrderSummary from "./OrderSummary";
import PaymentButtons from "./PaymentButtons";
// import AnnouncementBar from "./AnnouncementBar"; // make sure you have this
import { fetchActiveTicket } from "@/lib/tickets";

/* ---------------- Config ---------------- */
const ticketPrices: Record<TicketType, number> = {
  christmas: 499,
  earlybird: 999,
  regular: 1249,
};

const ticketPricesUSD: Record<TicketType, number> = {
  christmas: 5.5,
  earlybird: 11,
  regular: 13.8,
};

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const ticketOptions: TicketOption[] = [
  {
    type: "earlybird",
    label: "EarlyBird",
    price: 999,
    priceUSD: 11,
    desktopImage: "/assets/tickets/earlybird-list.svg",
    mobileImage: "/assets/tickets/earlybird-sm-vertical.svg",
    comingSoon: true,
  },
  {
    type: "regular",
    label: "Regular",
    price: 1249,
    priceUSD: 13.8,
    desktopImage: "/assets/tickets/standard-list.svg",
    mobileImage: "/assets/tickets/standard-sm-vertical.svg",
    comingSoon: false,
  },
  {
    type: "christmas",
    label: "Christmas",
    price: 499,
    priceUSD: 5.5,
    desktopImage: "/assets/tickets/christmas-list.svg",
    mobileImage: "/assets/tickets/earlybird-sm-vertical.svg",
    comingSoon: true,
  },
];

/* ---------------- Razorpay Loader ---------------- */
const loadRazorpay = () =>
  new Promise<boolean>((resolve) => {
    if (document.querySelector("#razorpay-sdk")) return resolve(true);

    const script = document.createElement("script");
    script.id = "razorpay-sdk";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });

/* ---------------- Payment Page ---------------- */
const Payment = () => {
  const router = useRouter();

  /* ---------------- State ---------------- */
  const [activeTicket, setActiveTicket] = useState<Ticket | null>(null);
  const [visualTicketType, setVisualTicketType] =
    useState<TicketType>("earlybird");
  const [quantity, setQuantity] = useState(1);

  const [loadingINR, setLoadingINR] = useState(false);
  const [loadingCrypto, setLoadingCrypto] = useState(false);
  const [payId, setPayId] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const [buyerInfo, setBuyerInfo] = useState<BuyerInfoType>({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
  });

  const [participants, setParticipants] = useState<Participant[]>([
    { firstName: "", lastName: "", email: "", organisation: "", isBuyer: true },
  ]);

  const [ticketOptionsToShow, setTicketOptionsToShow] = useState<
    TicketOption[]
  >([]);

  /* ---------------- Validation ---------------- */
  const isCheckoutValid = () => {
    if (!buyerInfo.firstName) return false;
    if (!buyerInfo.email || !EMAIL_REGEX.test(buyerInfo.email)) return false;
    if (
      !buyerInfo.address.line1 ||
      !buyerInfo.address.city ||
      !buyerInfo.address.state ||
      !buyerInfo.address.country ||
      !buyerInfo.address.postalCode
    )
      return false;

    for (const p of participants) {
      if (!p.firstName) return false;
      if (!p.email || !EMAIL_REGEX.test(p.email)) return false;
    }

    if (Object.values(errors).some(Boolean)) return false;

    return true;
  };

  const checkoutValid = isCheckoutValid();

  /* ---------------- Fetch Active Ticket & Auto-Fallback ---------------- */
  useEffect(() => {
    const fetchAndUpdateTicket = async () => {
      try {
        let ticket = await fetchActiveTicket(); // returns active ticket from backend
        if (!ticket) return;

        // Auto-switch to earlybird if sold out
        if (ticket.remainingQuantity === 0 && ticket.type !== "earlybird") {
          ticket = await fetchActiveTicket();
          if (!ticket) return;
        }

        setActiveTicket(ticket);
        setVisualTicketType(ticket.type);
      } catch (err) {
        console.error("Failed to fetch active ticket:", err);
      }
    };

    fetchAndUpdateTicket();

    // Poll every 5s to update ticket availability
    const interval = setInterval(fetchAndUpdateTicket, 5000);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- Update Ticket Options ---------------- */
  useEffect(() => {
    if (!activeTicket) return;

    const activeOption = ticketOptions.find(
      (t) => t.type === activeTicket.type
    );

    const earlybirdOption = ticketOptions.find((t) => t.type === "earlybird");
    let otherOption: TicketOption | undefined;
    if (activeTicket.type === "earlybird") {
      otherOption = ticketOptions.find((t) => t.type === "regular");
    } else if (activeTicket.type === "regular") {
      otherOption = ticketOptions.find((t) => t.type !== "earlybird"); // fallback
    } else {
      otherOption = undefined;
    }

    const options: TicketOption[] = [];

    // Push EarlyBird first if it exists
    if (earlybirdOption) options.push(earlybirdOption);

    // Push the active ticket if it’s not already EarlyBird
    if (activeOption && activeOption.type !== "earlybird") {
      options.push(activeOption);
    }

    // Push the other ticket if it exists and isn’t already added
    if (otherOption && !options.includes(otherOption)) {
      options.push(otherOption);
    }

    setTicketOptionsToShow(options);
    setVisualTicketType(activeTicket.type);
  }, [activeTicket]);
  /* ---------------- Quantity Change ---------------- */
  const handleQuantityChange = (type: "inc" | "dec") => {
    if (!activeTicket) return;
    setQuantity((prevQty) => {
      let nextQty = prevQty;

      if (
        type === "inc" &&
        prevQty < Math.min(4, activeTicket.remainingQuantity)
      )
        nextQty++;
      if (type === "dec" && prevQty > 1) nextQty--;

      setParticipants((curr) => {
        const diff = nextQty - curr.length;
        if (diff > 0) {
          return [
            ...curr,
            ...Array.from({ length: diff }, () => ({
              firstName: "",
              lastName: "",
              email: "",
              organisation: "",
              isBuyer: false,
            })),
          ];
        }
        if (diff < 0) return curr.slice(0, nextQty);
        return curr;
      });

      return nextQty;
    });
  };

  /* ---------------- Buyer Handlers ---------------- */
  const handleBuyerChange = (field: string, value: string) => {
    if (field.startsWith("address.")) {
      const key = field.split(".")[1];
      setBuyerInfo((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else {
      setBuyerInfo((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleBuyerAddressChange = (
    field: keyof BuyerInfoType["address"],
    value: string
  ) => {
    setBuyerInfo((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));
  };

  const handleParticipantChange = (
    index: number,
    field: string,
    value: string
  ) => {
    setParticipants((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  /* ---------------- Validation ---------------- */
  const validateCheckout = () => {
    const e: Record<string, boolean> = {};

    if (!buyerInfo.firstName) e.firstName = true;
    if (!buyerInfo.email) e.email = true;
    if (!buyerInfo.address.line1) e["address.line1"] = true;
    if (!buyerInfo.address.city) e["address.city"] = true;
    if (!buyerInfo.address.state) e["address.state"] = true;
    if (!buyerInfo.address.country) e["address.country"] = true;
    if (!buyerInfo.address.postalCode) e["address.postalCode"] = true;

    participants.forEach((p, i) => {
      if (!p.firstName) e[`participant.${i}.firstName`] = true;
      if (!p.email) e[`participant.${i}.email`] = true;
    });

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------------- Build Payload ---------------- */
  const buildPayload = () => {
    if (!activeTicket) throw new Error("No active ticket available");

    return {
      ticketType: activeTicket.type,
      quantity,
      buyer: buyerInfo,
      participants: participants.map((p) => ({
        ...p,
        isBuyer:
          !!buyerInfo.email &&
          !!p.email &&
          buyerInfo.email.toLowerCase() === p.email.toLowerCase(),
      })),
    };
  };

  /* ---------------- Razorpay Payment ---------------- */
  const handlePayWithRazorpay = async () => {
    if (loadingINR) return;
    setLoadingINR(true);

    const loaded = await loadRazorpay();
    if (!loaded) return setLoadingINR(false);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payments/order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildPayload()),
        }
      );
      const data = await res.json();

      const rzp = new (window as any).Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount * 100,
        currency: data.currency,
        order_id: data.razorpayOrderId,
        name: "ETHMumbai",
        handler: async (resp: any) => {
          try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/verify`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(resp),
            });
          } catch (err) {
            console.error("Razorpay verification failed:", err);
          }
        },
        prefill: {
          name: `${buyerInfo.firstName} ${buyerInfo.lastName}`,
          email: buyerInfo.email,
        },
      });

      rzp.open();
    } catch (err) {
      console.error("Razorpay error:", err);
      alert("Payment failed. Check console.");
    } finally {
      setLoadingINR(false);
    }
  };

  /* ---------------- Crypto Payment ---------------- */
  const handlePayWithCrypto = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!validateCheckout() || loadingCrypto) return;

    setLoadingCrypto(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payments/create-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildPayload()),
        }
      );
      const data = await res.json();
      setPayId(data.paymentId);
      setOrderId(data.orderId);
    } catch (err) {
      console.error("Crypto payment failed:", err);
      alert("Crypto payment failed");
    } finally {
      setLoadingCrypto(false);
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <section className="w-full bg-white text-black">
      {/* <AnnouncementBar
        ticketType={activeTicket?.type ?? ""}
        remainingQuantity={activeTicket?.remainingQuantity ?? 0}
        price={activeTicket?.fiat ?? 0}
      /> */}

      <div className="px-8 sm:px-12 md:px-18 lg:px-36 xl:px-50 py-12">
        <TicketSelection
          visualTicketType={visualTicketType}
          setVisualTicketType={setVisualTicketType}
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
          ticketOptions={ticketOptionsToShow}
        />

        <BuyerInfo
          buyerInfo={buyerInfo}
          participants={participants}
          errors={errors}
          setErrors={setErrors}
          handleBuyerChange={handleBuyerChange}
          handleBuyerAddressChange={handleBuyerAddressChange}
          handleParticipantChange={handleParticipantChange}
        />

        <OrderSummary
          ticketType={activeTicket?.type ?? null}
          quantity={quantity}
          ticketPrices={ticketPrices}
          ticketPricesUSD={ticketPricesUSD}
        />

        <PaymentButtons
          payId={payId ?? ""}
          quantity={quantity}
          loadingINR={loadingINR}
          loadingCrypto={loadingCrypto}
          handlePayWithRazorpay={handlePayWithRazorpay}
          handlePayWithCrypto={handlePayWithCrypto}
          orderId={orderId ?? ""}
          checkoutValid={checkoutValid}
        />
      </div>
    </section>
  );
};

export default Payment;
