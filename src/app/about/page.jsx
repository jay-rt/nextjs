import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export const metadata = {
  title: "JayRt About Page",
  description: "This is an about page",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill={true}
          className={styles.img}
          priority={true}
        />
        <div className={styles.img__text}>
          <h1 className={styles.img__title}>Digital Storytellers</h1>
          <h2 className={styles.img__desc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.text__container}>
        <div className={styles.item}>
          <h1 className={styles.text__title}>Who Are We?</h1>
          <p className={styles.text__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.text__title}>What We Do?</h1>
          <p className={styles.text__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" title="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
