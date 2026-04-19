import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/workouts", label: "Workouts" },
  { to: "/memberships", label: "Memberships" },
  { to: "/locations", label: "Locations" },
  { to: "/philosophy", label: "Philosophy" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-lg font-bold tracking-tight">
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
        <Link
          to="/memberships"
          className="rounded-md bg-gradient-to-br from-primary to-accent px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
        >
          Join Now
        </Link>
      </div>
    </header>
  );
}
