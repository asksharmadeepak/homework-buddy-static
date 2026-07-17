import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl font-black text-[#24212C]">Page not found</h1>
      <p className="mt-4 font-semibold text-[#7D7788]">
        That page does not exist or is not published yet. Try a worksheet hub or the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-full bg-[#7B5CD6] px-5 py-3 text-sm font-extrabold text-white">
          Home
        </Link>
        <Link href="/worksheets" className="rounded-full border-2 border-[#7B5CD6] px-5 py-3 text-sm font-extrabold text-[#7B5CD6]">
          Worksheets
        </Link>
      </div>
    </div>
  );
}
