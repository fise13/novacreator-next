import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { MarketingHref } from "@/lib/routes";

type ServiceCardProps = {
  title: string;
  description: string;
  href: MarketingHref;
};

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group glass-panel rounded-3xl p-6 transition hover:-translate-y-1 hover:border-neon-purple"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-neon-purple/15 text-neon-purple">
        <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <h3 className="font-radio text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-text-secondary">{description}</p>
    </Link>
  );
}
