"use client";

import Hero from "@/components/hackathon/Hero";
import Navbar from "@/components/Navbar";
import Overview from "@/components/hackathon/Overview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Judges from "@/components/hackathon/Judges";
import Bounties from "@/components/hackathon/Bounties";
import Venue from "@/components/conference/Venue";
import Icons from "@/components/hackathon/Icons";
import Tacks from "@/components/hackathon/Tracks";
import Agenda from "@/components/hackathon/Agenda";
import AnnouncementBar from "@/components/AnnouncementBar";
import Mentors from "@/components/hackathon/Mentors";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <Overview />
        <Icons
          icons={[
            { src: "/assets/hackathon/clock.svg", title: "42 Hours" },
            { src: "/assets/hackathon/trophy.svg", title: "$50K Prizes" },
            { src: "/assets/hackathon/guy.svg", title: "300 Hackers" },
          ]}
        />
        <Tacks />
        <Bounties />
        <Judges />
        <Mentors />
        {/* <Venue type="hackathon" /> */}
        <Agenda />
        <FAQ type="hackathon" />
        <Footer />
      </main>
    </div>
  );
}
