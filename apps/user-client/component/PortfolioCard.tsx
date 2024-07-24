"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const PortfolioCard = ({ balance }: { balance: number }) => {
  const router = useRouter();
  return (
    <div className="px-4 py-2 ">
      <div className="text-lg font-bold">
        <div className="font-mono text-lg font-semibold">Portfolio</div>
        <div className="font-sans text-5xl font-bold ">₹ {balance / 100} </div>
      </div>
      <div className="flex items-center justify-center py-4 my-8 border-t-2">
        <div className="flex gap-4 px-4 py-4 ">
          <Button
            onClick={() => {
              router.replace("/p2p");
            }}
            className="px-4 py-2 text-lg font-bold text-white bg-black border rounded-[6px] transition-all hover:transition-all  hover:text-black hover:bg-primary-foreground "
          >
            Send
          </Button>
          <Button
            onClick={() => {
              router.replace("/profile");
            }}
            className="px-4 py-2 text-lg font-bold text-white bg-black border rounded-[6px] transition-all hover:transition-all hover:text-black hover:bg-lime-300"
          >
            Receive
          </Button>
          <Button
            onClick={() => {
              router.replace("/transfer");
            }}
            className="px-4 py-2 text-lg font-bold text-white bg-black border rounded-[6px] transition-all hover:transition-all hover:text-black hover:bg-emerald-600"
          >
            Deposit
          </Button>
          <Button
            onClick={() => {
              router.replace("/transfer");
            }}
            className="px-4 py-2 text-lg font-bold text-white bg-black border rounded-[6px] transition-all hover:transition-all hover:text-black hover:bg-red-300"
          >
            Debit
          </Button>
        </div>
      </div>
    </div>
  );
};
