import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; Danica Velarde {currentYear}</p>
      <ul className={styles.socialslist}>
        <li className={styles.socialListItem}>
          <a href="https://linkedin.com/in/dcvelarde">
            <ion-icon class={styles.socialIcon} name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className={styles.socialListItem}>
          <a href="https://github.com/velarded">
            <ion-icon class={styles.socialIcon} name="logo-github"></ion-icon>
          </a>
        </li>
      </ul>
    </footer>
  );
}
