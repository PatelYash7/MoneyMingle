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
          router.push("/home");
        }}
        onSignin={async () => {
          await signIn();
        }}
        onSignout={async () => {
          await signOut({
            callbackUrl: "/home",
          });
        }}
        user={session.data?.user}
      />
    </div>
  );
}