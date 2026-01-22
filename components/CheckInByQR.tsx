"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

type CheckInByEmailProps = {
  name?: string | null;
};
export default function CheckInByQR({ name }: CheckInByEmailProps) {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const isRunningRef = useRef(false);

  const [verifyResult, setVerifyResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [scanned, setScanned] = useState(false);

useEffect(() => {
  if (verifyResult) return;

  // Prevent multiple initializations
  if (scannerRef.current) return;

  const scanner = new Html5Qrcode("qr-reader");
  scannerRef.current = scanner;

  scanner
    .start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      async (decodedText) => {
        if (scanned) return;

        setScanned(true);
        await verifyByQrUrl(decodedText);
      },
      () => {
        // required by TS, ignore scan errors
      }
    )
    .then(() => {
      isRunningRef.current = true;
    })
    .catch((err) => {
      console.error(err);
      setError("Camera permission denied or unavailable");
    });

  return () => {
    if (scannerRef.current && isRunningRef.current) {
      scannerRef.current
        .stop()
        .catch(() => {});
      scannerRef.current = null;
      isRunningRef.current = false;
    }
  };
}, [verifyResult]); // ❗ ONLY depend on verifyResult

useEffect(() => {
  if (verifyResult?.ok && scannerRef.current && isRunningRef.current) {
    console.log("🛑 Check-in successful → stopping camera");

    scannerRef.current
      .stop()
      .then(() => {
        console.log("📷 Camera stopped");
      })
      .catch((err) => {
        console.warn("⚠️ Error stopping camera:", err);
      })
      .finally(() => {
        isRunningRef.current = false;
        scannerRef.current = null;
      });
  }
}, [verifyResult]);



  const verifyByQrUrl = async (url: string) => {
    try {
      setLoading(true);
      setError(null);

      console.log("📷 QR URL scanned:", url);

    
    const ticketCode = url.split("/").pop();

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/t/${ticketCode}?checkedInBy=${encodeURIComponent(name || 'team')}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
      });

      if (!res.ok) throw new Error("Verification failed");

      const data = await res.json();
      setVerifyResult(data);

    } catch (err) {
  console.error("🔥 QR verify failed:", err);

  setError("Invalid or already used QR");
  setScanned(false);

  // 🛑 stop camera on error
  if (scannerRef.current && isRunningRef.current) {
    scannerRef.current
      .stop()
      .catch(() => {});
    scannerRef.current = null;
    isRunningRef.current = false;
  }
}
 finally {
      setLoading(false);
    }
  };

 const resetForNextParticipant = () => {
  setVerifyResult(null);
  setError(null);
  setLoading(false);
  setScanned(false);

  // allow scanner to re-init
  scannerRef.current = null;
};


  return (
    <div className="flex flex-col items-center gap-4">
      {!verifyResult && !error && (
  <div
    id="qr-reader"
    className="w-72 border rounded-lg overflow-hidden"
  />
)}


      {loading && <p className="text-black">Checking ticket…</p>}
      {error && <p className="text-red-600">{error}</p>}

      {verifyResult?.ok && (
        <div className="p-4 border-l-4 border-green-600 bg-green-50 text-black rounded-lg space-y-1 w-full max-w-md">
          <h3 className="text-lg font-semibold text-green-700">
            ✅ Check-in Successful
          </h3>

          <p>
            Hi <strong>{verifyResult.participantName}</strong>, welcome to
            <strong> ETHMumbai</strong>!
          </p>

          <p>
            🎟️ Ticket Type: <strong>{verifyResult.ticketType}</strong>
          </p>

          <p>
            🧾 Ticket Code: <strong>{verifyResult.ticketCode}</strong>
          </p>

          <p>
            💳 Paid by: <strong>{verifyResult.buyerName}</strong>
          </p>

          <button
            onClick={resetForNextParticipant}
            className="mt-3 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Check in next participant
          </button>
        </div>
      )}
    </div>
  );
}
