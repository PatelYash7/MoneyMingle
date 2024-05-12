"use client"
import { Button } from "./button";
import newUser from "next-auth/next"
interface AppbarProps{
  user?:{
    name?:string |null
  },
  onSignin:any,
  onSignout:any
}
export const Appbar = ({ user,onSignin,onSignout }: AppbarProps) => {
  return (
    <div className="flex justify-between px-16 border-b bg-violet-200">
        <div className="flex flex-col justify-center text-lg font-bold text-[#7c4ee8]">
            Money Mingle
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
  );
};
