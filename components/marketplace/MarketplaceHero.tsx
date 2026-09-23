import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    label: "Verified Sellers",
    icon: CheckCircle2,
  },
  {
    label: "Real-time Prices",
    icon: CircleDollarSign,
  },
  {
    label: "Secure Payments",
    icon: ShieldCheck,
  },
  {
    label: "Pan-India Delivery",
    icon: Truck,
  },
];

export default function MarketplaceHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-[center]
          sm:bg-center
          lg:bg-[center_right]
        "
        style={{
          backgroundImage:
            "url('/images/marketplace/tractor farm.png')",
        }}
      />

      {/* Background overlays */}
      <div className="absolute inset-0 bg-white/65 sm:bg-white/60" />

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20 lg:via-white/75 lg:to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/50 to-transparent sm:h-36" />

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          className="
            relative
            min-h-[760px]
            py-12
            sm:min-h-[700px]
            sm:py-14
            md:min-h-[650px]
            lg:min-h-[590px]
            lg:py-0
          "
        >
          {/* =================================================
              MAIN CONTENT
          ================================================== */}
          <div
            className="
              relative
              z-20
              max-w-[820px]
              pt-2
              sm:pt-4
              md:max-w-[850px]
              lg:pt-[72px]
            "
          >
            {/* Eyebrow */}
            <p className="text-[14px] font-medium text-[#263746] sm:text-[15px] md:text-base">
              Marketplace
            </p>

            {/* Heading */}
            <h1
              className="
                mt-4
                max-w-[850px]
                text-[40px]
                font-bold
                leading-[0.98]
                tracking-[-0.045em]
                text-[#080d14]
                sm:text-[50px]
                md:text-[58px]
                lg:text-[64px]
                xl:text-[66px]
              "
            >
              Quality Produce.
              <span className="block text-[#176b3b]">
                Better Opportunities.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[720px]
                text-[14px]
                leading-6
                text-[#263746]
                sm:mt-6
                sm:text-[16px]
                sm:leading-7
                md:text-[17px]
              "
            >
              Buy and sell agricultural products directly, with transparent
              pricing, verified users and pan-India access.
            </p>

            {/* =================================================
                FEATURE BADGES
            ================================================== */}
            <div
              className="
                mt-6
                grid
                grid-cols-2
                gap-2
                sm:flex
                sm:flex-wrap
                sm:gap-3
                md:mt-7
              "
            >
              {features.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="
                    flex
                    min-w-0
                    h-[42px]
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/80
                    bg-white/90
                    px-2.5
                    shadow-[0_2px_10px_rgba(0,0,0,0.08)]
                    backdrop-blur-sm
                    sm:h-[42px]
                    sm:justify-start
                    sm:px-4
                  "
                >
                  <Icon
                    size={17}
                    strokeWidth={2.2}
                    className="shrink-0 text-[#08783f] sm:h-[18px] sm:w-[18px]"
                  />

                  <span
                    className="
                      truncate
                      text-[11px]
                      font-medium
                      text-[#3d4650]
                      sm:text-[13px]
                    "
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                BUY / SELL BUTTONS
            ================================================== */}
            <div
              className="
                mt-6
                flex
                w-full
                flex-col
                gap-3
                sm:mt-7
                sm:flex-row
                sm:gap-3
              "
            >
              {/* Buy */}
              <button
                type="button"
                className="
                  flex
                  h-[54px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-[#23834b]
                  px-7
                  text-[15px]
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#1d7442]
                  hover:shadow-md
                  active:translate-y-0
                  sm:h-[58px]
                  sm:w-[190px]
                  sm:text-[16px]
                "
              >
                Buy Products
              </button>

              {/* Sell */}
              <button
                type="button"
                className="
                  flex
                  h-[54px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#168044]
                  bg-white
                  px-7
                  text-[15px]
                  font-semibold
                  text-[#101820]
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#f4faf6]
                  hover:text-[#176b3b]
                  hover:shadow-md
                  active:translate-y-0
                  sm:h-[58px]
                  sm:w-[190px]
                  sm:text-[16px]
                "
              >
                Sell Products
              </button>
            </div>
          </div>

          {/* =================================================
              SUPPORTING FARMERS CARD
          ================================================== */}

          {/* Mobile / Tablet */}
          <div
            className="
              relative
              z-20
              mt-10
              w-full
              max-w-[500px]
              lg:hidden
            "
          >
            <div
              className="
                rounded-[20px]
                bg-[#075d32]
                px-5
                py-6
                text-white
                shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                sm:px-6
                sm:py-7
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#75e3a3]
                  sm:text-[10px]
                "
              >
                Supporting Farmers
              </p>

              <h2
                className="
                  mt-3
                  text-[25px]
                  font-bold
                  leading-[1.05]
                  tracking-[-0.02em]
                  sm:text-[29px]
                "
              >
                Strengthening
                <span className="block">Bharat</span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-[430px]
                  text-[13px]
                  leading-5
                  text-white/90
                  sm:text-[14px]
                  sm:leading-6
                "
              >
                Connect with trusted buyers and sellers across India&apos;s
                agricultural ecosystem.
              </p>

              <button
                type="button"
                className="
                  mt-5
                  inline-flex
                  h-11
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-[#72c995]/70
                  px-4
                  text-[13px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/10
                  sm:h-[50px]
                  sm:px-5
                  sm:text-[14px]
                "
              >
                Learn More
                <ArrowRight size={17} strokeWidth={1.8} />
              </button>
            </div>
          </div>

          {/* Desktop Supporting Farmers Card */}
          <div
            className="
              absolute
              right-[5%]
              top-[55px]
              z-30
              hidden
              w-[34%]
              min-w-[330px]
              max-w-[390px]
              lg:block
            "
          >
            <div
              className="
                rounded-[22px]
                bg-[#075d32]
                px-7
                py-7
                text-white
                shadow-[0_20px_45px_rgba(0,0,0,0.14)]
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.30em]
                  text-[#75e3a3]
                "
              >
                Supporting Farmers
              </p>

              <h2
                className="
                  mt-4
                  text-[29px]
                  font-bold
                  leading-[1.05]
                  tracking-[-0.02em]
                  sm:text-[31px]
                "
              >
                Strengthening
                <span className="block">Bharat</span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-[300px]
                  text-[14px]
                  leading-6
                  text-white/90
                "
              >
                Connect with trusted buyers and sellers across India&apos;s
                agricultural ecosystem.
              </p>

              <button
                type="button"
                className="
                  mt-6
                  inline-flex
                  h-[50px]
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#72c995]/70
                  px-5
                  text-[14px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                Learn More
                <ArrowRight size={18} strokeWidth={1.8} />
              </button>
            </div>
          </div>

          {/* =================================================
              FARMER HAND + CROP
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[-35px]
              right-[-60px]
              z-40
              hidden
              h-[475px]
              w-[330px]
              lg:block
              xl:right-[-125px]
              xl:h-[500px]
              xl:w-[350px]
            "
          >
            <img
              src="/images/marketplace/right hand with crop.png"
              alt=""
              className="h-full w-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}