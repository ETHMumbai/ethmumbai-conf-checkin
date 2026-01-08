"use client";

import Hero from "@/components/tickets/Hero";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Payment from "@/components/tickets/Payment";
import AnnouncementBar from "@/components/AnnouncementBar";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans">
      <AnnouncementBar />
      <Navbar />
      <main className="flex min-h-screen w-full flex-col">
        <Hero />
        {/* <FAQ /> */}
        <Payment />
        <Footer />
      </main>
    </div>
  );
}
