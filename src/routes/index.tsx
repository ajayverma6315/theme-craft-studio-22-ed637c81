import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  CheckCircle2,
  Star,
  Users,
  Dumbbell,
  Clock,
  Award,
  MapPin,
  Phone,
  MessageCircle,
  Flame,
  Heart,
  Trophy,
  UserCheck,
  Sparkles,
} from "lucide-react";

import gymFloor1 from "@/assets/gym-floor-1.webp";
import gymWindows from "@/assets/gym-windows.webp";
import gymRack from "@/assets/gym-rack.webp";
import gymCardio from "@/assets/gym-cardio.webp";
import gymCable from "@/assets/gym-cable.webp";
import gymYellow from "@/assets/gym-yellow-machines.webp";
import gymBench from "@/assets/gym-bench.webp";
import gymWood from "@/assets/gym-wood-ceiling.webp";
import gymPulley from "@/assets/gym-pulley.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Gym in Sikar | VK Crossfit Gym — Premium Gym Sikar Rajasthan" },
      {
        name: "description",
        content:
          "VK Crossfit Gym is Sikar's premium gym. Imported equipment, certified trainers, weight loss & muscle gain programs. Open 6 AM – 11 PM. Book a free trial today.",
      },
      { property: "og:title", content: "VK Crossfit Gym — Best Premium Gym in Sikar" },
      {
        property: "og:description",
        content: "Real results, real equipment, real coaches in Sikar, Rajasthan.",
      },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: HomePage,
});

const stats = [
  { icon: Users, value: "500+", label: "Active Members" },
  { icon: Dumbbell, value: "Imported", label: "Premium Equipment" },
  { icon: Award, value: "Certified", label: "Expert Trainers" },
  { icon: Clock, value: "6AM – 11PM", label: "Open Daily" },
];

const programs = [
  { icon: Flame, title: "Weight Loss", desc: "Fat-burn protocols, HIIT, and nutrition guidance for visible results in 90 days." },
  { icon: Dumbbell, title: "Muscle Gain", desc: "Hypertrophy programming with progressive overload and recovery tracking." },
  { icon: Trophy, title: "Strength Training", desc: "Powerlifting fundamentals — squat, bench, deadlift coached by experts." },
  { icon: UserCheck, title: "Personal Training", desc: "1-on-1 coaching with custom plans, form correction, and accountability." },
  { icon: Heart, title: "Women's Fitness", desc: "Dedicated programs for toning, strength, and confidence in a safe space." },
  { icon: Sparkles, title: "Beginner Onboarding", desc: "First-time in a gym? We'll teach you every machine, every lift, step by step." },
];

const whyUs = [
  "Imported machines from world-class brands",
  "Spacious, premium interior with high ceilings",
  "Spotless, sanitised environment daily",
  "Certified trainers on the floor at all times",
  "Flexible memberships — no long lock-ins",
  "Dedicated cardio, strength & functional zones",
];

const reviews = [
  {
    name: "Rohit Sharma",
    role: "Member · 14 months",
    stars: 5,
    text: "Best gym in Sikar, hands down. Equipment is brand new, trainers actually correct your form, and the place is always clean. Lost 12 kg in 6 months.",
  },
  {
    name: "Pooja Agarwal",
    role: "Member · 8 months",
    stars: 5,
    text: "As a woman I felt completely safe and supported. The trainers are respectful and made my first gym experience really comfortable. Loving the results.",
  },
  {
    name: "Vikram Singh",
    role: "Member · 2 years",
    stars: 5,
    text: "I've tried 3 gyms in Sikar — VK Crossfit Gym is in a different league. Imported machines, AC, music, and coaches who care. Worth every rupee.",
  },
];

const pricing = [
  {
    name: "Monthly",
    price: "1,499",
    period: "/ month",
    perks: ["Full gym access", "Group classes", "Locker access", "Open 6AM–11PM"],
    cta: "Start Monthly",
  },
  {
    name: "Quarterly",
    price: "3,999",
    period: "/ 3 months",
    perks: ["Everything in Monthly", "1 free PT session", "Diet consultation", "Save ₹500"],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Yearly",
    price: "10,999",
    period: "/ 12 months",
    perks: ["Everything in Quarterly", "4 free PT sessions", "Body composition test", "Save ₹6,989"],
    cta: "Best Value",
  },
];

const wa = "https://wa.me/918005706894?text=Hi%20VK%20Crossfit%20Gym%2C%20I%20want%20to%20book%20a%20free%20trial.";

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={gymYellow}
          alt="VK Crossfit Gym premium gym floor in Sikar with yellow strength equipment"
          width={1600}
          height={1067}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/40 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="max-w-2xl rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Sikar's #1 Premium Gym
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]">
              Sikar's Premium Gym
              <span className="mt-2 block text-primary">For Real Results.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Build strength, lose fat, and transform your body with expert coaching
              and world-class imported equipment — right here in Sikar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Join Free Trial
              </a>
              <a
                href="tel:+918005706894"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur transition hover:border-primary/60 hover:text-primary"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-foreground/60">
              <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 fill-primary text-primary" /> 4.9 Google Rating</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> 500+ Members</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" /> Piprali Road, Sikar</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS BAR */}
      <section className="border-y border-white/10 bg-[oklch(0.13_0_0)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:divide-x md:divide-white/10">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className={`flex items-center gap-4 ${i > 0 ? "md:pl-8" : ""}`}>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-primary/30 bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-2xl text-foreground md:text-3xl">{s.value}</div>
                  <div className="text-[0.7rem] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* EXPLORE FACILITY — masonry */}
      <section id="facility" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">— The Facility</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">Explore VK Crossfit Gym</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Step inside Sikar's most equipped gym floor. Premium machines, free weights,
            and dedicated zones for every kind of training.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[
            { src: gymFloor1, alt: "Spacious gym floor with treadmills and benches in Sikar", span: "col-span-2 row-span-2 aspect-square md:aspect-auto" },
            { src: gymRack, alt: "Power rack and squat zone at VK Crossfit Gym Sikar", span: "aspect-square" },
            { src: gymCable, alt: "Cable cross-over machine at Sikar gym", span: "aspect-square" },
            { src: gymBench, alt: "Adjustable bench and dumbbell zone", span: "aspect-square" },
            { src: gymWood, alt: "Premium gym interior with wooden ceiling design", span: "aspect-square" },
            { src: gymWindows, alt: "Natural light strength training area", span: "col-span-2 aspect-[2/1]" },
            { src: gymCardio, alt: "Cardio section with elliptical and bike machines", span: "aspect-square" },
            { src: gymPulley, alt: "Pulley and lat machine zone Sikar", span: "aspect-square" },
          ].map((img) => (
            <figure
              key={img.alt}
              className={`group relative overflow-hidden rounded-lg border border-white/10 bg-card ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="border-y border-white/10 bg-[oklch(0.13_0_0)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">— Our Programs</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">Train With Purpose</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Whether your goal is fat loss, muscle, or just feeling better — we have a
              proven program to get you there.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-card p-7 transition hover:border-primary/40 hover:bg-card/80"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/40 to-transparent" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative">
            <img
              src={gymRack}
              alt="Premium yellow strength equipment at VK Crossfit Gym Sikar"
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-[var(--shadow-card)]"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-lg border border-primary/30 bg-primary px-6 py-5 text-primary-foreground shadow-[var(--shadow-glow)] md:block">
              <div className="font-display text-3xl">4.9 ★</div>
              <div className="text-[0.7rem] font-bold uppercase tracking-widest">Google Reviews</div>
            </div>
          </div>

          <div>
            <p className="eyebrow">— Why VK Crossfit Gym</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Built For People Who Want Real Results</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              We didn't build another crowded gym. We built Sikar's most equipped, cleanest,
              best-coached fitness destination — for serious people of every level.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {whyUs.map((w) => (
                <li key={w} className="flex items-start gap-3 rounded-md border border-white/10 bg-card/60 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/90">{w}</span>
                </li>
              ))}
            </ul>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Book Your Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-white/10 bg-[oklch(0.13_0_0)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow">— Member Reviews</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Real People. Real Results.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col rounded-lg border border-white/10 bg-card p-7"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-display text-base text-foreground">{r.name}</div>
                  <div className="mt-1 text-[0.7rem] uppercase tracking-widest text-muted-foreground">{r.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-14 text-center">
          <p className="eyebrow">— Membership</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">Simple, Honest Pricing</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            No hidden fees. No long contracts. Pick a plan, walk in, and start training.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pricing.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-lg border p-8 ${
                p.featured
                  ? "border-primary bg-card shadow-[var(--shadow-glow)]"
                  : "border-white/10 bg-card"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl text-foreground">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl text-primary">₹{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-md px-5 py-3.5 text-center text-xs font-bold uppercase tracking-widest transition ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-white/15 bg-white/5 text-foreground hover:border-primary/60 hover:text-primary"
                }`}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="border-t border-white/10 bg-[oklch(0.13_0_0)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">— Visit Us</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Walk In Today</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              We're on Piprali Road, near Dhanvantari Ayurvedic College, Jaldhari Nagar — easy to find, easy to park. Drop by anytime during open hours for a tour.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-foreground/90">
                  Piprali Rd, near Dhanvantari Ayurvedic College,<br />
                  Jaldhari Nagar, Sikar, Rajasthan 332001
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-foreground/90">
                  Mon – Sat · 5:00 AM – 9:00 PM<br />
                  Sunday · By appointment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <a href="tel:+918005706894" className="text-foreground/90 hover:text-primary">
                  +91 80057 06894
                </a>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Vk+Crossfit+Gym+Sikar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-primary-foreground transition hover:opacity-90"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-foreground transition hover:border-primary/60 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 shadow-[var(--shadow-card)]">
            <iframe
              title="VK Crossfit Gym Sikar Location"
              src="https://www.google.com/maps?q=Vk+Crossfit+Gym+Sikar+Piprali+Road&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[420px] w-full grayscale-[0.3]"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden">
        <img
          src={gymWood}
          alt="VK Crossfit Gym Sikar gym interior"
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Your Transformation
            <span className="block text-primary">Starts Today.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-foreground/80 md:text-base">
            Book a free trial session. Tour the facility. Meet the trainers.
            No pressure, no commitment.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
            <a
              href="tel:+918005706894"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition hover:border-primary/60 hover:text-primary"
            >
              <Phone className="h-4 w-4" /> Call +91 80057 06894
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
