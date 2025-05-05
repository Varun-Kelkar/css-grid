import React from "react";
import styles from "./VaryingColumnSizeGrid.module.css";
const VaryingColumnSizeGrid = () => {
  return (
    <div className={styles.container}>
      <h1>Varying Column Size Grid</h1>
      <div className={styles["grid-container"]}>
        <div className={styles.box}>1</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
      </div>
    </div>
  );
};

export default VaryingColumnSizeGrid;
