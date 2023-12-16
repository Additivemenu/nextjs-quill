import { initTRPC } from '@trpc/server';
 
// get tRPC instance here

const t = initTRPC.create();
 

export const router = t.router;
export const publicProcedure = t.procedure;