import React from "react";

import { Context } from "App/Context";
import Button from "components/Button/Button";
import IconArrow from "components/Icons/IconArrow";
import Title from "components/Title/Title";

import styles from "./Page1.module.css";

const Page1 = () => {
  const context = React.useContext(Context);
  return (
    <div className={styles.Page1}>
      <div className={styles.particles}>
        <img src={require("styles/images/particles/1.png")} alt="p1" />
        <img src={require("styles/images/particles/2.png")} alt="p2" />
        <img src={require("styles/images/particles/1.png")} alt="p3" />
        <img src={require("styles/images/particles/3.png")} alt="p4" />
        <img src={require("styles/images/particles/4.png")} alt="p5" />
      </div>

      <Title leftTitle={"Привет,"} />
      <div className={styles.veryBigTitle}>
        Это <strong>не</strong> коммерческое задание
      </div>

      <Button
        icon={<IconArrow />}
        className={styles.button}
        onClick={() => {
          context.setPage(1);
        }}
      >
        Что дальше?
      </Button>
    </div>
  );
};

export default React.memo(Page1);
