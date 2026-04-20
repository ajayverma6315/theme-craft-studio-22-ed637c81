import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { Plus, Minus, MessageCircle, Phone } from "lucide-react";

const faqs = [
  {
    q: "Why is Iron Forge considered one of the best gyms in Sikar?",
    a: "Iron Forge is known for premium imported equipment, certified trainers, clean facilities, a motivating atmosphere, and real transformation-focused training. If you're searching for the best gym in Sikar, we provide the complete environment for results.",
  },
  {
    q: "What membership plans do you offer?",
    a: "We offer flexible Monthly, Quarterly, Half-Yearly, and Annual membership plans. Whether you want a budget-friendly option or premium coaching support, we have plans for every fitness goal.",
  },
  {
    q: "Do you offer personal training in Sikar?",
    a: "Yes. Our expert trainers provide one-on-one personal training for weight loss, muscle gain, strength improvement, posture correction, and athletic performance.",
  },
  {
    q: "What are your gym timings?",
    a: "Iron Forge is open Monday to Saturday from 5:00 AM to 11:00 PM. Contact us on WhatsApp for updated Sunday and holiday timings.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes. New members can request a free trial workout session and experience one of the top gyms in Sikar before joining.",
  },
  {
    q: "Is this gym suitable for beginners?",
    a: "Absolutely. We are a beginner-friendly gym in Sikar. Our trainers guide new members on exercise form, workout planning, and confidence building from day one.",
  },
  {
    q: "Do you have modern strength and cardio equipment?",
    a: "Yes. We provide squat racks, benches, dumbbells, cable machines, treadmills, cycles, rowing machines, and dedicated cardio zones for complete fitness training.",
  },
  {
    q: "Do you provide weight loss programs?",
    a: "Yes. We offer structured fat loss programs that combine workouts, cardio plans, calorie guidance, and progress tracking.",
  },
  {
    q: "Do you provide muscle gain programs?",
    a: "Yes. We create customized muscle building programs focused on hypertrophy, progressive overload, recovery, and nutrition support.",
  },
  {
    q: "Is Iron Forge a good gym near me in Sikar?",
    a: "If you're searching for a gym near me in Sikar, Iron Forge is a trusted choice for quality training, modern facilities, and convenient access on Piprali Road.",
  },
  {
    q: "Do you have memberships for women?",
    a: "Yes. We welcome women members and maintain a safe, professional, and supportive environment for all fitness levels.",
  },
  {
    q: "Where are you located?",
    a: "Iron Forge Fitness is located on Piprali Road, Sikar, Rajasthan. Contact us on WhatsApp for exact directions and the nearest route.",
  },
  {
    q: "How can I join Iron Forge?",
    a: "You can visit the gym directly, call us, or message us on WhatsApp to join today. Walk-ins are welcome between 5 AM and 11 PM.",
  },
  {
    q: "Why choose Iron Forge over other gyms in Sikar?",
    a: "We focus on results, coaching quality, premium atmosphere, hygiene, and member support. That is why many people consider us among the best gyms in Sikar.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Best Gym in Sikar | Iron Forge Fitness" },
      {
        name: "description",
        content:
          "Common questions about Iron Forge Fitness — Sikar's premium gym. Membership plans, timings, personal training, free trial, women's fitness and more.",
      },
      { property: "og:title", content: "FAQ — Iron Forge Fitness, Sikar" },
      {
        property: "og:description",
        content: "Everything you need to know about joining Sikar's premium gym.",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: FaqPage,
});

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-primary"
      >
        <span className="font-display text-lg uppercase tracking-wide text-foreground md:text-xl">
          {q}
        </span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-primary">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="pb-6 pr-12 text-sm leading-relaxed text-foreground/70 md:text-base">
          {a}
        </div>
      )}
    </div>
  );
}

function FaqPage() {
  return (
    <SiteLayout>
      <section className="border-b border-white/10 bg-gradient-to-b from-charcoal/60 to-background">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Help Center
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/70 md:text-lg">
            Everything you need to know about Sikar's premium gym — membership,
            timings, trainers, equipment, and how to get started today.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <div className="rounded-2xl border border-white/10 bg-charcoal/40 px-6 py-2 md:px-10 md:py-4">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-charcoal/30">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-20">
          <h2 className="font-display text-3xl uppercase tracking-tight text-foreground md:text-5xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            Our team replies within minutes on WhatsApp. Book your free trial
            session today and walk in for a tour.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/919876543210?text=Hi%20Iron%20Forge%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-widest text-foreground transition hover:border-primary/60 hover:text-primary"
            >
              <Phone className="h-4 w-4" /> Call +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
