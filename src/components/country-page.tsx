"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Country } from "../data/country-data";
import { ExchangeRate } from "./exchange-rate";
import styles from "./country-page.module.css";

export function CountryPage({ country }: { country: Country }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const max = window.innerHeight * 1.15;
      setScrollProgress(Math.min(window.scrollY / max, 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const countryPath = `/continents/${country.continent.toLowerCase().replace(/\s+/g, "-")}/${country.slug}`;

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label={`${country.name} hero`}>
        <div className={styles.heroImageWrap}>
          <Image
            src={country.heroImage}
            alt={country.name}
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
        </div>

        <div className={styles.heroText}>
          <p className={styles.eyebrow}>COUNTRY LEDGER</p>
          <h1
            className={styles.title}
            style={{
              transform: `scale(${1 - scrollProgress * 0.38}) translateY(${scrollProgress * 36}px)`,
              opacity: 1 - scrollProgress * 0.68,
            }}
          >
            {country.name.toUpperCase()}
          </h1>
          {country.nativeName ? (
            <p
              className={styles.nativeName}
              style={{
                opacity: 1 - scrollProgress * 0.82,
                transform: `translateY(${scrollProgress * 18}px)`,
              }}
            >
              {country.nativeName}
            </p>
          ) : null}
        </div>
      </section>

      <section
        className={styles.overviewSheet}
        style={{
          transform: `translateY(${scrollProgress * -110}px)`,
        }}
      >
        <div className={styles.overviewInner}>
          <header className={styles.introHeader}>
            <Link href="/continents" className={styles.backLink}>
              ← ALL CONTINENTS
            </Link>
            <nav className={styles.primaryNav} aria-label="Country navigation">
              <Link href={countryPath}>Overview</Link>
              <Link href={`${countryPath}/regions`}>Regions</Link>
              <Link href={`${countryPath}/experiences`}>Experiences</Link>
            </nav>
          </header>

          <div className={styles.overviewBody} id="overview">
            <div className={styles.introBlock}>
              <p className={styles.sectionLabel}>COUNTRY OVERVIEW</p>
              <p className={styles.introduction}>{country.introduction}</p>
            </div>

            <div className={styles.infoGrid}>
              {(country.overviewItems ?? [
                { label: "People", value: country.people },
                { label: "Languages", value: country.languages },
                { label: "Culture", value: country.culture },
                { label: "Known for", value: country.knownFor },
                { label: "Best time to go", value: country.bestTimeToGo },
                { label: "Currency", value: country.currency },
                { label: "Travel documents", value: country.travelDocuments },
                { label: "General transport", value: country.generalTransport },
                { label: "Safety", value: country.safety },
              ]).map((item) => (
                <article
                  className={`${styles.infoItem} ${item.label !== "Travel documents" ? styles.dynamicInfoItem : ""}`}
                  key={item.label}
                >
                  {item.label === "Travel documents" ? (
                    <Link href={`${countryPath}/travel-documents`} className={styles.infoHeadingLink}>
                      <h2>{item.label}</h2>
                    </Link>
                  ) : (
                    <h2>{item.label}</h2>
                  )}
                  <p>{item.value}</p>
                  {item.label === "Currency" ? (
                    <ExchangeRate currencyCode={country.currencyCode} />
                  ) : null}
                </article>
              ))}
            </div>

            <footer className={styles.sources}>
              <span>Sources</span>
              <p>{country.sources.join(" · ")}</p>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
