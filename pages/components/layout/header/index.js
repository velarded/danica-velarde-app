import { Fragment } from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header class={styles.header}>
      <nav class={styles.navContainer}>
        <p class={styles.logo}>DV</p>
        <ul class={styles.navList}>
          <li class={styles.navListItem}>
            <a href="#experience">Experience</a>
          </li>
          <li class={styles.navListItem}>
            <a href="#projects">Projects</a>
          </li>
          <li class={styles.navListItem}>
            <a href="#vlogs">Vlogs</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
