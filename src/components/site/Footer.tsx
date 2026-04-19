import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="font-display text-base font-bold tracking-tight">
          KINETIC
        </Link>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/philosophy" className="hover:text-foreground">Privacy</Link>
          <Link to="/philosophy" className="hover:text-foreground">Terms</Link>
          <Link to="/philosophy" className="hover:text-foreground">Safety</Link>
          <Link to="/philosophy" className="hover:text-foreground">Press</Link>
        </div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          © 2026 The Kinetic Sanctuary. Refinement Through Motion.
        </p>
      </div>
    </footer>
  );
}
