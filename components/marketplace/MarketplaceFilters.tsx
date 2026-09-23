"use client";

import { ChevronDown, RotateCcw, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

const categories = [
  "Grains",
  "Pulses",
  "Oilseeds",
  "Spices",
  "Fruits & Vegetables",
  "Poultry",
  "Animal Feed",
  "Others",
];

const certifications = [
  "Organic",
  "FSSAI",
  "APMC Verified",
  "Direct from Farmer",
];

const availability = ["In Stock", "Ready for Delivery"];

export default function MarketplaceFilters() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const filterContent = (
    <>
      {/* Category */}
      <div className="mt-5">
        <h3 className="text-xs font-semibold text-zinc-800">
          Category
        </h3>

        <div className="mt-3 space-y-2.5">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-start gap-2 text-xs leading-4 text-zinc-600"
            >
              <input
                type="checkbox"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-zinc-300 accent-agro-green"
              />

              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mt-6 border-t border-agro-border pt-5">
        <h3 className="text-xs font-semibold text-zinc-800">
          Price Range (₹ / Quintal)
        </h3>

        <div className="mt-4">
          {/* Range */}
          <div className="relative h-1.5 rounded-full bg-agro-green-light">
            <div className="absolute left-0 right-0 h-1.5 rounded-full bg-agro-green" />

            <span className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-agro-green bg-white" />

            <span className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-agro-green bg-white" />
          </div>

          {/* Min / Max */}
          <div className="mt-5 grid grid-cols-2 gap-2">
            <input
              type="text"
              inputMode="numeric"
              placeholder="Min"
              className="
                h-9
                min-w-0
                rounded-md
                border
                border-agro-border
                px-2.5
                text-xs
                text-zinc-800
                outline-none
                transition
                focus:border-agro-green
                focus:ring-1
                focus:ring-agro-green/20
              "
            />

            <input
              type="text"
              inputMode="numeric"
              placeholder="Max"
              className="
                h-9
                min-w-0
                rounded-md
                border
                border-agro-border
                px-2.5
                text-xs
                text-zinc-800
                outline-none
                transition
                focus:border-agro-green
                focus:ring-1
                focus:ring-agro-green/20
              "
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="mt-6 border-t border-agro-border pt-5">
        <h3 className="text-xs font-semibold text-zinc-800">
          Location
        </h3>

        <div className="mt-3 space-y-2">
          <button
            type="button"
            className="
              flex
              h-9
              w-full
              items-center
              justify-between
              rounded-md
              border
              border-agro-border
              px-2.5
              text-xs
              text-zinc-500
              transition
              hover:border-agro-green
            "
          >
            Select State
            <ChevronDown size={14} />
          </button>

          <button
            type="button"
            className="
              flex
              h-9
              w-full
              items-center
              justify-between
              rounded-md
              border
              border-agro-border
              px-2.5
              text-xs
              text-zinc-500
              transition
              hover:border-agro-green
            "
          >
            Select City
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Certification */}
      <div className="mt-6 border-t border-agro-border pt-5">
        <h3 className="text-xs font-semibold text-zinc-800">
          Certification
        </h3>

        <div className="mt-3 space-y-2.5">
          {certifications.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-start gap-2 text-xs leading-4 text-zinc-600"
            >
              <input
                type="checkbox"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-zinc-300 accent-agro-green"
              />

              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mt-6 border-t border-agro-border pt-5">
        <h3 className="text-xs font-semibold text-zinc-800">
          Availability
        </h3>

        <div className="mt-3 space-y-2.5">
          {availability.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-2 text-xs text-zinc-600"
            >
              <input
                type="checkbox"
                className="h-3.5 w-3.5 shrink-0 rounded border-zinc-300 accent-agro-green"
              />

              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* =====================================================
          DESKTOP SIDEBAR
          ===================================================== */}
      <aside
        className="
          hidden
          h-fit
          rounded-xl
          border
          border-agro-border
          bg-white
          p-4
          shadow-sm
          lg:block
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-zinc-900">
            Filters
          </h2>

          <button
            type="button"
            className="
              text-[11px]
              font-medium
              text-agro-green
              transition
              hover:text-agro-green-dark
            "
          >
            Clear All
          </button>
        </div>

        {filterContent}

        {/* Apply */}
        <button
          type="button"
          className="
            mt-6
            flex
            h-10
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-agro-green
            text-xs
            font-semibold
            text-white
            transition
            hover:bg-agro-green-dark
          "
        >
          Apply Filters
        </button>

        {/* Reset */}
        <button
          type="button"
          className="
            mt-2
            flex
            h-9
            w-full
            items-center
            justify-center
            gap-2
            text-[11px]
            font-medium
            text-zinc-500
            transition
            hover:text-agro-green
          "
        >
          <RotateCcw size={13} />
          Reset
        </button>
      </aside>

      {/* =====================================================
          MOBILE FILTER BUTTON
          ===================================================== */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="
            flex
            h-10
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-agro-border
            bg-white
            text-xs
            font-semibold
            text-zinc-800
            shadow-sm
            transition
            hover:border-agro-green
            hover:text-agro-green
            sm:h-11
          "
        >
          <SlidersHorizontal size={15} />
          Filters
        </button>
      </div>

      {/* =====================================================
          MOBILE FILTER OVERLAY
          ===================================================== */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
          />

          {/* Panel */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              max-h-[88vh]
              overflow-y-auto
              rounded-t-[22px]
              border-t
              border-agro-border
              bg-white
              px-5
              pb-6
              pt-4
              shadow-[0_-10px_40px_rgba(0,0,0,0.16)]
              sm:left-auto
              sm:right-0
              sm:top-0
              sm:bottom-0
              sm:w-[390px]
              sm:max-h-none
              sm:rounded-none
              sm:rounded-l-[22px]
              sm:border-l
              sm:border-t-0
            "
          >
            {/* Mobile Header */}
            <div className="sticky top-0 z-10 -mx-5 border-b border-agro-border bg-white px-5 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-zinc-900">
                    Filters
                  </h2>

                  <p className="mt-0.5 text-[11px] text-zinc-500">
                    Refine products to find what you need
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Close filters"
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-agro-border
                    text-zinc-600
                    transition
                    hover:bg-agro-green-light
                    hover:text-agro-green
                  "
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Filter Content */}
            <div className="pt-1">
              {filterContent}

              {/* Mobile Actions */}
              <div className="mt-6 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex
                    h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-agro-border
                    text-xs
                    font-semibold
                    text-zinc-600
                    transition
                    hover:bg-zinc-50
                  "
                >
                  <RotateCcw size={13} />
                  Reset
                </button>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex
                    h-11
                    items-center
                    justify-center
                    rounded-lg
                    bg-agro-green
                    text-xs
                    font-semibold
                    text-white
                    transition
                    hover:bg-agro-green-dark
                  "
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}