"use client";
import { Appbar } from "@moneymingle/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function AppbarClient() {
  const router = useRouter();
  const session = useSession();
  return (
    <div className="">
      <Appbar
        route={async () => {
          router.push("/");
        }}
        onSignin={async () => {
          await signIn(undefined, {
            callbackUrl: "http://localhost:3000/dashboard",
          });
        }}
        onSignout={async () => {
          await signOut({
            callbackUrl: "/",
          });
        }}
        user={session.data?.user}
      />
    </div>
  );
}
