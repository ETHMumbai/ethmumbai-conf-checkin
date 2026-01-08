// app/page.tsx
import type { Metadata } from "next";
import LandingPage from "./pages/LandingPage";

export const metadata: Metadata = {
  title: "ETHMumbai 2026 | Conference & Hackathon",
  description:
    "ETHMumbai is an Ethereum-focused conference & hackathon happening in Mumbai from 12–15 March 2026.",
};

export default function Home() {
  return <LandingPage />;
}
