export default function SlideHead({
  index,
  title,
}: Readonly<{ index: string; title: string }>) {
  return (
    <div className="slide-head">
      <span className="idx mono">{index}</span>
      <h2>{title}</h2>
    </div>
  );
}
