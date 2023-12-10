import Image from "next/image";
import styles from "./page.module.css";
import HeroImage from "public/main_page.svg";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
        <h1 className={styles.title}>
          Elevate Your Digital Products with Superior Design Solutions.
        </h1>
        <p className={styles.description}>
          Transforming Concepts into Tangible Reality: Uniting Teams Across the
          Global Tech Landscape.
        </p>
        <Button url="/portfolio" text="Portfolio" className={styles.button}>
          Explore Our Portfolio
        </Button>
      </div>
      <div className={styles.item}>
        <Image src={HeroImage} className={styles.img} />
      </div>
    </div>
  );
}

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.moonagency.vercel.app"
    : "http://localhost:3000";

export { baseUrl }