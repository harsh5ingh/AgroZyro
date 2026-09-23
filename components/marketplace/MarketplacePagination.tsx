"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MarketplacePagination() {
  return (
    <div className="mt-6 flex items-center justify-center gap-1 sm:mt-7 sm:gap-1.5">
      {/* Previous */}
      <button
        type="button"
        aria-label="Previous page"
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-md
          border
          border-agro-border
          bg-white
          text-zinc-500
          transition
          hover:border-agro-green
          hover:text-agro-green
          sm:h-9
          sm:w-9
        "
      >
        <ChevronLeft size={15} />
      </button>

      {/* Page 1 */}
      <button
        type="button"
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-md
          bg-agro-green
          text-xs
          font-semibold
          text-white
          sm:h-9
          sm:w-9
        "
      >
        1
      </button>

      {/* Mobile — only nearby pages */}
      <div className="flex items-center gap-1 sm:hidden">
        <button
          type="button"
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-md
            border
            border-agro-border
            bg-white
            text-xs
            text-zinc-600
            transition
            hover:border-agro-green
            hover:text-agro-green
          "
        >
          2
        </button>

        <span className="px-0.5 text-xs text-zinc-400">...</span>
      </div>

      {/* Tablet / Desktop */}
      <div className="hidden items-center gap-1.5 sm:flex">
        {["2", "3", "4", "5"].map((page) => (
          <button
            key={page}
            type="button"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-md
              border
              border-agro-border
              bg-white
              text-xs
              text-zinc-600
              transition
              hover:border-agro-green
              hover:text-agro-green
            "
          >
            {page}
          </button>
        ))}

        <span className="px-1 text-xs text-zinc-400">...</span>
      </div>

      {/* Next */}
      <button
        type="button"
        aria-label="Next page"
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-md
          border
          border-agro-border
          bg-white
          text-zinc-500
          transition
          hover:border-agro-green
          hover:text-agro-green
          sm:h-9
          sm:w-9
        "
      >
        <ChevronRight size={15} />
      </button>
    </div>
  );
}