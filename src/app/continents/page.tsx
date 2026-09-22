import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const continents = [
  {
    name: "Africa",
    image: "/images/Continents/Africa Card.jpeg",
  },
  {
    name: "Antarctica",
    image: "/images/Continents/Antarctica Card.jpeg",
  },
  {
    name: "Asia",
    image: "/images/Continents/Asia Card.jpeg",
  },
  {
    name: "Europe",
    image: "/images/Continents/Europe Card.jpeg",
  },
  {
    name: "North America",
    image: "/images/Continents/North America Card.jpeg",
  },
  {
    name: "South America",
    image: "/images/Continents/South America Card.jpeg",
  },
  {
    name: "Oceania",
    image: "/images/Continents/Oceania Card.jpeg",
  },
];

export default function ContinentsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerMeta}>
          <Link href="/" className={styles.backLink}>
            THE ATLAS
          </Link>
          <span>ATLAS / 02</span>
        </div>
        <div className={styles.headingRow}>
          <p className={styles.eyebrow}>THE WORLD, IN WAITING</p>
          <h1>CONTINENTS</h1>
          <p className={styles.intro}>WHERE DO YOU WANT TO BEGIN?</p>
        </div>
      </header>

      <section className={styles.grid} aria-label="Continents">
        {continents.map((continent, index) => {
          const continentHref = `/continents/${continent.name.toLowerCase().replaceAll(" ", "-")}`;

          return (
            <Link href={continentHref} className={styles.card} key={continent.name}>
              <div className={styles.imageFrame}>
                <Image
                  src={continent.image}
                  alt={continent.name}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.image}
                />
                <span className={styles.index}>0{index + 1}</span>
                <div className={styles.cardMeta}>
                  <h2 className={styles.cardTitle}>{continent.name}</h2>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
