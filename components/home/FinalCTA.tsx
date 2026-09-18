export default function FinalCTA() {
  return (
    <section className="border-t border-agro-border bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-agro-green-dark px-8 py-16 text-center sm:px-12 lg:px-16 lg:py-20">

          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
              Join AgroZyro
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Be Part of a Better
              <span className="block text-green-300">
                Agricultural Future
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Discover agricultural markets, connect with the right people,
              and build better opportunities through AgroZyro.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-agro-green-dark shadow-sm transition hover:bg-zinc-100"
              >
                Start Buying
              </button>

              <button
                type="button"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Start Selling
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}