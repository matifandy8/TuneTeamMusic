import React from "react";
import styles from "./PublicLinks.module.css";

const PublicLinks = () => {
  return (
    <div className={styles.publicLinks}>
      <p className={styles.publicLinks__title}>
        Join a public link to discover and listen to music with others across
        the globe!
      </p>
      <div className={styles.publicLinks__list}>
        <ul>
          <li>
            <a href="http://localhost:3000/room/joseph">
              http://localhost:3000/room/joseph
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/room/michael">
              http://localhost:3000/room/michael
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PublicLinks;
