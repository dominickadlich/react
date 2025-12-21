import { createPortal } from "react-dom";

import classes from "./SideDrawer.module.css";

function SideDrawer({ onClose }) {
  return createPortal(
    <>
      <div className={classes.backdrop}></div>
      <aside className={classes.drawer} open>
        <nav>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/products">All Products</a>
            </li>
            <li>
              <a href="/profile">Your Profile</a>
            </li>
          </ul>
          <button onClick={onClose}>Close</button>
        </nav>
      </aside>
    </>,
    document.getElementById("asides"),
  );
}

export default SideDrawer;
