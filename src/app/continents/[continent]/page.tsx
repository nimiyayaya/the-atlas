import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countriesByContinent } from "../../../data/country-data";
import styles from "./page.module.css";

const continentData = {
  africa: {
    name: "Africa",
  },
  antarctica: {
    name: "Antarctica",
  },
  asia: {
    name: "Asia",
  },
  europe: {
    name: "Europe",
  },
  "north-america": {
    name: "North America",
  },
  "south-america": {
    name: "South America",
  },
  oceania: {
    name: "Oceania",
  },
} as const;

export function generateStaticParams() {
  return Object.keys(continentData).map((continent) => ({ continent }));
}

export default async function ContinentPage({
  params,
}: {
  params: Promise<{ continent: string }>;
}) {
  const { continent } = await params;
  const entry = continentData[continent as keyof typeof continentData];

  if (!entry) {
    notFound();
  }

  const countries = countriesByContinent[continent as keyof typeof countriesByContinent] ?? [];

  return (
    <main className={styles.page}>
      <Link href="/continents" className={styles.backLink}>
        ← ALL CONTINENTS
      </Link>
      <div className={styles.content}>
        <p className={styles.eyebrow}>A COUNTRY DIRECTORY</p>
        <h1>{entry.name.toUpperCase()}</h1>
        <p className={styles.note}>CHOOSE A COUNTRY TO BEGIN</p>

        <section className={styles.countrySection} aria-label={`${entry.name} countries`}>
          <div className={styles.countryGrid}>
            {countries.map((country, index) => (
              <Link
                key={country.slug}
                href={`/continents/${continent}/${country.slug}`}
                className={styles.countryCard}
              >
                <div className={styles.cardImageFrame}>
                  <Image
                    src={country.heroImage}
                    alt={country.name}
                    fill
                    sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImage}
                  />
                  <span className={styles.countryIndex}>0{index + 1}</span>
                  <div className={styles.cardMeta}>
                    <span className={styles.countryName}>{country.name}</span>
                    <span className={styles.arrow} aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
