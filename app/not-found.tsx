import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
        404
      </p>
      <h1 className="mt-2 text-2xl font-bold text-slate-900">
        Page not found
      </h1>
      <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
        The station or page you are looking for does not exist. The link may be
        outdated, or the station ID may be incorrect.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
      >
        Back to search
      </Link>
    </section>
  );
}