import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { Activity, Heart, Zap, RefreshCw, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/workouts")({
  head: () => ({
    meta: [
      { title: "Weekly Schedule — Kinetic" },
      {
        name: "description",
        content:
          "Curated movement experiences designed for the disciplined elite. Browse our weekly schedule of strength, cardio and flexibility classes.",
      },
      { property: "og:title", content: "Weekly Schedule — Kinetic" },
      {
        property: "og:description",
        content: "Curated movement experiences for the disciplined elite.",
      },
    ],
  }),
  component: WorkoutsPage,
});

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;
const filters = ["All Classes", "Strength", "Cardio", "Flexibility"] as const;

type Cls = {
  category: string;
  time: string;
  title: string;
  desc: string;
  coach: string;
  icon: typeof Zap;
  type: (typeof filters)[number];
};

const featured = {
  tag: "STRENGTH • MASTERCLASS",
  time: "06:00 — 07:30",
  title: "Hypertrophic Foundations",
  desc: "A technical deep-dive into mechanical tension and metabolic stress for advanced practitioners.",
  coach: "Marcus Thorne",
};

const classes: Cls[] = [
  { category: "HIIT", time: "08:00", title: "Kinetic Pulse", desc: "High-frequency intervals designed for cardiovascular peak performance.", coach: "Elena Rodriguez", icon: Zap, type: "Cardio" },
  { category: "FLEXIBILITY", time: "09:30", title: "Myofascial Release", desc: "Restorative session focused on soft tissue recovery and mobility.", coach: "Dr. Sarah Chen", icon: Heart, type: "Flexibility" },
  { category: "STRENGTH", time: "12:00", title: "Power Development", desc: "Focusing on explosive force production and compound movements.", coach: "Marcus Thorne", icon: Activity, type: "Strength" },
  { category: "CARDIO", time: "17:00", title: "Metabolic Engine", desc: "Steady-state conditioning to enhance aerobic capacity and endurance.", coach: "Elena Rodriguez", icon: RefreshCw, type: "Cardio" },
];

function WorkoutsPage() {
  const [day, setDay] = useState<(typeof days)[number]>("MON");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All Classes");
  const visible = classes.filter((c) => filter === "All Classes" || c.type === filter);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-8">
        <p className="eyebrow">Refinement Through Motion</p>
        <div className="mt-4 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <h1 className="font-display text-5xl font-black md:text-6xl">Weekly Schedule</h1>
          <p className="max-w-sm text-sm text-muted-foreground md:text-right">
            Curated movement experiences designed for the disciplined elite. Find your rhythm in our kinetic sanctuary.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  filter === f
                    ? "bg-accent/20 text-foreground border border-accent"
                    : "border border-border bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex gap-5 text-sm">
            {days.map((d) => (
              <button
                key={d}
                onClick={() => setDay(d)}
                className={`pb-1 font-medium tracking-wider transition ${
                  day === d
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-10 lg:grid-cols-2">
        {/* Featured */}
        <article className="rounded-lg bg-gradient-to-br from-secondary to-card p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between">
            <span className="rounded bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              {featured.tag}
            </span>
            <span className="text-sm text-muted-foreground">{featured.time}</span>
          </div>
          <h2 className="mt-8 font-display text-3xl font-bold">{featured.title}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{featured.desc}</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent" />
            <span className="text-sm font-medium">{featured.coach}</span>
          </div>
          <button className="mt-10 w-full rounded-md bg-gradient-to-r from-primary to-accent py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground">
            Reserve Space
          </button>
        </article>

        {/* Mini cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {visible.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="rounded-lg bg-card p-5 shadow-[var(--shadow-card)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{c.category}</span>
                  <span className="text-sm text-muted-foreground">{c.time}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{c.desc}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-3">
                  <span className="text-xs text-muted-foreground">{c.coach}</span>
                  <Icon className="h-4 w-4 text-primary" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Personal sanctuary */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid items-center gap-6 rounded-lg bg-foreground p-8 md:grid-cols-[1fr_auto]" style={{ color: "oklch(0.975 0.018 95)" }}>
          <div>
            <h3 className="font-display text-2xl font-bold">Personal Sanctuary</h3>
            <p className="mt-2 max-w-md text-sm" style={{ color: "oklch(0.75 0.02 95)" }}>
              Private 1-on-1 coaching for those who demand absolute precision in their training regimen.
            </p>
            <button className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
              Book Private Session <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
