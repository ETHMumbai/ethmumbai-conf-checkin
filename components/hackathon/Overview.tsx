"use client";

import Image from "next/image";
import Link from "next/link";
import Hackathon from "../../public/assets/hackathon/hackathon.svg";

export default function Hero() {
    return (
        <section className="relative flex justify-center overflow-hidden bg-white text-black py-10 px-6">
            <div className="max-w-7xl w-full py-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 text-center md:text-left items-start md:items-center sm:items-center lg:items-start">

                {/* LEFT TEXT CONTENT */}
                <div className="max-w-[480px] pt-2 md:pt-4 mx-auto md:mx-0">
                    <h2 className="text-4xl font-[MPlusRounded1c] sm:text-5xl font-bold leading-tight tracking-tight">
                        Build from Mumbai, <br />for the world.
                    </h2>
                    <br />

                    <p className="text-lg text-gray-800 leading-relaxed">
                        ETHMumbai Hackathon 2026 is an Ethereum-focused hackathon inviting builders from across the country to build robust solutions for real-world problems.
                    </p>
                    <br />

                    <p className="text-lg text-gray-800 leading-relaxed">
                        Join us in teams of 2-4 or solo to hack and solve challenges across three tracks: DeFi, Privacy, and AI. 
                    </p>
                    <br />

                    <p className="text-lg text-gray-800 leading-relaxed">
                        Win upto $50,000 in bounties, learn from our panel of mentors, and build with the BEST community.
                    </p>
                    <br />

                    {/* <button style={{cursor:'pointer'}}
                        onClick={() => { window.open('https://ethmumbai2026.devfolio.co/', '_blank');}}
                        className="bg-[#D63A2F] mt-4 border border text-white
                                    font-semibold text-base px-6 py-3 rounded-[14px]
                                   hover:opacity-90 hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-200">
                        Apply to Hack
                    </button> */}
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div
                    className="
                        flex justify-center md:justify-end
                        mt-10 md:mt-7 mb-6
                        pt-2 sm:pt-6 md:pt-14
                    "
                >
                    <Image
                        src={Hackathon}
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
