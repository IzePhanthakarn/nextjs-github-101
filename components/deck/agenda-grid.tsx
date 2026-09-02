import Link from "next/link";
import { DECK_ROUTES } from "@/components/deck-routes";

export default function AgendaGrid() {
  const topics = DECK_ROUTES.slice(1);

  return (
    <nav className="agenda" aria-label="Agenda">
      {topics.map((route, i) => (
        <Link key={route.path} href={route.path} className="agenda-item">
          <span className="n">{String(i + 1).padStart(2, "0")}</span>
          <span className="t">{route.topic}</span>
          <span className="e">{route.subtitle}</span>
        </Link>
      ))}
    </nav>
  );
}
