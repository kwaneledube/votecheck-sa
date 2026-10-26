import { Suspense } from "react";
import Link from "next/link";
import { searchStations } from "@/lib/mock-data";
import StationResultCard from "@/components/StationResultCard";

export const metadata = {
  title: "Search Results | VoteCheck SA",
};

type SearchPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// 1. This is the main page. It only contains the static parts.
export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <section className="px-4 py-8 sm:py-12 min-h-screen">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:underline"
        >
          ← Back to search
        </Link>
        
        {/* 2. We wrap the dynamic part in <Suspense> so Next.js doesn't block the page */}
        <Suspense fallback={<SearchSkeleton />}>
          <SearchResults searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}

// 3. This child component awaits the searchParams safely inside the Suspense boundary
async function SearchResults({ searchParams }: SearchPageProps) {
  const resolvedParams = await searchParams;
  const q = resolvedParams.q;
  const query = typeof q === "string" ? q.trim() : "";
  const stations = query ? searchStations(query) : [];

  return (
    <>
      <div className="mb-6 mt-3">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {query ? `Results for “${query}”` : "Search for a voting station"}
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          {query
            ? `${stations.length} station${stations.length === 1 ? "" : "s"} found`
            : "Enter a town, suburb, ward, or municipality to find your voting station."}
        </p>
      </div>

      {query && stations.length === 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
          <p className="font-semibold text-slate-900">No stations found</p>
          <p className="mt-1 text-sm text-slate-500">
            Try a nearby town, a broader suburb name, or a ward number.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            New search
          </Link>
        </div>
      )}

      <ul className="space-y-3">
        {stations.map((station) => (
          <li key={station.id}>
            <StationResultCard station={station} />
          </li>
        ))}
      </ul>
    </>
  );
}

// 4. A loading placeholder shown while the search runs
function SearchSkeleton() {
  return (
    <div className="animate-pulse mt-6">
      <div className="h-8 w-64 bg-slate-200 rounded mb-2"></div>
      <div className="h-4 w-48 bg-slate-200 rounded mb-8"></div>
      <div className="h-32 w-full bg-slate-100 rounded-xl border border-slate-200"></div>
    </div>
  );
}