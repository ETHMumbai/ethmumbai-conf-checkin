"use client";

import { signIn, useSession, signOut } from "next-auth/react";
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
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="text-center mt-10">Checking session...</p>;
  }

  /* =========================
     AUTHENTICATED VIEW
     ========================= */
  if (session) {
    return (
      <section className="relative flex justify-center overflow-hidden bg-white border border-black min-h-screen">
        <div className="flex pb-6 items-center justify-center w-full flex-col gap-6">
          <h2 className="text-black text-4xl sm:text-5xl md:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center">
            Check In
          </h2>

          <h1 className="text-2xl font-semibold text-green-600">
            Welcome, {session.user?.name} ✅
          </h1>

         

          {/* ================= MENU ================= */}
        {mode === "menu" && (
  <div className="flex flex-col items-center gap-4">
    {/* Menu buttons row */}
    <div className="flex gap-4 justify-center items-center">
      <button
        onClick={() => setMode("email")}
        className="px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Check-in by Email or Ticket Code
      </button>

      {/* <button
        onClick={() => setMode("ticket")}
        className="px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Check-in by Ticket Code
      </button> */}

      <button
        onClick={() => setMode("qr")}
        className="px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Check-in by QR
      </button>
    </div>

    {/* Logout button below */}
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg mt-2"
    >
      Logout
    </button>
  </div>
)}


         

          {/* ================= EMAIL CHECK-IN ================= */}
          {mode === "email" && (
            <div className="flex flex-col items-center gap-4">
              <CheckInByEmail name={session.user?.name} />

              <button
                onClick={() => setMode("menu")}
                className="px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-100"
              >
                ← Menu
              </button>
            </div>
          )}

          {/* ================= TICKET CODE CHECK-IN ================= */}
          {/* {mode === "ticket" && (
            <div className="flex flex-col items-center gap-4 text-black">
              <p className="text-lg">Ticket Code check-in coming here</p>

              <button
                onClick={() => setMode("menu")}
                className="px-4 py-2 border border-black rounded-lg hover:bg-gray-100"
              >
                ← Menu
              </button>
            </div>
          )} */}

          {/* ================= QR CHECK-IN ================= */}
          {mode === "qr" && (
            <div className="flex flex-col items-center gap-4 text-black">
              {/* <p className="text-lg">QR scanner coming here</p> */}
              <CheckInByQR name={session.user?.name}/>

              <button
                onClick={() => setMode("menu")}
                className="px-4 py-2 border border-black rounded-lg hover:bg-gray-100"
              >
                ← Menu
              </button>
            </div>
          )}

          
        </div>
      </section>
    );
  }

  /* =========================
     UNAUTHENTICATED VIEW
     ========================= */
  return (
    <section className="relative flex justify-center overflow-hidden bg-white border border-black min-h-screen">
      <div className="flex pb-6 items-center justify-center w-full flex-col gap-4">
        <h2 className="text-black text-4xl sm:text-5xl md:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center">
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
