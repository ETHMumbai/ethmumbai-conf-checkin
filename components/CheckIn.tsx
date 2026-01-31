"use client";

import React from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CheckInByEmail from "./CheckInByEmail";
import CheckInByQR from "./CheckInByQR";

type CheckInMode = "menu" | "email" | "ticket" | "qr";

export default function CheckIn() {
  const { data: session, status } = useSession();
  const [error, setError] = useState("");
  const [mode, setMode] = useState<CheckInMode>("menu");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");
    const res = await signIn("google", { redirect: false });
    if (res?.error) {
      setError("Only ethmumbai.in email accounts are allowed.");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-neutral-500">
        Checking session…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md sm:max-w-lg text-center">
        {/* Logo */}
        <div className="flex justify-center mb-16">
          <Image
            src="/assets/ethmumbai-logo.svg"
            alt="ETHMumbai"
            width={96}
            height={96}
            className="h-20 w-auto sm:h-24"
            priority
          />
        </div>

        {/* Headings */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-black">
          ETHMumbai Conference 2026
        </h1>
        <p className="mt-2 text-sm sm:text-base text-neutral-600">
          Attendee Check-In
        </p>

        <div className="mt-4 mx-auto h-1 w-12 bg-red-600 rounded-full" />

        {/* Card-like content area (no heavy borders) */}
        <div className="mt-4 bg-white p-6 sm:p-8">
          {session && (
            <p className="mb-6 text-sm text-neutral-600 break-words">
              Signed in as{" "}
              <span className="font-medium text-black">
                {session.user?.name}
              </span>
            </p>
          )}

          {/* ================= AUTHENTICATED ================= */}
         {session ? (
  <div className="flex flex-col gap-8">
    {/* ================= MENU ================= */}
    {mode === "menu" && (
      <div className="flex flex-col items-center gap-6">
        <div className="w-full max-w-xs flex flex-col gap-3">
          <button
            onClick={() => setMode("email")}
            className="w-full rounded-xl bg-black px-4 py-4 text-sm font-medium text-white hover:bg-neutral-800 transition"
          >
            Check-in by Email or Ticket Code
          </button>
          <p className="text-xs text-neutral-500 text-center">
            Search attendee using registered email or ticket code
          </p>
        </div>

        <div className="w-full max-w-xs flex flex-col gap-3">
          <button
            onClick={() => setMode("qr")}
            className="w-full rounded-xl bg-neutral-100 px-4 py-4 text-sm font-medium text-black hover:bg-neutral-200 transition"
          >
            Check-in by QR
          </button>
          <p className="text-xs text-neutral-500 text-center">
            Scan attendee QR code at entry
          </p>
        </div>
      </div>
    )}

    {/* ================= EMAIL MODE ================= */}
    {mode === "email" && (
      <div className="w-full flex flex-col items-center gap-6">
        <div className="w-full max-w-sm">
          <h2 className="text-sm font-medium text-neutral-700 mb-2 text-center">
            Email / Ticket Code Check-In
          </h2>

          <div className="rounded-xl bg-neutral-50 p-4 sm:p-6">
            <CheckInByEmail name={session.user?.name} />
          </div>
        </div>

        <button
          onClick={() => setMode("menu")}
          className="text-sm text-neutral-500 hover:text-black transition"
        >
          ← Back to check-in options
        </button>
      </div>
    )}

    {/* ================= QR MODE ================= */}
    {mode === "qr" && (
      <div className="w-full flex flex-col items-center gap-6">
        <div className="w-full max-w-sm">
          <h2 className="text-sm font-medium text-neutral-700 mb-2 text-center">
            QR Code Check-In
          </h2>

          <div className="rounded-xl bg-neutral-50 p-4 sm:p-6">
            <CheckInByQR name={session.user?.name} />
          </div>
        </div>

        <button
          onClick={() => setMode("menu")}
          className="text-sm text-neutral-500 hover:text-black transition"
        >
          ← Back to check-in options
        </button>
      </div>
    )}
  </div>
) : (

            /* ================= UNAUTHENTICATED ================= */
            <div className="flex flex-col items-center gap-6">
              <button
                onClick={handleLogin}
                className="w-full max-w-xs rounded-lg bg-black px-3 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
              >
                Log in with Google
              </button>

              {error && (
                <div className="w-full max-w-xs rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="mt-2 text-xs text-neutral-400">
          Internal check-in system
        </p>
      </div>
    </div>
  );
}
