import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Dumbbell, Crown, Users, MapPin, BookOpen, type LucideIcon } from "lucide-react";

const nav: { to: string; label: string; icon: LucideIcon }[] = [
  { to: "/workouts", label: "Workouts", icon: Dumbbell },
  { to: "/memberships", label: "Memberships", icon: Crown },
  { to: "/coaches", label: "Coaches", icon: Users },
  { to: "/locations", label: "Locations", icon: MapPin },
  { to: "/philosophy", label: "Philosophy", icon: BookOpen },
];

// Apple-style liquid glass icon chip
// Layers: frosted backdrop · refractive tint · specular top highlight ·
// inner ring · soft outer halo on hover
const glassIcon =
  // base shape
  "relative inline-flex h-8 w-8 items-center justify-center rounded-full isolate " +
  // frosted glass backdrop (saturates whatever is behind it)
  "bg-white/15 backdrop-blur-xl backdrop-saturate-150 " +
  // crisp inner ring + soft outer shadow
  "ring-1 ring-white/40 " +
  "shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-1px_2px_rgba(0,0,0,0.08),0_6px_20px_-8px_rgba(15,23,42,0.35)] " +
  // top specular highlight (the classic Apple glossy arc)
  "before:absolute before:inset-0 before:rounded-full before:pointer-events-none " +
  "before:bg-[radial-gradient(130%_70%_at_30%_10%,rgba(255,255,255,0.85),rgba(255,255,255,0.15)_45%,transparent_70%)] " +
  "before:opacity-90 " +
  // refractive tint underlay (cool teal sheen)
  "after:absolute after:inset-0 after:rounded-full after:pointer-events-none after:-z-10 " +
  "after:bg-[conic-gradient(from_220deg_at_50%_50%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_40%,color-mix(in_oklab,var(--accent)_22%,transparent)_70%,transparent)] " +
  // hover: deeper glow + halo
  "transition-all duration-300 ease-out " +
  "group-hover:ring-primary/50 group-hover:bg-white/25 " +
  "group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),inset_0_-1px_2px_rgba(0,0,0,0.08),0_10px_28px_-8px_color-mix(in_oklab,var(--primary)_55%,transparent)]";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          KINETIC
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
                activeProps={{
                  className:
                    "group flex items-center gap-2 text-sm text-primary font-medium",
                }}
              >
                <span className={glassIcon} aria-hidden="true">
                  <Icon className="relative z-10 h-3.5 w-3.5 text-foreground/80 group-hover:text-primary" strokeWidth={2} />
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/memberships"
            className="hidden rounded-md bg-gradient-to-br from-primary to-accent px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 sm:inline-block"
          >
            Join Now
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-md border border-border p-2 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 border-b border-border/50 py-3 text-sm font-medium"
                  activeProps={{
                    className:
                      "group flex items-center gap-3 border-b border-border/50 py-3 text-sm font-medium text-primary",
                  }}
                >
                  <span className={glassIcon} aria-hidden="true">
                    <Icon className="relative z-10 h-3.5 w-3.5 text-foreground/80 group-hover:text-primary" strokeWidth={2} />
                  </span>
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/memberships"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-md bg-gradient-to-br from-primary to-accent px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Join Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
