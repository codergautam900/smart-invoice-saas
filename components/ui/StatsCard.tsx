import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-500">{title}</p>

          <h2 className="mt-3 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="rounded-2xl bg-blue-100 p-4 dark:bg-blue-950">
          <Icon size={28} />
        </div>
      </div>
    </div>
  );
}