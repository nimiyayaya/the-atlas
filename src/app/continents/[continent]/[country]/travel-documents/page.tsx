import Link from "next/link";
import { notFound } from "next/navigation";
import { countryCatalog, getCountryBySlug } from "../../../../../data/country-data";
import styles from "./page.module.css";

export function generateStaticParams() {
  return countryCatalog.map((country) => ({
    continent: country.continent.toLowerCase().replace(/\s+/g, "-"),
    country: country.slug,
  }));
}

export default async function TravelDocumentsPage({
  params,
}: {
  params: Promise<{ continent: string; country: string }>;
}) {
  const { continent, country } = await params;
  const currentCountry = getCountryBySlug(continent, country);

  if (!currentCountry) {
    notFound();
  }

  const countryPath = `/continents/${continent}/${country}`;

  return (
    <main className={styles.page}>
      <Link href={countryPath} className={styles.backLink}>
        ← {currentCountry.name.toUpperCase()}
      </Link>
      <div className={styles.content}>
        <p className={styles.eyebrow}>TRAVEL DOCUMENTS</p>
        <h1>INDIAN CITIZEN CHECKLIST</h1>
        <p className={styles.introduction}>
          Entry rules for an Indian passport holder travelling to {currentCountry.name}.
          Requirements can change, so confirm the final decision with the destination&apos;s
          embassy, consulate, immigration authority, or official visa portal before booking.
        </p>

        <section className={styles.checklist} aria-label="Indian citizen travel checklist">
          <article>
            <h2>Passport</h2>
            <p>Carry a valid Indian passport with sufficient validity and blank pages for entry and exit stamps.</p>
          </article>
          <article>
            <h2>Visa or entry authorisation</h2>
            <p>{currentCountry.travelDocuments}</p>
          </article>
          <article>
            <h2>Supporting documents</h2>
            <p>Prepare a return or onward booking, accommodation details, proof of funds, travel insurance, and an itinerary where requested.</p>
          </article>
          <article>
            <h2>Travelling with children</h2>
            <p>Carry each child&apos;s passport and any required birth certificate, consent letter, custody document, or visa paperwork.</p>
          </article>
        </section>

        <p className={styles.notice}>
          This page is a planning reference, not immigration advice. Check the official destination authority for the current rule before departure.
        </p>
      </div>
    </main>
  );
}
