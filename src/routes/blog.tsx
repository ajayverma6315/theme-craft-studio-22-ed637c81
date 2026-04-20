import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight } from "lucide-react";
import gymFloor from "@/assets/gym-floor-1.webp";
import gymRack from "@/assets/gym-rack.webp";
import gymYellow from "@/assets/gym-yellow-machines.webp";
import gymCardio from "@/assets/gym-cardio.webp";
import gymCable from "@/assets/gym-cable.webp";
import gymBench from "@/assets/gym-bench.webp";
import gymWindows from "@/assets/gym-windows.webp";
import gymPulley from "@/assets/gym-pulley.webp";
import gymWood from "@/assets/gym-wood-ceiling.webp";

const insights = [
  {
    tag: "Beginners",
    title: "Best Gym in Sikar for Beginners",
    body: "Starting fitness can feel confusing. VK Crossfit Gym makes it simple with trainer guidance, clean equipment, and beginner-friendly support. If you need the best gym in Sikar for beginners, this is where consistency starts.",
    image: gymFloor,
  },
  {
    tag: "Gym Guide",
    title: "How to Choose the Best Gym in Sikar",
    body: "Choose a gym with certified trainers, clean environment, proper equipment, flexible timings, and motivating members. VK Crossfit Gym combines all of these in one premium fitness center in Sikar.",
    image: gymWindows,
  },
  {
    tag: "Local",
    title: "Gym Near Me in Sikar: What to Check Before Joining",
    body: "If you search gym near me, check location, hygiene, machine quality, crowd level, trainer support, timings, and reviews. Joining the right gym saves time and increases consistency.",
    image: gymWood,
  },
  {
    tag: "Weight Loss",
    title: "Best Weight Loss Gym in Sikar",
    body: "For fat loss, you need more than treadmills. VK Crossfit Gym combines strength training, cardio, structured routines, and accountability to help members lose fat effectively.",
    image: gymCardio,
  },
  {
    tag: "Muscle Gain",
    title: "Muscle Gain Workout Basics",
    body: "To build muscle, focus on compound lifts, progressive overload, quality sleep, and protein-rich nutrition. A proper gym setup and trainer guidance accelerate results.",
    image: gymRack,
  },
  {
    tag: "Premium",
    title: "Why Premium Gyms Get Better Results",
    body: "Premium gyms create better discipline through cleaner spaces, stronger atmosphere, advanced equipment, and serious members. Better environment often leads to better consistency.",
    image: gymYellow,
  },
  {
    tag: "Routine",
    title: "Best Time to Join a Gym",
    body: "Morning workouts build routine and energy. Evening workouts help release stress after work. The best time is the one you can follow consistently.",
    image: gymBench,
  },
  {
    tag: "Personal Training",
    title: "Personal Training in Sikar: Is It Worth It?",
    body: "Yes, if you want faster progress. Personal training removes guesswork, corrects form, prevents mistakes, and builds a plan around your goals.",
    image: gymCable,
  },
  {
    tag: "Membership",
    title: "Gym Membership in Sikar: What to Look For",
    body: "Do not choose only by price. Compare trainer support, equipment quality, hygiene, timings, and long-term value before joining any gym in Sikar.",
    image: gymPulley,
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Fitness Insights | Best Gym in Sikar | VK Crossfit Gym" },
      {
        name: "description",
        content:
          "Fitness insights from VK Crossfit Gym — Sikar's premium gym. Read guides on beginners, weight loss, muscle gain, personal training and choosing the best gym in Sikar.",
      },
      { property: "og:title", content: "Fitness Insights | VK Crossfit Gym, Sikar" },
      {
        property: "og:description",
        content:
          "Practical fitness advice from Sikar's premium gym — beginners, weight loss, muscle gain, personal training and more.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [featured, ...rest] = insights;
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-charcoal/60 to-background">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Fitness Insights
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
            Best Gym in Sikar — <span className="text-primary">Real Advice.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/70 md:text-lg">
            Honest guides on choosing a gym, losing fat, building muscle and
            training the right way — from the team at VK Crossfit Gym, Sikar.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <article className="group grid overflow-hidden rounded-2xl border border-white/10 bg-charcoal/40 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden md:h-auto">
              <img
                src={featured.image}
                alt={featured.title}
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {featured.tag}
              </span>
              <h2 className="mt-3 font-display text-3xl uppercase leading-tight tracking-tight text-foreground md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-foreground/75">{featured.body}</p>
              <a
                href="https://wa.me/918005706894?text=Hi%20VK%20Crossfit%20Gym%2C%20I%20want%20to%20join."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
              >
                Book free trial <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>

          {/* Insight grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-charcoal/40 transition hover:border-primary/40"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur">
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl uppercase leading-tight tracking-tight text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {post.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 bg-charcoal/30">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Join VK Crossfit Gym Today
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-tight text-foreground md:text-5xl">
            Searching for gyms in Sikar? <span className="text-primary">Start here.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            If you are searching for gyms in Sikar, a premium fitness center, or
            the best gym in Sikar — visit VK Crossfit Gym and start today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/918005706894?text=Hi%20VK%20Crossfit%20Gym%2C%20I%20want%20a%20free%20trial."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
            >
              Book Free Trial
            </a>
            <Link
              to="/faq"
              className="rounded-md border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground transition hover:border-primary/60 hover:text-primary"
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
