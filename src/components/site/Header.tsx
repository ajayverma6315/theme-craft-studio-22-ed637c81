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

// Liquid-glass icon chip — translucent, frosted, with a subtle highlight
const glassIcon =
  "relative inline-flex h-7 w-7 items-center justify-center rounded-full " +
  "border border-white/30 bg-white/10 backdrop-blur-md " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_4px_12px_-4px_rgba(0,0,0,0.18)] " +
  "before:absolute before:inset-0 before:rounded-full " +
  "before:bg-[radial-gradient(120%_80%_at_30%_15%,rgba(255,255,255,0.55),transparent_55%)] " +
  "before:opacity-80 before:pointer-events-none " +
  "after:absolute after:inset-px after:rounded-full " +
  "after:bg-gradient-to-br after:from-primary/15 after:to-accent/10 after:pointer-events-none " +
  "transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_6px_18px_-4px_color-mix(in_oklab,var(--primary)_35%,transparent)]";

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
