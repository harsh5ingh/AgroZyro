"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import MotionButton from "@/components/ui/motion-button";

const navItems = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Market Rates", href: "#market-rates" },
  { label: "Categories", href: "#categories" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/marketplace" && pathname === "/marketplace";

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-agro-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center px-4 sm:h-[72px] sm:px-6 lg:h-[76px] lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="shrink-0"
          aria-label="AgroZyro Home"
        >
          <Image
            src="/images/logo/agrozyro-logo.svg"
            alt="AgroZyro"
            width={190}
            height={55}
            priority
            className="h-auto w-[135px] sm:w-[155px] lg:w-[175px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-6 hidden items-center gap-1 xl:flex 2xl:ml-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-3 py-2.5 text-[13px] font-medium transition-all duration-200 2xl:px-4 2xl:text-[14px] ${
                isActive(item.href)
                  ? "bg-agro-green-light text-agro-green-dark"
                  : "text-zinc-600 hover:bg-agro-green-light/70 hover:text-agro-green-dark"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2.5">
          {/* Search */}
          <div className="hidden lg:flex">
            <div className="flex h-10 w-[220px] items-center rounded-xl border border-agro-border bg-white px-3 xl:h-11 xl:w-[250px] xl:px-4 2xl:w-[290px]">
              <svg
                className="mr-2 h-4 w-4 shrink-0 text-zinc-400 xl:mr-2.5 xl:h-[17px] xl:w-[17px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>

              <span className="truncate text-xs text-zinc-400 xl:text-[13px]">
                Search products, categories or location...
              </span>
            </div>
          </div>

          {/* Country */}
          <button
            type="button"
            className="hidden h-10 items-center gap-1 rounded-lg px-2 text-sm font-medium text-zinc-600 transition hover:bg-agro-green-light md:flex"
          >
            India
            <span className="text-[11px]">⌄</span>
          </button>

          {/* Language */}
          <button
            type="button"
            className="hidden h-10 items-center gap-1 rounded-lg px-2 text-sm font-medium text-zinc-600 transition hover:bg-agro-green-light sm:flex"
          >
            EN
            <span className="text-[11px]">⌄</span>
          </button>

          {/* Theme */}
          <button
            type="button"
            aria-label="Toggle theme"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-agro-border text-zinc-600 transition hover:bg-agro-green-light sm:h-10 sm:w-10"
          >
            <svg
              className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
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
            className="hidden px-2 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:text-agro-green-dark sm:block lg:px-3"
          >
            Login
          </Link>

          {/* Get Started */}
          <MotionButton
            label="Get Started"
            href="/register"
            variant="primary"
            classes="hidden sm:inline-flex"
          />

          {/* Mobile Menu */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-agro-border text-zinc-700 transition hover:bg-agro-green-light xl:hidden"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-agro-border bg-white shadow-lg xl:hidden">
          <div className="mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-6">
            {/* Mobile Search */}
            <div className="mb-4 flex h-11 items-center rounded-xl border border-agro-border bg-white px-4">
              <svg
                className="mr-2.5 h-[17px] w-[17px] shrink-0 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
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

            {/* Mobile Navigation */}
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive(item.href)
                      ? "bg-agro-green-light text-agro-green-dark"
                      : "text-zinc-700 hover:bg-agro-green-light/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Controls */}
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-agro-border pt-4">
              <button
                type="button"
                className="flex h-11 items-center justify-center gap-1 rounded-xl border border-agro-border text-sm font-medium text-zinc-700 transition hover:bg-agro-green-light"
              >
                India
                <span className="text-[11px]">⌄</span>
              </button>

              <button
                type="button"
                className="flex h-11 items-center justify-center gap-1 rounded-xl border border-agro-border text-sm font-medium text-zinc-700 transition hover:bg-agro-green-light"
              >
                English
                <span className="text-[11px]">⌄</span>
              </button>
            </div>

            {/* Mobile Auth */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="flex h-[50px] items-center justify-center rounded-xl border border-agro-border text-sm font-semibold text-zinc-700 transition hover:bg-agro-green-light"
              >
                Login
              </Link>

              <MotionButton
                label="Get Started"
                href="/register"
                variant="primary"
                classes="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}