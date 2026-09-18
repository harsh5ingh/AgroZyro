const benefits = [
  {
    title: "Better Prices",
    description:
      "Access market information and make more informed trading decisions.",
  },
  {
    title: "Wider Reach",
    description:
      "Connect with buyers and sellers beyond your local agricultural market.",
  },
  {
    title: "Secure Transactions",
    description:
      "A platform designed around secure orders, payments and transparent records.",
  },
  {
    title: "Trusted Community",
    description:
      "Build meaningful connections across India's agricultural ecosystem.",
  },
];

export default function Ecosystem() {
  return (
    <section
      id="about"
      className="border-t border-agro-border bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-agro-green">
              Our Ecosystem
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Built for a stronger
              <span className="block text-agro-green-dark">
                agricultural ecosystem.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-agro-muted sm:text-lg">
              AgroZyro brings agricultural businesses, farmers, buyers and
              sellers closer through a modern digital marketplace built for
              transparency and growth.
            </p>

            {/* Benefits */}
            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-agro-green-light text-sm font-semibold text-agro-green">
                      ✓
                    </span>

                    <h3 className="text-base font-semibold text-zinc-900">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="mt-3 pl-11 text-sm leading-6 text-agro-muted">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative min-h-[520px] overflow-hidden rounded-3xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=85')",
                }}
              />

              <div className="absolute inset-0 bg-black/20" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:left-8 sm:right-auto sm:max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-agro-green text-sm font-bold text-white">
                    A
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      AgroZyro
                    </p>

                    <p className="text-xs text-zinc-500">
                      Connecting agriculture
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-px bg-zinc-200" />

                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  Every harvest deserves access to the right market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}