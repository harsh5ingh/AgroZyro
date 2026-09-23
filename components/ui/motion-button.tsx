"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface MotionButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  classes?: string;
  href?: string;
  onClick?: () => void;
}

function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs));
}

export default function MotionButton({
  label,
  variant = "primary",
  classes,
  href,
  onClick,
}: MotionButtonProps) {
  const buttonContent = (
    <>
      {/* Expanding green circle */}
      <span
        aria-hidden="true"
        className={cn(
          `
            absolute
            left-1
            top-1
            block
            h-12
            w-12
            rounded-full
            transition-all
            duration-500
            group-hover:w-[calc(100%-8px)]
          `,
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
    </>
  );

  const buttonClasses = cn(
    `
      group
      relative
      inline-flex
      h-[50px]
      w-full
      cursor-pointer
      items-center
      justify-center
      overflow-hidden
      rounded-full
      border-none
      bg-white
      p-1
      outline-none
      sm:w-[195px]
    `,
    classes
  );

  /* ---------------------------------------------------------
     LINK VERSION
  --------------------------------------------------------- */
  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }

  /* ---------------------------------------------------------
     BUTTON VERSION
  --------------------------------------------------------- */
  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClasses}
    >
      {buttonContent}
    </button>
  );
}