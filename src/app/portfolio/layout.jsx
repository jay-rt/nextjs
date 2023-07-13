import styles from "./page.module.css";

const layout = ({ children }) => {
  return (
    <>
      <h1 className={styles.main__title}>Our Works</h1>
      {children}
    </>
  );
};

export default layout;
