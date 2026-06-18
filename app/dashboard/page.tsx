import DashboardLayout from "@/components/layout/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-lg font-semibold">
            Total Invoices
          </h2>

          <p className="mt-3 text-3xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-lg font-semibold">
            EMI Calculations
          </h2>

          <p className="mt-3 text-3xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-lg font-semibold">
            GST Calculations
          </h2>

          <p className="mt-3 text-3xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-lg font-semibold">
            Revenue
          </h2>

          <p className="mt-3 text-3xl font-bold">
            ₹0
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}