import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/philosophy")({
  head: () => ({
    meta: [
      { title: "Philosophy — Kinetic" },
      {
        name: "description",
        content:
          "Our philosophy: thought before throughput. Read the principles that govern every program at Kinetic Sanctuary.",
      },
      { property: "og:title", content: "Philosophy — Kinetic" },
      { property: "og:description", content: "Thought before throughput. The Kinetic methodology." },
    ],
  }),
  component: PhilosophyPage,
});

const tenets = [
  {
    n: "I",
    title: "Stimulus, Not Stress",
    body: "Training is a stimulus that the body adapts to. Excessive stress without recovery produces regression. Every prescription respects the line between productive load and destructive volume.",
  },
  {
    n: "II",
    title: "Mastery of the Basic",
    body: "Before complexity, fluency. The squat, the hinge, the press, the pull, the carry — refined to a level that makes advanced movement effortless.",
  },
  {
    n: "III",
    title: "Recovery is Training",
    body: "Sleep, nutrition, and parasympathetic protocols are not auxiliary. They are the substrate on which adaptation occurs.",
  },
  {
    n: "IV",
    title: "Measured Progress",
    body: "If it cannot be measured, it cannot be improved. Every member receives a quantitative blueprint and quarterly recalibration.",
  },
];

function PhilosophyPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-12 text-center">
        <p className="eyebrow">Our Methodology</p>
        <h1 className="mt-4 font-display text-5xl font-black leading-[0.95] md:text-7xl">
          THOUGHT BEFORE<br />THROUGHPUT.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground">
          Kinetic exists to refine. We are an antidote to the noise of modern fitness — the
          shouting coaches, the algorithmic distraction, the volume-for-volume's-sake culture.
          What we offer instead is craft.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-2">
          {tenets.map((t) => (
            <div key={t.n} className="bg-card p-8">
              <div className="font-display text-4xl font-black text-primary/80">{t.n}</div>
              <h3 className="mt-4 font-display text-2xl font-bold">{t.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <blockquote className="font-display text-3xl font-bold leading-tight md:text-4xl">
            "We do not sell membership. We extend an invitation to a discipline."
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
            — Marcus Thorne, Founder
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
