import styles from "./page.module.css";

export default function Page({ params }: { params: { id: string } }) {
  // TODO: check if room exists on db and return a page with the info of the room
  // get info from db and pass it to the page component

  const roomId = params.id;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>What type of room would you like?</h1>
        <p className={styles.description}>
          We&apos;ll set up your room with suitable default settings.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Private Room</button>
          <button className={styles.button}>Public Room</button>
        </div>
      </div>
    </div>
  );
}
