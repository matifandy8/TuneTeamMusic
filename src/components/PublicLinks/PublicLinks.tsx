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
          <a href="http://localhost:3000/room/joseph">
            <li>http://localhost:3000/room/joseph</li>
          </a>
          <a href="http://localhost:3000/room/michael">
            <li>http://localhost:3000/room/michael</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default PublicLinks;
