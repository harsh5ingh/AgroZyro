const marketRates = [
  {
    name: "Mustard",
    rate: "₹5,850",
    unit: "Quintal",
    change: "+2.4%",
    trend: "up",
    location: "Madhya Pradesh",
  },
  {
    name: "Soybean",
    rate: "₹4,720",
    unit: "Quintal",
    change: "+1.8%",
    trend: "up",
    location: "Madhya Pradesh",
  },
  {
    name: "Wheat",
    rate: "₹2,450",
    unit: "Quintal",
    change: "+0.9%",
    trend: "up",
    location: "Madhya Pradesh",
  },
  {
    name: "Rice",
    rate: "₹3,200",
    unit: "Quintal",
    change: "-0.6%",
    trend: "down",
    location: "Madhya Pradesh",
  },
];

export default function MarketRates() {
  return (
    <section
      id="market-rates"
      className="border-t border-agro-border bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-agro-green">
              Today&apos;s Market
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Today&apos;s Market Rates
            </h2>

            <p className="mt-4 text-base leading-7 text-agro-muted">
              Track commodity prices and market movements across agricultural
              markets.
            </p>
          </div>

          <button
            type="button"
            className="w-fit text-sm font-semibold text-agro-green transition hover:text-agro-green-dark"
          >
            View All Rates →
          </button>
        </div>

        {/* Rate Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketRates.map((item) => (
            <article
              key={item.name}
              className="group rounded-2xl border border-agro-border bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
            >
              {/* Commodity */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                    Commodity
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                    {item.name}
                  </h3>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-agro-green-light text-sm text-agro-green">
                  ↗
                </div>
              </div>

              {/* Price */}
              <div className="mt-8">
                <span className="text-3xl font-semibold tracking-tight text-zinc-900">
                  {item.rate}
                </span>

                <span className="ml-1.5 text-sm text-zinc-500">
                  / {item.unit}
                </span>
              </div>

              {/* Change */}
              <div className="mt-4 flex items-center gap-2">
                <span
                  className={`rounded-md px-2 py-1 text-xs font-semibold ${
                    item.trend === "up"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {item.change}
                </span>

                <span className="text-xs text-zinc-400">
                  vs. last week
                </span>
              </div>

              {/* Location */}
              <div className="mt-6 border-t border-agro-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">
                    {item.location}
                  </span>

                  <span className="text-xs font-medium text-agro-green opacity-0 transition-opacity group-hover:opacity-100">
                    Details →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-zinc-400">
          Market rates shown here are demonstration data and will be replaced
          with verified market data in the production system.
        </p>
      </div>
    </section>
  );
}