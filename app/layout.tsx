import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// export const metadata: Metadata = {
//   title: "ETHMumbai 2026",
//   description: "BEST Conference & Hackathon in Mumbai. 12 – 15 March 2026 in Mumbai",
// };
export const metadata: Metadata = {
  title: "ETHMumbai 2026",
  description:
    "BEST Conference & Hackathon in Mumbai. 12 – 15 March 2026 in Mumbai",

  openGraph: {
    title: "ETHMumbai 2026 | BEST Conference & Hackathon",
    description:
      "ETHMumbai is an Ethereum-focused conference & hackathon taking place on 12 - 15 March 2026 in Mumbai, India. It will host 50 speakers, 500 attendees, and 300 hackers.",
    url: "https://ethmumbai.in",
    siteName: "ETHMumbai",
    images: [
      {
        url: "https://ethmumbai.in/website.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ETHMumbai 2026",
    description:
      "BEST Conference & Hackathon in Mumbai. 12 – 15 March 2026 in Mumbai",
    images: [
      {
        url: "https://ethmumbai.in/website.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} 
      ${inter.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
