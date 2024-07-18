"use client";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  return (
    <header className="flex items-center px-4 lg:px-6 h-14">
      <div className="flex items-center justify-center">
        <MountainIcon className="w-6 h-6" />
        <span className="sr-only">Acme Payments</span>
      </div>
      <nav className="flex gap-4 ml-auto sm:gap-6">
        <div
          onClick={() => {
            router.push("/api/auth/signin");
          }}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Signin
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          Pricing
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          Security
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </div>
      </nav>
    </header>
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
