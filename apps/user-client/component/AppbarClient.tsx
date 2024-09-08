"use client";
import { Button } from "@moneymingle/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CircleUserRound } from 'lucide-react';

export function AppbarClient() {
  const router = useRouter();
  const session = useSession();
  return (
    <div className="flex justify-between px-16 py-2 border-b">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="flex items-center justify-center gap-4 text-xl font-bold text-blueMain"
      >
        <MountainIcon className="w-6 h-6" />
         MONEYMINGLE
      </div>
      <div className="flex items-center justify-center gap-6 pt-2 ">
        <div className="flex items-center gap-1 cursor-pointer" onClick={()=>{router.push("/user-details")}}>
          {
            session.data?.user.name ? <div>{session.data?.user.name}</div>:<><CircleUserRound /> Profile</>
          }
        </div>
      
        <Button
          onClick={async () => {
            await signOut({
              callbackUrl: "/",
            });
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
