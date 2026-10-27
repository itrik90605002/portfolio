"use client";

import { useEffect, useState } from "react";

// Highlights the nav item for the section currently in view.
export default function ActiveNav({ items }: { items: string[] }) {
  const [active, setActive] = useState(items[0].toLowerCase());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="side-nav" aria-label="Sections">
      <ol>
        {items.map((i, n) => {
          const id = i.toLowerCase();
          return (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? "active" : ""}>
                <span className="nav-num">{String(n + 1).padStart(2, "0")}</span>
                <span className="nav-text">{i}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
