"use client";

import { useState } from "react";

export default function InvoiceForm() {
  const [companyName, setCompanyName] = useState("");
  const [clientName, setClientName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [gst, setGst] = useState(18);

  const subtotal = quantity * price;
  const gstAmount = (subtotal * gst) / 100;
  const total = subtotal + gstAmount;

  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm dark:bg-zinc-900">

      <h2 className="mb-6 text-2xl font-bold">
        Create Invoice
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Company Name"
          className="w-full rounded-xl border p-3"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Client Name"
          className="w-full rounded-xl border p-3"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Invoice Number"
          className="w-full rounded-xl border p-3"
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          className="w-full rounded-xl border p-3"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full rounded-xl border p-3"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="GST %"
          className="w-full rounded-xl border p-3"
          value={gst}
          onChange={(e) => setGst(Number(e.target.value))}
        />

      </div>

      <div className="mt-8 space-y-2 rounded-2xl bg-zinc-100 p-5 dark:bg-zinc-800">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>GST Amount</span>
          <span>₹{gstAmount}</span>
        </div>

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>

    </div>
  );
}