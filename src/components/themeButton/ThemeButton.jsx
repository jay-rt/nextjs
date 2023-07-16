"use client";

import { useContext } from "react";
import styles from "./themebutton.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeButton = () => {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={dark ? `${styles.circle} ${styles.dark}` : styles.circle}
      />
    </div>
  );
};

export default ThemeButton;
