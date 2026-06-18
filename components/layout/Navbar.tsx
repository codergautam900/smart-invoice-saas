import { ThemeToggle } from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <ThemeToggle />
    </header>
  );
}