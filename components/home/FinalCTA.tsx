import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="border-t border-agro-border bg-white py-3 sm:py-4 lg:py-5">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            min-h-[310px]
            overflow-hidden
            rounded-[16px]
            sm:min-h-[265px]
            lg:h-[145px]
            lg:min-h-0
          "
        >
          {/* Background */}
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85"
            alt="Agricultural field"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Green overlay */}
          <div className="absolute inset-0 bg-[#07552f]/85" />

          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#064e2a]/95 via-[#07552f]/85 to-[#07552f]/60" />

          {/* Content */}
          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-center
              px-5
              py-7
              sm:px-7
              sm:py-8
              lg:flex-row
              lg:items-center
              lg:px-8
              lg:py-0
              xl:px-10
            "
          >
            {/* Logo */}
            <div
              className="
                mb-5
                flex
                h-auto
                w-auto
                shrink-0
                items-center
                justify-start
                lg:mr-7
                lg:mb-0
                lg:h-[78px]
                lg:w-[105px]
                lg:justify-center
              "
            >
              <Image
                src="/images/logo/agrozyro-logo.svg"
                alt="AgroZyro"
                width={210}
                height={70}
                className="
                  h-auto
                  w-[115px]
                  brightness-0
                  invert
                  sm:w-[125px]
                  lg:w-[105px]
                "
              />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-medium leading-5 text-white sm:text-[13px] lg:text-[14px]">
                Join Thousands of Farmers, Buyers and Sellers
              </p>

              <h2 className="mt-1 text-[24px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[28px] lg:text-[28px]">
                Be Part of a Better Agricultural Future
              </h2>

              <p className="mt-2 max-w-[650px] text-[12px] leading-5 text-white/85 sm:text-[13px] lg:text-[14px]">
                Together, let&apos;s create a stronger, more connected
                agricultural ecosystem.
              </p>
            </div>

            {/* Buttons */}
            <div
              className="
                mt-6
                grid
                grid-cols-1
                gap-2.5
                sm:grid-cols-2
                lg:ml-8
                lg:mt-0
                lg:flex
                lg:shrink-0
                lg:items-center
                lg:gap-3
              "
            >
              {/* Start Buying */}
              <button
                type="button"
                className="
                  inline-flex
                  h-11
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/90
                  bg-white
                  px-5
                  text-sm
                  font-semibold
                  text-agro-green-dark
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-green-50
                  hover:shadow-md
                  sm:w-auto
                  sm:min-w-[175px]
                  lg:h-12
                  lg:w-[195px]
                "
              >
                Start Buying
                <ArrowRight size={17} strokeWidth={1.8} />
              </button>

              {/* Start Selling */}
              <button
                type="button"
                className="
                  inline-flex
                  h-11
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-green-300/50
                  bg-agro-green
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-agro-green-dark
                  hover:shadow-md
                  sm:w-auto
                  sm:min-w-[175px]
                  lg:h-12
                  lg:w-[195px]
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