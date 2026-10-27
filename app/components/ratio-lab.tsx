"use client";

import { useState } from "react";
import { Glass } from "./glass";

const DRINKS = [
  {
    max: 2,
    name: "Espresso",
    note: "No milk at all. Strong, short, and a little sharp."
  },
  {
    max: 25,
    name: "Macchiato",
    note: "Espresso “stained” with a dot of milk. Still mostly coffee."
  },
  {
    max: 62,
    name: "Cortado",
    note: "Espresso cut with about as much warm milk. Smooth, balanced, and the reason we're here."
  },
  {
    max: 78,
    name: "Flat white",
    note: "More milk with a thin layer of microfoam. Softer and silkier."
  },
  {
    max: 100,
    name: "Latte",
    note: "Mostly milk with a shot of espresso. A big, mellow cup."
  }
];

export function RatioLab() {
  const [milk, setMilk] = useState(50);
  const drink = DRINKS.find((d) => milk <= d.max) ?? DRINKS[DRINKS.length - 1];
  const isCortado = drink.name === "Cortado";

  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <div className="mx-auto w-56 text-espresso md:w-72">
        <Glass milk={milk / 100} className="w-full overflow-visible" />
      </div>

      <div>
        <p
          className={`font-display text-6xl leading-none font-extrabold tracking-tight transition-colors md:text-8xl ${
            isCortado ? "text-cobalt" : "text-espresso"
          }`}
          aria-live="polite"
        >
          {drink.name}
        </p>
        <p className="mt-4 max-w-md text-lg text-espresso/80">{drink.note}</p>

        <label htmlFor="milk" className="mt-10 block font-semibold">
          Milk in the glass: {milk}%
        </label>
        <input
          id="milk"
          type="range"
          min={0}
          max={90}
          value={milk}
          onChange={(e) => setMilk(Number(e.target.value))}
          className="ratio-slider mt-3 w-full"
        />
        <div className="mt-2 flex justify-between text-sm text-espresso/60">
          <span>All espresso</span>
          <span>Mostly milk</span>
        </div>

        {!isCortado && (
          <button
            type="button"
            onClick={() => setMilk(50)}
            className="mt-6 rounded-full border-2 border-espresso px-5 py-2 font-semibold transition-colors hover:bg-espresso hover:text-milk"
          >
            Reset to a cortado
          </button>
        )}
      </div>
    </div>
  );
}
