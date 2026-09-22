import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.homepage}>
      <div className={styles.map} />

      <div className={styles.gradient} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          A REPOSITORY OF PLACES, PLANS AND DREAMS
        </div>

        <Link href="/continents" className={styles.title}>
          THE ATLAS
        </Link>

        <span className={styles.name}>Nimisha Nainwad</span>

        <div className={styles.tagline}>
          EVERYWHERE I WANT TO GO
        </div>

        <div className={styles.purpose}>
          <div className={styles.noteRule} />
          <p>
            A record of everywhere I have yet to see, every trail I have yet
            to walk, every table I have yet to sit at and every story I have
            yet to collect. A place to gather the world before I go looking
            for my place in it.
          </p>

        </div>

        <div className={styles.coordinates}>
          18° 31&apos; N&nbsp; / &nbsp;73° 51&apos; E
        </div>
      </div>

    </main>
  );
}