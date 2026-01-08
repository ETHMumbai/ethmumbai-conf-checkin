// types.ts
export type TicketType = "earlybird" | "regular" | "christmas";

export interface Ticket {
  id: string;
  title: string;
  type: TicketType;
  fiat: number;
  crypto: number;
  quantity: number;
  remainingQuantity: number;
  isActive: boolean;
  priority: number;
}
export interface TicketOption {
  type: TicketType
  label: string;
  price: number; // INR
  priceUSD: number; // USD
  desktopImage: string;
  mobileImage: string;
  comingSoon: boolean;
}


export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface BuyerInfo {
  firstName: string;
  lastName?: string;
  email: string;
  organisation: string;
  address: Address;
}

export interface Participant {
  firstName: string;
  lastName?: string;
  email: string;
  organisation?: string;
  isBuyer?: boolean;
}

export interface CreateOrderPayload {
  ticketType: TicketType;
  quantity: number;
  buyer: BuyerInfo;
  participants: Participant[];
}
