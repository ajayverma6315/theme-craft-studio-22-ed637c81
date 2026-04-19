import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Instagram, Linkedin } from "lucide-react";
import marcus from "@/assets/coach-marcus.jpg";
import elena from "@/assets/coach-elena.jpg";
import sarah from "@/assets/coach-sarah.jpg";

export const Route = createFileRoute("/coaches")({
  head: () => ({
    meta: [
      { title: "Coaches — Kinetic" },
      {
        name: "description",
        content:
          "Meet the practitioners behind Kinetic. Each coach is selected for technical mastery, scientific literacy, and the patience to refine.",
      },
      { property: "og:title", content: "The Practitioners — Kinetic" },
      { property: "og:description", content: "Meet the coaches who refine the kinetic standard." },
    ],
  }),
  component: CoachesPage,
});

const coaches = [
  {
    name: "Marcus Thorne",
    role: "Founder · Strength & Hypertrophy",
    bio: "Twenty years refining the architecture of force production. Marcus authored the Kinetic methodology and trains a select roster of elite practitioners.",
    img: marcus,
    creds: ["NSCA-CSCS", "MSc Sports Science", "Former Olympic Strength Lead"],
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Conditioning",
    bio: "Metabolic conditioning specialist with a background in elite track. Elena designs every cardio and HIIT prescription at Kinetic.",
    img: elena,
    creds: ["USATF Level 2", "Precision Nutrition L2", "VO2 Lab Certified"],
  },
  {
    name: "Dr. Sarah Chen",
    role: "Recovery & Mobility",
    bio: "Sports physician and movement therapist. Sarah leads the Recovery Sanctuary and oversees biomechanical assessment for every member.",
    img: sarah,
    creds: ["MD, Sports Medicine", "FRC Mobility Specialist", "Active Release Tech."],
  },
];

function CoachesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-12">
        <p className="eyebrow">The Practitioners</p>
        <div className="mt-4 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <h1 className="font-display text-5xl font-black leading-[0.95] md:text-6xl">
            COACHES,<br />NOT INSTRUCTORS.
          </h1>
          <p className="max-w-sm text-sm text-muted-foreground md:text-right">
            Each Kinetic coach is selected for technical mastery, scientific literacy, and the patience to refine — not the volume of their voice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          {coaches.map((c) => (
            <article key={c.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{c.role}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.bio}</p>
                <ul className="mt-4 space-y-1 text-xs text-muted-foreground">
                  {c.creds.map((cr) => (
                    <li key={cr} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary" /> {cr}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-4 w-4" /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-4 w-4" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Join the team */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-lg border border-border bg-secondary/60 p-10 text-center">
          <p className="eyebrow">Now Hiring</p>
          <h2 className="mt-3 font-display text-3xl font-black">Apply to coach at Kinetic.</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            We hire for craft over credentials. If you've spent a decade obsessing over movement, we want to meet you.
          </p>
          <a
            href="mailto:careers@kinetic.fit"
            className="mt-6 inline-block rounded-md bg-gradient-to-br from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            careers@kinetic.fit
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
