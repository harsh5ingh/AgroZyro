import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="border-t border-agro-border bg-white pt-3 pb-0">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="relative h-[145px] overflow-hidden rounded-[16px]">

          {/* Background */}
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85"
            alt="Agricultural field"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Green overlay */}
          <div className="absolute inset-0 bg-[#07552f]/85" />

          {/* Subtle right-side gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#064e2a]/95 via-[#07552f]/85 to-[#07552f]/60" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center px-8 lg:px-10">

            {/* Logo mark */}
            <div className="mr-7 flex h-[78px] w-[105px] shrink-0 items-center justify-center">
              <Image
                src="/images/logo/agrozyro-logo.svg"
                alt="AgroZyro"
                width={210}
                height={70}
                className="h-auto w-[105px] brightness-0 invert"
              />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-medium leading-5 text-white">
                Join Thousands of Farmers, Buyers and Sellers
              </p>

              <h2 className="mt-1 text-[28px] font-semibold leading-[1.05] tracking-tight text-white">
                Be Part of a Better Agricultural Future
              </h2>

              <p className="mt-2 text-[14px] leading-5 text-white/85">
                Together, let's create a stronger, more connected agricultural
                ecosystem.
              </p>
            </div>

            {/* Buttons */}
            <div className="ml-8 flex shrink-0 items-center gap-3">

              <button
                type="button"
                className="
                  inline-flex
                  h-12
                  w-[195px]
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/90
                  bg-white
                  text-sm
                  font-semibold
                  text-agro-green-dark
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-green-50
                  hover:shadow-md
                "
              >
                Start Buying
                <ArrowRight size={17} strokeWidth={1.8} />
              </button>

              <button
                type="button"
                className="
                  inline-flex
                  h-12
                  w-[195px]
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-green-300/50
                  bg-agro-green
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-agro-green-dark
                  hover:shadow-md
                "
              >
                Start Selling
                <ArrowRight size={17} strokeWidth={1.8} />
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}