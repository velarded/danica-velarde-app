import { Fragment } from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <p className={styles.logo}>DV</p>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <a href="#experience">Experience</a>
          </li>
          <li class={styles.navListItem}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.navListItem}>
            <a href="#vlogs">Vlogs</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
