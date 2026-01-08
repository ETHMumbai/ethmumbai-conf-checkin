"use client";

import Hero from "@/components/conference/Hero";
import Navbar from "@/components/Navbar";
import Overview from "@/components/conference/Overview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Speakers from "@/components/conference/Speakers";
// import Speakers from "@/components/hackathon/Speakers";
import Sponsors from "@/components/Sponsors";
import Venue from "@/components/conference/Venue";
import Agenda from "@/components/conference/Agenda";
import ClosingCTA from "@/components/ClosingCTA";
import AnnouncementBar from "@/components/AnnouncementBar";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans">
      <AnnouncementBar />
      <Navbar />
      <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <Overview />
        <Speakers/>
        <Sponsors />
        {/* <Agenda /> */}
        {/* <Venue type="conference" /> */}
        <FAQ type="conference" />
        {/* <ClosingCTA /> */}
        <Footer />
      </main>
    </div>
  );
}
