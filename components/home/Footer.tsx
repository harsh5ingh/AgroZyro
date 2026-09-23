import Image from "next/image";

const marketplaceLinks = [
  "All Products",
  "Grains",
  "Pulses",
  "Oilseeds",
  "Spices",
  "Poultry",
  "Fruits & Vegetables",
];

const companyLinks = [
  "About Us",
  "Careers",
  "Blog",
  "Press",
  "Contact",
];

const supportLinks = [
  "Help Center",
  "Privacy Policy",
  "Terms of Service",
  "FAQs",
];

export default function Footer() {
  return (
    <footer className="border-t border-agro-border bg-white">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            TOP FOOTER
            ===================================================== */}
        <div
          className="
            grid
            gap-8
            py-8
            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-9
            lg:grid-cols-[1.25fr_0.72fr_0.72fr_0.72fr_1.45fr]
            lg:gap-10
            lg:py-7
          "
        >
          {/* =================================================
              BRAND
              ================================================= */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo/agrozyro-logo.svg"
              alt="AgroZyro"
              width={220}
              height={70}
              className="h-auto w-[180px] sm:w-[195px] lg:w-[205px]"
            />

            <p className="mt-2.5 max-w-[290px] text-[13px] leading-[1.55] text-agro-muted">
              Connecting farms to opportunities.
              <br />
              A smarter, fairer and more transparent
              <br />
              agricultural marketplace for India.
            </p>

            {/* Social */}
            <div className="mt-4 flex items-center gap-2.5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-agro-border
                  text-[12px]
                  font-bold
                  text-agro-muted
                  transition
                  hover:border-agro-green
                  hover:bg-agro-green-light
                  hover:text-agro-green
                "
              >
                in
              </a>

              <a
                href="#"
                aria-label="X"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-agro-border
                  text-[12px]
                  font-bold
                  text-agro-muted
                  transition
                  hover:border-agro-green
                  hover:bg-agro-green-light
                  hover:text-agro-green
                "
              >
                X
              </a>

              <a
                href="https://www.instagram.com/agrozyro" target="_blank" rel="next noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-agro-border
                  text-[11px]
                  font-bold
                  text-agro-muted
                  transition
                  hover:border-agro-green
                  hover:bg-agro-green-light
                  hover:text-agro-green
                "
              >
                ig
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-agro-border
                  text-[11px]
                  font-bold
                  text-agro-muted
                  transition
                  hover:border-agro-green
                  hover:bg-agro-green-light
                  hover:text-agro-green
                "
              >
                ▶
              </a>
            </div>
          </div>

          {/* =================================================
              MARKETPLACE
              ================================================= */}
          <div className="min-w-0">
            <h3 className="text-[14px] font-semibold text-zinc-900">
              Marketplace
            </h3>

            <div className="mt-3 space-y-[7px]">
              {marketplaceLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    block
                    text-[13px]
                    leading-5
                    text-agro-muted
                    transition
                    hover:text-agro-green
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              COMPANY
              ================================================= */}
          <div className="min-w-0">
            <h3 className="text-[14px] font-semibold text-zinc-900">
              Company
            </h3>

            <div className="mt-3 space-y-[7px]">
              {companyLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    block
                    text-[13px]
                    leading-5
                    text-agro-muted
                    transition
                    hover:text-agro-green
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              SUPPORT
              ================================================= */}
          <div className="min-w-0">
            <h3 className="text-[14px] font-semibold text-zinc-900">
              Support
            </h3>

            <div className="mt-3 space-y-[7px]">
              {supportLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    block
                    text-[13px]
                    leading-5
                    text-agro-muted
                    transition
                    hover:text-agro-green
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              SUBSCRIBE
              ================================================= */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h3 className="text-[14px] font-semibold text-zinc-900">
              Subscribe to Updates
            </h3>

            <p className="mt-1.5 max-w-[320px] text-[13px] leading-5 text-agro-muted">
              Get the latest market insights and platform updates.
            </p>

            <div
              className="
                mt-3
                flex
                h-11
                w-full
                max-w-[390px]
                overflow-hidden
                rounded-lg
                border
                border-agro-border
                bg-[#fafbf8]
              "
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-3.5
                  text-[13px]
                  text-zinc-800
                  outline-none
                  placeholder:text-zinc-400
                "
              />

              <button
                type="button"
                className="
                  m-1
                  shrink-0
                  rounded-md
                  bg-agro-green
                  px-4
                  text-[12px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-agro-green-dark
                  sm:px-5
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
            ===================================================== */}
        <div className="border-t border-agro-border" />

        {/* =====================================================
            BOTTOM FOOTER
            ===================================================== */}
        <div
          className="
            flex
            flex-col
            gap-4
            py-5
            text-[12px]
            text-agro-muted
            sm:gap-3
            sm:py-5
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:py-0
            lg:min-h-[58px]
          "
        >
          {/* Copyright */}
          <p className="order-3 sm:order-3 lg:order-1">
            © 2026 AgroZyro. All rights reserved.
          </p>

          {/* Center Links */}
          <div
            className="
              order-1
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
              sm:order-1
              lg:order-2
              lg:gap-6
            "
          >
            <a
              href="#"
              className="transition hover:text-agro-green"
            >
              Help Center
            </a>

            <a
              href="#"
              className="transition hover:text-agro-green"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="transition hover:text-agro-green"
            >
              Privacy Policy
            </a>
          </div>

          {/* Right */}

          <div className="order-2 flex items-center gap-2 sm:order-2 lg:order-3">
              <span>🌿</span>

              <span>India&apos;s Agricultural Marketplace</span>

              <img
                src="/images/india-flag.svg"
                alt="India"
                className="h-3.5 w-5 shrink-0"
              />
            </div>
        </div>
      </div>
    </footer>
  );
}