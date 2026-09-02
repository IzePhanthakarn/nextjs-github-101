import type { ReactNode } from "react";

export type DefItem = {
  term: string;
  desc: ReactNode;
};

export default function DefList({ items }: Readonly<{ items: DefItem[] }>) {
  return (
    <div className="deflist">
      {items.map((item) => (
        <div className="row" key={item.term}>
          <span className="term">{item.term}</span>
          <span className="desc">{item.desc}</span>
        </div>
      ))}
    </div>
  );
}
