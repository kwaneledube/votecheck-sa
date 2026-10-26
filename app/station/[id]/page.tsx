import Link from "next/link";
import { notFound } from "next/navigation";
import { getStationById } from "@/lib/mock-data";

export const metadata = {
  title: "Station Results",
};

type StationPageProps = {
  params: Promise<{ id: string }>;
};

// Matches your mock-data union type exactly
const STATUS_STYLES: Record<string, string> = {
  "Verified & Signed": "bg-emerald-100 text-emerald-700",
  "Pending Audit": "bg-amber-100 text-amber-700",
  Captured: "bg-slate-100 text-slate-500",
};

export default async function StationPage({ params }: StationPageProps) {
  const { id } = await params;
  const station = getStationById(id);

  if (!station) notFound();

  const isVerified = station.verificationStatus === "Verified & Signed";

  return (
    <section className="px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:underline"
        >
          ← New search
        </Link>

        {/* Station header card */}
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
                {station.name}
              </h1>
              <p className="mt-1 text-sm text-slate-600">{station.address}</p>
              <p className="mt-1 text-sm text-slate-500">
                {station.ward} · {station.municipality} · {station.province}
              </p>
            </div>
            <span
              className={`inline-flex shrink-0 items-center gap-1.5 self-start rounded-full px-3 py-1.5 text-sm font-semibold ${STATUS_STYLES[station.verificationStatus]}`}
            >
              {isVerified && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
              {station.verificationStatus}
            </span>
          </div>

          {/* Stats strip */}
          <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5 sm:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">
                Total votes
              </dt>
              <dd className="mt-1 font-semibold text-slate-900 tabular-nums">
                {station.totalVotes.toLocaleString("en-ZA")}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">
                Valid votes
              </dt>
              <dd className="mt-1 font-semibold text-slate-900 tabular-nums">
                {station.validVotes.toLocaleString("en-ZA")}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">
                Spoilt votes
              </dt>
              <dd className="mt-1 font-semibold text-slate-900 tabular-nums">
                {station.spoiltVotes.toLocaleString("en-ZA")}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">
                Turnout
              </dt>
              <dd className="mt-1 font-semibold text-slate-900 tabular-nums">
                {station.turnoutPercentage}%
              </dd>
            </div>
          </dl>
        </div>

        {/* Results */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Official results
          </h2>

          {!isVerified && (
            <div className="mt-4 rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
              These figures are <strong>captured IEC data</strong> but have not
              yet completed the verification process. Treat them as provisional
              until the station is marked “Verified &amp; Signed”.
            </div>
          )}

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                  <th scope="col" className="pb-3 pr-4 font-semibold">
                    Party
                  </th>
                  <th
                    scope="col"
                    className="pb-3 pr-4 text-right font-semibold"
                  >
                    Votes
                  </th>
                  <th scope="col" className="pb-3 text-right font-semibold">
                    %
                  </th>
                </tr>
              </thead>
              <tbody>
                {station.results.map((r) => (
                  <tr
                    key={r.partyName}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="py-3 pr-4 font-medium text-slate-900">
                      {r.partyName}
                    </td>
                    <td className="py-3 pr-4 text-right text-slate-700 tabular-nums">
                      {r.votes.toLocaleString("en-ZA")}
                    </td>
                    <td className="py-3 text-right text-slate-700 tabular-nums">
                      {r.percentage.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {isVerified && station.resultsSlipUrl && (
            <a
              href={station.resultsSlipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M9 15l6 6M15 15l-6 6" />
              </svg>
              View Official Results Slip
            </a>
          )}
        </div>

        <p className="mt-6 text-xs text-slate-400">
          All figures shown are official IEC data. This page never collects or
          stores personal information.
        </p>
      </div>
    </section>
  );
}