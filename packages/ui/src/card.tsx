import React from "react";

export function Card({
  title,
  children,
  bg
}: {
  title: string;
  children?: React.ReactNode;
  bg?:string
}): JSX.Element {
  return (
    <div className={`p-4 border ${bg} rounded-lg` }>
      <h1 className="pb-2 text-xl border-b">{title}</h1>
      <div>{children}</div>
    </div>
  );
}
