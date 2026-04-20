import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const hashNav = [
  { href: "/#facility", label: "Facility" },
  { href: "/#programs", label: "Programs" },
  { href: "/#pricing", label: "Pricing" },
];

const routeNav = [
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground">
            IF
          </span>
          <span className="font-display text-xl tracking-wider text-foreground">
            IRON <span className="text-primary">FORGE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919876543210"
            className="hidden items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground transition hover:border-primary/60 hover:text-primary sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi%20Iron%20Forge%2C%20I%20want%20to%20book%20a%20free%20trial."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-primary px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90 sm:inline-block"
          >
            Free Trial
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-md border border-white/15 bg-white/5 p-2 text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-semibold uppercase tracking-widest text-foreground/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-md bg-primary px-5 py-3 text-center text-sm font-bold uppercase tracking-widest text-primary-foreground"
            >
              WhatsApp Free Trial
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
