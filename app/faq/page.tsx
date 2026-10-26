export const metadata = {
  title: "FAQ",
};

const FAQS = [
  {
    question: "How do I find my voting station?",
    answer:
      "Use the search box on the home page. You can search by town, suburb, ward number, or municipality — for example “Braamfontein”, “Ward 58”, or “eThekwini”. Select your station from the results to view its data.",
  },
  {
    question: "What does the verification status mean?",
    answer:
      "Each station shows one of three statuses. “Captured” means the IEC has entered the results. “Pending Audit” means the results are being checked and may change. “Verified & Signed” means the results have completed the IEC's verification process and are final. Only treat “Verified & Signed” results as official.",
  },
  {
    question: "What is the “View Official Results Slip” button?",
    answer:
      "For stations marked “Verified & Signed”, we link to the official IEC results slip — the signed document from the station itself. This lets you independently confirm that the numbers shown on VoteCheck SA match the official record.",
  },
  {
    question: "Can anyone see who I voted for?",
    answer:
      "No. Your vote is secret by law (Section 86 of the Electoral Act 73 of 1998). VoteCheck SA only shows aggregated totals per station — the same figures the IEC publishes. There is no technology, on this platform or anywhere else, that can link an individual voter to a ballot.",
  },
  {
    question: "Does VoteCheck SA store my personal information?",
    answer:
      "No. We never ask for your name, ID number, or phone number, and we do not track your location. Your search query is used to fetch public results data and is not stored against your identity. We comply with the Protection of Personal Information Act (POPIA).",
  },
  {
    question: "Is VoteCheck SA affiliated with a political party or the IEC?",
    answer:
      "VoteCheck SA is an independent civic project. We are not affiliated with any political party, and we are not run by the IEC — though all our results data comes directly from the IEC's official publications.",
  },
  {
    question: "Why can't I find my station?",
    answer:
      "During early development, only a limited set of stations is available. Once connected to the full IEC dataset, every official voting station will be searchable. Try searching by ward number or municipality rather than the venue name for the broadest match.",
  },
  {
    question: "What should I do if I think the results are wrong?",
    answer:
      "Compare the figures with the official results slip linked on the station page. If you still believe there is an error, report it directly to the IEC — they are the authoritative source. You can also contact us if the problem appears to be a display issue on our side.",
  },
  {
    question: "Is VoteCheck SA free to use?",
    answer:
      "Yes, completely free. There are no accounts, no paywalls, and no advertisements. Civic information should be free and accessible to every South African.",
  },
];

export default function FaqPage() {
  // Simple JSON-LD so search engines can show these as rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="px-4 py-10 sm:py-14">
      {/* JSON-LD is invisible metadata — zero render cost, helps SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Frequently asked questions
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Everything you need to know about VoteCheck SA, your privacy, and
          election data.
        </p>

        <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Still have a question? You can reach the team at{" "}
          {/* Replace with your real contact email before going live */}
          <span className="font-medium text-emerald-700">
            hello@votechecksa.org.za
          </span>
          .
        </p>
      </div>
    </section>
  );
}