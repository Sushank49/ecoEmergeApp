import styles from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <NavLink to="/Home" className={styles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Home" className={styles.link}>
            Home
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/Home" className={styles.link}>
            Home
          </NavLink>
        </li>
      </ul>
      <div htmlFor="" className={styles.search}>
        <div>
          <span
            className="material-symbols-outlined"
            style={{ color: "#d8d8d8", fontWeight: "700" }}
          >
            search
          </span>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Type here to search... "
            className={styles.searchInput}
          />
        </div>
      </div>
      <ul className={styles.ul}>
        <li>
          <NavLink />
          My account
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
