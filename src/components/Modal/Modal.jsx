import React from "react";

import IconClose from "components/Icons/IconClose";

import styles from "./Modal.module.css";

const Modal = ({ children, close, className }) => {
  return (
    <section className={className}>
      <div className={styles.closeButton} onClick={close}>
        <IconClose />
      </div>

      {children}
    </section>
  );
};

export default Modal;
