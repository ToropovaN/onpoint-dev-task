import React from "react";

import { Context } from "App/Context";
import Modal from "components/Modal/Modal";
import Pagination from "components/Pagination/Pagination";

import styles from "./ModalAdvantages.module.css";

const ModalAdvantages = () => {
  const context = React.useContext(Context);
  const close = React.useCallback(
    () => context.setIsModalOpen(false),
    [context]
  );

  return (
    <Modal className={styles.ModalAdvantages} close={close}>
      <Pagination>
        <ol>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Faucibus pulvinar elementum integer enim</li>
          <li>Faucibus pulvinar elementum integer enim</li>
        </ol>
        <ol start={"4"}>
          <li>Mi bibendum neque egestas congue quisque egestas diam</li>
          <li>Venenatis lectus magna fringilla urna</li>
          <li>Venenatis lectus magna fringilla urna</li>
        </ol>
      </Pagination>
    </Modal>
  );
};

export default ModalAdvantages;
