"use client";
import { Button } from "./button";
interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: any;
  onSignout: any;
  route: any;
}
export const Appbar = ({ user, onSignin, onSignout, route }: AppbarProps) => {
  return (
    <div className="flex justify-between px-16 py-2 border-b bg-bgMain">
      <div
        onClick={route}
        className="flex items-center justify-center gap-4 text-xl font-bold text-blueMain"
      >
        <MountainIcon className="w-6 h-6" />
        MONEYMINGLE
      </div>
      <div className="flex flex-col justify-center pt-2 font-bold">
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
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
