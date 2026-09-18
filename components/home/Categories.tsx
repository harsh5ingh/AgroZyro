const categories = [
  {
    name: "Grains",
    description: "Wheat, rice, maize & more",
    icon: "🌾",
  },
  {
    name: "Pulses",
    description: "Chana, dal & more",
    icon: "🫘",
  },
  {
    name: "Oilseeds",
    description: "Mustard, soybean & more",
    icon: "🌱",
  },
  {
    name: "Spices",
    description: "Essential Indian spices",
    icon: "🌶️",
  },
  {
    name: "Fruits & Vegetables",
    description: "Fresh produce",
    icon: "🥕",
  },
  {
    name: "Poultry",
    description: "Chicken, eggs & more",
    icon: "🐔",
  },
  {
    name: "Animal Feed",
    description: "Feed & nutrition",
    icon: "🌿",
  },
  {
    name: "Others",
    description: "Explore more products",
    icon: "＋",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-agro-green">
            Explore Marketplace
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Agricultural products,
            <span className="block text-agro-green-dark">
              all in one place.
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-agro-muted">
            Discover products across major agricultural categories and connect
            with buyers and sellers through AgroZyro.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className="group rounded-2xl border border-agro-border bg-white p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:p-6"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-agro-green-light text-2xl transition-transform duration-200 group-hover:scale-105">
                {category.icon}
              </div>

              {/* Content */}
              <h3 className="mt-5 text-base font-semibold text-zinc-900">
                {category.name}
              </h3>

              <p className="mt-1.5 text-sm leading-5 text-agro-muted">
                {category.description}
              </p>

              {/* Arrow */}
              <div className="mt-5 text-sm font-semibold text-agro-green opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Explore →
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}