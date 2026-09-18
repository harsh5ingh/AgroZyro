import {
  ArrowRight,
  MapPin,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const rates = [
  {
    name: "Mustard",
    price: "₹5,850",
    change: "2.4%",
    positive: true,
    location: "Madhya Pradesh",
    image: "/images/market/mustard.jpg",
  },
  {
    name: "Soybean",
    price: "₹4,320",
    change: "1.2%",
    positive: false,
    location: "Maharashtra",
    image: "/images/market/soybean.jpg",
  },
  {
    name: "Wheat",
    price: "₹2,150",
    change: "0.8%",
    positive: true,
    location: "Uttar Pradesh",
    image: "/images/market/wheat.jpg",
  },
  {
    name: "Rice",
    price: "₹3,980",
    change: "1.5%",
    positive: true,
    location: "Chhattisgarh",
    image: "/images/market/rice.jpg",
  },
];

export default function MarketRates() {
  return (
    <section
      id="market-rates"
      className="border-t border-agro-border bg-white py-8 sm:py-9"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Today's Market Rates
            </h2>

            <p className="mt-1 text-sm text-agro-muted sm:text-base">
              Stay updated with the latest market rates across key agricultural
              products.
            </p>
          </div>

          <button
            type="button"
            className="hidden shrink-0 text-sm font-semibold text-agro-green transition-colors hover:text-agro-green-dark sm:block"
          >
            View All Rates
            <span className="ml-1.5">→</span>
          </button>
        </div>

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rates.map((rate, index) => (
            <div
              key={rate.name}
              className={`group flex h-[140px] items-center gap-4 rounded-xl bg-white px-3.5 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                index === 0
                  ? "border-2 border-[#78c69a] hover:border-agro-green"
                  : "border border-agro-border hover:border-agro-green/40"
              }`}
            >
              {/* Product image */}
              <div className="flex h-[112px] w-[112px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#f4f8f4]">
                <img
                  src={rate.image}
                  alt={rate.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex min-w-0 flex-1 flex-col self-stretch py-1">
                <h3 className="truncate text-[15px] font-semibold text-zinc-900">
                  {rate.name}
                </h3>

                <div className="mt-1 flex items-baseline whitespace-nowrap">
                  <span className="text-[18px] font-semibold text-zinc-900">
                    {rate.price}
                  </span>

                  <span className="ml-1 text-[12px] text-zinc-500">
                    / Quintal
                  </span>
                </div>

                <div
                  className={`mt-1 flex items-center gap-1 text-[13px] font-semibold ${
                    rate.positive ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {rate.positive ? (
                    <TrendingUp size={13} strokeWidth={2.5} />
                  ) : (
                    <TrendingDown size={13} strokeWidth={2.5} />
                  )}

                  {rate.change}
                </div>

                {/* Bottom row */}
                <div className="mt-auto flex min-w-0 items-center gap-2">
                  <div className="flex min-w-0 flex-1 items-center gap-1.5 text-[11px] text-zinc-500">
                    <MapPin
                      size={12}
                      strokeWidth={2}
                      className="shrink-0"
                    />

                    <span className="truncate">{rate.location}</span>
                  </div>

                  {/* Arrow */}
                  <button
                    type="button"
                    aria-label={`View ${rate.name} market details`}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-agro-border bg-white text-zinc-700 transition-all duration-200 group-hover:border-agro-green group-hover:text-agro-green hover:bg-agro-green-light"
                  >
                    <ArrowRight size={15} strokeWidth={1.8} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo notice */}
        <p className="mt-3 text-[11px] text-agro-muted">
          Demonstration data — verified market data will be connected in the
          production system.
        </p>
      </div>
    </section>
  );
}