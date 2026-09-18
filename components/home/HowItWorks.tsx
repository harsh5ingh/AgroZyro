const steps = [
  {
    number: "01",
    title: "Browse",
    description:
      "Explore agricultural products, categories, sellers and available market information.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Find trusted buyers or sellers and connect with the right agricultural business.",
  },
  {
    number: "03",
    title: "Negotiate",
    description:
      "Discuss quantity, pricing and fulfilment details before placing your order.",
  },
  {
    number: "04",
    title: "Place Order",
    description:
      "Select your quantity, provide delivery details and confirm your order.",
  },
  {
    number: "05",
    title: "Make Payment",
    description:
      "Complete your payment securely through the available payment options.",
  },
  {
    number: "06",
    title: "Track & Receive",
    description:
      "Follow your order status and receive your agricultural products.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-agro-border bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-agro-green">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            A simpler way to trade agricultural products.
          </h2>

          <p className="mt-4 text-base leading-7 text-agro-muted">
            From discovering a product to receiving your order, AgroZyro
            keeps the process simple and transparent.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-agro-border lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative text-center"
              >
                {/* Number */}
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-agro-border bg-white text-sm font-semibold text-agro-green shadow-sm transition-all duration-200 group-hover:border-agro-green group-hover:bg-agro-green group-hover:text-white">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="mt-6 text-base font-semibold text-zinc-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-agro-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 rounded-2xl border border-agro-border bg-white px-6 py-5 sm:flex sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-sm font-semibold text-zinc-900">
              Built around transparency and trust.
            </p>

            <p className="mt-1 text-sm text-agro-muted">
              Every step is designed to make agricultural trade easier.
            </p>
          </div>

          <button
            type="button"
            className="mt-4 text-sm font-semibold text-agro-green transition hover:text-agro-green-dark sm:mt-0"
          >
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
}