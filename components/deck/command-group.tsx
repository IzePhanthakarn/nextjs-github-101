import type { ReactNode } from "react";

export type CommandRow = {
  cmd: ReactNode;
  desc: string;
};

export default function CommandGroup({
  name,
  rows,
}: Readonly<{
  name: string;
  rows: CommandRow[];
}>) {
  return (
    <div className="cmdgroup">
      <span className="gname">{name}</span>
      <table className="cmdtable">
        <tbody>
          {rows.map((row) => (
            <tr key={row.desc}>
              <td>{row.cmd}</td>
              <td>{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
