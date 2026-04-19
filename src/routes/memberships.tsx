import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CheckCircle2, Zap } from "lucide-react";
import portrait from "@/assets/member-portrait.jpg";
import performance from "@/assets/performance.jpg";

export const Route = createFileRoute("/memberships")({
  head: () => ({
    meta: [
      { title: "Memberships — Kinetic" },
      {
        name: "description",
        content:
          "Choose your tier of evolution. Each membership is a blueprint for physical and mental mastery, hosted within our curated sanctuaries.",
      },
      { property: "og:title", content: "The Architecture of Discipline — Kinetic" },
      { property: "og:description", content: "Tiered memberships for serious practitioners." },
    ],
  }),
  component: MembershipsPage,
});

const tiers = [
  {
    level: "01",
    name: "Foundations",
    price: "$180",
    cta: "Select Foundations",
    dark: false,
    features: [
      "Unlimited access to all cardio and strength zones",
      "Access to locker rooms and rainfall showers",
      "Two Kinetic guest passes per month",
    ],
  },
  {
    level: "02",
    name: "Performance",
    price: "$260",
    cta: "Upgrade to Performance",
    dark: true,
    recommended: true,
    features: [
      "Everything in Foundations plus priority booking",
      "Weekly semi-private functional training sessions",
      "Digital performance tracking & biometric analysis",
      "Sauna and cold plunge sanctuary access",
    ],
  },
  {
    level: "03",
    name: "Elite",
    price: "$450",
    cta: "Apply for Elite",
    dark: false,
    elite: true,
    features: [
      "Global access to all Kinetic Sanctuaries worldwide",
      "Dedicated personal performance concierge",
      "Monthly nutritional consultation & meal prep credit",
      "Private hyper-recovery suite reservations",
    ],
  },
];

const standards = [
  { n: "01", title: "Atmospheric Design", body: "Every sanctuary is designed with acoustic treatments and filtered air to provide a sensory-focused training environment." },
  { n: "02", title: "Elite Equipment", body: "Custom-fabricated machines designed for biomechanical precision. No compromises on movement quality." },
  { n: "03", title: "Recovery Integration", body: "Motion is only half the equation. Our recovery suites feature medical-grade cryotherapy and infrared heat." },
];

function MembershipsPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pt-12 pb-16 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="eyebrow">Refinement Through Motion</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[0.95] md:text-6xl">
            THE ARCHITECTURE<br />OF DISCIPLINE.
          </h1>
          <p className="mt-6 max-w-md text-sm text-muted-foreground">
            Choose your tier of evolution. Each membership is a blueprint for physical and mental mastery, hosted within our curated sanctuaries.
          </p>
        </div>
        <img
          src={portrait}
          alt="Kinetic member"
          loading="lazy"
          width={900}
          height={1024}
          className="h-[420px] w-[320px] rounded-lg object-cover shadow-[var(--shadow-card)]"
        />
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative rounded-lg p-7 shadow-[var(--shadow-card)] ${
                t.dark
                  ? "text-cream"
                  : t.elite
                    ? "bg-card"
                    : "bg-secondary"
              }`}
              style={t.dark ? { backgroundColor: "oklch(0.18 0.01 240)", color: "oklch(0.975 0.018 95)" } : undefined}
            >
              {t.recommended && (
                <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  Recommended
                </span>
              )}
              <p className={`text-xs uppercase tracking-widest ${t.dark ? "text-cream/60" : "text-muted-foreground"}`}>
                Level {t.level}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold">{t.name}</h3>
              <div className="mt-1 font-display text-4xl font-black">
                {t.price}
                <span className={`text-sm font-normal ${t.dark ? "text-cream/60" : "text-muted-foreground"}`}>/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    {t.dark ? (
                      <Zap className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    ) : (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    )}
                    <span className={t.dark ? "text-cream/80" : "text-muted-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-md py-3 text-sm font-medium transition ${
                  t.dark
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    : t.elite
                      ? "bg-foreground text-background hover:opacity-90"
                      : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                {t.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Kinetic Standard */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-black md:text-4xl">THE KINETIC STANDARD</h2>
          <div className="mt-8 space-y-7">
            {standards.map((s) => (
              <div key={s.n} className="grid grid-cols-[auto_1fr] gap-5">
                <span className="font-display text-xl text-muted-foreground/60">{s.n}</span>
                <div>
                  <h4 className="font-display text-lg font-bold">{s.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src={performance}
            alt="Performance training"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-square w-full rounded-lg object-cover"
          />
          <div className="absolute -bottom-4 -left-4 max-w-[230px] bg-accent p-4">
            <p className="font-display text-sm font-bold italic text-accent-foreground">
              "THE ONLY LIMIT IS THE BLUEPRINT YOU BUILD."
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
