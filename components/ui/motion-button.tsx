"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface MotionButtonProps {
  label: string;
  href?: string;
  variant?: "primary" | "secondary";
  classes?: string;
}

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export default function MotionButton({
  label,
  href = "#",
  variant = "primary",
  classes,
}: MotionButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex h-[50px] w-full items-center overflow-hidden rounded-full bg-white p-1 outline-none sm:w-[195px]",
        classes
      )}
    >
      {/* Expanding circle */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-1 top-1 h-12 w-12 rounded-full transition-all duration-500 ease-out group-hover:w-[calc(100%-8px)]",
          variant === "primary"
            ? "bg-agro-green"
            : "bg-agro-green-dark"
        )}
      />

      {/* Arrow */}
      <span
        aria-hidden="true"
        className="
          absolute
          left-5
          top-1/2
          z-10
          -translate-y-1/2
          transition-transform
          duration-500
          group-hover:translate-x-1
        "
      >
        <ArrowRight
          size={20}
          strokeWidth={2}
          className="text-white"
        />
      </span>

      {/* Label */}
      <span
        className="
          absolute
          left-1/2
          top-1/2
          z-10
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
          pl-7
          text-sm
          font-semibold
          tracking-tight
          text-zinc-900
          transition-colors
          duration-500
          group-hover:text-white
        "
      >
        {label}
      </span>
    </Link>
  );
}