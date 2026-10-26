"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    // The query is a station/area name — not personal information,
    // so nothing is stored or logged server-side.
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="w-full">
      <label htmlFor="station-search" className="sr-only">
        Search for your voting station, town, or ward
      </label>
      <div className="flex overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-emerald-500">
        <input
          id="station-search"
          type="search"
          autoComplete="off"
          enterKeyHint="search"
          placeholder="Search your town, suburb, or ward..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center gap-2 bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </form>
  );
}