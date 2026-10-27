import { profile, type LinkItem } from "@/data/profile";
import { ArrowUpRight, Download, Mail, SocialIcon } from "@/components/Icons";
import ActiveNav from "@/components/ActiveNav";

const sections = ["About", "Experience", "Projects", "Skills", "Education"];

const levels = { Strong: 3, Comfortable: 2, Familiar: 1 };

const visible = <T extends { href: string }>(links: T[]) => links.filter((l) => l.href);
const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Links({ links }: { links: LinkItem[] }) {
  if (visible(links).length === 0) return null;
  return (
    <ul className="links">
      {visible(links).map((l) => (
        <li key={l.label}>
          <a href={l.href} {...ext(l.href)}>
            {l.label}
            <ArrowUpRight size={11} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function Heading({ n, title }: { n: number; title: string }) {
  return (
    <header className="heading">
      <span className="heading-num">{String(n).padStart(2, "0")}</span>
      <h2>{title}</h2>
      <span className="heading-rule" />
    </header>
  );
}

function MoreLink({ href, children }: { href: string; children: string }) {
  if (!href) return null;
  return (
    <a href={href} className="more" {...ext(href)}>
      {children}
      <ArrowUpRight size={14} />
    </a>
  );
}

export default function Home() {
  const p = profile;
  const featured = p.projects.find((pr) => pr.featured);
  const others = p.projects.filter((pr) => pr !== featured);

  return (
    <div className="layout">
      {/* ── Left: fixed panel ── */}
      <aside className="side">
        <div>
          <div className="top-row">
            <ul className="top-links" aria-label="GitHub and LinkedIn">
              {visible(p.socials)
                .filter((s) => s.icon === "github" || s.icon === "linkedin")
                .map((s) => (
                  <li key={s.label}>
                    <a href={s.href} {...ext(s.href)} aria-label={s.label} title={s.label}>
                      <SocialIcon name={s.icon} size={16} />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <h1>
            <a href="#top">{p.name}</a>
          </h1>
          <p className="role">{p.role}</p>
          <p className="tagline">{p.tagline}</p>
          <p className="status">
            <span className="dot" />
            {p.availability}
          </p>
          <ActiveNav items={sections} />
        </div>

        <div className="side-bottom">
          <div className="cta">
            <a href={p.resume} className="btn primary" target="_blank" rel="noopener noreferrer">
              <Download size={14} /> Résumé
            </a>
            <a href={`mailto:${p.email}`} className="btn">
              <Mail size={14} /> Email
            </a>
          </div>
          <ul className="socials" aria-label="Profiles">
            {visible(p.socials).map((s) => (
              <li key={s.label}>
                <a href={s.href} {...ext(s.href)} aria-label={s.label} title={s.label}>
                  <SocialIcon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* ── Right: content ── */}
      <main id="top" className="content">
        <section id="about" className="section">
          <Heading n={1} title="About" />
          {p.about.map((para, i) => (
            <p key={i} className="para">
              {para}
            </p>
          ))}
          <dl className="stats">
            {p.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
          {p.learning && (
            <p className="now">
              <span>Currently learning</span>
              {p.learning}
            </p>
          )}
        </section>

        <section id="experience" className="section">
          <Heading n={2} title="Experience" />
          <ol className="timeline">
            {p.experience.map((e) => (
              <li key={e.role + e.org}>
                <div className="tl-meta">
                  <span>{e.period}</span>
                  {e.place && <span>{e.place}</span>}
                </div>
                <h3>
                  {e.role}{" "}
                  <a href={e.href || undefined} {...ext(e.href)} className="org">
                    @ {e.org}
                  </a>
                </h3>
                <p className="body">{e.summary}</p>
                {e.points.length > 0 && (
                  <ul className="points">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                )}
                <Tags items={e.tech} />
                <Links links={e.links} />
              </li>
            ))}
          </ol>
          <MoreLink href={p.resume}>Full résumé (PDF)</MoreLink>
        </section>

        <section id="projects" className="section">
          <Heading n={3} title="Projects" />
          {featured && (
            <article className="featured">
              <div className="shot">
                {featured.image ? <img src={featured.image} alt={featured.title} loading="lazy" /> : <span>{featured.title}</span>}
                <em>Featured</em>
              </div>
              <div className="featured-body">
                <h3>{featured.title}</h3>
                <p className="body">{featured.summary}</p>
                {featured.highlights.length > 0 && (
                  <ul className="highlights">
                    {featured.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
                <Tags items={featured.tech} />
                <Links links={featured.links} />
              </div>
            </article>
          )}
          <div className="grid">
            {others.map((pr) => (
              <article key={pr.title} className="card">
                {pr.image && <img src={pr.image} alt="" className="card-img" loading="lazy" />}
                <h3>{pr.title}</h3>
                <p className="body">{pr.summary}</p>
                <Tags items={pr.tech} />
                <Links links={pr.links} />
              </article>
            ))}
          </div>
          <MoreLink href={p.allProjects}>All projects on GitHub</MoreLink>
        </section>

        <section id="skills" className="section">
          <Heading n={4} title="Skills" />
          <div className="core-stack">
            <span className="core-label">Core stack</span>
            <ul>
              {p.coreStack.map((c) => (
                <li key={c.name}>
                  <strong>{c.name}</strong>
                  <small>{c.note}</small>
                </li>
              ))}
            </ul>
          </div>
          <div className="skill-grid">
            {p.skills.map((g) => {
              const filled = levels[g.level as keyof typeof levels] ?? 1;
              return (
                <div key={g.area} className="skill-card">
                  <div className="skill-head">
                    <h3>{g.area}</h3>
                    <span className="meter" title={g.level}>
                      {[1, 2, 3].map((i) => (
                        <i key={i} className={i <= filled ? "on" : ""} />
                      ))}
                      <em>{g.level}</em>
                    </span>
                  </div>
                  <Tags items={g.items} />
                </div>
              );
            })}
          </div>
        </section>

        <section id="education" className="section">
          <Heading n={5} title="Education" />
          <ol className="edu">
            {p.education.map((ed) => (
              <li key={ed.title}>
                <div className="tl-meta">
                  {ed.period && <span>{ed.period}</span>}
                  <span>{ed.note}</span>
                </div>
                <h3>{ed.title}</h3>
                {ed.place && <p className="body">{ed.place}</p>}
                {ed.courses.length > 0 && <Tags items={ed.courses} />}
              </li>
            ))}
          </ol>

          <div className="two-col">
            <div>
              <h3 className="sub">Certifications</h3>
              <ul className="rows">
                {p.certifications.map((c) => (
                  <li key={c.title}>
                    <a href={c.href || undefined} {...ext(c.href)}>
                      <span>
                        <strong>{c.title}</strong>
                        {c.issuer && <small>{c.issuer}</small>}
                      </span>
                      {c.href && <ArrowUpRight size={13} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="sub">Achievements</h3>
              <ul className="rows">
                {p.achievements.map((a) => (
                  <li key={a.title}>
                    <a href={a.href || undefined} {...ext(a.href)}>
                      <span>
                        <strong>{a.title}</strong>
                        <small>{a.detail}</small>
                      </span>
                      {a.href && <ArrowUpRight size={13} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="contact">
          <p className="mono-label">What&apos;s next</p>
          <h2>Have a role in mind?</h2>
          <p>I&apos;m looking for full-time AI and Java backend roles starting 2027. Email is the best way to reach me.</p>
          <div className="cta">
            <a href={`mailto:${p.email}`} className="btn primary">
              <Mail size={14} /> {p.email}
            </a>
            <a href={p.resume} className="btn" target="_blank" rel="noopener noreferrer">
              <Download size={14} /> Résumé
            </a>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} {p.name} · {p.location} · Built with Next.js
        </footer>
      </main>
    </div>
  );
}
