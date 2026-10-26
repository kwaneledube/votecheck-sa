export const metadata = {
  title: "About",
};

const SECTIONS = [
  {
    heading: "What is VoteCheck SA?",
    body: [
      "VoteCheck SA is an independent, non-partisan civic technology project. It allows any member of the public to find a voting station in South Africa and view the official results data for that station once it has been published and verified by the Electoral Commission of South Africa (IEC).",
      "We are not affiliated with, funded by, or aligned to any political party. Our only goal is transparency: making official results data easier for ordinary South Africans to access and verify.",
    ],
  },
  {
    heading: "Where does the data come from?",
    body: [
      "Every figure on this platform comes directly from the IEC — the only lawful source of official election results in South Africa. Results are displayed per voting station, exactly as captured, audited, and signed off by the IEC's results process.",
      "Each station page shows a verification status: Captured (data entered), Pending Audit (checked but not final), or Verified & Signed (officially confirmed). Only stations marked “Verified & Signed” should be treated as final.",
    ],
  },
  {
    heading: "How is my vote kept secret?",
    body: [
      "Your vote is secret by law. Section 86 of the Electoral Act 73 of 1998 protects the secrecy of the ballot, and this is reinforced by the constitutional right to free and fair elections.",
      "VoteCheck SA only ever displays aggregated, station-level totals. There is no way — on this platform or anywhere else — to see how any individual person voted. Ballots are anonymous by design, and we have built nothing that could ever link a person to a vote.",
    ],
  },
  {
    heading: "POPIA and your privacy",
    body: [
      "The Protection of Personal Information Act (POPIA) governs how personal information may be processed in South Africa. VoteCheck SA is designed so that there is essentially nothing to protect: we do not ask for your name, ID number, phone number, or precise location, and we do not use tracking cookies or analytics that identify individuals.",
      "When you search for a station, the query is used to fetch public results data and is not stored against your identity. We recommend you avoid entering any personal details into the search box.",
    ],
  },
  {
    heading: "How can I report a problem?",
    body: [
      "If you believe a station's results are displayed incorrectly, the authoritative channel is the IEC itself. For anything on this platform — a broken link, a wrong station address, or a display bug — you can reach the VoteCheck SA team through our contact channels listed on the FAQ page.",
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">About VoteCheck SA</h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          A non-partisan platform for verifying South African election results —
          station by station, straight from the IEC.
        </p>

        <div className="mt-10 space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold text-slate-900">
                {section.heading}
              </h2>
              {section.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Trust box */}
        <div className="mt-12 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-lg font-semibold text-emerald-900">
            Our commitments
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-emerald-800">
            <li>Non-partisan, always — no party funding, no endorsements.</li>
            <li>Only official IEC data, clearly labelled with its status.</li>
            <li>No personal information collected, ever.</li>
            <li>Open about our methods and open to scrutiny.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}