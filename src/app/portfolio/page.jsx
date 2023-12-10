import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Moon Agency Portfolio - Showcasing Excellence",
  description: "Discover the diverse range of projects in the Moon Agency portfolio. From innovative applications to stunning websites, explore how we turn ideas into impactful digital solutions.",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
