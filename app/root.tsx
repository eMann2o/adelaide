import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import "./app.css";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
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

        {/* Tailwind CDN + Config */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      "primary": "#7171A2",        // Muted lavender-gray
                      "secondary": "#353E56",      // Deep slate blue
                      "tertiary": "#DE9F98",       // Soft dusty rose
                      "accent": "#C9A227",         // Warm gold
                      "background-light": "#FFFFFF",
                      "background-section": "#F8F9FA",
                    },
                    fontFamily: {
                      "sans": ["Inter", "sans-serif"],
                      "serif": ["Cormorant Garamond", "serif"],
                    },
                    borderRadius: {
                      DEFAULT: "0.5rem",
                      lg: "0.75rem",
                      xl: "1rem",
                      "2xl": "1.5rem",
                      full: "9999px",
                    },
                    letterSpacing: {
                      tight: "-0.5px",
                      normal: "0",
                      wide: "0.5px",
                      wider: "1px",
                      widest: "2px",
                      "extra-wide": "3px",
                    },
                  },
                },
              }
            `,
          }}
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `
              * {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }

              body {
                font-family: 'Inter', sans-serif;
              }

              h1, h2, h3, h4, h5, h6 {
                font-family: 'Cormorant Garamond', serif;
              }

              .material-symbols-outlined {
                font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
              }

              /* Smooth scroll behavior */
              html {
                scroll-behavior: smooth;
              }

              /* Custom scrollbar */
              ::-webkit-scrollbar {
                width: 10px;
              }

              ::-webkit-scrollbar-track {
                background: #F8F9FA;
              }

              ::-webkit-scrollbar-thumb {
                background: #7171A2;
                border-radius: 5px;
              }

              ::-webkit-scrollbar-thumb:hover {
                background: #C9A227;
              }

              /* Focus styles for accessibility */
              *:focus-visible {
                outline: 2px solid #C9A227;
                outline-offset: 2px;
              }

              /* Fade in animation */
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              .fade-in {
                animation: fadeIn 0.6s ease-out forwards;
              }

              /* Floating animation for decorative elements */
              @keyframes float {
                0%, 100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-15px);
                }
              }

              .float {
                animation: float 3s ease-in-out infinite;
              }
            `,
          }}
        />
      </head>

      <body className="bg-background-light text-secondary antialiased">
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

export function ErrorBoundary({ error }: { error: unknown }) {
  let status = 500;
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The artwork you're searching for seems to have wandered off the canvas."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  // Custom 404 Page for Fine Artist Portfolio
  if (status === 404) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background-light px-6 py-12">
        <div className="max-w-3xl w-full text-center">
          {/* Large 404 Typography (Background) */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span
                className="font-serif text-[180px] leading-none tracking-[20px] select-none"
                style={{
                  color: "#7171A2",
                  opacity: 0.15,
                }}
              >
                404
              </span>
            </div>

            {/* Main Content */}
            <div className="relative z-10 fade-in">
              {/* Decorative Gold Line */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-0.5 bg-accent"></div>
              </div>

              {/* 404 Number */}
              <h1 className="font-serif text-8xl md:text-9xl font-light tracking-[8px] mb-6 text-secondary">
                404
              </h1>

              {/* Heading */}
              <h2 className="font-serif text-4xl md:text-5xl mb-5 text-secondary tracking-tight">
                Lost in the Gallery
              </h2>

              {/* Description */}
              <p className="text-xl md:text-2xl text-primary leading-relaxed max-w-2xl mx-auto mb-12">
                {details}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
                {/* Primary Button */}
                <a
                  href="/"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-tertiary text-white text-base font-medium uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-xl">home</span>
                  Return Home
                </a>

                {/* Secondary Button */}
                <a
                  href="/portfolio"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-primary text-secondary text-base font-medium uppercase tracking-widest rounded-full hover:border-accent hover:text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-5 w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-xl">grid_view</span>
                  Browse Portfolio
                </a>
              </div>

              {/* Helpful Links */}
              <div className="mt-16">
                <p className="text-sm uppercase tracking-[2px] text-primary mb-5">
                  You might be looking for:
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-base">
                  <a
                    href="/portfolio"
                    className="text-secondary hover:text-tertiary transition-colors duration-300 flex items-center gap-1"
                  >
                    Recent Works
                    <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      arrow_forward
                    </span>
                  </a>
                  <a
                    href="/exhibitions"
                    className="text-secondary hover:text-tertiary transition-colors duration-300"
                  >
                    Exhibitions
                  </a>
                  <a
                    href="/about"
                    className="text-secondary hover:text-tertiary transition-colors duration-300"
                  >
                    About the Artist
                  </a>
                  <a
                    href="/contact"
                    className="text-secondary hover:text-tertiary transition-colors duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Paint Splatter Elements (Optional) */}
          <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary opacity-10 blur-2xl pointer-events-none float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-tertiary opacity-10 blur-2xl pointer-events-none float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-accent opacity-5 blur-xl pointer-events-none float" style={{ animationDelay: '2s' }}></div>
        </div>
      </main>
    );
  }

  // Generic Error Page (for non-404 errors)
  return (
    <main className="min-h-screen flex items-center justify-center bg-background-light px-6 py-12">
      <div className="max-w-2xl w-full text-center">
        <div className="fade-in">
          <h1 className="font-serif text-7xl md:text-8xl font-light mb-6 text-secondary">
            {message}
          </h1>
          <p className="text-xl md:text-2xl text-primary mb-8">
            {details}
          </p>
          {stack && import.meta.env.DEV && (
            <div className="mt-8 text-left">
              <pre className="w-full p-6 overflow-x-auto bg-gray-100 rounded-lg text-sm text-gray-800">
                <code>{stack}</code>
              </pre>
            </div>
          )}
          <a
            href="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-tertiary text-white text-base font-medium uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mt-8"
          >
            <span className="material-symbols-outlined text-xl">home</span>
            Return Home
          </a>
        </div>
      </div>
    </main>
  );
}