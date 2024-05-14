import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="p-4 border">
      <h1 className="pb-2 text-xl border-b">{title}</h1>
      <div>{children}</div>
    </div>
  );
}
