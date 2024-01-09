import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = () => {
  const router = useRouter(); // nextjs navigation api

  const searchParams = useSearchParams(); // nextjs navigation api
  const origin = searchParams.get("origin");    // extract info from url

  // ! network communication: use tRPC query hook
  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
      // below function argument is the data returned from trpc query
    onSuccess: ({ success }) => {
      if (success) {
        // user is already syned to db
        router.push(origin ? `/${origin}` : "/dashboard");      // next js navigation api
      }
    },
  });
};

export default Page;
