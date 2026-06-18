"use client";

import { Bell, Search } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white/80 px-6 py-4 backdrop-blur-md dark:bg-zinc-950/80">

      <div>
        <h1 className="text-2xl font-bold">
          Smart Invoice
        </h1>

        <p className="text-sm text-zinc-500">
          Manage invoices effortlessly
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="hidden items-center gap-2 rounded-xl border px-3 py-2 md:flex">
          <Search size={18} className="text-zinc-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
        </div>

        <button className="rounded-xl border p-3 transition hover:bg-zinc-100 dark:hover:bg-zinc-900">
          <Bell size={18} />
        </button>

        <ThemeToggle />

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 font-bold text-white">
          G
        </div>

      </div>

    </header>
  );
}