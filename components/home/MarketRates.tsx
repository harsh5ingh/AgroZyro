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
      className="border-t border-agro-border bg-white py-8 sm:py-9 lg:py-10"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Today&apos;s Market Rates
            </h2>

            <p className="mt-1.5 max-w-3xl text-sm leading-5 text-agro-muted sm:text-base sm:leading-6">
              Stay updated with the latest market rates across key agricultural
              products.
            </p>
          </div>

          {/* Desktop / Tablet */}
          <button
            type="button"
            className="hidden shrink-0 whitespace-nowrap text-sm font-semibold text-agro-green transition-colors hover:text-agro-green-dark sm:block"
          >
            View All Rates
            <span className="ml-1.5">→</span>
          </button>
        </div>

        {/* Rate Cards */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 lg:grid-cols-4">
          {rates.map((rate, index) => (
            <div
              key={rate.name}
              className={`group flex min-w-0 h-[132px] items-center gap-3 rounded-xl bg-white px-3 py-2.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:h-[140px] sm:gap-3.5 sm:px-3.5 sm:py-3 ${
                index === 0
                  ? "border-2 border-[#78c69a] hover:border-agro-green"
                  : "border border-agro-border hover:border-agro-green/40"
              }`}
            >
              {/* Product Image */}
              <div className="flex h-[106px] w-[106px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#f4f8f4] sm:h-[112px] sm:w-[112px]">
                <img
                  src={rate.image}
                  alt={rate.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex min-w-0 flex-1 flex-col self-stretch py-1">
                <h3 className="truncate text-[14px] font-semibold text-zinc-900 sm:text-[15px]">
                  {rate.name}
                </h3>

                {/* Price */}
                <div className="mt-1 flex min-w-0 items-baseline whitespace-nowrap">
                  <span className="text-[17px] font-semibold tracking-tight text-zinc-900 sm:text-[18px]">
                    {rate.price}
                  </span>

                  <span className="ml-1 text-[11px] text-zinc-500 sm:text-[12px]">
                    / Quintal
                  </span>
                </div>

                {/* Change */}
                <div
                  className={`mt-1 flex items-center gap-1 text-[12px] font-semibold sm:text-[13px] ${
                    rate.positive ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {rate.positive ? (
                    <TrendingUp size={13} strokeWidth={2.5} />
                  ) : (
                    <TrendingDown size={13} strokeWidth={2.5} />
                  )}

                  <span>{rate.change}</span>
                </div>

                {/* Bottom Row */}
                <div className="mt-auto flex min-w-0 items-center gap-1.5">
                  <div className="flex min-w-0 flex-1 items-center gap-1.5 text-[10px] text-zinc-500 sm:text-[11px]">
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
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-agro-border bg-white text-zinc-700 transition-all duration-200 group-hover:border-agro-green group-hover:text-agro-green hover:bg-agro-green-light sm:h-8 sm:w-8"
                  >
                    <ArrowRight size={14} strokeWidth={1.8} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <button
          type="button"
          className="mt-5 text-sm font-semibold text-agro-green transition-colors hover:text-agro-green-dark sm:hidden"
        >
          View All Rates →
        </button>

        {/* Demo Notice */}
        <p className="mt-3 text-[10px] leading-4 text-agro-muted sm:text-[11px]">
          Demonstration data — verified market data will be connected in the
          production system.
        </p>
      </div>
    </section>
  );
}