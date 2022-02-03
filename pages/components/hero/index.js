import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.nameHeading}>
          Hi, I&apos;m Danica.
          <ion-icon
            class={styles.helloIcon}
            name="hand-right-outline"
          ></ion-icon>
        </h1>
        <p className={styles.textDescription}>
          I am a Software Developer from in Toronto, Canada. I aspire to become
          a Full-Stack Developer and create websites which can be helpful to
          people in their everyday lives. During the COVID-19 pandemic, I
          decided to pick up React to start making some website ideas of mine
          become a reality.
          <br />
          Feel free to browse the site to get to know me more!
        </p>
        <p className={styles.authorLine}>&mdash; Danica Velarde</p>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
}
