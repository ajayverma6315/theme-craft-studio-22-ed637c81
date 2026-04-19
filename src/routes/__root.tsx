import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
      { title: "Kinetic — Refinement Through Motion" },
      {
        name: "description",
        content:
          "Kinetic is a precision-engineered fitness sanctuary for the disciplined elite. Personal training, recovery, and curated movement.",
      },
      { property: "og:title", content: "Kinetic — Refinement Through Motion" },
      {
        property: "og:description",
        content: "A precision-engineered fitness sanctuary for the disciplined elite.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kinetic — Refinement Through Motion" },
      { name: "description", content: "Your Page Design creates custom website layouts with a consistent theme and branding for your business." },
      { property: "og:description", content: "Your Page Design creates custom website layouts with a consistent theme and branding for your business." },
      { name: "twitter:description", content: "Your Page Design creates custom website layouts with a consistent theme and branding for your business." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c9cabcae-e077-4109-8dbc-360fb7f08063/id-preview-fd6887a2--52515074-5797-4c6d-a802-870b3e8d7c32.lovable.app-1776572114207.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c9cabcae-e077-4109-8dbc-360fb7f08063/id-preview-fd6887a2--52515074-5797-4c6d-a802-870b3e8d7c32.lovable.app-1776572114207.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
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
