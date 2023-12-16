import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


const Page = async () => {
  const { getUser } = getKindeServerSession();    // 3rd party auth lib
  const user =  await getUser();

  if(!user || !user.id) redirect("/auth-callback?origin=/dashboard");       // if user is not logged in, redirect to login page



  return <div>{user && user.email}</div>;
};

export default Page;
