"use client"

import { Appbar } from "@moneymingle/ui/appbar";
import { getSession, signIn, signOut, useSession } from "next-auth/react";

export default function Page(): JSX.Element {
  const {data:session,status} = useSession();
  return (
    <div className="h-screen bg-red-300">
      <Appbar   onSignin={signIn} onSignout={signOut} user={session?.user} />
      Hello wrold asfdasf
    </div>
  );
}
