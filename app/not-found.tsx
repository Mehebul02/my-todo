import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
      {/* 404 Number */}
      <div className="rounded-full bg-emerald-100 px-6 py-3 text-4xl font-bold text-emerald-700 mb-6">
        404
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
        Page Not Found
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed, renamed, or never existed.
      </p>

      {/* Back Home Button */}
      <Link
        href="/"
        className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        ← Go Back Home
      </Link>

      {/* Decorative Background Element (Optional) */}
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-transparent to-transparent"></div>
    </main>
  );
}