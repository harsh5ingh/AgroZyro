"use client";

import React from "react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

type TestimonialsColumnProps = {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
};

export function TestimonialsColumn({
  className = "",
  testimonials,
  duration = 18,
}: TestimonialsColumnProps) {
  return (
    <div
      className={`testimonial-column ${className}`}
      style={
        {
          "--testimonial-duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      <div className="testimonial-column-track">
        {[0, 1].map((copy) => (
          <React.Fragment key={copy}>
            {testimonials.map((testimonial, index) => (
              <article
                key={`${copy}-${index}-${testimonial.name}`}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-agro-border
                  bg-white
                  p-5
                  shadow-sm
                  transition-shadow
                  duration-300
                  hover:shadow-md
                  sm:p-6
                "
              >
                <p className="text-[13px] leading-6 text-zinc-600 sm:text-sm">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    width={44}
                    height={44}
                    alt={testimonial.name}
                    loading="lazy"
                    className="
                      h-10
                      w-10
                      shrink-0
                      rounded-full
                      object-cover
                      ring-2
                      ring-agro-green-light
                      sm:h-11
                      sm:w-11
                    "
                  />

                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-semibold text-zinc-900 sm:text-sm">
                      {testimonial.name}
                    </p>

                    <p className="truncate text-[11px] text-agro-muted sm:text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}