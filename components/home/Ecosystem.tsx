import {
  Leaf,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    title: "Better Prices",
    description: "Get fair and transparent rates",
    icon: Leaf,
  },
  {
    title: "Wider Reach",
    description: "Connect across India",
    icon: ShieldCheck,
  },
  {
    title: "Secure Transactions",
    description: "Safe and reliable payments",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Community",
    description: "Verified buyers and sellers",
    icon: Users,
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="border-t border-agro-border bg-[#f5faf7] py-5 sm:py-6"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="grid items-center gap-5 lg:grid-cols-[1fr_1.45fr_280px]">

          {/* LEFT */}
          <div className="relative px-1">
            <div className="relative z-10">
              <h2 className="max-w-[430px] text-[28px] font-semibold leading-[1.08] tracking-tight text-zinc-900">
                Built for a Stronger
                <br />
                Agricultural Ecosystem
              </h2>

              <p className="mt-3 max-w-[450px] text-sm leading-5 text-agro-muted">
                Whether you're a farmer, dealer, buyer or seller — AgroZyro
                is built to create better opportunities for everyone.
              </p>

              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-agro-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-agro-green-dark hover:shadow-md"
              >
                Learn More
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Decorative leaf */}
            <div className="pointer-events-none absolute -bottom-6 -left-10 h-28 w-28 rounded-full bg-agro-green-light/80 blur-[1px]" />
          </div>

          {/* CENTER BENEFITS */}
          <div className="rounded-2xl border border-agro-border bg-white px-5 py-5 shadow-sm">
            <div className="grid grid-cols-2 gap-x-7 gap-y-5 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div key={benefit.title} className="min-w-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-agro-green-light text-agro-green">
                      <Icon size={21} strokeWidth={2} />
                    </div>

                    <h3 className="mt-2 text-sm font-semibold leading-5 text-zinc-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-1 text-xs leading-4 text-agro-muted">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[185px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=900&q=85"
              alt="Agricultural field"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 flex flex-col justify-center px-5 text-white">
              <p className="text-sm font-medium">
                Farming
              </p>

              <p className="mt-1 text-[26px] font-semibold leading-[1.02]">
                Today
              </p>

              <p className="text-[26px] font-semibold leading-[1.02]">
                A Better
              </p>

              <p className="text-[26px] font-semibold leading-[1.02]">
                Tomorrow
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}