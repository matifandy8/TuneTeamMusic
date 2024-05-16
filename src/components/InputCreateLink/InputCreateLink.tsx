import React from "react";
import styles from "./InputCreateLink.module.css";

const InputCreateLink = () => {
  return (
    <div className={styles.inputCreateLink}>
      <input
        className={styles.inputCreateLink__input}
        type="text"
        name=""
        id=""
        placeholder="Enter Name"
      />
    </div>
  );
};

export default InputCreateLink;