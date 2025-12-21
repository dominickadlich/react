import { useState } from "react";

import SideDrawer from "./SideDrawer.jsx";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [sideDrawer, setSideDrawer] = useState(false);

  function handleOpenDrawer(event) {
    event.preventDefault();
    setSideDrawer(!sideDrawer);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>Demo App</h1>
        <button className={classes.btn} onClick={handleOpenDrawer}>
          <div />
          <div />
          <div />
        </button>
      </header>
      {sideDrawer && <SideDrawer onClose={handleOpenDrawer} />}
    </>
  );
}

export default MainNavigation;
