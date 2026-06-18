"use client";

import { useState } from "react";

export default function Home() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const addNumbers = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-80 rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Simple Calculator
        </h1>

        <input
          type="number"
          placeholder="First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3 outline-none"
        />

        <input
          type="number"
          placeholder="Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3 outline-none"
        />

        <button
          onClick={addNumbers}
          className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700"
        >
          Add Numbers
        </button>

        {result !== null && (
          <div className="mt-5 rounded-lg bg-gray-100 p-4 text-center">
            <p className="text-lg font-semibold">
              Result: {result}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}