import styles from "./page.module.css";
import Hero from "public/hero.png";
import Image from "next/image";
import Button from "@/components/button/Button";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" title="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} priority={true} />
      </div>
    </div>
  );
};

export default Home;
