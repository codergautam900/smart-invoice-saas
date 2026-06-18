"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import InvoiceForm from "@/components/invoice/InvoiceForm";
import InvoicePreview from "@/components/invoice/InvoicePreview";

export default function InvoicePage() {
  const [companyName, setCompanyName] = useState("");
  const [clientName, setClientName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [gst, setGst] = useState(18);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Invoice Generator</h1>
        <p className="mt-2 text-zinc-500">
          Create professional invoices instantly.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <InvoiceForm
          companyName={companyName}
          setCompanyName={setCompanyName}
          clientName={clientName}
          setClientName={setClientName}
          invoiceNumber={invoiceNumber}
          setInvoiceNumber={setInvoiceNumber}
          quantity={quantity}
          setQuantity={setQuantity}
          price={price}
          setPrice={setPrice}
          gst={gst}
          setGst={setGst}
        />

        <InvoicePreview
          companyName={companyName}
          clientName={clientName}
          invoiceNumber={invoiceNumber}
          quantity={quantity}
          price={price}
          gst={gst}
        />
      </div>
    </DashboardLayout>
  );
}