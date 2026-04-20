import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, Calendar } from "lucide-react";
import gymFloor from "@/assets/gym-floor-1.webp";
import gymRack from "@/assets/gym-rack.webp";
import gymYellow from "@/assets/gym-yellow-machines.webp";
import gymCardio from "@/assets/gym-cardio.webp";
import gymCable from "@/assets/gym-cable.webp";
import gymBench from "@/assets/gym-bench.webp";

const posts = [
  {
    slug: "best-gym-in-sikar",
    title: "Why Iron Forge is the Best Gym in Sikar for Real Results",
    excerpt:
      "From imported equipment to certified trainers — here's what makes Iron Forge the most trusted premium gym in Sikar for serious transformations.",
    image: gymFloor,
    date: "April 2026",
    tag: "Gym Guide",
  },
  {
    slug: "weight-loss-program-sikar",
    title: "How to Lose Fat Fast: A Beginner's Weight Loss Plan in Sikar",
    excerpt:
      "A practical fat-loss roadmap built around realistic Indian meals, simple cardio, and progressive strength training — designed for first-time gym goers.",
    image: gymCardio,
    date: "April 2026",
    tag: "Weight Loss",
  },
  {
    slug: "muscle-gain-guide",
    title: "Muscle Gain in 90 Days: The Honest Guide for Sikar Lifters",
    excerpt:
      "Hypertrophy, progressive overload, recovery and protein — everything you need to actually grow muscle without wasting months on the wrong split.",
    image: gymRack,
    date: "April 2026",
    tag: "Muscle Gain",
  },
  {
    slug: "personal-training-benefits",
    title: "Is Personal Training Worth It? 7 Reasons Sikar Members Say Yes",
    excerpt:
      "From form correction to accountability, here's why one-on-one coaching delivers 3x faster results than training alone — and how to choose the right trainer.",
    image: gymCable,
    date: "April 2026",
    tag: "Personal Training",
  },
  {
    slug: "women-fitness-sikar",
    title: "Women's Fitness in Sikar: Strength Training Without Bulk",
    excerpt:
      "A no-nonsense guide for women who want to get stronger, leaner and more confident — busting the biggest myth that keeps women out of the weights section.",
    image: gymYellow,
    date: "March 2026",
    tag: "Women Fitness",
  },
  {
    slug: "beginner-gym-tips",
    title: "First Day at the Gym? 10 Tips Every Beginner in Sikar Should Know",
    excerpt:
      "Walking into a gym for the first time feels intimidating. Here's exactly what to wear, what to do, and what to avoid so you actually come back tomorrow.",
    image: gymBench,
    date: "March 2026",
    tag: "Beginners",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Fitness Blog | Best Gym in Sikar — Iron Forge Fitness" },
      {
        name: "description",
        content:
          "Fitness, weight loss, muscle gain and training guides from Iron Forge — Sikar's premium gym. Real advice from certified trainers.",
      },
      { property: "og:title", content: "Iron Forge Blog — Sikar's Premium Gym" },
      {
        property: "og:description",
        content: "Workout, nutrition and transformation guides from Sikar's top trainers.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <SiteLayout>
      <section className="border-b border-white/10 bg-gradient-to-b from-charcoal/60 to-background">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Iron Forge Journal
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
            Train Smarter. <span className="text-primary">Live Stronger.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/70 md:text-lg">
            Real fitness advice from Sikar's top coaches — workouts, nutrition,
            transformations and the mindset behind lasting results.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          {/* Featured */}
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
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-foreground/60">
                <span className="text-primary">{featured.tag}</span>
                <span className="h-1 w-1 rounded-full bg-foreground/40" />
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" /> {featured.date}
                </span>
              </div>
              <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-tight text-foreground md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-foreground/70">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                Read article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </article>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-xl border border-white/10 bg-charcoal/40 transition hover:border-primary/40"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-widest text-foreground/60">
                    <span className="text-primary">{post.tag}</span>
                    <span className="h-1 w-1 rounded-full bg-foreground/40" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl uppercase leading-tight tracking-tight text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm text-foreground/70">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-charcoal/30">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-20">
          <h2 className="font-display text-3xl uppercase tracking-tight text-foreground md:text-5xl">
            Ready to start your <span className="text-primary">transformation?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            Book a free trial session at Sikar's premium gym and experience the
            Iron Forge difference in person.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/919876543210?text=Hi%20Iron%20Forge%2C%20I%20want%20a%20free%20trial."
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
