import React from "react";
import styles from "./RedirectButton.module.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const RedirectButton = ({ url, btnName }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <Button
      variant="outline-primary"
      className={styles.redirectBtn}
      onClick={handleClick}
      size="sm"
    >
      Go to {btnName}
    </Button>
  );
};

export default RedirectButton;
