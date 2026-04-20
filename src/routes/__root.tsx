import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const SITE_TITLE = "Best Gym in Sikar | Legacy Fitness — Premium Gym Sikar Rajasthan";
const SITE_DESC =
  "Legacy Fitness is Sikar's premium gym for real results. Imported equipment, certified trainers, weight loss & muscle gain programs. Open 6 AM – 11 PM. Join free trial.";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "Legacy Fitness — Premium Gym Sikar",
  image: "https://theme-craft-studio-22.lovable.app/og.jpg",
  "@id": "https://theme-craft-studio-22.lovable.app/",
  url: "https://theme-craft-studio-22.lovable.app/",
  telephone: "+91-9876543210",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piprali Road",
    addressLocality: "Sikar",
    addressRegion: "Rajasthan",
    postalCode: "332001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 27.6094, longitude: 75.1399 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "06:00",
      closes: "23:00",
    },
  ],
  sameAs: ["https://www.instagram.com/"],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0c0c0d" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "keywords", content: "best gym in sikar, premium gym sikar, fitness center sikar, personal trainer sikar, weight loss gym sikar, gym near me sikar, muscle gain sikar" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
