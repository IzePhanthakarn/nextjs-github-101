import { Fragment } from "react";

export type FlowBox = {
  name: string;
  sub: string;
};

export default function FlowDiagram({
  boxes,
  arrowCommands,
}: Readonly<{
  boxes: FlowBox[];
  arrowCommands: string[];
}>) {
  return (
    <div className="flow">
      {boxes.map((box, i) => (
        <Fragment key={box.name}>
          <div className="flow-box">
            <span className="name">{box.name}</span>
            <span className="sub">{box.sub}</span>
          </div>
          {i < arrowCommands.length && (
            <div className="flow-arrow">
              <span className="cmd">{arrowCommands[i]}</span>
              <div className="line" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
