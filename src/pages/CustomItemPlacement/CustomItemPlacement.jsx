import React from "react";
import styles from "./CustomItemPlacement.module.css";
const CustomItemPlacement = () => {
  return (
    <div className={styles.container}>
      <h1>Custom Item Placement Grid</h1>
      <div className={styles["grid-container"]}>
        <div className={`${styles.box} ${styles["box-1"]}`}>1</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
        <div className={styles.box}>4</div>
        <div className={`${styles.box} ${styles["box-5"]}`}>5</div>
      </div>
    </div>
  );
};

export default CustomItemPlacement;
