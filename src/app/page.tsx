import InputCreateLink from "@/components/InputCreateLink/InputCreateLink";
import styles from "./page.module.css";
import PublicLinks from "@/components/PublicLinks/PublicLinks";

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
      <PublicLinks />
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
