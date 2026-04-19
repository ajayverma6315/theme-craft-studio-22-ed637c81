import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/workouts", label: "Workouts" },
  { to: "/memberships", label: "Memberships" },
  { to: "/coaches", label: "Coaches" },
  { to: "/locations", label: "Locations" },
  { to: "/philosophy", label: "Philosophy" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          KINETIC
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "text-sm text-primary font-medium border-b-2 border-primary pb-1 -mb-1",
              }}
            >
              {item.label}
            </Link>
          ))}
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
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium"
                activeProps={{ className: "border-b border-border/50 py-3 text-sm font-medium text-primary" }}
              >
                {item.label}
              </Link>
            ))}
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
