"use client"
import { Button } from "./button";
interface AppbarProps{
  user?:{
    name?:string |null
  },
  onSignin:any,
  onSignout:any
}
export const Appbar = ({ user,onSignin,onSignout }: AppbarProps) => {
  return (
    <div className="flex justify-between px-4 bg-blue-200 border-b">
        <div className="flex flex-col justify-center text-lg">
            PayTM
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
  );
};
