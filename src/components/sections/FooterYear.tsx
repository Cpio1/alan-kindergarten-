"use client";

import { useEffect, useState } from "react";

/** Ағымдағы жыл клиентте анықталады — статикалық build ескірмейді. */
export function FooterYear() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span suppressHydrationWarning>{year ?? new Date().getFullYear()}</span>;
}
