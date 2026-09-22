import Link from "next/link";
import { notFound } from "next/navigation";
import { CountryPage } from "../../../../components/country-page";
import { countryCatalog, getCountryBySlug } from "../../../../data/country-data";
import styles from "./page.module.css";

export function generateStaticParams() {
  return countryCatalog.map((country) => ({
    continent: country.continent.toLowerCase().replace(/\s+/g, "-"),
    country: country.slug,
  }));
}

export default async function CountryRoutePage({
  params,
}: {
  params: Promise<{ continent: string; country: string }>;
}) {
  const { continent, country } = await params;
  const currentCountry = getCountryBySlug(continent, country);

  if (!currentCountry) {
    notFound();
  }

  const continentHref = `/continents/${continent}`;

  return (
    <>
      <div className={styles.routeMeta}>
        <Link href={continentHref} className={styles.backLink}>
          ← {currentCountry.continent.toUpperCase()}
        </Link>
      </div>
      <CountryPage country={currentCountry} />
    </>
  );
}
