import React from "react";

import styles from "./ScrollableSection.module.css";

const ScrollableSection = ({ children }) => {
  return (
    <section className={styles.ScrollableSection}>
      <div className={styles.content}>
        <div className={styles.text}>{children}</div>
      </div>
    </section>
  );
};

export default ScrollableSection;
