import React from "react";

import styles from "./Scrollable.module.css";

const Scrollable = ({ children, firstChildRef }) => {
  const [firstChild, ...restChildren] = children;
  return (
    <div className={styles.Scrollable}>
      <div className={styles.firstChild} ref={firstChildRef}>
        {firstChild}
      </div>
      {restChildren}
    </div>
  );
};

export default Scrollable;
