import InputCreateLink from "@/components/InputCreateLink/InputCreateLink";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.absoluteshape}></div>
      <h1 className={styles.title}>TuneTeam</h1>
      <p className={styles.description}>
        TuneTeam is a social media player that lets you share music across
        limitless people, devices and speakers, whether they&apos;re in the same
        room or halfway across the world. Create & share your link now:
      </p>
      <InputCreateLink />
      <div className={styles.listLinks}>
        <p className={styles.listLinks__title}>
          Join a public link to discover and listen to music with others across
          the globe!
        </p>
        <div className={styles.listLinks__list}>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
          </ul>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>© 2024 TuneTeam</p>
        <p>All rights reserved.</p>
        <p>Developed by: Matias Fandiño</p>
        <p>
          <a target="_blank" href="https://github.com/matifandy8">
            GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}
