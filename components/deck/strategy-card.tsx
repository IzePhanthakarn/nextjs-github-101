import type { ReactNode } from "react";

export default function StrategyCard({
  tag,
  title,
  bestFor,
  children,
}: Readonly<{
  tag: string;
  title: string;
  bestFor: ReactNode;
  children: ReactNode;
}>) {
  return (
    <div className="card strategy">
      <span className="tag">{tag}</span>
      <h3 style={{ marginTop: ".6rem" }}>{title}</h3>
      <p>{children}</p>
      <div className="best">เหมาะกับ {bestFor}</div>
    </div>
  );
}
