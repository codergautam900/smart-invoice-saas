"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ReceiptText,
  Calculator,
  BadgePercent,
  Settings,
} from "lucide-react";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Invoice Generator",
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
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden h-screen w-64 border-r bg-white dark:bg-zinc-950 md:flex flex-col p-5">

      <h1 className="mb-10 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent">
        Smart Invoice
      </h1>

      <nav className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            <link.icon size={20} />
            {link.title}
          </Link>
        ))}
      </nav>

    </aside>
  );
}