export const metadata = {
  title: "POPIA & Privacy",
};

const SECTIONS = [
  {
    heading: "The short version",
    body: "We collect nothing. No accounts, no tracking, no personal data. There is no database of users because there are no users — only readers of public election data.",
  },
  {
    heading: "What we do not collect",
    body: "VoteCheck SA never asks for your name, ID number, phone number, email address, or home address. We do not use fingerprinting, do not read your device contacts or files, and do not access your precise location.",
  },
  {
    heading: "Search queries",
    body: "When you search for a station, your query is used solely to retrieve public results data and is not linked to you. We recommend not typing personal details into the search box — not because we store them, but as a general privacy habit.",
  },
  {
    heading: "Cookies and analytics",
    body: "This site does not use advertising or cross-site tracking cookies. If aggregate, anonymised usage statistics are ever added, this page will be updated first, in line with POPIA's transparency principles.",
  },
  {
    heading: "Your POPIA rights",
    body: "Under the Protection of Personal Information Act 4 of 2013, you have rights of access, correction, and complaint regarding your personal information. Because we hold none about you, there is nothing to request — but if you believe otherwise, you may contact the Information Regulator (inforegulator.org.za).",
  },
];

export default function PrivacyPage() {
  return (
    <section className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">
          POPIA & Privacy
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          How VoteCheck SA handles personal information under the Protection of
          Personal Information Act (POPIA).
        </p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-semibold text-slate-900">
                {s.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-sm text-emerald-800">
          Questions about this policy? Contact the team at{" "}
          <span className="font-medium">hello@votechecksa.org.za</span>.
        </div>
      </div>
    </section>
  );
}