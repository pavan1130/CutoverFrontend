import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";
import { GoHome } from "react-icons/go";
import { FaBars, FaSearch } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles["sidebar-links"]}>
        <Link
          to="/dash"
          className={location.pathname === "/dash" ? styles.active : ""}
        >
          <GoHome className={styles["icons"]} />
        </Link>
        <Link
          to="/report"
          className={location.pathname === "/report" ? styles.active : ""}
        >
          <FaBars className={styles["icons"]} />
        </Link>
        <Link
          to="/reportstatus"
          className={location.pathname === "/reportstatus" ? styles.active : ""}
        >
          <VscGraph className={styles["icons"]} />
        </Link>
        <Link
          to="/search"
          className={location.pathname === "/search" ? styles.active : ""}
        >
          <FaSearch className={styles["icons"]} />
        </Link>
        <Link
          to="/settings"
          className={location.pathname === "/settings" ? styles.active : ""}
        >
          <IoSettingsOutline className={styles["icons"]} />
        </Link>
        <Link
          to="/notifications"
          className={
            location.pathname === "/notifications" ? styles.active : ""
          }
        >
          <IoNotificationsOutline className={styles["icons"]} />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
