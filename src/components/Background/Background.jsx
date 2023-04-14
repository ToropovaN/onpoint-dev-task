import React from "react";

import classNames from "classnames";

import styles from "./Background.module.css";

const Background = ({ number, isDark = false }) => {
  return (
    <img
      className={
        isDark ? classNames(styles.Background, styles.dark) : styles.Background
      }
      src={require(`styles/images/backgrounds/bg${number}.png`)}
      alt={"background"}
    ></img>
  );
};

export default Background;
