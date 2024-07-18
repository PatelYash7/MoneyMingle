import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/authoptions/auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user != null) {
    redirect("/dashboard");
  } else {
    redirect("/home");
  }
}
