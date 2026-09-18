import {
  Search,
  Users,
  MessageSquare,
  ClipboardCheck,
  Wallet,
  Truck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Browse",
    description: "Explore products and check market rates",
    icon: Search,
  },
  {
    number: "2",
    title: "Connect",
    description: "Get in touch with trusted buyers or sellers",
    icon: Users,
  },
  {
    number: "3",
    title: "Negotiate",
    description: "Discuss and finalise the best deal",
    icon: MessageSquare,
  },
  {
    number: "4",
    title: "Place Order",
    description: "Confirm quantity and place your order",
    icon: ClipboardCheck,
  },
  {
    number: "5",
    title: "Make Payment",
    description: "Pay securely through trusted methods",
    icon: Wallet,
  },
  {
    number: "6",
    title: "Track & Receive",
    description: "Track your order until delivery",
    icon: Truck,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-agro-border bg-white py-8 sm:py-9"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            How AgroZyro Works
          </h2>

          <p className="mt-1 text-sm text-agro-muted sm:text-base">
            A simple and transparent process for a better trading experience.
          </p>
        </div>

        {/* Desktop flow */}
        <div className="mt-7 hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-x-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="contents">
                {/* Step */}
                <div className="min-w-0 text-center">
                  {/* Icon */}
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-agro-green-light text-agro-green">
                    <Icon size={26} strokeWidth={2} />
                  </div>

                  {/* Number + title */}
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[10px] font-semibold text-zinc-600">
                      {step.number}
                    </span>

                    <h3 className="whitespace-nowrap text-sm font-semibold text-zinc-900">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mx-auto mt-2 max-w-[155px] text-xs leading-5 text-agro-muted">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex h-14 items-center justify-center">
                    <ArrowRight
                      size={18}
                      strokeWidth={1.8}
                      className="text-agro-green"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tablet / Mobile */}
        <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:hidden">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-agro-green-light text-agro-green">
                  <Icon size={26} strokeWidth={2} />
                </div>

                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[10px] font-semibold text-zinc-600">
                    {step.number}
                  </span>

                  <h3 className="whitespace-nowrap text-sm font-semibold text-zinc-900">
                    {step.title}
                  </h3>
                </div>

                <p className="mx-auto mt-2 max-w-[155px] text-xs leading-5 text-agro-muted">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}