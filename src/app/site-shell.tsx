"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./site-shell.module.css";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const isContinentsPage = usePathname() === "/continents";

  return (
    <>
      {children}

      <div
        className={`${styles.navigationRegion} ${isOpen ? styles.navigationRegionOpen : ""}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          className={`${styles.menuButton} ${isContinentsPage ? styles.menuButtonContinents : ""} ${isOpen ? styles.menuButtonHidden : ""}`}
          aria-label="Open navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <aside
          className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
          aria-label="Site navigation"
          aria-hidden={!isOpen}
        >
          <div className={styles.sidebarHeader}>
            <Link href="/" className={styles.sidebarLabel} onClick={() => setIsOpen(false)}>
              THE ATLAS
            </Link>
            <span className={styles.sidebarCount}>01 / 04</span>
          </div>

          <nav className={styles.nav}>
            <Link href="/" onClick={() => setIsOpen(false)}>
              <span className={styles.navIndex}>01</span>
              <span className={styles.navCopy}>
                <strong>The Atlas</strong>
                <small>The world, in waiting</small>
              </span>
              <span className={styles.navArrow} aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link href="/continents" onClick={() => setIsOpen(false)}>
              <span className={styles.navIndex}>02</span>
              <span className={styles.navCopy}>
                <strong>Continents</strong>
                <small>A world in seven directions</small>
              </span>
              <span className={styles.navArrow} aria-hidden="true">
                ↗
              </span>
            </Link>
            <a href="#places" onClick={() => setIsOpen(false)}>
              <span className={styles.navIndex}>03</span>
              <span className={styles.navCopy}>
                <strong>Been There</strong>
                <small>Places visited, memories kept</small>
              </span>
              <span className={styles.navArrow} aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#field-notes" onClick={() => setIsOpen(false)}>
              <span className={styles.navIndex}>04</span>
              <span className={styles.navCopy}>
                <strong>Done That</strong>
                <small>Observations along the way</small>
              </span>
              <span className={styles.navArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </nav>

          <p className={styles.sidebarNote}>
            A personal geography by
            <br />
            Nimisha Nainwad
          </p>
        </aside>
      </div>
    </>
  );
}
