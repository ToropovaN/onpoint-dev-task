import React from "react";

import { Context } from "App/Context";
import classNames from "classnames";
import Button from "components/Button/Button";
import IconPlus from "components/Icons/IconPlus";
import Title from "components/Title/Title";

import ModalAdvantages from "./components/ModalAdvantages/ModalAdvantages";
import styles from "./Page3.module.css";

const Page3 = () => {
  const context = React.useContext(Context);

  return (
    <div className={styles.Page3}>
      <div className={styles.particles}>
        <img src={require("styles/images/particles/6.png")} alt="p1" />
        <img src={require("styles/images/particles/6.png")} alt="p2" />
        <img src={require("styles/images/particles/6.png")} alt="p3" />
        <img src={require("styles/images/particles/7.png")} alt="p4" />
        <img src={require("styles/images/particles/7.png")} alt="p5" />
        <img src={require("styles/images/particles/7.png")} alt="p6" />
        <img src={require("styles/images/particles/7.png")} alt="p7" />
        <img src={require("styles/images/particles/7.png")} alt="p8" />
      </div>
      <div
        className={
          context.isModalOpen
            ? styles.modal
            : classNames(styles.modal, styles.hidden)
        }
      >
        <Title centralTitle={"Преимущества"} />
        <ModalAdvantages />
      </div>

      <Title centralTitle={"Ключевое сообщение"} />
      <div className={styles.brendName}>
        Brend<strong>XY</strong>
      </div>
      <img
        className={styles.bottleImg}
        src={require("styles/images/bottle/bottle.png")}
        alt={"product"}
      ></img>

      <section className={classNames(styles.blockFood, styles.infoBlock)}>
        <img
          className={styles.infoBlockIcon}
          src={require("styles/images/icons/iconFood.png")}
          alt={"food"}
        ></img>
        Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
        lorem sed risus ultricies
      </section>
      <section className={classNames(styles.blockPlan, styles.infoBlock)}>
        <img
          className={styles.infoBlockIcon}
          src={require("styles/images/icons/iconPlan.png")}
          alt={"plan"}
        ></img>
        A arcu cursus vitae
      </section>
      <Button
        className={styles.blockButton}
        icon={<IconPlus />}
        onClick={() => {
          context.setIsModalOpen(true);
        }}
      >
        Подробнее
      </Button>
    </div>
  );
};

export default React.memo(Page3);
