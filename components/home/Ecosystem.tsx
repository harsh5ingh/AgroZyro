import {
  Leaf,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    title: "Better Prices",
    description: "Get fair and transparent rates",
    icon: Leaf,
  },
  {
    title: "Wider Reach",
    description: "Connect across India",
    icon: ShieldCheck,
  },
  {
    title: "Secure Transactions",
    description: "Safe and reliable payments",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Community",
    description: "Verified buyers and sellers",
    icon: Users,
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="border-t border-agro-border bg-[#f5faf7] py-6 sm:py-8 lg:py-9"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            items-center
            gap-5
            lg:grid-cols-[minmax(260px,1fr)_minmax(0,1.45fr)_280px]
            lg:gap-6
            xl:gap-7
          "
        >
          {/* =====================================================
              LEFT — ECOSYSTEM INTRO
              ===================================================== */}
          <div className="relative min-w-0 px-0.5 sm:px-1">
            <div className="relative z-10">
              <h2
                className="
                  max-w-[430px]
                  text-[27px]
                  font-semibold
                  leading-[1.08]
                  tracking-tight
                  text-zinc-900
                  sm:text-[30px]
                "
              >
                Built for a Stronger
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Agricultural Ecosystem
              </h2>

              <p className="mt-3 max-w-[450px] text-sm leading-5 text-agro-muted sm:leading-6">
                Whether you&apos;re a farmer, dealer, buyer or seller —
                AgroZyro is built to create better opportunities for everyone.
              </p>

              <button
                type="button"
                className="
                  mt-4
                  inline-flex
                  min-h-[42px]
                  items-center
                  gap-2
                  rounded-lg
                  bg-agro-green
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-agro-green-dark
                  hover:shadow-md
                  sm:px-5
                "
              >
                Learn More
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Decorative leaf */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-8
                -left-8
                h-24
                w-24
                rounded-full
                bg-agro-green-light/80
                blur-[1px]
                sm:-bottom-6
                sm:-left-10
                sm:h-28
                sm:w-28
              "
            />
          </div>

          {/* =====================================================
              CENTER — BENEFITS
              ===================================================== */}
          <div
            className="
              min-w-0
              rounded-2xl
              border
              border-agro-border
              bg-white
              px-4
              py-4
              shadow-sm
              sm:px-5
              sm:py-5
            "
          >
            <div
              className="
                grid
                grid-cols-2
                gap-x-5
                gap-y-5
                sm:gap-x-7
                sm:gap-y-6
                lg:grid-cols-4
                lg:gap-x-5
                lg:gap-y-0
              "
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div key={benefit.title} className="min-w-0">
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-agro-green-light
                        text-agro-green
                      "
                    >
                      <Icon size={21} strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 text-[13px] font-semibold leading-5 text-zinc-900 sm:text-sm">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-1 text-[11px] leading-4 text-agro-muted sm:text-xs">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              RIGHT — IMAGE
              ===================================================== */}
          <div
            className="
              relative
              h-[180px]
              min-w-0
              overflow-hidden
              rounded-2xl
              sm:h-[200px]
              lg:h-[185px]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=900&q=85"
              alt="Agricultural field"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-6">
              <p className="text-sm font-medium text-white">
                Farming
              </p>

              <p className="mt-1 text-[25px] font-semibold leading-[1.02] text-white sm:text-[27px]">
                Today
              </p>

              <p className="text-[25px] font-semibold leading-[1.02] text-white sm:text-[27px]">
                A Better
              </p>

              <p className="text-[25px] font-semibold leading-[1.02] text-white sm:text-[27px]">
                Tomorrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}