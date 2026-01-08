"use client";

import CheckIn from "@/components/CheckIn";
import { SessionProvider } from "next-auth/react";

export default function LandingPage() {
  return (
    <>
      <section className="sr-only">
        <h1>ETHMumbai 2026</h1>
        <p>
          ETHMumbai is an Ethereum-focused conference & hackathon happening in
          Mumbai from 12–15 March 2026.
        </p>
      </section>
      <div className="flex min-h-screen flex-col bg-black font-sans">
        <main className="flex min-h-screen w-full flex-col">
          <SessionProvider>
            <CheckIn />
          </SessionProvider>
        </main>
      </div>
    </>
  );
}
