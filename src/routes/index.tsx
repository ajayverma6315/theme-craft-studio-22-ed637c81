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
    body: "Preparing the central nervous system for efficient output through specific mobility and cognitive intent before any movement is loaded.",
  },
  {
    n: "02",
    title: "Load Management",
    body: "Utilizing precise tracking to ensure every set is calibrated to your current state, preventing plateaus and overreaching.",
  },
  {
    n: "03",
    title: "Systemic Reset",
    body: "Integrating deep neuro-muscular system down-regulation as a non-negotiable closing ritual for every session.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-12 pb-20 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-6">— The Kinetic Way</p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              PRECISION<br />IN MOTION.
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              A high-performance coaching sanctuary. We train the human design through
              deliberate methodology and undivided attention to your specific physical
              blueprint.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/memberships"
                className="rounded-md bg-gradient-to-br from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
              >
                Start Your Journey
              </Link>
              <Link
                to="/philosophy"
                className="rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                View Methodology
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
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
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
            <div className="relative flex h-full flex-col justify-end p-8">
              <p className="eyebrow !text-accent">— First Class</p>
              <h3 className="mt-2 font-display text-3xl font-bold text-cream">Personal Training</h3>
              <p className="mt-2 max-w-md text-sm text-cream/70">
                Tailored one-on-one coaching designed for your specific physiological output.
              </p>
              <Link
                to="/workouts"
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-accent"
              >
                Explore Coaching <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>

          <article className="rounded-lg bg-card p-7 shadow-[var(--shadow-card)]">
            <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded bg-primary" />
            <h3 className="font-display text-xl font-bold">Performance Lab</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Advanced biometric testing, VO2 max analysis, and neural tracking to measure micro-progress.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Biometric tagging
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> VO2 max mapping
              </li>
            </ul>
            <Link
              to="/workouts"
              className="mt-6 block border-t border-primary pt-3 text-center text-xs font-semibold uppercase tracking-widest text-primary"
            >
              Laboratory Details
            </Link>
          </article>

          <article className="rounded-lg bg-card p-7 shadow-[var(--shadow-card)]">
            <p className="eyebrow">— Restoration</p>
            <h3 className="mt-2 font-display text-2xl font-bold">The Recovery Sanctuary</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              High-performance culture requires high-resolution recovery. Our sanctuary features cryo &amp; plunge therapy, infrared sauna, and lymphatic drainage.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded border border-border bg-secondary px-3 py-1">Cryotherapy</span>
              <span className="rounded border border-border bg-secondary px-3 py-1">Infrared</span>
              <span className="rounded border border-border bg-secondary px-3 py-1">Massage</span>
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

      {/* Thought Before Throughput */}
      <section className="bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-black leading-[1] md:text-5xl">
              THOUGHT<br />BEFORE<br />THROUGHPUT.
            </h2>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              We reject the "more is more" philosophy of modern fitness. True kinetic
              mastery comes from deliberate, precise intention in every contraction.
            </p>
            <Link
              to="/philosophy"
              className="mt-6 inline-flex items-center gap-3 border-b border-primary pb-1 text-sm font-medium text-primary"
            >
              Our Philosophy <span className="h-px w-8 bg-primary" />
            </Link>
          </div>
          <div className="space-y-8">
            {principles.map((p) => (
              <div key={p.n} className="grid grid-cols-[auto_1fr] gap-5">
                <span className="font-display text-2xl font-bold text-muted-foreground/60">{p.n}</span>
                <div>
                  <h4 className="font-display text-lg font-bold">{p.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Member Voices</p>
            <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">
              WORDS FROM<br />THE FLOOR.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            What members say after six months inside the sanctuary.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { q: "I came in chasing aesthetics. I left with a body that performs. Kinetic rewires how you think about training.", n: "Alexander Vance", r: "Performance Member · 18 mo" },
            { q: "The 1:1 attention is unmatched. Marcus rebuilt my squat from the ground up — no plate ego, just precision.", n: "Priya Shah", r: "Elite Member · 2 yr" },
            { q: "The recovery suite alone is worth the membership. Cryo, infrared, and a coach who actually reads your bloodwork.", n: "James Okafor", r: "Foundations Member · 8 mo" },
          ].map((t) => (
            <figure key={t.n} className="rounded-lg bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="font-display text-3xl leading-none text-primary">"</div>
              <blockquote className="mt-2 text-sm leading-relaxed text-foreground/90">{t.q}</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display text-sm font-bold">{t.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[auto_1fr]">
          <div>
            <p className="eyebrow">Frequently Asked</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-[1] md:text-5xl">
              QUESTIONS,<br />ANSWERED.
            </h2>
          </div>
          <div className="divide-y divide-border">
            {[
              { q: "Do I need prior training experience to join?", a: "No. Every member begins with a movement assessment so your prescription is built around your current capacity, not someone else's." },
              { q: "How is Kinetic different from a regular gym?", a: "We are a coached facility, not an open gym. Membership includes structured programming, biometric tracking, and access to recovery infrastructure." },
              { q: "Can I bring guests?", a: "Foundations members receive two guest passes monthly. Performance and Elite tiers include unlimited curated guest access by appointment." },
              { q: "What is the cancellation policy?", a: "Memberships are month-to-month with a 30-day notice. We never lock anyone into a contract — discipline shouldn't require legal compulsion." },
            ].map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                  {f.q}
                  <span className="text-2xl text-primary transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream" style={{ backgroundColor: "oklch(0.18 0.01 240)" }}>
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-4xl font-black md:text-5xl" style={{ color: "oklch(0.975 0.018 95)" }}>
            ARE YOU READY FOR<br />REFINEMENT?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm" style={{ color: "oklch(0.75 0.02 95)" }}>
            Limited availability for select personal coaching. Apply for sanctuary membership today.
          </p>
          <Link
            to="/memberships"
            className="mt-8 inline-block rounded-md bg-gradient-to-br from-primary to-accent px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg"
          >
            Apply For Membership
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
