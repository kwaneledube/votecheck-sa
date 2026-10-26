import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-bold text-slate-900">
              VoteCheck<span className="text-emerald-600"> SA</span>
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Independent, non-partisan civic project. Data sourced from the
              Electoral Commission of South Africa (IEC).
            </p>
          </div>
          <nav aria-label="Footer" className="flex gap-5 text-sm text-slate-600">
            <Link href="/about" className="hover:text-slate-900">
              About
            </Link>
            <Link href="/privacy" className="hover:text-slate-900">
              POPIA & Privacy
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-900">
              Disclaimer
            </Link>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">
          This platform does not collect, store, or process any personal
          information. Your vote remains secret — always.
        </p>
      </div>
    </footer>
  );
}