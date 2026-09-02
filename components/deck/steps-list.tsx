export type Step = {
  no: string;
  label: string;
  cmd: string;
};

export default function StepsList({ steps }: Readonly<{ steps: Step[] }>) {
  return (
    <div className="steps">
      {steps.map((step) => (
        <div className="step" key={step.no}>
          <span className="no">{step.no}</span>
          <span className="label">{step.label}</span>
          <span className="cmd">{step.cmd}</span>
        </div>
      ))}
    </div>
  );
}
