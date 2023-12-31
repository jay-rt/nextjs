import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ url, title }) => {
  return (
    <Link href={url}>
      <button className={`btn ${styles.btn}`}>{title}</button>
    </Link>
  );
};

export default Button;
