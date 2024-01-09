import { AppRouter } from "@/trpc";
import { createTRPCReact } from "@trpc/react-query";

// this will be used to create tRPC client in provider 
export const trpc = createTRPCReact<AppRouter>({});
