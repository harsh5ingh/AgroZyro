import { ArrowRight, MapPin, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_390px] lg:gap-16">

          {/* Left */}
          <div className="max-w-3xl text-white">

            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-green-400" />
              India&apos;s Agricultural Marketplace
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-[68px]">
              From Farms to
              <span className="block text-green-300">
                Opportunities
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Discover market rates, connect with trusted buyers and sellers,
              and grow your business with AgroZyro — every harvest finds its
              market.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-agro-green px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-agro-green-dark"
              >
                Explore Marketplace
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className="rounded-xl border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Sell With Us
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
              <div>
                <p className="text-sm font-semibold">Trusted Platform</p>
                <p className="mt-1 text-xs text-white/60">
                  Built for agriculture
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">Transparent Pricing</p>
                <p className="mt-1 text-xs text-white/60">
                  Clear market information
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">Pan-India Access</p>
                <p className="mt-1 text-xs text-white/60">
                  Connect across India
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">Secure Transactions</p>
                <p className="mt-1 text-xs text-white/60">
                  Designed with security
                </p>
              </div>
            </div>
          </div>

          {/* Market Snapshot */}
          <div className="lg:justify-self-end">
            <div className="w-full max-w-[390px] rounded-2xl border border-white/25 bg-white/95 p-6 shadow-2xl backdrop-blur-xl">

              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                    Today&apos;s Market
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-zinc-900">
                    Market Snapshot
                  </h2>
                </div>

                <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  Live
                </span>
              </div>

              <div className="my-5 h-px bg-zinc-200" />

              {/* Commodity */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-agro-green-light text-agro-green">
                    <TrendingUp size={15} />
                  </div>

                  <p className="text-sm font-medium text-zinc-500">
                    Mustard
                  </p>
                </div>

                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-semibold tracking-tight text-zinc-900">
                      ₹5,850
                    </span>

                    <span className="ml-1 text-sm text-zinc-500">
                      / Quintal
                    </span>
                  </div>

                  <span className="rounded-lg bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                    +2.4%
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="mt-6 flex items-center justify-between border-t border-zinc-200 pt-4 text-xs text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  Madhya Pradesh
                </span>

                <span>17 Sep 2026</span>
              </div>

              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:border-agro-green hover:text-agro-green"
              >
                View Market Details
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}