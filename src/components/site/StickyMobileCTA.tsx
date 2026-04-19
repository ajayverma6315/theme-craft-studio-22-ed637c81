import { Phone, MessageCircle } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2">
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center gap-2 border-r border-white/10 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground"
        >
          <Phone className="h-4 w-4 text-primary" /> Call Now
        </a>
        <a
          href="https://wa.me/919876543210?text=Hi%20Iron%20Forge%2C%20I%20want%20to%20join."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
