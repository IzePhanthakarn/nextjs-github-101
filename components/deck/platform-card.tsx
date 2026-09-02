import type { ReactNode } from "react";

export default function PlatformCard({
  name,
  bestFor,
  children,
}: Readonly<{
  name: string;
  bestFor: string;
  children: ReactNode;
}>) {
  return (
    <div className="card plat">
      <h3>{name}</h3>
      <p>{children}</p>
      <div className="strength">best for: {bestFor}</div>
    </div>
  );
}
