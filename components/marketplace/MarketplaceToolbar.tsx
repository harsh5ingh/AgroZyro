"use client";

import { Grid2X2, List } from "lucide-react";

export default function MarketplaceToolbar() {
  return (
    <div
      className="
        mb-4
        flex
        flex-col
        gap-3
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      {/* =====================================================
          RESULTS INFO
          ===================================================== */}
      <div className="min-w-0">
        <p className="text-sm font-semibold text-zinc-900">
          Showing 24+ products
        </p>

        <p className="mt-0.5 text-[11px] leading-4 text-agro-muted sm:text-xs">
          Browse agricultural products from verified sellers.
        </p>
      </div>

      {/* =====================================================
          CONTROLS
          ===================================================== */}
      <div
        className="
          flex
          w-full
          items-center
          gap-1.5
          sm:w-auto
          sm:gap-2
        "
      >
        {/* Sort label */}
        <span className="hidden text-xs text-zinc-500 md:block">
          Sort by
        </span>

        {/* Sort */}
        <select
          aria-label="Sort products"
          className="
            h-9
            min-w-0
            flex-1
            rounded-lg
            border
            border-agro-border
            bg-white
            px-2.5
            text-[11px]
            font-medium
            text-zinc-700
            outline-none
            transition
            focus:border-agro-green
            focus:ring-1
            focus:ring-agro-green/20
            sm:flex-none
            sm:px-3
            sm:text-xs
          "
        >
          <option>Latest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Most Popular</option>
        </select>

        {/* Grid View */}
        <button
          type="button"
          aria-label="Grid view"
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            border-agro-green
            bg-agro-green-light
            text-agro-green
            transition
            hover:bg-agro-green/10
          "
        >
          <Grid2X2 size={16} />
        </button>

        {/* List View */}
        <button
          type="button"
          aria-label="List view"
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            border-agro-border
            bg-white
            text-zinc-500
            transition
            hover:border-agro-green
            hover:text-agro-green
          "
        >
          <List size={17} />
        </button>
      </div>
    </div>
  );
}