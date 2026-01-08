import { Ticket } from "../components/tickets/types";

export async function fetchActiveTicket(): Promise<Ticket | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/t/current`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch active ticket:", await res.text());
    return null;
  }

  const data: Ticket = await res.json();
  return data || null;
}
