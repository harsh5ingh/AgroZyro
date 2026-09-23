"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import MotionButton from "@/components/ui/motion-button";
import SignInModal from "@/components/auth/SignInModal";
import SignUpModal from "@/components/auth/SignUpModal";

const navItems = [
  {
    label: "Marketplace",
    href: "/marketplace",
  },
  {
    label: "Market Rates",
    href: "#market-rates",
  },
  {
    label: "Categories",
    href: "#categories",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "About",
    href: "#about",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const isActive = (href: string) => {
    if (href === "/marketplace") {
      return pathname === "/marketplace";
    }

    return false;
  };

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  /* =========================================================
     AUTH
  ========================================================= */

  const openSignIn = () => {
    closeMobileMenu();
    setSignUpOpen(false);
    setSignInOpen(true);
  };

  const closeSignIn = () => {
    setSignInOpen(false);
  };

  const openSignUp = () => {
    closeMobileMenu();
    setSignInOpen(false);
    setSignUpOpen(true);
  };

  const closeSignUp = () => {
    setSignUpOpen(false);
  };

  return (
    <>
      {/* =======================================================
          NAVBAR
      ======================================================= */}

      <header
        className="
          sticky
          top-0
          z-50
          w-full
          border-b
          border-agro-border
          bg-white/95
          backdrop-blur-md
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[66px]
            w-full
            max-w-[1440px]
            items-center
            px-4
            sm:h-[70px]
            sm:px-6
            lg:h-[74px]
            lg:px-8
          "
        >
          {/* ===================================================
              LOGO
          ==================================================== */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            aria-label="AgroZyro Home"
            className="shrink-0"
          >
            <Image
              src="/images/logo/agrozyro-logo.svg"
              alt="AgroZyro"
              width={190}
              height={55}
              priority
              className="
                h-auto
                w-[125px]
                sm:w-[145px]
                lg:w-[165px]
              "
            />
          </Link>

          {/* ===================================================
              DESKTOP NAVIGATION
          ==================================================== */}

          <nav
            className="
              ml-4
              hidden
              items-center
              gap-0.5
              xl:flex
              2xl:ml-7
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  whitespace-nowrap
                  rounded-full
                  px-3
                  py-2.5
                  text-[12px]
                  font-medium
                  transition-all
                  duration-200
                  2xl:px-3.5
                  2xl:text-[13px]
                  ${
                    isActive(item.href)
                      ? "bg-agro-green-light text-agro-green-dark"
                      : "text-zinc-600 hover:bg-agro-green-light/70 hover:text-agro-green-dark"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ===================================================
              RIGHT ACTIONS
          ==================================================== */}

          <div
            className="
              ml-auto
              flex
              items-center
              gap-1
              sm:gap-1.5
              lg:gap-2
            "
          >
            {/* Search */}

            <div className="hidden lg:flex">
              <div
                className="
                  flex
                  h-10
                  w-[200px]
                  items-center
                  rounded-xl
                  border
                  border-agro-border
                  bg-white
                  px-3
                  xl:h-11
                  xl:w-[230px]
                  xl:px-3.5
                  2xl:w-[275px]
                "
              >
                <svg
                  className="
                    mr-2
                    h-4
                    w-4
                    shrink-0
                    text-zinc-400
                    xl:mr-2.5
                  "
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

                <span
                  className="
                    truncate
                    text-[10px]
                    text-zinc-400
                    xl:text-[11px]
                    2xl:text-xs
                  "
                >
                  Search products, categories or location...
                </span>
              </div>
            </div>

            {/* India */}

            <button
              type="button"
              className="
                hidden
                h-10
                items-center
                gap-1
                rounded-lg
                px-2
                text-xs
                font-medium
                text-zinc-600
                transition
                hover:bg-agro-green-light
                md:flex
                xl:text-sm
              "
            >
              India
              <span className="text-[10px]">⌄</span>
            </button>

            {/* Language */}

            <button
              type="button"
              className="
                hidden
                h-10
                items-center
                gap-1
                rounded-lg
                px-2
                text-xs
                font-medium
                text-zinc-600
                transition
                hover:bg-agro-green-light
                sm:flex
                xl:text-sm
              "
            >
              EN
              <span className="text-[10px]">⌄</span>
            </button>

            {/* Theme */}

            <button
              type="button"
              aria-label="Toggle theme"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-agro-border
                text-zinc-600
                transition
                hover:bg-agro-green-light
                sm:h-10
                sm:w-10
              "
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
                  d="
                    M12 2v2
                    M12 20v2
                    M4.93 4.93l1.42 1.42
                    M17.65 17.65l1.42 1.42
                    M2 12h2
                    M20 12h2
                    M4.93 19.07l1.42-1.42
                    M17.65 6.35l1.42-1.42
                  "
                />
              </svg>
            </button>

            {/* Login */}

            <button
              type="button"
              onClick={openSignIn}
              className="
                hidden
                whitespace-nowrap
                px-2
                py-2
                text-sm
                font-semibold
                text-zinc-700
                transition-colors
                hover:text-agro-green-dark
                sm:block
                lg:px-3
              "
            >
              Login
            </button>

            {/* Get Started */}

            <MotionButton
              label="Get Started"
              variant="primary"
              onClick={openSignUp}
              classes="hidden sm:inline-flex"
            />

            {/* Mobile Menu Button */}

            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() =>
                setMobileMenuOpen((open) => !open)
              }
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-agro-border
                text-zinc-700
                transition
                hover:bg-agro-green-light
                sm:h-10
                sm:w-10
                xl:hidden
              "
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

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        {mobileMenuOpen && (
          <div
            className="
              border-t
              border-agro-border
              bg-white
              shadow-lg
              xl:hidden
            "
          >
            <div
              className="
                mx-auto
                w-full
                max-w-[1440px]
                px-4
                py-4
                sm:px-6
              "
            >
              {/* Search */}

              <div
                className="
                  mb-4
                  flex
                  h-11
                  items-center
                  rounded-xl
                  border
                  border-agro-border
                  bg-white
                  px-4
                "
              >
                <svg
                  className="
                    mr-2.5
                    h-[17px]
                    w-[17px]
                    shrink-0
                    text-zinc-400
                  "
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

              {/* Navigation */}

              <nav className="flex flex-col gap-0.5">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      transition
                      ${
                        isActive(item.href)
                          ? "bg-agro-green-light text-agro-green-dark"
                          : "text-zinc-700 hover:bg-agro-green-light/70"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* India / Language */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-2
                  gap-2
                  border-t
                  border-agro-border
                  pt-4
                "
              >
                <button
                  type="button"
                  className="
                    flex
                    h-11
                    items-center
                    justify-center
                    gap-1
                    rounded-xl
                    border
                    border-agro-border
                    text-sm
                    font-medium
                    text-zinc-700
                    transition
                    hover:bg-agro-green-light
                  "
                >
                  India
                  <span className="text-[11px]">⌄</span>
                </button>

                <button
                  type="button"
                  className="
                    flex
                    h-11
                    items-center
                    justify-center
                    gap-1
                    rounded-xl
                    border
                    border-agro-border
                    text-sm
                    font-medium
                    text-zinc-700
                    transition
                    hover:bg-agro-green-light
                  "
                >
                  English
                  <span className="text-[11px]">⌄</span>
                </button>
              </div>

              {/* Mobile Auth */}

              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={openSignIn}
                  className="
                    flex
                    h-[48px]
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-agro-border
                    text-sm
                    font-semibold
                    text-zinc-700
                    transition
                    hover:bg-agro-green-light
                  "
                >
                  Login
                </button>

                <MotionButton
                  label="Get Started"
                  variant="primary"
                  onClick={openSignUp}
                  classes="w-full"
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =======================================================
          AUTH MODALS
      ======================================================= */}

      <SignInModal
        open={signInOpen}
        onClose={closeSignIn}
        onSignUp={openSignUp}
      />

      <SignUpModal
        open={signUpOpen}
        onClose={closeSignUp}
        onSignIn={openSignIn}
      />
    </>
  );
}