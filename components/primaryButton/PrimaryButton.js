import React from "react";
import "./primaryButton.css";

const PrimaryButton = ({ label, role, style, className }) => {
  return (
    <button
      className={className ? className : "primary_button"}
      role={role}
      style={style}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
