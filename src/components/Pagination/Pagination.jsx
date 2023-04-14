import React from "react";

import classNames from "classnames";
import IconCircle from "components/Icons/IconCircle";
import IconCorner from "components/Icons/IconCorner";

import styles from "./Pagination.module.css";

const Pagination = ({ children }) => {
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    if (page < 0) setPage(0);
    if (page >= children.length) setPage(children.length - 1);
  }, [page, children.length]);

  const paginationButtons = (() => {
    let buttons = [];
    for (let i = 0; i < children.length; i++) {
      const checked = i === page;
      buttons.push(
        <div
          className={
            checked
              ? classNames(styles.button, styles.checkedButton)
              : styles.button
          }
          key={"pagination" + i}
          onClick={() => setPage(i)}
        >
          <IconCircle filled={checked} />
        </div>
      );
    }
    return buttons;
  })();

  return (
    <div className={styles.Pagination}>
      {children.map((pageBlock, index) => (
        <div
          key={"pageBlock" + index}
          className={
            page === index
              ? styles.content
              : classNames(styles.content, styles.hidden)
          }
        >
          {pageBlock}
        </div>
      ))}

      <div className={styles.navigation}>
        <span
          className={classNames(styles.arrow, styles.back)}
          onClick={() => setPage(page - 1)}
        >
          <IconCorner />
        </span>
        {paginationButtons}
        <span
          className={classNames(styles.arrow)}
          onClick={() => setPage(page + 1)}
        >
          <IconCorner />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
