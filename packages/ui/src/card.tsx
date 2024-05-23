import React from "react";

export function Card({
  title,
  children,
  bg,
  width
}: {
  title: string;
  children?: React.ReactNode;
  bg?:string;
  width?:string
}): JSX.Element {
  return (
    <div className={`p-4 border ${bg} rounded-lg ${width}` }>
      <h1 className="pb-2 text-xl border-b">{title}</h1>
      <div>{children}</div>
    </div>
  );
}
