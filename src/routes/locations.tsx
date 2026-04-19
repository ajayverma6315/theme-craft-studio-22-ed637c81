import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Kinetic" },
      {
        name: "description",
        content:
          "The Kinetic Sanctuary operates in meticulously designed environments where architecture meets athletic performance.",
      },
      { property: "og:title", content: "Find Your Sanctuary — Kinetic" },
      { property: "og:description", content: "Locate your nearest Kinetic flagship." },
    ],
  }),
  component: LocationsPage,
});

const hours = [
  { day: "Monday — Friday", time: "05:00 — 22:00" },
  { day: "Saturday", time: "07:00 — 20:00" },
  { day: "Sunday", time: "08:00 — 18:00" },
];

function LocationsPage() {
  const [form, setForm] = useState({ name: "", email: "", inquiry: "General Membership", message: "" });

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-10">
        <p className="eyebrow">Our Presence</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_400px]">
          <h1 className="font-display text-5xl font-black leading-[0.95] md:text-6xl">
            FIND YOUR<br />SANCTUARY.
          </h1>
          <p className="max-w-sm text-sm text-muted-foreground lg:self-end">
            The Kinetic Sanctuary operates in meticulously designed environments where architecture meets athletic performance. Locate your nearest flagship.
          </p>
        </div>
      </section>

      {/* Map + Address */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-0 overflow-hidden rounded-lg border border-border bg-card md:grid-cols-[1.4fr_1fr]">
          <div className="relative aspect-[4/3] bg-secondary md:aspect-auto md:min-h-[420px]">
            <iframe
              title="Kinetic Hudson Yards Flagship"
              src="https://www.google.com/maps?q=Hudson+Yards+New+York&output=embed"
              className="h-full w-full grayscale"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-8">
            <h3 className="font-display text-xl font-bold tracking-wider">HUDSON YARDS FLAGSHIP</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">550 West 34th Street,<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+1 (212) 555-0198</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">hudson@kinetic.fit</span>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Hudson+Yards+New+York"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block w-fit border-b border-primary pb-1 text-xs font-bold uppercase tracking-widest text-primary"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Hours + Contact */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <h3 className="font-display text-lg font-bold tracking-wider">OPERATING HOURS</h3>
          <div className="mt-6 space-y-0 divide-y divide-border">
            {hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between py-4 text-sm">
                <span className="font-medium uppercase tracking-wider">{h.day}</span>
                <span className="text-muted-foreground">{h.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg bg-secondary p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Member Support</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Our concierge team is available during all operational hours to assist with programming and facility inquiries.
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent — our concierge will respond within 4 hours.");
          }}
          className="rounded-lg bg-card p-8 shadow-[var(--shadow-card)]"
        >
          <h3 className="font-display text-2xl font-bold">SEND A MESSAGE</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Inquiries are typically addressed within 4 hours.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/80">Full Name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="ALEXANDER VANCE"
                className="mt-2 w-full rounded-md border border-border bg-input/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/80">Email Address</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="ALEX@KINETIC.FIT"
                className="mt-2 w-full rounded-md border border-border bg-input/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/80">Inquiry Type</span>
            <select
              value={form.inquiry}
              onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
              className="mt-2 w-full rounded-md border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option>General Membership</option>
              <option>Personal Training</option>
              <option>Press &amp; Media</option>
              <option>Corporate Programs</option>
            </select>
          </label>

          <label className="mt-4 block">
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/80">Your Message</span>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="HOW CAN WE ASSIST YOUR PROGRESS?"
              className="mt-2 w-full rounded-md border border-border bg-input/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <button
            type="submit"
            className="mt-6 rounded-md bg-gradient-to-r from-primary to-accent px-8 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground"
          >
            Send Message
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}
