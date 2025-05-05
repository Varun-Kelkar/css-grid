import React from "react";
import styles from "./NestedGrids.module.css";
const NestedGrids = () => {
  return (
    <div className={styles.container}>
      <h1>Nested Grids</h1>
      <div className={styles.rootGridContainer}>
        <div className={styles.rootGridChild}>
          <div className={styles.nestedGrid1Child}>1</div>
          <div className={styles.nestedGrid1Child}>2</div>
          <div className={styles.nestedGrid1Child}>3</div>
          <div className={styles.nestedGrid1Child}>4</div>
          <div className={styles.nestedGrid1Child}>5</div>
          <div className={styles.nestedGrid1Child}>6</div>
          <div className={styles.nestedGrid1Child}>7</div>
          <div className={styles.nestedGrid1Child}>8</div>
          <div className={styles.nestedGrid1Child}>9</div>
        </div>
        <div className={styles.rootGridChild}>
          <div className={`${styles.nestedGrid2Child} ${styles.item1}`}>1</div>
          <div className={styles.nestedGrid2Child}>2</div>
          <div className={styles.nestedGrid2Child}>3</div>
          <div className={styles.nestedGrid2Child}>4</div>
          <div className={`${styles.nestedGrid2Child} ${styles.item5}`}>5</div>
        </div>
      </div>
    </div>
  );
};

export default NestedGrids;
