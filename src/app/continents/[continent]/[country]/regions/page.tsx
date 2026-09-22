import Link from "next/link";
import { notFound } from "next/navigation";
import { countryCatalog, getCountryBySlug } from "../../../../../data/country-data";
import { getRegionsForCountry } from "../../../../../data/region-data";
import styles from "./page.module.css";

export function generateStaticParams() {
  return countryCatalog.map((country) => ({
    continent: country.continent.toLowerCase().replace(/\s+/g, "-"),
    country: country.slug,
  }));
}

export default async function CountryRegionsPage({
  params,
}: {
  params: Promise<{ continent: string; country: string }>;
}) {
  const { continent, country } = await params;
  const currentCountry = getCountryBySlug(continent, country);

  if (!currentCountry) {
    notFound();
  }

  const regionData = getRegionsForCountry(currentCountry.slug, currentCountry.name);

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <Link href={`/continents/${continent}/${country}`} className={styles.backLink}>
          ← {currentCountry.name}
        </Link>
        <h1>Regions</h1>
      </div>
      <div className={styles.directoryMeta}>
        <p>{regionData?.regions.length ?? 0} first-level administrative regions</p>
        <span>ISO 3166-2 source</span>
      </div>
      <div className={styles.regionGrid}>
        {regionData?.regions.map((region) => (
          <article className={styles.regionCard} key={region.code}>
            <span className={styles.regionCode}>{region.code}</span>
            <h2>{region.name}</h2>
            {region.type ? <p>{region.type}</p> : null}
          </article>
        ))}
      </div>
      {!regionData?.regions.length ? (
        <div className={styles.placeholder}>
          <p>No first-level administrative regions are listed for {currentCountry.name} in the source dataset.</p>
        </div>
      ) : null}
    </main>
  );
}
