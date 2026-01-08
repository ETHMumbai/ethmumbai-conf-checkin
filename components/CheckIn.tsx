"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CheckIn() {
  const { data: session, status } = useSession();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");

    const res = await signIn("google", {
      redirect: false,
    });

    if (res?.error) {
      setError("Only ethmumbai.in email accounts are allowed.");
    }
  };

  // ✅ Redirect on successful login
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/"); // 👈 landing page
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="text-center mt-10">Checking session...</p>;
  }

  const handleCheckInByEmail = () => {
    console.log("Check-in by Email");
  };

  const handleCheckInByTicketCode = () => {
    console.log("Check-in by Ticket Code");
  };

  const handleCheckInByQR = () => {
    console.log("Check-in by QR");
  };

  if (session) {
    return (
      <section className="relative flex justify-center overflow-hidden bg-white border border-black text-white min-h-screen">
        <div className="flex pb-6 items-center justify-center w-full flex-col gap-4">
          <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center">
            Check In
          </h2>

          <h1 className="text-2xl font-semibold text-green-600">
            Welcome, {session.user?.name} ✅
          </h1>
          <div className="flex gap-4 justify-center items-center">
            <button
              onClick={handleCheckInByEmail}
              className="px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Check-in by Email
            </button>

            <button
              onClick={handleCheckInByTicketCode}
              className="px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Check-in by Ticket Code
            </button>

            <button
              onClick={handleCheckInByQR}
              className="px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Check-in by QR
            </button>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg"
          >
            Logout
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex justify-center overflow-hidden bg-white border border-black text-white min-h-screen">
      <div className="flex pb-6 items-center justify-center w-full flex-col gap-4">
        <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center">
          Check In
        </h2>

        <button
          onClick={handleLogin}
          className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg"
        >
          Log in with Google
        </button>

        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>
    </section>
  );
}
