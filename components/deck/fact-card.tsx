import type { ReactNode } from "react";

export default function FactCard({
  kicker,
  title,
  children,
}: Readonly<{
  kicker: string;
  title: string;
  children: ReactNode;
}>) {
  return (
    <div className="fact card">
      <span className="k">{kicker}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
