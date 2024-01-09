"use client";

import { ReactNode, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { trpc } from "@/app/_trpc/client";
import { httpBatchLink } from "@trpc/client";


/**
 * ! act just like react context provider, in order to make tRPC client and react-query client available to all children components
 * wait, where is this provider being invoked?
 * @param param0 
 * @returns 
 */
const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    // trpc methods are exposed as hooks
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http: //localhost:3000/api/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      {/* below code is just to allow you to use react query independent of tRPC */}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default Providers;
