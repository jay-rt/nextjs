import styles from "./themebutton.module.css";

const ThemeButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.circle} />
    </div>
  );
};

export default ThemeButton;
