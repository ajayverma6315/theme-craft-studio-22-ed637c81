import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const SITE_TITLE = "VK Crossfit Gym Sikar | Best Premium Gym in Sikar Rajasthan";
const SITE_DESC =
  "VK Crossfit Gym — Sikar's premium unisex gym on Piprali Road. CrossFit, strength, cardio, yoga & personal training. Rated 4.9★ on Google. Open till 9 PM. Book a free trial.";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "VK Crossfit Gym",
  alternateName: "VK Fitness Sikar",
  image: "https://theme-craft-studio-22.lovable.app/og.jpg",
  "@id": "https://theme-craft-studio-22.lovable.app/",
  url: "https://theme-craft-studio-22.lovable.app/",
  telephone: "+91-8005706894",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piprali Rd, near Dhanvantari Ayurvedic College, Jaldhari Nagar",
    addressLocality: "Sikar",
    addressRegion: "Rajasthan",
    postalCode: "332001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 27.5996, longitude: 75.1370 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "05:00",
      closes: "21:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "278",
  },
  sameAs: [
    "https://www.instagram.com/vkfittness/",
    "https://www.facebook.com/100094321773513/",
  ],
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
