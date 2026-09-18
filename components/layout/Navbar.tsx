import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-agro-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo/agrozyro-logo.svg"
            alt="AgroZyro"
            width={190}
            height={55}
            priority
            className="h-auto w-[175px]"
          />
        </Link>

        {/* Navigation */}
        <nav className="ml-10 hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-[14px] font-medium text-zinc-600 transition-colors hover:text-agro-green-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2.5">

          {/* Search */}
          <div className="hidden lg:flex">
            <div className="flex h-11 w-[290px] items-center rounded-xl border border-agro-border bg-white px-4">
              <svg
                className="mr-2.5 h-[17px] w-[17px] shrink-0 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>

              <span className="truncate text-[13px] text-zinc-400">
                Search products, categories or location...
              </span>
            </div>
          </div>

          {/* Location */}
          <button
            type="button"
            className="hidden h-10 items-center gap-1 rounded-lg px-2.5 text-sm font-medium text-zinc-600 transition hover:bg-agro-green-light md:flex"
          >
            <span>India</span>
            <span className="text-[11px]">⌄</span>
          </button>

          {/* Language */}
          <button
            type="button"
            className="hidden h-10 items-center gap-1 rounded-lg px-2.5 text-sm font-medium text-zinc-600 transition hover:bg-agro-green-light sm:flex"
          >
            <span>EN</span>
            <span className="text-[11px]">⌄</span>
          </button>

          {/* Theme */}
          <button
            type="button"
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-agro-border text-zinc-600 transition hover:bg-agro-green-light"
          >
            <svg
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="12" cy="12" r="3.5" />
              <path
                strokeLinecap="round"
                d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
              />
            </svg>
          </button>

          {/* Login */}
          <Link
            href="/login"
            className="hidden px-3 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:text-agro-green-dark sm:block"
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