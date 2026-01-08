"use client";

import Image from "next/image";
import Link from "next/link";
import Conference from "../../public/assets/conference/conference.svg";

export default function Hero() {
    return (
        <section className="relative flex justify-center overflow-hidden bg-white text-black py-8 px-6">
            <div className="max-w-7xl w-full py-10 grid grid-cols-1 md:grid-cols-2  gap-16 md:gap-20 text-center md:text-left items-start md:items-center sm:items-center lg:items-start">

                {/* LEFT TEXT CONTENT */}
                <div className="max-w-[480px] pt-2 md:pt-4 mx-2 md:mx-2">
                    <h2 className="text-4xl pb-2 font-[MPlusRounded1c] sm:text-5xl font-bold leading-tight tracking-tight">
                        BEST Ethereum Conference 
                    </h2>
                    <br />
                    <p className="text-lg text-gray-800 leading-relaxed">
                        ETHMumbai Conference 2026 is an Ethereum-focused conference, organized by the people of Mumbai for the world.
                    </p>

                    <p className="text-lg text-gray-800 mt-2 leading-relaxed">
                        Join us for a full-day featuring 50 wonderful speakers presenting talks across three tracks: DeFi, Privacy, and AI. 
                    </p>

                    <p className="text-lg text-gray-800 mt-2 leading-relaxed">
                        If you are curious about decentralization, onchain privacy, and the role of AI in shaping the future of Ethereum, ETHMumbai Conference is for you.
                    </p>
                    <br />

                    <Link href="/tickets">
                        <button className="bg-[#D63A2F] mt-4 border text-white font-semibold text-base px-6 py-3 rounded-[14px] hover:opacity-90 hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-200">
                            Buy Tickets
                        </button>
                    </Link>  
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div
                    className="
                        flex justify-center md:justify-end
                        mt-10 md:mt-7 
                        pt-2 sm:pt-6 md:pt-14
                    "
                >
                    <Image
                        src={Conference}
                        alt="ETHMumbai Conference"
                        width={700}
                        height={550}
                        className="
                            w-full h-auto

                            /* MOBILE HEIGHT FIX */
                            max-w-[260px] max-h-[220px]

                            /* SMALL SCREEN / LARGE PHONES */
                            sm:max-w-[340px] sm:max-h-[300px]

                            /* TABLET */
                            md:max-w-[500px] md:max-h-[420px]

                            /* DESKTOP */
                            lg:max-w-[600px] lg:max-h-[500px]

                            /* SCALE */
                            scale-[1.4] sm:scale-[1.4] md:scale-[1.3] lg:scale-[1.3]
                        "
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
