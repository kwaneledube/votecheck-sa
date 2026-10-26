import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-slate-900 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Verify election results at{" "}
            <span className="text-emerald-400">your voting station</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            VoteCheck SA helps you find your voting station and view the
            official, verified results published by the IEC — station by
            station, transparently and non-partisanly.
          </p>

          <div className="mx-auto mt-8 max-w-xl">
            <SearchBar />
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Results are official IEC data, published only after verification.
            We never track or store personal information.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold text-slate-900">
            How it works
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                1
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">
                Find your station
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Search by town, suburb, ward, or municipality to locate your
                voting station.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                2
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">
                Check verification status
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                See whether the station's results have been captured, audited,
                or officially verified and signed.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                3
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">
                View verified results
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                See the official IEC results and the signed results slip for
                your station.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}