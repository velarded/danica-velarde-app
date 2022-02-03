import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer class={styles.footer}>
      <p class={styles.copyright}>&copy; Danica Velarde {currentYear}</p>
      <ul class={styles.socialslist}>
        <li class={styles.socialListItem}>
          <a href="https://linkedin.com/in/dcvelarde">
            <ion-icon class={styles.socialIcon} name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li class={styles.socialListItem}>
          <a href="https://github.com/velarded">
            <ion-icon class={styles.socialIcon} name="logo-github"></ion-icon>
          </a>
        </li>
      </ul>
    </footer>
  );
}
