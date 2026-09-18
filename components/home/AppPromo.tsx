export default function AppPromo() {
  return (
    <section className="border-t border-agro-border bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-agro-green-dark">
          <div className="grid items-center lg:grid-cols-2">

            {/* Content */}
            <div className="px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
                AgroZyro Mobile
              </p>

              <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Take AgroZyro
                <span className="block text-green-300">
                  with you.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
                Browse agricultural products, track orders and stay connected
                with the marketplace from wherever you are.
              </p>

              {/* Coming Soon */}
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-green-300" />
                Mobile app coming soon
              </div>

              {/* Store Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  disabled
                  className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-left opacity-90"
                >
                  <span className="text-lg">▶</span>

                  <span>
                    <span className="block text-[10px] text-zinc-500">
                      GET IT ON
                    </span>
                    <span className="block text-sm font-semibold text-zinc-900">
                      Google Play
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  disabled
                  className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-left opacity-90"
                >
                  <span className="text-lg">●</span>

                  <span>
                    <span className="block text-[10px] text-zinc-500">
                      DOWNLOAD ON THE
                    </span>
                    <span className="block text-sm font-semibold text-zinc-900">
                      App Store
                    </span>
                  </span>
                </button>
              </div>
            </div>

            {/* Phone Preview */}
            <div className="flex min-h-[500px] items-center justify-center bg-white/5 px-8 py-12 lg:min-h-[560px]">
              <div className="relative">

                {/* Phone */}
                <div className="relative h-[500px] w-[250px] rounded-[38px] border-[7px] border-zinc-900 bg-white shadow-2xl">
                  
                  {/* Speaker */}
                  <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-zinc-900" />

                  {/* Screen */}
                  <div className="h-full overflow-hidden rounded-[30px] bg-background pt-12">

                    {/* App Header */}
                    <div className="px-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-agro-green">
                            Welcome to
                          </p>

                          <p className="text-lg font-bold text-agro-green-dark">
                            AgroZyro
                          </p>
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-agro-green text-xs font-bold text-white">
                          A
                        </div>
                      </div>
                    </div>

                    {/* Search */}
                    <div className="mx-5 mt-5 rounded-lg border border-agro-border bg-white px-3 py-2 text-[9px] text-zinc-400">
                      Search agricultural products...
                    </div>

                    {/* Market Card */}
                    <div className="mx-5 mt-5 rounded-xl bg-agro-green p-4 text-white">
                      <p className="text-[9px] text-white/70">
                        TODAY&apos;S MARKET
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        Mustard
                      </p>

                      <p className="mt-1 text-xl font-bold">
                        ₹5,850
                        <span className="ml-1 text-[9px] font-normal">
                          / Quintal
                        </span>
                      </p>
                    </div>

                    {/* Categories */}
                    <div className="px-5 pt-5">
                      <p className="text-xs font-semibold text-zinc-900">
                        Categories
                      </p>

                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {["Grains", "Oilseeds", "Poultry"].map((item) => (
                          <div
                            key={item}
                            className="rounded-lg border border-agro-border bg-white p-2 text-center"
                          >
                            <div className="mx-auto h-6 w-6 rounded-md bg-agro-green-light" />

                            <p className="mt-2 text-[8px] font-medium text-zinc-700">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -right-10 bottom-16 rounded-xl border border-white/20 bg-white/95 px-4 py-3 shadow-xl">
                  <p className="text-[9px] text-zinc-500">
                    MARKETPLACE
                  </p>

                  <p className="mt-1 text-xs font-semibold text-agro-green-dark">
                    Every harvest. One market.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}