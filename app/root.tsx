import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&amp;family=Playfair+Display:wght@700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<style>
        .font-serif {
            font-family: 'Playfair Display', serif;
        }
    </style>
<script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#7171A2",
              "secondary": "#353E56",
              "accent": "#C9A227",
              "background-light": "#F8F8F8",
              "background-dark": "#17171b",
              "body-text": "#212121",
            },
            fontFamily: {
              "display": ["Inter", "sans-serif"],
              "serif": ["Playfair Display", "serif"],
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>



















    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<style type="text/tailwindcss">
        @layer base {
          a:hover {
            @apply text-primary;
          }
          .link-underline {
            position: relative;
            text-decoration: none;
          }
          .link-underline::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #C9A227;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }
          .link-underline:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
    </style>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#7171a2",
              "secondary": "#353E56",
              "accent": "#C9A227",
              "background-light": "#f9f9f9",
              "background-dark": "#17171b",
              "text-light": "#333333",
              "text-dark": "#E2E2E2",
              "subtle-light": "#6a6a7c",
              "subtle-dark": "#9ca3af",
              "border-light": "#d8d8de",
              "border-dark": "#374151"
            },
            fontFamily: {
              "display": ["Inter", "sans-serif"],
              "serif": ["Playfair Display", "serif"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>



<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;family=Playfair+Display:wght@700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#7171A2",
              secondary: "#353E56",
              tertiary: "#DE9F98",
              accent: "#C9A227",
              "background-light": "#F9F9F9",
              "background-dark": "#17171B",
              "text-light": "#212121",
              "text-dark": "#EAEAEA",
            },
            fontFamily: {
              display: ["Inter", "sans-serif"],
              serif: ["Playfair Display", "serif"],
            },
            borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
          },
        },
      };
    </script><style>
      .link-underline {
        position: relative;
        text-decoration: none;
      }
      .link-underline::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: -2px;
        left: 0;
        background-color: #c9a227;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
      .link-underline:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    </style>


<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;family=Playfair+Display:wght@700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<style>.form-select {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDgqRq9ikm0f1gEcPAP6-xCwUwcoBge-DPicixjThtWOF-3wriaXvjEpDV2lpikmihgRkh5JDe-s6xBT7rITGitS3tfWj_KvBfRoYNIOqOHFKBcKXeTitPjpF-pZbA_bED2u-lYemEHgO7Me57TCM9ScdOpeukAodLqYOkieQ5FCZLnhrrW97-eMfggZWzbyduKoFBlIGv8cQPT9jaPvkiGlUTGfa4G1Ll5n_dH5vCy0xsplqg_A81SKCtrqfSkEjgUgehJ8JdHZ1Q);
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact
    }</style>
<script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#7171a2",
              "secondary": "#353E56",
              "accent": "#C9A227",
              "background-light": "#f9f9f9",
              "background-dark": "#17171b",
              "text-light": "#333333",
              "text-dark": "#e2e2e2"
            },
            fontFamily: {
              "display": ["Playfair Display", "serif"],
              "sans": ["Inter", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>