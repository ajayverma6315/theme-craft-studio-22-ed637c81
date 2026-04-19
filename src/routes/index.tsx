import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import heroGym from "@/assets/hero-gym.jpg";
import personalTraining from "@/assets/personal-training.jpg";
import recovery from "@/assets/recovery.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kinetic — Precision in Motion" },
      {
        name: "description",
        content:
          "A high-performance coaching sanctuary. We train the human design through deliberate methodology and undivided attention.",
      },
      { property: "og:title", content: "Kinetic — Precision in Motion" },
      {
        property: "og:description",
        content: "Engineered services for the disciplined elite.",
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "12k+", label: "Members coached" },
  { value: "98%", label: "Retention rate" },
  { value: "1:1", label: "Coaching ratio" },
  { value: "24/7", label: "Sanctuary access" },
];

const principles = [
  {
    n: "01",
    title: "Neural Priming",
    body: "Preparing the central nervous system for efficient output through specific mobility and cognitive intent before any load is introduced.",
  },
  {
    n: "02",
    title: "Load Management",
    body: "Precise tracking calibrates every set to your current state — preventing plateaus and overreaching with surgical accuracy.",
  },
  {
    n: "03",
    title: "Systemic Reset",
    body: "Deep neuro-muscular down-regulation as a non-negotiable closing ritual. Recovery is engineered, never assumed.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-12 pb-20 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-6">— The Kinetic Protocol</p>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              The Apex of<br /><em className="italic">Human Engineering.</em>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Standard gyms focus on volume. We focus on your specific
              biological blueprint. Experience 1:1 coaching where data meets
              discipline.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/memberships"
                className="rounded-md bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
              >
                Request an Invitation
              </Link>
              <Link
                to="/philosophy"
                className="rounded-md border border-border bg-card px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-secondary"
              >
                The Protocol
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroGym}
              alt="Kinetic sanctuary gym interior"
              width={1600}
              height={1024}
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-6 py-12 md:grid-cols-4 md:divide-x">
          {stats.map((s, i) => (
            <div key={s.label} className={i > 0 ? "md:pl-8" : ""}>
              <div className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineered Services */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="eyebrow">Engineered Services</p>
          <div className="mt-2 h-0.5 w-12 bg-primary" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="group relative col-span-2 overflow-hidden rounded-lg bg-[oklch(0.25_0.02_220)] text-cream md:col-span-2">
            <img
              src={personalTraining}
              alt="Personal training illustration"
              loading="lazy"
              width={1024}
              height={768}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="relative flex h-full flex-col justify-end p-10">
              <p className="eyebrow !text-accent">— Bespoke Programming</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-cream md:text-4xl">
                Bespoke Programming
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/75">
                One-on-one load management tailored to your neural output —
                engineered around your biology, not a template.
              </p>
              <Link
                to="/workouts"
                className="mt-6 inline-flex items-center gap-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent"
              >
                The Protocol <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>

          <article className="rounded-lg bg-card p-8 shadow-[var(--shadow-card)]">
            <p className="eyebrow">— Diagnostics</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Biometric Mapping</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              VO2 max and neural tracking to eliminate the guesswork of
              progress. Data-led calibration of every protocol.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Biometric tagging
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-primary" /> VO2 max mapping
              </li>
            </ul>
            <Link
              to="/workouts"
              className="mt-7 block border-t border-primary pt-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary"
            >
              Laboratory Details
            </Link>
          </article>

          <article className="rounded-lg bg-card p-8 shadow-[var(--shadow-card)]">
            <p className="eyebrow">— Restoration</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Systemic Restoration</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Cryotherapy and lymphatic drainage to down-regulate the nervous
              system. Recovery treated with the same precision as performance.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.15em]">
              <span className="rounded border border-border bg-secondary px-3 py-1.5">Cryotherapy</span>
              <span className="rounded border border-border bg-secondary px-3 py-1.5">Infrared</span>
              <span className="rounded border border-border bg-secondary px-3 py-1.5">Lymphatic</span>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg md:col-span-2">
            <img
              src={recovery}
              alt="Recovery sanctuary"
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </article>
        </div>
      </section>

      {/* Thought Before Execution */}
      <section className="bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <p className="eyebrow">— The Philosophy</p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.02] md:text-6xl">
              Reject the <em className="italic">Noise.</em>
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              In an industry obsessed with "more," we advocate for "better."
              High-performance culture requires high-resolution recovery. Every
              movement at Kinetic is a deliberate choice — not a repetitive
              chore.
            </p>
            <Link
              to="/philosophy"
              className="mt-8 inline-flex items-center gap-3 border-b border-primary pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary"
            >
              The Full Protocol <span className="h-px w-8 bg-primary" />
            </Link>
          </div>
          <div className="space-y-10">
            {principles.map((p) => (
              <div key={p.n} className="grid grid-cols-[auto_1fr] gap-6 border-b border-border pb-10 last:border-0 last:pb-0">
                <span className="font-display text-4xl font-black leading-none text-primary md:text-5xl">
                  {p.n}
                </span>
                <div>
                  <h4 className="font-display text-xl font-bold">{p.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">— The Inner Circle</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
              Member <em className="italic">Perspectives.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Quiet observations from inside the sanctuary — six months and beyond.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { q: "Kinetic didn't just change my physique; it changed how I approach my entire day. It's the difference between being 'tired' and being 'highly tuned'.", n: "Alexander Vance", r: "Performance Member · 18 mo" },
            { q: "The 1:1 attention is unmatched. Marcus rebuilt my squat from the ground up — no plate ego, just precision and patience.", n: "Priya Shah", r: "Elite Member · 2 yr" },
            { q: "I sleep deeper. I think clearer. The recovery suite alone is worth the membership — and a coach who actually reads your bloodwork.", n: "James Okafor", r: "Foundations Member · 8 mo" },
          ].map((t) => (
            <figure key={t.n} className="flex flex-col rounded-lg bg-card p-10 shadow-[var(--shadow-card)]">
              <div className="font-display text-6xl italic leading-none text-primary">"</div>
              <blockquote className="mt-6 flex-1 font-display text-lg italic leading-relaxed text-foreground/90">
                {t.q}
              </blockquote>
              <figcaption className="mt-10 border-t border-border pt-5">
                <div className="font-display text-base font-semibold">{t.n}</div>
                <div className="mt-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.r}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[auto_1fr] lg:py-32">
          <div>
            <p className="eyebrow">— Frequently Asked</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
              Questions,<br /><em className="italic">answered.</em>
            </h2>
          </div>
          <div className="divide-y divide-border">
            {[
              { q: "Do I need prior training experience to join?", a: "No. Every member begins with a movement assessment so your protocol is built around your current capacity, not someone else's." },
              { q: "How is Kinetic different from a regular gym?", a: "We are a coached sanctuary, not an open gym. Membership includes bespoke programming, biometric mapping, and access to systemic restoration." },
              { q: "Can I bring guests?", a: "Foundations members receive two guest passes monthly. Performance and Elite tiers include unlimited curated guest access by appointment." },
              { q: "What is the cancellation policy?", a: "Memberships are month-to-month with a 30-day notice. We never lock anyone into a contract — discipline shouldn't require legal compulsion." },
            ].map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold">
                  {f.q}
                  <span className="text-2xl text-primary transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "oklch(0.22 0.008 250)" }}>
        <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
          <p className="eyebrow" style={{ color: "oklch(0.55 0.09 160)" }}>— Membership</p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-6xl" style={{ color: "oklch(0.965 0.012 85)" }}>
            Are you ready for<br /><em className="italic">refinement?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed" style={{ color: "oklch(0.78 0.015 85)" }}>
            Limited availability for select personal coaching. Apply for
            sanctuary membership today.
          </p>
          <Link
            to="/memberships"
            className="mt-10 inline-block rounded-md bg-primary px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
          >
            Request an Invitation
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
