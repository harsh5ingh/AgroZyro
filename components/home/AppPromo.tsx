import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Apple,
  Play,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Patel",
    role: "Farmer, Madhya Pradesh",
    quote:
      "AgroZyro has helped me get better prices for my produce. It's simple, transparent and truly farmer-friendly.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Sneha Verma",
    role: "Business Owner, Delhi",
    quote:
      "As a buyer, I can easily find quality produce and connect with verified sellers. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
];

export default function AppPromo() {
  return (
    <section className="border-t border-agro-border bg-white pt-2 pb-0 sm:pt-3">
      <div className="mx-auto max-w-[1330px] px-5 lg:px-0">

        <div className="grid h-[242px] grid-cols-[626px_1fr] gap-7">

          {/* =====================================================
              LEFT — APP PROMO
          ====================================================== */}
          <div className="relative h-[242px] overflow-hidden rounded-[16px] bg-[#e8f6ed]">

            {/* Decorative large leaf */}
            <div className="pointer-events-none absolute right-[105px] top-[-5px] opacity-45">
              <div className="h-[150px] w-[75px] rotate-[30deg] rounded-[100%_0_100%_0] bg-green-200" />

              <div className="absolute left-[30px] top-[15px] h-[130px] w-[2px] rotate-[30deg] bg-green-300/60" />
            </div>

            {/* Decorative bottom circle */}
            <div className="pointer-events-none absolute -bottom-[70px] left-[52%] h-[155px] w-[155px] rounded-full border-[13px] border-green-100/80" />

            {/* ---------------- Content ---------------- */}
            <div className="relative z-10 px-8 pt-6">

              <h2 className="text-[28px] font-semibold leading-[1.04] tracking-tight text-zinc-900">
                Take AgroZyro
                <br />
                <span className="text-agro-green">
                  With You
                </span>
              </h2>

              <p className="mt-3 max-w-[360px] text-[14px] leading-[1.5] text-zinc-600">
                Access market rates, connect with buyers
                <br />
                and sell your produce — anytime, anywhere.
              </p>

              {/* Store buttons */}
              <div className="mt-5 flex gap-3">

                {/* Google Play */}
                <button
                  type="button"
                  className="flex h-[47px] w-[150px] items-center gap-2 rounded-lg bg-black px-3.5 text-white transition hover:bg-zinc-800"
                >
                  <Play
                    size={19}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />

                  <span className="text-left leading-none">
                    <span className="block text-[7px] uppercase tracking-wide">
                      Get it on
                    </span>

                    <span className="mt-0.5 block text-[15px] font-semibold">
                      Google Play
                    </span>
                  </span>
                </button>

                {/* App Store */}
                <button
                  type="button"
                  className="flex h-[47px] w-[150px] items-center gap-2 rounded-lg bg-black px-3.5 text-white transition hover:bg-zinc-800"
                >
                  <Apple
                    size={20}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />

                  <span className="text-left leading-none">
                    <span className="block text-[7px] uppercase tracking-wide">
                      Download on the
                    </span>

                    <span className="mt-0.5 block text-[15px] font-semibold">
                      App Store
                    </span>
                  </span>
                </button>

              </div>
            </div>

            {/* =================================================
                PHONE
            ================================================== */}
            <div
              className="
                absolute
                -bottom-[63px]
                right-[25px]
                z-20
                h-[245px]
                w-[150px]
                rotate-[8deg]
                rounded-[27px]
                border-[5px]
                border-zinc-900
                bg-white
                shadow-xl
              "
            >
              {/* Dynamic Island */}
              <div className="absolute left-1/2 top-[8px] h-[16px] w-[58px] -translate-x-1/2 rounded-full bg-zinc-900" />

              {/* Screen */}
              <div className="h-full overflow-hidden rounded-[21px] bg-white px-[11px] pt-[34px]">

                {/* Welcome */}
                <p className="text-[5px] font-medium uppercase tracking-[0.12em] text-agro-green">
                  Welcome to
                </p>

                {/* Logo */}
                <div className="mt-1 flex items-center justify-between">

                  <div className="w-[91px]">
                    <Image
                      src="/images/logo/agrozyro-logo.svg"
                      alt="AgroZyro"
                      width={180}
                      height={55}
                      className="h-auto w-full"
                    />
                  </div>

                  <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-agro-green text-[10px] font-bold text-white">
                    A
                  </div>

                </div>

                {/* Search */}
                <div className="mt-[15px] flex h-[31px] items-center rounded-lg border border-zinc-200 px-2 text-[5px] text-zinc-400">
                  Search agricultural products...
                </div>

                {/* Market */}
                <div className="mt-4 rounded-lg bg-agro-green p-3 text-white">

                  <p className="text-[5px] uppercase tracking-wide">
                    Today's Market
                  </p>

                  <p className="mt-2 text-[11px] font-semibold">
                    Mustard
                  </p>

                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-[15px] font-bold">
                      ₹5,850
                    </span>

                    <span className="text-[5px]">
                      / Quintal
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* =====================================================
              RIGHT — TESTIMONIALS
          ====================================================== */}
          <div className="min-w-0">

            {/* Header */}
            <div className="flex h-[40px] items-start justify-between">

              <h2 className="text-[25px] font-semibold leading-none tracking-tight text-zinc-900">
                What Our Users Say
              </h2>

              <div className="flex gap-2">

                <button
                  type="button"
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-agro-border bg-white text-zinc-700 transition hover:border-agro-green hover:bg-agro-green-light hover:text-agro-green"
                >
                  <ArrowLeft size={16} />
                </button>

                <button
                  type="button"
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-agro-border bg-white text-zinc-700 transition hover:border-agro-green hover:bg-agro-green-light hover:text-agro-green"
                >
                  <ArrowRight size={16} />
                </button>

              </div>
            </div>

            {/* Cards */}
            <div className="mt-1.5 grid grid-cols-2 gap-4">

              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="
                    h-[182px]
                    rounded-xl
                    border
                    border-agro-border
                    bg-white
                    px-4
                    py-3
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-agro-green/40
                    hover:shadow-md
                  "
                >
                  <div className="flex gap-3">

                    {/* Avatar */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-[58px] w-[58px] shrink-0 rounded-full object-cover"
                    />

                    {/* Content */}
                    <div className="min-w-0">

                      <p className="text-[12px] leading-[1.5] text-zinc-600">
                        "{testimonial.quote}"
                      </p>

                      <h3 className="mt-2.5 text-[14px] font-semibold text-zinc-900">
                        {testimonial.name}
                      </h3>

                      <p className="mt-0.5 text-[12px] text-agro-muted">
                        {testimonial.role}
                      </p>

                      {/* Stars */}
                      <div className="mt-2 flex gap-[2px] text-amber-500">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={14}
                            fill="currentColor"
                            strokeWidth={0}
                          />
                        ))}
                      </div>

                    </div>
                  </div>
                </article>
              ))}

            </div>

            {/* Demo notice */}
            <p className="mt-2 text-[10px] leading-4 text-agro-muted">
              Illustrative testimonials — sample UI content for the
              development version.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}