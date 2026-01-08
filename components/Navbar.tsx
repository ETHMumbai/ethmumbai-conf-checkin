"use client";

import { useState, useEffect } from "react";
 import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import TwitterLogo from "../public/assets/x-logo.png";
import TwitterWhite from "../public/assets/x-white.png";
import FarcasterLogo from "../public/assets/farcaster-logo.png";
import FarcasterWhite from "../public/assets/farcaster-white.png";
import TelegramLogo from "../public/assets/telegram-logo.png";
import TelegramWhite from "../public/assets/telegram-white.png";
import EthMumbaiLogo from "../public/assets/ethmumbai-logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-10 left-0 w-full h-16 bg-white/80 border-b border-gray-200 backdrop-blur-md z-50 box-border">
      <div className="relative mx-auto flex items-center justify-between h-full px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link href="/">
          <Image src={EthMumbaiLogo} alt="ETHMumbai Logo" width={128} height={40} />
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base absolute left-1/2 -translate-x-1/2 font-medium text-gray-800">
          <Link href="/conference" className="hover:text-black transition">
            Conference
          </Link>
          <Link href="/hackathon" className="hover:text-black transition">
            Hackathon
          </Link>
          <Link href="/tickets" className="hover:text-black transition">
            Buy Tickets
          </Link>
        </div>

        {/* Socials (desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            {/* Twitter */}
            {/* <a
              href="https://x.com/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
                border-2 border-transparent transition-all duration-300 ease-in-out
                hover:bg-white hover:border-[#E2231A]"
            >
              <Image src={TwitterWhite} alt="Twitter" width={20} height={20} className="block group-hover:hidden" />
              <Image src={TwitterLogo} alt="Twitter" width={20} height={20} className="hidden group-hover:block" />
            </a> */}

            {/* Farcaster */}
            {/* <a
              href="https://farcaster.xyz/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
                border-2 border-transparent transition-all duration-300 ease-in-out
                hover:bg-white hover:border-[#E2231A]"
            >
              <Image src={FarcasterWhite} alt="Farcaster" width={20} height={20} className="block group-hover:hidden" />
              <Image src={FarcasterLogo} alt="Farcaster" width={20} height={20} className="hidden group-hover:block" />
            </a> */}

            {/* Telegram */}
            {/* <a
              href="https://t.me/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
                border-2 border-transparent transition-all duration-300 ease-in-out
                hover:bg-white hover:border-[#E2231A]"
            >
              <Image src={TelegramWhite} alt="Telegram" width={20} height={20} className="block group-hover:hidden" />
              <Image src={TelegramLogo} alt="Telegram" width={20} height={20} className="hidden group-hover:block" />
            </a> */}
          </div>
        </div>

        {/* Hamburger (mobile) */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 text-black">
          <Menu size={22} />
        </button>
      </div>

      {/* FULL SCREEN MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col min-h-screen">

          {/* Top bar */}
          <div className="flex items-center justify-between px-4 pt-4 bg-white">
            <Image src={EthMumbaiLogo} alt="ETHMumbai Logo" width={120} height={40} />

            <button onClick={() => setMenuOpen(false)} className="p-2 text-[#E2231A]">
              <X size={26} />
            </button>
          </div>

          {/* Centered Buttons */}
          {/* <div className="flex flex-col items-center justify-center gap-10 flex-1 bg-white">
            <a
              href="https://tally.so/r/nGW5Bz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D63A2F] text-white text-xl px-12 py-4 rounded-full transition-all duration-200 hover:opacity-90"
            >
              Apply to Speak
            </a>

            <a
              href="https://tally.so/r/3NkdGb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D63A2F] text-white text-xl px-12 py-4 rounded-full transition-all duration-200 hover:opacity-90"
            >
              Apply to Sponsor
            </a>
          </div> */}
          <div className="flex flex-col items-center justify-center gap-10 flex-1 bg-white">
            <Link
              href="/conference"
              className="bg-[#D63A2F] text-white text-xl px-12 py-4 rounded-full transition-all duration-200 hover:opacity-90"
            >
              Conference
            </Link>

            {/* <Link
              href="/hackathon"
              className="bg-[#D63A2F] text-white text-xl px-12 py-4 rounded-full transition-all duration-200 hover:opacity-90"
            >
              Hackathon
            </Link> */}

            <Link
              href="/hackathon"
              className="bg-[#D63A2F] text-white text-xl px-12 py-4 rounded-full transition-all duration-200 hover:opacity-90"
            >
              Hackathon
            </Link>

            <Link
              href="/tickets"
              // target="_blank"
              // rel="noopener noreferrer"
              className="bg-[#D63A2F] text-white text-xl px-12 py-4 rounded-full transition-all duration-200 hover:opacity-90"
            >
              Buy Tickets
            </Link>
          </div>

          {/* SOCIAL ICONS AT BOTTOM */}
          <div className="flex items-center justify-center gap-6 pb-10 bg-white">

            {/* Twitter */}
            {/* <a
              href="https://x.com/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
          border-2 border-transparent transition-all duration-300 ease-in-out
          hover:bg-white hover:border-[#E2231A]"
            >
              <Image src={TwitterWhite} alt="Twitter" width={24} height={24} className="block group-hover:hidden" />
              <Image src={TwitterLogo} alt="Twitter" width={24} height={24} className="hidden group-hover:block" />
            </a> */}

            {/* Farcaster */}
            {/* <a
              href="https://farcaster.xyz/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
          border-2 border-transparent transition-all duration-300 ease-in-out
          hover:bg-white hover:border-[#E2231A]"
            >
              <Image src={FarcasterWhite} alt="Farcaster" width={24} height={24} className="block group-hover:hidden" />
              <Image src={FarcasterLogo} alt="Farcaster" width={24} height={24} className="hidden group-hover:block" />
            </a> */}

            {/* Telegram */}
            {/* <a
              href="https://t.me/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
          border-2 border-transparent transition-all duration-300 ease-in-out
          hover:bg-white hover:border-[#E2231A]"
            >
              <Image src={TelegramWhite} alt="Telegram" width={24} height={24} className="block group-hover:hidden" />
              <Image src={TelegramLogo} alt="Telegram" width={24} height={24} className="hidden group-hover:block" />
            </a> */}

          </div>
        </div>
      )}

    </nav>
  );
}
