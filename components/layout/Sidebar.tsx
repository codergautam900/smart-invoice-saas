"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ReceiptText,
  Calculator,
  BadgePercent,
} from "lucide-react";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Invoice",
    href: "/invoice",
    icon: ReceiptText,
  },
  {
    title: "EMI Calculator",
    href: "/emi",
    icon: Calculator,
  },
  {
    title: "GST Calculator",
    href: "/gst",
    icon: BadgePercent,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex h-screen w-64 border-r flex-col p-5">
      <h1 className="mb-8 text-2xl font-bold">
        💼 Smart Invoice
      </h1>

      <nav className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="flex items-center gap-3 rounded-lg p-3 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            <link.icon size={20} />
            {link.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}