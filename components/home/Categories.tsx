const categories = [
  {
    title: "Grains",
    image: "/images/categories/grains.png",
  },
  {
    title: "Pulses",
    image: "/images/categories/pulses.png",
  },
  {
    title: "Oilseeds",
    image: "/images/categories/oilseeds.png",
  },
  {
    title: "Spices",
    image: "/images/categories/spices.png",
  },
  {
    title: "Fruits & Vegetables",
    image: "/images/categories/fruits-vegetables.png",
  },
  {
    title: "Poultry",
    image: "/images/categories/poultry.png",
  },
  {
    title: "Animal Feed",
    image: "/images/categories/animal-feed.png",
  },
  {
    title: "Others",
    image: "/images/categories/others.png",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="border-t border-agro-border bg-[#fafbf8] py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Explore Categories
            </h2>

            <p className="mt-1 text-sm text-agro-muted sm:text-base">
              Choose from a wide range of agricultural products. From grains
              to poultry, spices to more — everything at one place.
            </p>
          </div>

          <button
            type="button"
            className="hidden shrink-0 text-sm font-semibold text-agro-green sm:block"
          >
            View All Categories
            <span className="ml-1.5">→</span>
          </button>
        </div>

        {/* Category cards */}
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8 lg:gap-2">
          {categories.map((category) => (
            <button
              key={category.title}
              type="button"
              className="group overflow-hidden rounded-xl border border-agro-border bg-white text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Image */}
              <div className="flex h-[118px] items-center justify-center overflow-hidden bg-white px-3 py-2">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card content */}
              <div className="px-3.5 pb-3.5 pt-1">
                <h3 className="whitespace-nowrap text-[13px] font-semibold tracking-tight text-zinc-900">
                  {category.title}
                </h3>

                <span className="mt-3 block text-[13px] font-semibold text-agro-green">
                  Explore →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile */}
        <button
          type="button"
          className="mt-5 text-sm font-semibold text-agro-green sm:hidden"
        >
          View All Categories →
        </button>
      </div>
    </section>
  );
}