import React from "react";

const RedirectButton = ({ url }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return <button onClick={handleClick}>Go to {url}</button>;
};

export default RedirectButton;
