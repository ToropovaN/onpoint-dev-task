import React from "react";

import styles from "./Title.module.css";

const Title = ({ leftTitle, centralTitle }) => {
  return (
    <div className={styles.Title}>
      {leftTitle && <div className={styles.leftTitle}>{leftTitle}</div>}
      {centralTitle && (
        <div className={styles.centralTitle}>{centralTitle}</div>
      )}
    </div>
  );
};

export default Title;
