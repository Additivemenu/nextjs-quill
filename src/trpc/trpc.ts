import { initTRPC } from '@trpc/server';

// ! tRPC instance & some trpc config options is provided here

// get tRPC instance here
const t = initTRPC.create();

// below are some config options from trpc, you will use them in trpc appRouter to config your api
export const router = t.router;
export const publicProcedure = t.procedure;     // public api