import { Phone, Instagram, MapPin, Clock, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[oklch(0.12_0_0)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground">
              IF
            </span>
            <span className="font-display text-xl tracking-wider">
              IRON <span className="text-primary">FORGE</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Sikar's premium fitness destination. Real equipment, real coaches, real results.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/85">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:hello@ironforgesikar.in" className="hover:text-primary">hello@ironforgesikar.in</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-primary" />
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">@ironforge.sikar</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Address</h4>
          <p className="mt-4 flex items-start gap-2 text-sm text-foreground/85">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            Piprali Road, Near Subhash Chowk,<br /> Sikar, Rajasthan 332001
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/85">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Mon–Sat · 6:00 AM – 11:00 PM
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Sunday · 7:00 AM – 1:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs uppercase tracking-widest text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Legacy Fitness, Sikar. All rights reserved.</p>
          <p>Best Gym in Sikar · Premium Fitness Center</p>
        </div>
      </div>
    </footer>
  );
}
