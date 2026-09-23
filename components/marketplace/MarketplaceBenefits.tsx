import {
  ShieldCheck,
  BadgeIndianRupee,
  CreditCard,
  MapPinned,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Community",
    description: "Trusted buyers & sellers",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description: "Real market data",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Safe & reliable",
  },
  {
    icon: MapPinned,
    title: "Pan-India Reach",
    description: "Across 28+ states",
  },
];

export default function MarketplaceBenefits() {
  return (
    <section className="border-y border-agro-border bg-agro-green-light">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
        <h2 className="text-center text-base font-semibold text-zinc-900 sm:text-lg">
          Why Choose AgroZyro?
        </h2>

        <div
          className="
            mt-5
            grid
            grid-cols-2
            sm:mt-6
            lg:grid-cols-4
          "
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`
                  flex
                  min-w-0
                  flex-col
                  items-center
                  px-3
                  text-center
                  sm:px-4
                  lg:px-5
                  ${
                    index % 2 !== 0
                      ? "border-l border-agro-border"
                      : ""
                  }
                  ${
                    index >= 2
                      ? "border-t border-agro-border pt-5 sm:pt-6 lg:border-l lg:border-t-0 lg:pt-0"
                      : ""
                  }
                  ${
                    index > 0 && index < 2
                      ? "lg:border-l lg:border-agro-border"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-agro-green/20
                    bg-white
                    text-agro-green
                    sm:h-10
                    sm:w-10
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="sm:h-[19px] sm:w-[19px]"
                  />
                </div>

                <h3 className="mt-2.5 text-[11px] font-semibold leading-4 text-zinc-900 sm:text-sm sm:leading-5">
                  {benefit.title}
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-agro-muted sm:text-xs sm:leading-5">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}