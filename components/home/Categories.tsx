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
      className="border-t border-agro-border bg-[#fafbf8] py-8 sm:py-10 lg:py-11"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Explore Categories
            </h2>

            <p className="mt-1.5 max-w-3xl text-sm leading-5 text-agro-muted sm:text-base sm:leading-6">
              Choose from a wide range of agricultural products. From grains
              to poultry, spices to more — everything at one place.
            </p>
          </div>

          {/* Desktop / Tablet */}
          <button
            type="button"
            className="hidden shrink-0 whitespace-nowrap text-sm font-semibold text-agro-green transition-colors hover:text-agro-green-dark sm:block"
          >
            View All Categories
            <span className="ml-1.5">→</span>
          </button>
        </div>

        {/* Category Cards */}
        <div
          className="
            mt-6
            grid
            grid-cols-2
            gap-2.5
            sm:mt-7
            sm:grid-cols-4
            sm:gap-3
            lg:grid-cols-8
            lg:gap-2.5
          "
        >
          {categories.map((category) => (
            <button
              key={category.title}
              type="button"
              className="
                group
                min-w-0
                overflow-hidden
                rounded-xl
                border
                border-agro-border
                bg-white
                text-left
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-md
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-agro-green/40
              "
            >
              {/* Image */}
              <div
                className="
                  flex
                  h-[96px]
                  items-center
                  justify-center
                  overflow-hidden
                  bg-white
                  px-2.5
                  py-2
                  sm:h-[110px]
                  sm:px-3
                  sm:py-2
                  lg:h-[112px]
                  lg:px-2.5
                "
              >
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Card Content */}
              <div
                className="
                  min-w-0
                  px-2.5
                  pb-3
                  pt-1
                  sm:px-3
                  sm:pb-3.5
                  sm:pt-1.5
                  lg:px-2.5
                  lg:pb-3
                "
              >
                <h3
                  className="
                    min-h-[32px]
                    text-[12px]
                    font-semibold
                    leading-4
                    tracking-tight
                    text-zinc-900
                    sm:text-[13px]
                    sm:leading-4
                    lg:text-[12px]
                  "
                >
                  {category.title}
                </h3>

                <span
                  className="
                    mt-2
                    block
                    whitespace-nowrap
                    text-[12px]
                    font-semibold
                    text-agro-green
                    sm:mt-2.5
                    sm:text-[13px]
                    lg:text-[12px]
                  "
                >
                  Explore →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile */}
        <button
          type="button"
          className="
            mt-5
            text-sm
            font-semibold
            text-agro-green
            transition-colors
            hover:text-agro-green-dark
            sm:hidden
          "
        >
          View All Categories →
        </button>
      </div>
    </section>
  );
}