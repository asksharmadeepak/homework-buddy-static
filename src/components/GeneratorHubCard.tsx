import Image from "next/image";
import Link from "next/link";
import type { GeneratorHubItem } from "@/lib/generator-hub";

export function GeneratorHubCard({ item }: { item: GeneratorHubItem }) {
  return (
    <Link
      href={item.href}
      prefetch={false}
      className={`group flex h-full flex-col rounded-3xl ${item.tint} p-5 transition hover:-translate-y-0.5 hover:shadow-md`}
    >
      <Image
        src={item.icon}
        alt=""
        width={56}
        height={56}
        className="h-12 w-12 object-contain"
      />
      <h3 className="mt-4 text-lg font-black text-[#24212C] group-hover:text-[#7B5CD6]">
        {item.title}
      </h3>
      <p className="mt-2 text-sm font-semibold leading-relaxed text-[#7D7788]">
        {item.description}
      </p>
      {item.featured ? (
        <span className="mt-4 inline-flex w-fit rounded-full bg-[#7B5CD6] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white">
          Try free
        </span>
      ) : null}
    </Link>
  );
}
