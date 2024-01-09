import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";

// ! where you define your router centrally
export const appRouter = router({

  // test: publicProcedure.query(()=>{
  //   return 'hello!'
  // })

  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user || !user.id || !user.email) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Unauthorized" });
    }

    // check if user is in the daabase (we will do this later on)
    // todo ...

    return {success: true}

  }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
