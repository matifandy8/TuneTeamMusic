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
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PublicLinks;
