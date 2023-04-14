import React from "react";

import classNames from "classnames";

import styles from "./Button.module.css";

const Button = ({ children, onClick, icon, className }) => {
  return (
    <div className={classNames(styles.Button, className)} onClick={onClick}>
      <div className={styles.icon}>
        <div>{icon}</div>
      </div>
      <span className={styles.text}>{children}</span>
    </div>
  );
};

export default Button;
