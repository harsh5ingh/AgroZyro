"use client";

import Image from "next/image";
import { Heart, MapPin, ArrowRight, BadgeCheck } from "lucide-react";

type Product = {
  name: string;
  image: string;
  location: string;
  price: string;
  change: string;
  changePositive: boolean;
  badge?: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className="
        group
        min-w-0
        overflow-hidden
        rounded-xl
        border
        border-agro-border
        bg-white
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-agro-green/50
        hover:shadow-lg
      "
    >
      {/* =====================================================
          PRODUCT IMAGE
      ====================================================== */}
      <div
        className="
          relative
          aspect-[1.35/1]
          overflow-hidden
          bg-[#f4f7f3]
          sm:aspect-[1.4/1]
        "
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="
            (max-width: 639px) 100vw,
            (max-width: 1279px) 50vw,
            33vw
          "
          className="
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />

        {/* Badge */}
        {product.badge && (
          <span
            className="
              absolute
              left-2.5
              top-2.5
              rounded-md
              bg-agro-green
              px-2
              py-1
              text-[10px]
              font-semibold
              text-white
              shadow-sm
              sm:left-3
              sm:top-3
              sm:px-2.5
              sm:text-[11px]
            "
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="
            absolute
            right-2.5
            top-2.5
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/80
            bg-white/90
            text-zinc-500
            shadow-sm
            backdrop-blur
            transition
            hover:border-red-200
            hover:text-red-500
            sm:right-3
            sm:top-3
            sm:h-9
            sm:w-9
          "
        >
          <Heart
            size={15}
            strokeWidth={1.8}
            className="sm:h-4 sm:w-4"
          />
        </button>
      </div>

      {/* =====================================================
          PRODUCT CONTENT
      ====================================================== */}
      <div className="p-3 sm:p-3.5">
        {/* Product Name */}
        <h3 className="truncate text-[13px] font-semibold text-zinc-900 sm:text-sm">
          {product.name}
        </h3>

        {/* Location */}
        <div className="mt-1 flex min-w-0 items-center gap-1 text-[10px] text-agro-muted sm:text-[11px]">
          <MapPin
            size={11}
            strokeWidth={1.8}
            className="shrink-0 sm:h-3 sm:w-3"
          />

          <span className="truncate">
            {product.location}
          </span>
        </div>

        {/* Price + Change */}
        <div className="mt-3 flex min-w-0 items-end justify-between gap-2">
          <div className="flex min-w-0 items-baseline gap-1">
            <span className="truncate text-[17px] font-bold tracking-tight text-zinc-900 sm:text-lg">
              {product.price}
            </span>

            <span className="shrink-0 text-[10px] text-zinc-500 sm:text-[11px]">
              / Quintal
            </span>
          </div>

          <span
            className={`shrink-0 rounded-md px-2 py-1 text-[9px] font-semibold sm:text-[10px] ${
              product.changePositive
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-600"
            }`}
          >
            {product.change}
          </span>
        </div>

        {/* Verified Seller */}
        <div className="mt-2.5 flex items-center gap-1 text-[10px] text-zinc-500 sm:mt-3">
          <BadgeCheck
            size={12}
            strokeWidth={1.8}
            className="shrink-0 text-agro-green sm:h-[13px] sm:w-[13px]"
          />

          <span>Verified Seller</span>
        </div>

        {/* View Details */}
        <button
          type="button"
          className="
            mt-3
            flex
            h-9
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-agro-green/30
            text-[11px]
            font-semibold
            text-agro-green
            transition
            hover:bg-agro-green
            hover:text-white
            sm:h-10
            sm:text-xs
          "
        >
          <span>View Details</span>

          <ArrowRight
            size={13}
            strokeWidth={1.8}
            className="sm:h-[14px] sm:w-[14px]"
          />
        </button>
      </div>
    </article>
  );
}