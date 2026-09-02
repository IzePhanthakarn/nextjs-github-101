export type ObjectNode = {
  type: string;
  name: string;
  children?: ObjectNode[];
};

function ObjectChildren({ nodes }: Readonly<{ nodes: ObjectNode[] }>) {
  return (
    <div className="og-children">
      {nodes.map((node) => (
        <div key={node.name}>
          <div className="og-node">
            <span className="og-type">{node.type}</span>
            <span className="og-name">{node.name}</span>
          </div>
          {node.children && <ObjectChildren nodes={node.children} />}
        </div>
      ))}
    </div>
  );
}

export default function ObjectGraph({
  root,
  meta,
}: Readonly<{
  root: ObjectNode;
  meta?: string;
}>) {
  return (
    <div className="objgraph">
      <div className="og-commit">
        <span className="tag">{root.type}</span>
        <span className="og-name">{root.name}</span>
        {meta && <span className="og-meta">{meta}</span>}
      </div>
      {root.children && <ObjectChildren nodes={root.children} />}
    </div>
  );
}
