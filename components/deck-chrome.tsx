"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { DECK_ROUTES } from "@/components/deck-routes";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function DeckChrome({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname();
  const index = Math.max(
    0,
    DECK_ROUTES.findIndex((route) => route.path === pathname),
  );
  const current = DECK_ROUTES[index];
  const prev = DECK_ROUTES[index - 1];
  const next = DECK_ROUTES[index + 1];

  return (
    <>
      <div className="topbar">
        <div className="topbar-label">
          <span className="eyebrow section">{current.section}</span>
          <span className="eyebrow">{current.topic}</span>
        </div>
        <div className="dots">
          {DECK_ROUTES.map((route, i) => (
            <Link
              key={route.path}
              href={route.path}
              className={`dot${i === 0 ? " is-home" : ""}${i === index ? " is-active" : ""}`}
              aria-label={`Go to slide ${i + 1}: ${route.topic}`}
              aria-current={i === index ? "page" : undefined}
            />
          ))}
        </div>
      </div>

      <div className="viewport">
        <main className="slide">{children}</main>
      </div>

      <div className="nav">
        {prev ? (
          <Link href={prev.path} className="navbtn" aria-label="Previous slide">
            ← prev
          </Link>
        ) : (
          <span className="navbtn" aria-disabled="true">
            ← prev
          </span>
        )}
        <span className="count mono">
          {pad(index + 1)} / {pad(DECK_ROUTES.length)}
        </span>
        {next ? (
          <Link href={next.path} className="navbtn next-btn" aria-label="Next slide">
            next →
          </Link>
        ) : (
          <span className="navbtn next-btn" aria-disabled="true">
            next →
          </span>
        )}
      </div>
    </>
  );
}
