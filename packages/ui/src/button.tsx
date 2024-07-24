"use client";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className={
        "text-white border border-white bg-blueMain hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold px-3 py-1 rounded"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
