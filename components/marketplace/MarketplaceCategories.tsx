import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Grains",
    image: "/images/categories/grains.jpg",
  },
  {
    name: "Pulses",
    image: "/images/categories/pulses.jpg",
  },
  {
    name: "Oilseeds",
    image: "/images/categories/oilseeds.jpg",
    active: true,
  },
  {
    name: "Spices",
    image: "/images/categories/spices.jpg",
  },
  {
    name: "Fruits & Vegetables",
    image: "/images/categories/fruits-vegetables.jpg",
  },
  {
    name: "Poultry",
    image: "/images/categories/poultry.jpg",
  },
  {
    name: "Animal Feed",
    image: "/images/categories/animal-feed.jpg",
  },
  {
    name: "Others",
    image: "/images/categories/others.jpg",
  },
];

export default function MarketplaceCategories() {
  return (
    <section
      className="
        relative
        z-50
        -mt-[14px]
        px-4
        pb-6
        sm:-mt-[18px]
        sm:px-6
        sm:pb-7
        lg:px-12
        lg:pb-8
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-2
          gap-2.5
          sm:grid-cols-4
          sm:gap-3
          lg:grid-cols-8
          lg:gap-4
        "
      >
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/marketplace?category=${encodeURIComponent(
              category.name
            )}`}
            className={[
              "group relative min-w-0 overflow-hidden rounded-[13px] border bg-white",
              "shadow-[0_3px_12px_rgba(0,0,0,0.10)]",
              "transition-all duration-200",
              "hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.13)]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159653]/40",
              category.active
                ? "border-[#159653] bg-[#e9f9ef]"
                : "border-[#e5e9e6]",
            ].join(" ")}
          >
            {/* Image */}
            <div
              className="
                relative
                mx-1.5
                mt-1.5
                h-[92px]
                overflow-hidden
                rounded-[9px]
                bg-[#f4f7f4]
                sm:mx-2
                sm:mt-2
                sm:h-[105px]
                lg:h-[125px]
              "
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="
                  (max-width: 639px) 44vw,
                  (max-width: 1023px) 22vw,
                  12vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-300
                  group-hover:scale-[1.04]
                "
              />
            </div>

            {/* Text */}
            <div
              className="
                min-w-0
                px-2
                pb-3
                pt-2.5
                text-center
                sm:px-2.5
                sm:pb-3.5
                sm:pt-3
                lg:px-3
                lg:pb-4
              "
            >
              <p
                className="
                  min-h-[32px]
                  text-[12px]
                  font-semibold
                  leading-4
                  text-[#172018]
                  sm:text-[13px]
                  lg:text-[14px]
                  lg:leading-5
                "
              >
                {category.name}
              </p>

              <p className="mt-1.5 text-[11px] font-medium text-[#08783f] sm:mt-2 sm:text-[12px] lg:text-[13px]">
                Explore
                <span className="ml-1">→</span>
              </p>
            </div>

            {/* Active Indicator */}
            {category.active && (
              <span
                className="
                  absolute
                  right-1.5
                  top-1.5
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-[#168044]
                  text-[10px]
                  font-semibold
                  text-white
                  shadow-sm
                  sm:right-2
                  sm:top-2
                  sm:h-6
                  sm:w-6
                  sm:text-xs
                "
              >
                ✓
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}