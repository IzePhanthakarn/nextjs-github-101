import type { ReactNode } from "react";

export type CheckItem = {
  title: string;
  description: ReactNode;
};

export default function Checklist({ items }: Readonly<{ items: CheckItem[] }>) {
  return (
    <div className="checklist">
      {items.map((item) => (
        <div className="checkitem" key={item.title}>
          <span className="mark">→</span>
          <div className="body">
            <b>{item.title}</b>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
