import React from "react";
import styles from "./RedirectButton.module.css";

const RedirectButton = ({ url, btnName }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <button className={styles.redirectBtn} onClick={handleClick}>
      Go to {btnName}
    </button>
  );
};

export default RedirectButton;
