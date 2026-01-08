"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Overview from "@/components/Overview";
import Sponsors from "@/components/Sponsors";
import Partners from "@/components/Partners";
import AnnouncementBar from "@/components/AnnouncementBar";
import Speakers from "@/components/Speakers";
// import Speakers from "@/components/hackathon/Speakers";
import ClosingCTA from "@/components/ClosingCTA";

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
        <AnnouncementBar />
        <Navbar />
        <main className="flex min-h-screen w-full flex-col">
          <Hero />
          <Stats />
          <Overview />
          <Speakers/>
          <Sponsors />
          <Partners />
          <FAQ type="general"/>
          {/* <ClosingCTA /> */}
          <Footer />
        </main>
      </div>
    </>
  );
}
