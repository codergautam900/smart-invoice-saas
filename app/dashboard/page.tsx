import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCard from "@/components/ui/StatsCard";

import {
  ReceiptText,
  Calculator,
  BadgePercent,
  IndianRupee,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-500">
          Welcome back 👋
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Total Invoices"
          value="0"
          icon={ReceiptText}
        />

        <StatsCard
          title="EMI Calculations"
          value="0"
          icon={Calculator}
        />

        <StatsCard
          title="GST Calculations"
          value="0"
          icon={BadgePercent}
        />

        <StatsCard
          title="Revenue"
          value="₹0"
          icon={IndianRupee}
        />

      </div>

    </DashboardLayout>
  );
}