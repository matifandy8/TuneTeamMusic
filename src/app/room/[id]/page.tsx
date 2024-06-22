import styles from "./page.module.css";
import { rooms } from "@/db/schema/rooms";
import { db } from "@/db";

export default async function Page({ params }: { params: { id: string } }) {
  const roomId = params.id;

  const roomsAll = await db
    .select({ id: rooms.id, name: rooms.name, created_by: rooms.created_by })
    .from(rooms)
    .all();

  const room = roomsAll.find((room) => room.id === roomId);

  if (room) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Room {room.name}</h1>
        </div>
      </div>
    );
  }

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
