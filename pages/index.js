import Head from "next/head";
import Header from "./components/layout/header";
import Hero from "./components/hero";
import Footer from "./components/layout/footer";
import Image from "next/image";
import styles from "../styles/General.module.css";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Vlogs from "./components/vlogs";

export default function Home() {
  const headerEl = <Header />;
  const sectionHeroEl = <Hero />;

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {sectionHeroEl}
        <Experience />
        <Projects />
        <Vlogs />
      </main>
      <Footer />
    </div>
  );
}
