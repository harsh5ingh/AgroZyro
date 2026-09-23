import Link from "next/link";
import { ArrowRight, MapPin, TrendingUp } from "lucide-react";

const trustIndicators = [
  {
    title: "Trusted Platform",
    description: "Built for agriculture",
  },
  {
    title: "Transparent Pricing",
    description: "Clear market information",
  },
  {
    title: "Pan-India Access",
    description: "Connect across India",
  },
  {
    title: "Secure Transactions",
    description: "Designed with security",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* =====================================================
          MAIN CONTAINER
          ===================================================== */}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div
          className="
            grid
            items-center
            gap-10
            md:gap-12
            lg:grid-cols-[minmax(0,1fr)_390px]
            lg:gap-12
            xl:gap-16
          "
        >
          {/* =================================================
              LEFT CONTENT
              ================================================= */}
          <div className="min-w-0 max-w-3xl text-white">

            {/* Eyebrow */}
            <div
              className="
                mb-5
                inline-flex
                max-w-full
                items-center
                rounded-full
                border
                border-white/25
                bg-white/10
                px-3.5
                py-2
                text-[11px]
                font-medium
                backdrop-blur-md
                sm:px-4
                sm:text-xs
              "
            >
              <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
              <span>India&apos;s Agricultural Marketplace</span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-[42px]
                font-semibold
                leading-[1.04]
                tracking-tight
                sm:text-[52px]
                md:text-[60px]
                lg:text-[64px]
                xl:text-[68px]
              "
            >
              From Farms to
              <span className="block text-green-300">
                Opportunities
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-2xl
                text-[15px]
                leading-6
                text-white/85
                sm:mt-6
                sm:text-base
                sm:leading-7
                lg:text-lg
              "
            >
              Discover market rates, connect with trusted buyers and sellers,
              and grow your business with AgroZyro — every harvest finds its
              market.
            </p>

            {/* =================================================
                CTA
                ================================================= */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">

              {/* Explore Marketplace */}
              <Link
                href="/marketplace"
                className="
                  inline-flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-agro-green
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  transition
                  hover:bg-agro-green-dark
                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                "
              >
                Explore Marketplace
                <ArrowRight size={16} />
              </Link>

              {/* Sell With Us */}
              <Link
                href="/register?role=seller"
                className="
                  inline-flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/35
                  bg-white/10
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition
                  hover:bg-white/20
                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                "
              >
                Sell With Us
              </Link>
            </div>

            {/* =================================================
                TRUST INDICATORS
                ================================================= */}
            <div
              className="
                mt-9
                grid
                grid-cols-2
                gap-x-5
                gap-y-5
                sm:mt-10
                sm:grid-cols-4
                sm:gap-x-6
                lg:gap-x-8
              "
            >
              {trustIndicators.map((item) => (
                <div key={item.title} className="min-w-0">
                  <p className="text-[12px] font-semibold sm:text-sm">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-white/60 sm:text-xs sm:leading-5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              MARKET SNAPSHOT
              ================================================= */}
          <div className="w-full lg:justify-self-end">
            <div
              className="
                w-full
                rounded-2xl
                border
                border-white/25
                bg-white/95
                p-5
                shadow-2xl
                backdrop-blur-xl
                sm:p-6
              "
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500 sm:text-[11px]">
                    Today&apos;s Market
                  </p>

                  <h2 className="mt-1 text-base font-semibold text-zinc-900 sm:text-lg">
                    Market Snapshot
                  </h2>
                </div>

                {/* Status */}
                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-semibold text-red-700 sm:text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                  Live
                </span>
              </div>

              {/* Divider */}
              <div className="my-4 h-px bg-zinc-200 sm:my-5" />

              {/* Commodity */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-agro-green-light text-agro-green">
                    <TrendingUp size={15} />
                  </div>

                  <p className="text-sm font-medium text-zinc-500">
                    Mustard
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[28px] font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                      ₹5,850
                    </span>

                    <span className="ml-1 text-xs text-zinc-500 sm:text-sm">
                      / Quintal
                    </span>
                  </div>

                  <span className="rounded-lg bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700 sm:text-xs">
                    +2.4%
                  </span>
                </div>
              </div>

              {/* Location + Date */}
              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  justify-between
                  gap-2
                  border-t
                  border-zinc-200
                  pt-4
                  text-[11px]
                  text-zinc-500
                  sm:mt-6
                  sm:text-xs
                "
              >
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  Madhya Pradesh
                </span>

                <span>17 Sep 2026</span>
              </div>

              {/* Market Details */}
              <Link
                href="/marketplace"
                className="
                  mt-4
                  flex
                  min-h-[46px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-zinc-200
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-zinc-800
                  transition
                  hover:border-agro-green
                  hover:bg-agro-green-light
                  hover:text-agro-green-dark
                  sm:mt-5
                "
              >
                View Market Details
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}