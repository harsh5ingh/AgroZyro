"use client";

import { motion } from "motion/react";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "AgroZyro makes it easier to understand market prices and explore opportunities for agricultural produce.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80",
    name: "Ramesh Patel",
    role: "Farmer, Madhya Pradesh",
  },
  {
    text: "The marketplace experience is simple and transparent. Finding products and connecting with sellers feels much easier.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    name: "Sneha Verma",
    role: "Buyer, Delhi",
  },
  {
    text: "Having agricultural products, market information and seller connections in one place can make sourcing much more convenient.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    name: "Arjun Mehta",
    role: "Agri Business Owner",
  },
  {
    text: "The platform gives sellers a better way to showcase their produce and reach buyers beyond their local market.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
    name: "Vikram Singh",
    role: "Produce Seller, Rajasthan",
  },
  {
    text: "Clear product information and market rates make the buying process much easier to understand.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    name: "Priya Sharma",
    role: "Procurement Manager",
  },
  {
    text: "AgroZyro brings together different parts of agricultural trade into one digital marketplace.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
    name: "Amit Kumar",
    role: "Agri Dealer, Uttar Pradesh",
  },
  {
    text: "The focus on transparency and easier connections between buyers and sellers is what makes the concept interesting.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    name: "Neha Gupta",
    role: "Business Owner, Maharashtra",
  },
  {
    text: "A digital marketplace dedicated to agricultural trade can create useful opportunities for businesses of different sizes.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    name: "Rahul Verma",
    role: "Agri Entrepreneur",
  },
  {
    text: "The interface is straightforward and the marketplace concept makes agricultural sourcing feel more accessible.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=120&q=80",
    name: "Kavita Joshi",
    role: "Business Buyer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-agro-border bg-[#fafbf8] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[620px] flex-col items-center text-center"
        >
          <span className="rounded-full border border-agro-border bg-white px-4 py-1.5 text-[11px] font-medium text-zinc-700 shadow-sm sm:text-xs">
            Testimonials
          </span>

          <h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[38px] md:text-[44px]">
            What our users say
          </h2>

          <p className="mt-3 max-w-[520px] text-sm leading-6 text-agro-muted sm:text-base">
            Hear from farmers, buyers and businesses exploring a better way to
            connect and trade.
          </p>
        </motion.div>

        <div
          className="
            relative
            mt-10
            flex
            justify-center
            gap-4
            overflow-hidden
            [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]
            sm:mt-12
            sm:gap-5
            lg:mt-14
            lg:gap-6
          "
          style={{ height: "620px" }}
        >
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={18}
            className="w-full max-w-[390px] md:hidden"
          />

          <TestimonialsColumn
            testimonials={firstColumn}
            duration={18}
            className="hidden w-[calc(50%-10px)] max-w-[390px] md:block lg:hidden"
          />

          <TestimonialsColumn
            testimonials={secondColumn}
            duration={21}
            className="hidden w-[calc(50%-10px)] max-w-[390px] md:block lg:hidden"
          />

          <TestimonialsColumn
            testimonials={firstColumn}
            duration={18}
            className="hidden w-[calc(33.333%-16px)] max-w-[360px] lg:block"
          />

          <TestimonialsColumn
            testimonials={secondColumn}
            duration={22}
            className="hidden w-[calc(33.333%-16px)] max-w-[360px] lg:block"
          />

          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={20}
            className="hidden w-[calc(33.333%-16px)] max-w-[360px] lg:block"
          />
        </div>

        <p className="mt-4 text-center text-[10px] leading-4 text-agro-muted sm:text-[11px]">
          Illustrative testimonials — sample UI content for the development
          version.
        </p>
      </div>
    </section>
  );
}