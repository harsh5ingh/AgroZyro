import Link from "next/link";

const navItems = [
  { label: "Marketplace", href: "#marketplace" },
  { label: "Market Rates", href: "#market-rates" },
  { label: "Categories", href: "#categories" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-agro-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-6 lg:px-8">

        {/* Brand */}
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-2">
            {/* Temporary logo mark */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-agro-green text-lg font-bold text-white">
              A
            </div>

            <div className="leading-none">
              <div className="text-xl font-bold tracking-tight text-agro-green-dark">
                AgroZyro
              </div>
              <div className="mt-1 text-[7px] font-medium uppercase tracking-[0.18em] text-agro-muted">
                Every Harvest. One Market.
              </div>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-zinc-600 transition-colors hover:text-agro-green-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-3">

          {/* Search */}
          <div className="hidden lg:flex">
            <div className="flex h-11 w-64 items-center rounded-xl border border-agro-border bg-agro-background px-4">
              <svg
                className="mr-2 h-4 w-4 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>

              <span className="truncate text-xs text-zinc-400">
                Search products, categories or location...
              </span>
            </div>
          </div>

          {/* Location */}
          <button className="hidden items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium text-zinc-600 transition hover:bg-agro-green-light md:flex">
            <span>India</span>
            <span className="text-xs">⌄</span>
          </button>

          {/* Language */}
          <button className="hidden items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium text-zinc-600 transition hover:bg-agro-green-light sm:flex">
            <span>EN</span>
            <span className="text-xs">⌄</span>
          </button>

          {/* Theme */}
          <button
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-agro-border text-zinc-600 transition hover:bg-agro-green-light"
          >
            ☼
          </button>

          {/* Login */}
          <Link
            href="/login"
            className="hidden px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:text-agro-green-dark sm:block"
          >
            Login
          </Link>

          {/* Get Started */}
          <Link
            href="/register"
            className="rounded-xl bg-agro-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-agro-green-dark"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}