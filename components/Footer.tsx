"use client";
import ETHMumbaiFooterLogo from "../public/assets/ethmumbai-logo-illustrated.svg";
import Image from "next/image";

import TwitterLogo from "../public/assets/x-logo.png";
import TwitterWhite from "../public/assets/x-white.png";
import FarcasterLogo from "../public/assets/farcaster-logo.png";
import FarcasterWhite from "../public/assets/farcaster-white.png";
import TelegramLogo from "../public/assets/telegram-logo.png";
import TelegramWhite from "../public/assets/telegram-white.png";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#E2231A] pt-5 px-6 sm:px-8 lg:px-12 text-[14px] leading-6 ">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 w-full py-5">
        {/* 1/2 width on desktop */}
        <div className="sm:w-1/2 w-full text-white p-4 font-medium">
          <Image
            src={ETHMumbaiFooterLogo}
            alt="Twitter"
            width={200}
            height={100}
            className="block"
          />
          <div className="flex flex-col gap-3 mt-6 items-stretch">
            <h2 className=" flex-1 text-2xl">BEST Conference & Hackathon</h2>
            <p className=" font-medium text-lg">12 - 15 March 2026</p>
          </div>
        </div>

        <div className="flex flex-row xl:gap-30 xl:px-10 2xl:gap-40 2xl:px-20 md:gap-10 md:px-5 gap-5">
          {/* 1/4 width on desktop */}
          <div className="p-4  text-white">
            {/* <p className="font-medium text-lg">About Us</p> */}

            {/* <div className="mt-6 flex flex-col gap-3 font-light">
              <a
                href="https://luma.com/ethmumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#E2231A] text-white font-light w-fit hover:underline"
              >
                Luma
              </a>

              <a
                href="https://drive.google.com/drive/folders/1Pz_gd9-Nqy8ol9t1vuDiGK7mOTf4wtJs"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#E2231A] text-white font-light w-fit hover:underline"
              >
                Brand Kit
              </a>

              <a
                href="https://2024.ethmumbai.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#E2231A] text-white font-light w-fit hover:underline"
              >
                ETHMumbai 2024
              </a>
            </div> */}
          </div>

          {/* 1/4 width on desktop */}
          <div className="p-4  text-white">
            {/* <p className="font-medium text-lg">Join Us</p> */}

            <div className="mt-6 flex flex-col gap-3 font-light">
              {/* <a
                href="/tickets"
                className="group bg-[#E2231A] text-white font-light w-fit hover:underline"
              >
                Buy Tickets
              </a>
              <a
                href="https://ethmumbai2026.devfolio.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#E2231A] text-white font-light w-fit hover:underline"
              >
                Apply to Hack
              </a>
              <a
                href="https://ethmumbai.substack.com/embed"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#E2231A] text-white font-light w-fit hover:underline"
              >
                Newsletter
              </a> */}
              {/* <a
                href="https://tally.so/r/nGW5Bz"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#E2231A] text-white font-light w-fit hover:underline
"
              >
                Apply to Speak
              </a>

              <a
                href="https://tally.so/r/3NkdGb"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#E2231A] text-white font-light w-fit hover:underline"
              >
                Apply to Sponsor
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 px-4 border-t flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5 pb-10">
        {/* Left — Logo + trademark */}
        <div className="flex flex-row items-center">
          <p className="text-medium text-white text-[14px] leading-6 text-center">
            All ETHMumbai conference tickets are
            <br className="md:block sm:hidden"></br> non-cancellable, and
            non-refundable.
          </p>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-medium text-white text-[14px] leading-6 text-center">
            © 2026 ETHMumbai. All rights reserved.
          </p>
        </div>

        {/* Right — Social icons */}
        {/* <div className="flex gap-5">
          <a
            href="https://x.com/ethmumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 bg-[#E2231A] border-2 border-transparent flex items-center justify-center transition-all duration-300 ease-in-out "
          >
            <Image
              src={TwitterWhite}
              alt="Twitter"
              width={20}
              height={20}
              className="block"
            />
          </a>

          <a
            href="https://farcaster.xyz/ethmumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 bg-[#E2231A] border-2 border-transparent flex items-center justify-center  transition-all duration-300 ease-in-out"
          >
            <Image
              src={FarcasterWhite}
              alt="Twitter"
              width={20}
              height={20}
              className="block"
            />
          </a>

          <a
            href="https://t.me/ethmumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 bg-[#E2231A] border-2 border-transparent flex items-center justify-center  transition-all duration-300 ease-in-out"
          >
            <Image
              src={TelegramWhite}
              alt="Twitter"
              width={20}
              height={20}
              className="block"
            />
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
