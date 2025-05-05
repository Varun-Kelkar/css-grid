import React from "react";
import styles from "./TemplateAreasGrid.module.css";
const TemplateAreasGrid = () => {
  return (
    <div className={styles.container}>
      <h1>Template Areas Grid</h1>
      <div className={styles["grid-container"]}>
        <div className={`${styles.box} ${styles.header}`}>Header</div>
        <div className={`${styles.box} ${styles.sidebar}`}>Sidebar</div>
        <div className={`${styles.box} ${styles.main}`}>Main Content</div>
        <div className={`${styles.box} ${styles.footer}`}>Footer</div>
      </div>
    </div>
  );
};

export default TemplateAreasGrid;
