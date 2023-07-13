import Link from "next/link";
import styles from "./page.module.css";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.select__title}>Choose a gallery</h1>
      <div className={styles.items}>
        <div className={styles.item}>
          <Link href="/portfolio/illustrations">
            <span className={styles.title}>Illustrations</span>
          </Link>
        </div>
        <div className={styles.item}>
          <Link href="/portfolio/websites">
            <span className={styles.title}>Websites</span>
          </Link>
        </div>
        <div className={styles.item}>
          <Link href="/portfolio/application">
            <span className={styles.title}>Application</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
