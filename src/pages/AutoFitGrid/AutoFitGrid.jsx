import React from "react";
import styles from "./AutoFitGrid.module.css";
const AutoFitGrid = () => {
  return (
    <div className={styles.container}>
      <h1>Autofit Grid</h1>
      <div className={styles["grid-container"]}>
        <div className={styles.box}>1</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
        <div className={styles.box}>4</div>
        <div className={styles.box}>5</div>
        <div className={styles.box}>6</div>
        <div className={styles.box}>7</div>
        <div className={styles.box}>8</div>
        <div className={styles.box}>9</div>
      </div>
    </div>
  );
};

export default AutoFitGrid;
