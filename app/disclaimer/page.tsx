export const metadata = {
  title: "Disclaimer",
};

const SECTIONS = [
  {
    heading: "Not the IEC",
    body: "VoteCheck SA is an independent civic project and is not operated by, endorsed by, or formally affiliated with the Electoral Commission of South Africa. The IEC remains the sole authoritative source of official election results.",
  },
  {
    heading: "Verification status",
    body: "Station results are displayed with their IEC verification status. Figures for stations marked “Captured” or “Pending Audit” are provisional and may change. Only results marked “Verified & Signed” should be treated as final.",
  },
  {
    heading: "Accuracy",
    body: "While we strive to reproduce official data faithfully, we provide this platform “as is” without warranty of any kind. Always confirm results against the official IEC results slip linked on each station page before relying on any figure.",
  },
  {
    heading: "No voter data",
    body: "This platform displays only aggregated, station-level totals published by the IEC. It contains no information about how any individual voted, and nothing on this site can be used to identify a voter's choices.",
  },
] as const;

export default function DisclaimerPage() {
  return (
    <section className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">Disclaimer</h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          Important information about the data and limitations of this platform.
        </p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold text-slate-900">
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}