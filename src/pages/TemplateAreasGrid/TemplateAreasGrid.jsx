import React from "react";
import styles from "./TemplateAreasGrid.module.css";
const TemplateAreasGrid = () => {
  return (
    <div className={styles.container}>
      <h1>Template Areas Grid</h1>
      <div className={styles["grid-container"]}>
        <header className={`${styles.box} ${styles.header}`}>Header</header>
        <aside className={`${styles.box} ${styles.sidebar}`}>Sidebar</aside>
        <main className={`${styles.box} ${styles.main}`}>Main Content</main>
        <footer className={`${styles.box} ${styles.footer}`}>Footer</footer>
      </div>
    </div>
  );
};

export default TemplateAreasGrid;
