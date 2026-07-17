import Image from "next/image";
import Link from "next/link";

export function HubCard({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-3xl border border-[#ebe4f7] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#7B5CD6]/40 hover:shadow-md"
    >
      <Image src={icon} alt="" width={64} height={64} className="h-14 w-14 object-contain" />
      <h3 className="mt-4 text-lg font-black text-[#24212C] group-hover:text-[#7B5CD6]">{title}</h3>
      <p className="mt-2 text-sm font-semibold leading-relaxed text-[#7D7788]">{description}</p>
    </Link>
  );
}
