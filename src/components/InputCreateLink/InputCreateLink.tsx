"use client";

import React, { useState } from "react";
import styles from "./InputCreateLink.module.css";
import { useRouter } from "next/navigation";
const InputCreateLink = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue) {
      router.push(`/room/${inputValue}`);
    }
  };

  // TODO: handle error and show message
  // TODO: handle success
  // TODO: handle click
  // TODO: handle enter

  return (
    <div className={styles.inputCreateLink}>
      <input
        className={styles.inputCreateLink__input}
        type="text"
        name=""
        id=""
        placeholder="Enter Name"
        onChange={handleChange}
      />
      <button className={styles.inputCreateLink__button} onClick={handleClick}>
        Create
      </button>
    </div>
  );
};

export default InputCreateLink;
