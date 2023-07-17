import Link from "next/link";
import styles from "./page.module.css";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.select__title}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.link}>
          <div className={styles.item}>
            <span className={styles.title}>Illustrations</span>
          </div>
        </Link>
        <Link href="/portfolio/websites" className={styles.link}>
          <div className={styles.item}>
            <span className={styles.title}>Websites</span>
          </div>
        </Link>
        <Link href="/portfolio/application" className={styles.link}>
          <div className={styles.item}>
            <span className={styles.title}>Application</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
