// "use client";

// import React from "react";
// import { DaimoPayProvider, getDefaultConfig } from "@daimo/pay";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { WagmiProvider, createConfig } from "wagmi";

// const config = createConfig(
//   getDefaultConfig({
//     appName: "Daimo Pay Demo",
//   })
// );

// const queryClient = new QueryClient();

// export function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <DaimoPayProvider>{children}</DaimoPayProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { DaimoPayProvider, getDefaultConfig } from "@daimo/pay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig } from "wagmi";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    const cfg = createConfig(
      getDefaultConfig({
        appName: "Daimo Pay Demo",
      })
    );
    setConfig(cfg);
  }, []);

  if (!config) return null; // or loader

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <DaimoPayProvider>{children}</DaimoPayProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
