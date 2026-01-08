"use client";

import { useEffect, useState } from "react";

export default function CheckInPage({
  params,
}: {
  params: { ticketCode: string };
}) {
  const [text, setText] = useState("Loading...");

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/t/${params.ticketCode}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // 🔐 Unauthorized or forbidden → friendly message
        if (res.status === 401 || res.status === 403) {
          setText("See you at the BEST Conference!");
          return;
        }

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }

        // Your backend returns PLAIN TEXT, not JSON
        const data = await res.text();
        setText(data);
      } catch (err) {
        console.error(err);
        setText("See you at the BEST Conference!");
      }
    };

    fetchTicket();
  }, [params.ticketCode]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg font-medium text-center">{text}</p>
    </div>
  );
}

// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function CheckInPage() {
//   const [text, setText] = useState("Loading...");

//   const searchParams = useSearchParams();
//   const ticketCode = searchParams.get("ticketCode");

//   useEffect(() => {
//     const fetchTicket = async () => {
//       if (!ticketCode) {
//         setText("Welcome to ETHMumbai!");
//         return;
//       }

//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/t/${ticketCode}`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         // 🔴 Unauthorized / forbidden → custom message
//         if (res.status === 401 || res.status === 403) {
//           setText("See you at the BEST Conference!");
//           return;
//         }

//         if (!res.ok) {
//           throw new Error(`Request failed with ${res.status}`);
//         }

//         // ✅ backend returns STRING, not JSON
//         const data = await res.text();
//         setText(data);
//       } catch (err) {
//         console.error("Failed to load ticket:", err);
//         setText("See you at the BEST Conference!");
//       }
//     };

//     fetchTicket();
//   }, [ticketCode]);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-lg font-medium text-center">{text}</p>
//     </div>
//   );
// }
