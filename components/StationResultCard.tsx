import Link from "next/link";
import { VotingStation } from "@/lib/mock-data";

export default function StationResultCard({ station }: { station: VotingStation }) {
  return (
    <Link 
      href={`/station/${station.id}`}
      className="block p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all"
    >
      <h2 className="text-xl font-bold text-slate-900">{station.name}</h2>
      <p className="text-slate-600 mt-1">
        {station.municipality}, {station.province} ({station.ward})
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">
          Total Votes: {station.totalVotes}
        </span>
        <span className="text-sm font-semibold text-emerald-600">
          View Results &rarr;
        </span>
      </div>
    </Link>
  );
}