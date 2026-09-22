"use client";

import { useEffect, useState } from "react";
import styles from "./exchange-rate.module.css";

type ExchangeRateResponse = {
  date: string;
  base: string;
  quote: string;
  rate: number;
};

function formatRate(rate: number) {
  if (rate >= 100) return rate.toFixed(2);
  if (rate >= 1) return rate.toFixed(2);
  if (rate >= 0.1) return rate.toFixed(3);
  if (rate >= 0.01) return rate.toFixed(4);
  return rate.toPrecision(2);
}

export function ExchangeRate({ currencyCode }: { currencyCode?: string }) {
  const [rate, setRate] = useState<ExchangeRateResponse | null>(null);

  useEffect(() => {
    if (!currencyCode || currencyCode === "INR") return;

    let active = true;
    fetch(`/api/exchange-rate?currency=${currencyCode}`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data: ExchangeRateResponse | null) => {
        if (active && data?.rate && data.date) setRate(data);
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, [currencyCode]);

  if (!rate) return null;

  const updatedDate = new Date(`${rate.date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <p className={styles.rate}>
      ₹1 INR = {formatRate(rate.rate)} {rate.quote}
      <span>Updated {updatedDate}</span>
    </p>
  );
}
