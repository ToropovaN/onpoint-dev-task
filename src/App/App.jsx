import React from "react";

import Background from "components/Background/Background";
import HomeButton from "components/HomeButton/HomeButton";
import OnpointLogo from "components/OnpointLogo/OnpointLogo";
import Scrollable from "components/Scrollable/Scrollable";

import styles from "./App.module.css";
import { Context } from "./Context";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";

let page = 0;
let swiped = false;

const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [fireAnimation, setfireAnimation] = React.useState(false);

  const setPage = (newPage) => {
    if (isModalOpen) setIsModalOpen(false);

    if (page === 0 && newPage === 1) setfireAnimation(true);
    else if (newPage <= 0) setfireAnimation(false);

    if (newPage > 2) page = 2;
    else if (newPage < 0) page = 0;
    else page = newPage;

    if (firstBGRef.current && firstPageRef.current) {
      firstBGRef.current.style.marginLeft = -33.33 * page + "%";
      firstPageRef.current.style.marginLeft = -33.33 * page + "%";
    }
  };

  let touchStartX = 0;

  const firstBGRef = React.useRef(null);
  const firstPageRef = React.useRef(null);

  const onTouchStart = (event) => {
    swiped = false;
    touchStartX = event.changedTouches[0].screenX;
  };
  const onTouchMove = (event) => {
    const touchMoveX = event.changedTouches[0].screenX - touchStartX;
    if (touchMoveX > 100 && !swiped && !isModalOpen) {
      setPage(page - 1);
      swiped = true;
    }
    if (touchMoveX < -100 && !swiped && !isModalOpen) {
      setPage(page + 1);
      swiped = true;
    }
  };
  const onTouchEnd = (event) => {
    swiped = false;
  };

  return (
    <Context.Provider
      value={{ setPage, isModalOpen, setIsModalOpen, fireAnimation }}
    >
      <div
        className={styles.App}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <Scrollable firstChildRef={firstBGRef}>
          <Background number={1} isDark={isModalOpen} />
          <Background number={2} isDark={isModalOpen} />
          <Background number={3} isDark={isModalOpen} />
        </Scrollable>

        <HomeButton onClick={() => setPage(0)} />
        <OnpointLogo />

        <Scrollable firstChildRef={firstPageRef}>
          <Page1 />
          <Page2 />
          <Page3 />
        </Scrollable>
      </div>
    </Context.Provider>
  );
};

export default App;
