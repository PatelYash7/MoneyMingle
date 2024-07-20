"use client";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className={
        "text-white  bg-blueMain hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold  rounded-lg text-lg px-5 py-2.5 me-2 mb-2"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
