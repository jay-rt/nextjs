import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "JayRt Contact Page",
  description: "This is a contact page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.img__container}>
          <Image
            src="/contact.png"
            fill={true}
            alt="Contact image"
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            cols="30"
            rows="10"
            className={styles.textarea}
          />
          <button type="submit" className="btn">
            Connect
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
