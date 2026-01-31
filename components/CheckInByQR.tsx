"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

type CheckInByQRProps = {
  name?: string | null;
};

export default function CheckInByQR({ name }: CheckInByQRProps) {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const isRunningRef = useRef(false);
  const lockRef = useRef(false);
  const initializedRef = useRef(false); // StrictMode guard only

  const [verifyResult, setVerifyResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  /* ================= START SCANNER ================= */
  const startScanner = async () => {
    if (scannerRef.current || isRunningRef.current) return;

    const scanner = new Html5Qrcode("qr-reader");
    scannerRef.current = scanner;

    try {
      await scanner.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
          if (lockRef.current) return;
          lockRef.current = true;
          verifyByQrUrl(decodedText);
        },
        () => { }
      );

      isRunningRef.current = true;
    } catch {
      setError("Camera permission denied or unavailable");
    }
  };

  /* ================= INIT (STRICT MODE SAFE) ================= */
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    startScanner();

    return () => stopScanner();
  }, []);

  /* ================= VERIFY ================= */
  const verifyByQrUrl = async (url: string) => {
    try {
      setLoading(true);
      setError(null);

      const ticketCode = url.split("/").pop();
      if (!ticketCode) throw new Error();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/t/${ticketCode}?checkedInBy=${encodeURIComponent(
          name || "team"
        )}`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
          },
        }
      );

      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error();

      stopScanner();
      setVerifyResult(data);
    } catch {
      stopScanner();
      setError("Invalid or already used QR");
    } finally {
      setLoading(false);
    }
  };

  /* ================= STOP ================= */
  const stopScanner = () => {
    if (scannerRef.current && isRunningRef.current) {
      scannerRef.current.stop().catch(() => { });
    }
    scannerRef.current = null;
    isRunningRef.current = false;
  };

  /* ================= RESET ================= */
  const reset = async () => {
    stopScanner();
    lockRef.current = false;
    setVerifyResult(null);
    setError(null);
    setLoading(false);

    // 🔥 restart camera
    await startScanner();
  };

  /* ================= UI ================= */
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* CAMERA (always mounted) */}
      <div
        id="qr-reader"
        className={`w-72 rounded-xl overflow-hidden border ${verifyResult || error ? "hidden" : "block"
          }`}
      />

      {loading && (
        <p className="text-sm text-neutral-600">Checking ticket…</p>
      )}

      {/* ERROR */}
      {error && (
        <div className="w-full max-w-md rounded-xl border border-red-200 bg-red-50 p-5 text-center space-y-4">
          <p className="text-red-700 font-medium">{error}</p>
          <button
            onClick={reset}
            className="rounded-lg bg-black px-5 py-2 text-sm text-white hover:bg-neutral-800"
          >
            Scan another QR
          </button>
        </div>
      )}

      {/* SUCCESS */}
      {verifyResult?.ok && (
        <div className="w-full max-w-md rounded-2xl bg-green-50 px-6 py-6 space-y-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white text-lg">
              ✓
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                Check-in successful
              </h3>
              <p className="text-sm text-green-700">
                Attendee verified and checked in
              </p>
            </div>
          </div>

          <div className="h-px bg-green-200" />

          <p className="text-sm text-neutral-700">
            <strong>{verifyResult.participantName}</strong> is checked in
          </p>

          {/* Details */}
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-neutral-500">Ticket type</span>
              <span className="font-medium text-black">
                {verifyResult.ticketType}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-neutral-500">Ticket code</span>
              <span className="font-mono text-black">
                {verifyResult.ticketCode}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-neutral-500">Paid by</span>
              <span className="font-medium text-black">
                {verifyResult.buyerName}
              </span>
            </div>
          </div>

          <button
            onClick={reset}
            className="w-full rounded-xl bg-black py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Check in next participant
          </button>
        </div>
      )}
    </div>
  );
}
