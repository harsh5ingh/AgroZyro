const testimonials = [
  {
    quote:
      "A digital marketplace that makes it easier to discover products and understand the market before making a deal.",
    name: "Ramesh Patel",
    role: "Farmer",
    location: "Madhya Pradesh",
    initials: "RP",
  },
  {
    quote:
      "Having products, market information and sellers in one place can make agricultural sourcing much more convenient.",
    name: "Sneha Verma",
    role: "Business Owner",
    location: "Delhi",
    initials: "SV",
  },
  {
    quote:
      "A connected marketplace can help agricultural businesses reach more buyers and manage their trade digitally.",
    name: "Amit Sharma",
    role: "Agricultural Trader",
    location: "Rajasthan",
    initials: "AS",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-agro-border bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-agro-green">
            Community
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Built around the people behind agriculture.
          </h2>

          <p className="mt-4 text-base leading-7 text-agro-muted">
            AgroZyro is designed to make agricultural trade more connected,
            transparent and accessible.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-agro-border bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 text-sm text-agro-earth">
                {"★★★★★"}
              </div>

              {/* Quote */}
              <blockquote className="mt-6 flex-1 text-base leading-7 text-zinc-700">
                “{testimonial.quote}”
              </blockquote>

              {/* Person */}
              <div className="mt-8 flex items-center gap-3 border-t border-agro-border pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-agro-green-light text-xs font-semibold text-agro-green">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-xs text-agro-muted">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Content Notice */}
        <p className="mt-6 text-center text-xs text-zinc-400">
          Illustrative testimonials — sample UI content for the development
          version.
        </p>
      </div>
    </section>
  );
}