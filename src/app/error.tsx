"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-black text-[#24212C]">Something went wrong</h1>
      <p className="mt-4 font-semibold text-[#7D7788]">Please try again.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-[#7B5CD6] px-5 py-3 text-sm font-extrabold text-white"
      >
        Try again
      </button>
    </div>
  );
}
