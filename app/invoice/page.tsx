import DashboardLayout from "@/components/layout/DashboardLayout";
import InvoiceForm from "@/components/invoice/InvoiceForm";

export default function InvoicePage() {
  return (
    <DashboardLayout>

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Invoice Generator
        </h1>

        <p className="mt-2 text-zinc-500">
          Create professional invoices instantly.
        </p>
      </div>

      <InvoiceForm />

    </DashboardLayout>
  );
}