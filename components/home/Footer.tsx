import Link from "next/link";

const marketplaceLinks = [
  { label: "Marketplace", href: "#marketplace" },
  { label: "Market Rates", href: "#market-rates" },
  { label: "Categories", href: "#categories" },
  { label: "How It Works", href: "#how-it-works" },
];

const companyLinks = [
  { label: "About AgroZyro", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: "#careers" },
];

const supportLinks = [
  { label: "Help Center", href: "#help" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-agro-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-agro-green text-lg font-bold text-white">
                A
              </div>

              <div>
                <p className="text-xl font-bold tracking-tight text-agro-green-dark">
                  AgroZyro
                </p>

                <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-agro-muted">
                  Every Harvest. One Market.
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-agro-muted">
              A modern agricultural marketplace connecting farmers, buyers,
              sellers and agricultural businesses across India.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-2">
              {["in", "𝕏", "ig"].map((social) => (
                <button
                  key={social}
                  type="button"
                  aria-label={`Visit AgroZyro on ${social}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-agro-border text-xs font-semibold text-zinc-600 transition hover:border-agro-green hover:bg-agro-green-light hover:text-agro-green"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              Marketplace
            </h3>

            <ul className="mt-5 space-y-3">
              {marketplaceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-agro-muted transition hover:text-agro-green-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-agro-muted transition hover:text-agro-green-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-6 text-agro-muted">
              Get updates about AgroZyro, market insights and new features.
            </p>

            <div className="mt-5 flex rounded-xl border border-agro-border bg-background p-1">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
              />

              <button
                type="button"
                className="shrink-0 rounded-lg bg-agro-green px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-agro-green-dark"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-agro-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-agro-muted">
            © 2026 AgroZyro. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            {supportLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-agro-muted transition hover:text-agro-green-dark"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-xs text-agro-muted">
            🇮🇳 India&apos;s Agricultural Marketplace
          </p>
        </div>
      </div>
    </footer>
  );
}