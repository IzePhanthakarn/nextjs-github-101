import type { ReactNode } from "react";

export type CompareCell = {
  content: ReactNode;
  tone?: "good" | "bad";
};

export type CompareRow = {
  label: string;
  cells: CompareCell[];
};

export default function CompareTable({
  columns,
  rows,
}: Readonly<{
  columns: string[];
  rows: CompareRow[];
}>) {
  return (
    <table className="compare">
      <thead>
        <tr>
          <th></th>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <td>{row.label}</td>
            {row.cells.map((cell, i) => (
              <td
                key={columns[i]}
                className={cell.tone === "good" ? "m" : cell.tone === "bad" ? "r" : undefined}
              >
                {cell.content}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
