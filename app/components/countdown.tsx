"use client";

import { useSyncExternalStore } from "react";

function daysUntilCortadoDay(now: Date) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let target = new Date(today.getFullYear(), 11, 20);
  if (today > target) target = new Date(today.getFullYear() + 1, 11, 20);
  return Math.round((target.getTime() - today.getTime()) / 86_400_000);
}

const subscribe = () => () => {};

export function Countdown() {
  // Server render has no "today", so it shows the generic date line
  const days = useSyncExternalStore(
    subscribe,
    () => daysUntilCortadoDay(new Date()),
    () => null
  );

  if (days === null) {
    return <p className="countdown-text">Every December 20th</p>;
  }

  if (days === 0) {
    return (
      <p className="countdown-text">
        <span className="countdown-number">Today!</span>
        Go order one.
      </p>
    );
  }

  return (
    <p className="countdown-text">
      <span className="countdown-number">{days}</span>
      {days === 1 ? "day" : "days"} until December 20th
    </p>
  );
}
