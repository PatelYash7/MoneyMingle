"use client";
import { Button } from "@moneymingle/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../component/ui/alert-dialog";
import { Input } from "./ui/input";
import { useState } from "react";
import { setUserName } from "../lib/actions/setUserName";

export function AppbarClient({name}:{name:string | null}) {
  const router = useRouter();
  const [username, setUsername] = useState("");
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
      <div className="flex items-center justify-center gap-4 pt-2 ">
        <div>
          {name ? (
            <div>{name}</div>
          ) : (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Set Username</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Enter your name</AlertDialogTitle>
                  <Input
                    className="rounded"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  ></Input>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction
                    className="rounded"
                    onClick={async () => {
                     const Response =await  setUserName({ name: username });
                     if(Response){
                      window.alert(Response.message)
                     }
                    }}
                  >
                    Submit
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
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
