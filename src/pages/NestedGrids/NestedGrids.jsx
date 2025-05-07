import React from "react";
import styles from "./NestedGrids.module.css";
const NestedGrids = () => {
  return (
    <div className={styles.container}>
      <h1>Nested Grids</h1>
      <div className={styles.rootGridContainer}>
        <div className={styles.rootGridChild}>
          <div className={`${styles.nestedGridChild} ${styles.item1}`}>
            <div
              className={`${styles.item1Child} ${styles.item1ChildContainer}`}
            >
              <div className={styles.item1NestedChildren}></div>
              <div className={styles.item1NestedChildren}></div>
              <div className={styles.item1NestedChildren}></div>
            </div>
            <div className={styles.item1Child}></div>
          </div>
          <div className={styles.nestedGridChild}></div>
          <div className={styles.nestedGridChild}></div>
          <div className={styles.nestedGridChild}></div>
          <div className={`${styles.nestedGridChild} ${styles.item5}`}></div>
        </div>
      </div>
    </div>
  );
};

export default NestedGrids;
