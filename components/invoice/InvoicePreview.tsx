interface InvoicePreviewProps {
  companyName: string;
  clientName: string;
  invoiceNumber: string;
  quantity: number;
  price: number;
  gst: number;
}

export default function InvoicePreview({
  companyName,
  clientName,
  invoiceNumber,
  quantity,
  price,
  gst,
}: InvoicePreviewProps) {
  const subtotal = quantity * price;
  const gstAmount = (subtotal * gst) / 100;
  const total = subtotal + gstAmount;

  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm dark:bg-zinc-900">
      <h2 className="mb-8 text-2xl font-bold">
        Invoice Preview
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Company</span>
          <span>{companyName || "-"}</span>
        </div>

        <div className="flex justify-between">
          <span>Client</span>
          <span>{clientName || "-"}</span>
        </div>

        <div className="flex justify-between">
          <span>Invoice No.</span>
          <span>{invoiceNumber || "-"}</span>
        </div>

        <hr />

        <div className="flex justify-between">
          <span>Quantity</span>
          <span>{quantity}</span>
        </div>

        <div className="flex justify-between">
          <span>Price</span>
          <span>₹{price}</span>
        </div>

        <div className="flex justify-between">
          <span>GST Amount</span>
          <span>₹{gstAmount}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>
    </div>
  );
}