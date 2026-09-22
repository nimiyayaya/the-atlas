import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountryBySlug } from "../../../../../data/country-data";
import styles from "./page.module.css";

export function generateStaticParams() {
  return [];
}

export default async function CountryExperiencesPage({
  params,
}: {
  params: Promise<{ continent: string; country: string }>;
}) {
  const { continent, country } = await params;
  const currentCountry = getCountryBySlug(continent, country);

  if (!currentCountry) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <Link href={`/continents/${continent}/${country}`} className={styles.backLink}>
          ← {currentCountry.name}
        </Link>
        <h1>Experiences</h1>
      </div>
      <div className={styles.placeholder}>
        <p>Experience notes for {currentCountry.name} will be added in the next layer of the atlas.</p>
      </div>
    </main>
  );
}
